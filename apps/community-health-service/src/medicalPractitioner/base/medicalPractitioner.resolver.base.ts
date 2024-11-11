
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
import { MedicalPractitioner } from "./MedicalPractitioner";
import { MedicalPractitionerCountArgs } from "./MedicalPractitionerCountArgs";
import { MedicalPractitionerFindManyArgs } from "./MedicalPractitionerFindManyArgs";
import { MedicalPractitionerFindUniqueArgs } from "./MedicalPractitionerFindUniqueArgs";
import { CreateMedicalPractitionerArgs } from "./CreateMedicalPractitionerArgs";
import { UpdateMedicalPractitionerArgs } from "./UpdateMedicalPractitionerArgs";
import { DeleteMedicalPractitionerArgs } from "./DeleteMedicalPractitionerArgs";
import { User } from "../../user/base/User";
import { MedicalPractitionerService } from "../medicalPractitioner.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MedicalPractitioner)
export class MedicalPractitionerResolverBase {
  constructor(
    protected readonly service: MedicalPractitionerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "read",
    possession: "any",
  })
  async _medicalPractitionersMeta(
    @graphql.Args() args: MedicalPractitionerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MedicalPractitioner])
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "read",
    possession: "any",
  })
  async medicalPractitioners(
    @graphql.Args() args: MedicalPractitionerFindManyArgs
  ): Promise<MedicalPractitioner[]> {
    return this.service.medicalPractitioners(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MedicalPractitioner, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "read",
    possession: "own",
  })
  async medicalPractitioner(
    @graphql.Args() args: MedicalPractitionerFindUniqueArgs
  ): Promise<MedicalPractitioner | null> {
    const result = await this.service.medicalPractitioner(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MedicalPractitioner)
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "create",
    possession: "any",
  })
  async createMedicalPractitioner(
    @graphql.Args() args: CreateMedicalPractitionerArgs
  ): Promise<MedicalPractitioner> {
    return await this.service.createMedicalPractitioner({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MedicalPractitioner)
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "update",
    possession: "any",
  })
  async updateMedicalPractitioner(
    @graphql.Args() args: UpdateMedicalPractitionerArgs
  ): Promise<MedicalPractitioner | null> {
    try {
      return await this.service.updateMedicalPractitioner({
        ...args,
        data: {
          ...args.data,

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

  @graphql.Mutation(() => MedicalPractitioner)
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "delete",
    possession: "any",
  })
  async deleteMedicalPractitioner(
    @graphql.Args() args: DeleteMedicalPractitionerArgs
  ): Promise<MedicalPractitioner | null> {
    try {
      return await this.service.deleteMedicalPractitioner(args);
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
    @graphql.Parent() parent: MedicalPractitioner
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
