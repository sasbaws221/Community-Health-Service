
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
import { Review } from "./Review";
import { ReviewCountArgs } from "./ReviewCountArgs";
import { ReviewFindManyArgs } from "./ReviewFindManyArgs";
import { ReviewFindUniqueArgs } from "./ReviewFindUniqueArgs";
import { CreateReviewArgs } from "./CreateReviewArgs";
import { UpdateReviewArgs } from "./UpdateReviewArgs";
import { DeleteReviewArgs } from "./DeleteReviewArgs";
import { Medication } from "../../medication/base/Medication";
import { User } from "../../user/base/User";
import { ReviewService } from "../review.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Review)
export class ReviewResolverBase {
  constructor(
    protected readonly service: ReviewService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async _reviewsMeta(
    @graphql.Args() args: ReviewCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Review])
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async reviews(@graphql.Args() args: ReviewFindManyArgs): Promise<Review[]> {
    return this.service.reviews(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Review, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "own",
  })
  async review(
    @graphql.Args() args: ReviewFindUniqueArgs
  ): Promise<Review | null> {
    const result = await this.service.review(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Review)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "create",
    possession: "any",
  })
  async createReview(@graphql.Args() args: CreateReviewArgs): Promise<Review> {
    return await this.service.createReview({
      ...args,
      data: {
        ...args.data,

        medication: args.data.medication
          ? {
              connect: args.data.medication,
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
  @graphql.Mutation(() => Review)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "update",
    possession: "any",
  })
  async updateReview(
    @graphql.Args() args: UpdateReviewArgs
  ): Promise<Review | null> {
    try {
      return await this.service.updateReview({
        ...args,
        data: {
          ...args.data,

          medication: args.data.medication
            ? {
                connect: args.data.medication,
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

  @graphql.Mutation(() => Review)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "delete",
    possession: "any",
  })
  async deleteReview(
    @graphql.Args() args: DeleteReviewArgs
  ): Promise<Review | null> {
    try {
      return await this.service.deleteReview(args);
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
  @graphql.ResolveField(() => Medication, {
    nullable: true,
    name: "medication",
  })
  @nestAccessControl.UseRoles({
    resource: "Medication",
    action: "read",
    possession: "any",
  })
  async getMedication(
    @graphql.Parent() parent: Review
  ): Promise<Medication | null> {
    const result = await this.service.getMedication(parent.id);

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
  async getUser(@graphql.Parent() parent: Review): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
