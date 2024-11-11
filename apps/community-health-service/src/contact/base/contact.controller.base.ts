
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ContactService } from "../contact.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ContactCreateInput } from "./ContactCreateInput";
import { Contact } from "./Contact";
import { ContactFindManyArgs } from "./ContactFindManyArgs";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";
import { ContactUpdateInput } from "./ContactUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ContactControllerBase {
  constructor(
    protected readonly service: ContactService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Contact })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createContact(
    @common.Body() data: ContactCreateInput
  ): Promise<Contact> {
    return await this.service.createContact({
      data: data,
      select: {
        contact: true,
        createdAt: true,
        email: true,
        id: true,
        message: true,
        name: true,
        status: true,
        subject: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Contact] })
  @ApiNestedQuery(ContactFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contacts(@common.Req() request: Request): Promise<Contact[]> {
    const args = plainToClass(ContactFindManyArgs, request.query);
    return this.service.contacts({
      ...args,
      select: {
        contact: true,
        createdAt: true,
        email: true,
        id: true,
        message: true,
        name: true,
        status: true,
        subject: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Contact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contact(
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Contact | null> {
    const result = await this.service.contact({
      where: params,
      select: {
        contact: true,
        createdAt: true,
        email: true,
        id: true,
        message: true,
        name: true,
        status: true,
        subject: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Contact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateContact(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() data: ContactUpdateInput
  ): Promise<Contact | null> {
    try {
      return await this.service.updateContact({
        where: params,
        data: data,
        select: {
          contact: true,
          createdAt: true,
          email: true,
          id: true,
          message: true,
          name: true,
          status: true,
          subject: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Contact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteContact(
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Contact | null> {
    try {
      return await this.service.deleteContact({
        where: params,
        select: {
          contact: true,
          createdAt: true,
          email: true,
          id: true,
          message: true,
          name: true,
          status: true,
          subject: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
