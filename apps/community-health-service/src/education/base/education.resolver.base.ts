
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Education } from "./Education";
import { EducationCountArgs } from "./EducationCountArgs";
import { EducationFindManyArgs } from "./EducationFindManyArgs";
import { EducationFindUniqueArgs } from "./EducationFindUniqueArgs";
import { CreateEducationArgs } from "./CreateEducationArgs";
import { UpdateEducationArgs } from "./UpdateEducationArgs";
import { DeleteEducationArgs } from "./DeleteEducationArgs";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { Category } from "../../category/base/Category";
import { EducationService } from "../education.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Education)
export class EducationResolverBase {
  constructor(
    protected readonly service: EducationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "read",
    possession: "any",
  })
  async _educationsMeta(
    @graphql.Args() args: EducationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Education])
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "read",
    possession: "any",
  })
  async educations(
    @graphql.Args() args: EducationFindManyArgs
  ): Promise<Education[]> {
    return this.service.educations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Education, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "read",
    possession: "own",
  })
  async education(
    @graphql.Args() args: EducationFindUniqueArgs
  ): Promise<Education | null> {
    const result = await this.service.education(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Education)
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "create",
    possession: "any",
  })
  async createEducation(
    @graphql.Args() args: CreateEducationArgs
  ): Promise<Education> {
    return await this.service.createEducation({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Education)
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "update",
    possession: "any",
  })
  async updateEducation(
    @graphql.Args() args: UpdateEducationArgs
  ): Promise<Education | null> {
    try {
      return await this.service.updateEducation({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Education)
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "delete",
    possession: "any",
  })
  async deleteEducation(
    @graphql.Args() args: DeleteEducationArgs
  ): Promise<Education | null> {
    try {
      return await this.service.deleteEducation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User], { name: "user" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUser(
    @graphql.Parent() parent: Education,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUser(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async getCategory(
    @graphql.Parent() parent: Education
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
