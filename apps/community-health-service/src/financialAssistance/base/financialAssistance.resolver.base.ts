
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
import { FinancialAssistance } from "./FinancialAssistance";
import { FinancialAssistanceCountArgs } from "./FinancialAssistanceCountArgs";
import { FinancialAssistanceFindManyArgs } from "./FinancialAssistanceFindManyArgs";
import { FinancialAssistanceFindUniqueArgs } from "./FinancialAssistanceFindUniqueArgs";
import { CreateFinancialAssistanceArgs } from "./CreateFinancialAssistanceArgs";
import { UpdateFinancialAssistanceArgs } from "./UpdateFinancialAssistanceArgs";
import { DeleteFinancialAssistanceArgs } from "./DeleteFinancialAssistanceArgs";
import { Finance } from "../../finance/base/Finance";
import { User } from "../../user/base/User";
import { FinancialAssistanceService } from "../financialAssistance.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FinancialAssistance)
export class FinancialAssistanceResolverBase {
  constructor(
    protected readonly service: FinancialAssistanceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "read",
    possession: "any",
  })
  async _financialAssistancesMeta(
    @graphql.Args() args: FinancialAssistanceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FinancialAssistance])
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "read",
    possession: "any",
  })
  async financialAssistances(
    @graphql.Args() args: FinancialAssistanceFindManyArgs
  ): Promise<FinancialAssistance[]> {
    return this.service.financialAssistances(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FinancialAssistance, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "read",
    possession: "own",
  })
  async financialAssistance(
    @graphql.Args() args: FinancialAssistanceFindUniqueArgs
  ): Promise<FinancialAssistance | null> {
    const result = await this.service.financialAssistance(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FinancialAssistance)
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "create",
    possession: "any",
  })
  async createFinancialAssistance(
    @graphql.Args() args: CreateFinancialAssistanceArgs
  ): Promise<FinancialAssistance> {
    return await this.service.createFinancialAssistance({
      ...args,
      data: {
        ...args.data,

        supportType: args.data.supportType
          ? {
              connect: args.data.supportType,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FinancialAssistance)
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "update",
    possession: "any",
  })
  async updateFinancialAssistance(
    @graphql.Args() args: UpdateFinancialAssistanceArgs
  ): Promise<FinancialAssistance | null> {
    try {
      return await this.service.updateFinancialAssistance({
        ...args,
        data: {
          ...args.data,

          supportType: args.data.supportType
            ? {
                connect: args.data.supportType,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
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

  @graphql.Mutation(() => FinancialAssistance)
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "delete",
    possession: "any",
  })
  async deleteFinancialAssistance(
    @graphql.Args() args: DeleteFinancialAssistanceArgs
  ): Promise<FinancialAssistance | null> {
    try {
      return await this.service.deleteFinancialAssistance(args);
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
  @graphql.ResolveField(() => Finance, {
    nullable: true,
    name: "supportType",
  })
  @nestAccessControl.UseRoles({
    resource: "Finance",
    action: "read",
    possession: "any",
  })
  async getSupportType(
    @graphql.Parent() parent: FinancialAssistance
  ): Promise<Finance | null> {
    const result = await this.service.getSupportType(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(
    @graphql.Parent() parent: FinancialAssistance
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
