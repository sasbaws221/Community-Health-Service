
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
import { Finance } from "./Finance";
import { FinanceCountArgs } from "./FinanceCountArgs";
import { FinanceFindManyArgs } from "./FinanceFindManyArgs";
import { FinanceFindUniqueArgs } from "./FinanceFindUniqueArgs";
import { CreateFinanceArgs } from "./CreateFinanceArgs";
import { UpdateFinanceArgs } from "./UpdateFinanceArgs";
import { DeleteFinanceArgs } from "./DeleteFinanceArgs";
import { FinancialAssistance } from "../../financialAssistance/base/FinancialAssistance";
import { FinanceService } from "../finance.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Finance)
export class FinanceResolverBase {
  constructor(
    protected readonly service: FinanceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Finance",
    action: "read",
    possession: "any",
  })
  async _financesMeta(
    @graphql.Args() args: FinanceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Finance])
  @nestAccessControl.UseRoles({
    resource: "Finance",
    action: "read",
    possession: "any",
  })
  async finances(
    @graphql.Args() args: FinanceFindManyArgs
  ): Promise<Finance[]> {
    return this.service.finances(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Finance, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Finance",
    action: "read",
    possession: "own",
  })
  async finance(
    @graphql.Args() args: FinanceFindUniqueArgs
  ): Promise<Finance | null> {
    const result = await this.service.finance(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Finance)
  @nestAccessControl.UseRoles({
    resource: "Finance",
    action: "create",
    possession: "any",
  })
  async createFinance(
    @graphql.Args() args: CreateFinanceArgs
  ): Promise<Finance> {
    return await this.service.createFinance({
      ...args,
      data: {
        ...args.data,

        financialAssistances: args.data.financialAssistances
          ? {
              connect: args.data.financialAssistances,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Finance)
  @nestAccessControl.UseRoles({
    resource: "Finance",
    action: "update",
    possession: "any",
  })
  async updateFinance(
    @graphql.Args() args: UpdateFinanceArgs
  ): Promise<Finance | null> {
    try {
      return await this.service.updateFinance({
        ...args,
        data: {
          ...args.data,

          financialAssistances: args.data.financialAssistances
            ? {
                connect: args.data.financialAssistances,
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

  @graphql.Mutation(() => Finance)
  @nestAccessControl.UseRoles({
    resource: "Finance",
    action: "delete",
    possession: "any",
  })
  async deleteFinance(
    @graphql.Args() args: DeleteFinanceArgs
  ): Promise<Finance | null> {
    try {
      return await this.service.deleteFinance(args);
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
  @graphql.ResolveField(() => FinancialAssistance, {
    nullable: true,
    name: "financialAssistances",
  })
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "read",
    possession: "any",
  })
  async getFinancialAssistances(
    @graphql.Parent() parent: Finance
  ): Promise<FinancialAssistance | null> {
    const result = await this.service.getFinancialAssistances(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
