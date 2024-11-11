
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
import { User } from "./User";
import { UserCountArgs } from "./UserCountArgs";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserFindUniqueArgs } from "./UserFindUniqueArgs";
import { CreateUserArgs } from "./CreateUserArgs";
import { UpdateUserArgs } from "./UpdateUserArgs";
import { DeleteUserArgs } from "./DeleteUserArgs";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommunitySupportFindManyArgs } from "../../communitySupport/base/CommunitySupportFindManyArgs";
import { CommunitySupport } from "../../communitySupport/base/CommunitySupport";
import { DailyActivityFindManyArgs } from "../../dailyActivity/base/DailyActivityFindManyArgs";
import { DailyActivity } from "../../dailyActivity/base/DailyActivity";
import { DiscussionFindManyArgs } from "../../discussion/base/DiscussionFindManyArgs";
import { Discussion } from "../../discussion/base/Discussion";
import { EducationFindManyArgs } from "../../education/base/EducationFindManyArgs";
import { Education } from "../../education/base/Education";
import { FinancialAssistanceFindManyArgs } from "../../financialAssistance/base/FinancialAssistanceFindManyArgs";
import { FinancialAssistance } from "../../financialAssistance/base/FinancialAssistance";
import { HealthActivityFindManyArgs } from "../../healthActivity/base/HealthActivityFindManyArgs";
import { HealthActivity } from "../../healthActivity/base/HealthActivity";
import { HealthAndWellnessFindManyArgs } from "../../healthAndWellness/base/HealthAndWellnessFindManyArgs";
import { HealthAndWellness } from "../../healthAndWellness/base/HealthAndWellness";
import { LocalEventFindManyArgs } from "../../localEvent/base/LocalEventFindManyArgs";
import { LocalEvent } from "../../localEvent/base/LocalEvent";
import { MedicalPractitionerFindManyArgs } from "../../medicalPractitioner/base/MedicalPractitionerFindManyArgs";
import { MedicalPractitioner } from "../../medicalPractitioner/base/MedicalPractitioner";
import { MedicationOrderFindManyArgs } from "../../medicationOrder/base/MedicationOrderFindManyArgs";
import { MedicationOrder } from "../../medicationOrder/base/MedicationOrder";
import { ResourcesAndAdviceFindManyArgs } from "../../resourcesAndAdvice/base/ResourcesAndAdviceFindManyArgs";
import { ResourcesAndAdvice } from "../../resourcesAndAdvice/base/ResourcesAndAdvice";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { WellnessGoalFindManyArgs } from "../../wellnessGoal/base/WellnessGoalFindManyArgs";
import { WellnessGoal } from "../../wellnessGoal/base/WellnessGoal";
import { UserService } from "../user.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => User)
export class UserResolverBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async _usersMeta(
    @graphql.Args() args: UserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.users(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.user(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.createUser({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.updateUser({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
    try {
      return await this.service.deleteUser(args);
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
  @graphql.ResolveField(() => [Comment], { name: "comments" })
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async findComments(
    @graphql.Parent() parent: User,
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    const results = await this.service.findComments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [CommunitySupport], { name: "communitySupports" })
  @nestAccessControl.UseRoles({
    resource: "CommunitySupport",
    action: "read",
    possession: "any",
  })
  async findCommunitySupports(
    @graphql.Parent() parent: User,
    @graphql.Args() args: CommunitySupportFindManyArgs
  ): Promise<CommunitySupport[]> {
    const results = await this.service.findCommunitySupports(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DailyActivity], { name: "dailyActivities" })
  @nestAccessControl.UseRoles({
    resource: "DailyActivity",
    action: "read",
    possession: "any",
  })
  async findDailyActivities(
    @graphql.Parent() parent: User,
    @graphql.Args() args: DailyActivityFindManyArgs
  ): Promise<DailyActivity[]> {
    const results = await this.service.findDailyActivities(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Discussion], { name: "discussions" })
  @nestAccessControl.UseRoles({
    resource: "Discussion",
    action: "read",
    possession: "any",
  })
  async findDiscussions(
    @graphql.Parent() parent: User,
    @graphql.Args() args: DiscussionFindManyArgs
  ): Promise<Discussion[]> {
    const results = await this.service.findDiscussions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Education], { name: "educations" })
  @nestAccessControl.UseRoles({
    resource: "Education",
    action: "read",
    possession: "any",
  })
  async findEducations(
    @graphql.Parent() parent: User,
    @graphql.Args() args: EducationFindManyArgs
  ): Promise<Education[]> {
    const results = await this.service.findEducations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [FinancialAssistance], {
    name: "financialAssistances",
  })
  @nestAccessControl.UseRoles({
    resource: "FinancialAssistance",
    action: "read",
    possession: "any",
  })
  async findFinancialAssistances(
    @graphql.Parent() parent: User,
    @graphql.Args() args: FinancialAssistanceFindManyArgs
  ): Promise<FinancialAssistance[]> {
    const results = await this.service.findFinancialAssistances(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [HealthActivity], { name: "healthActivities" })
  @nestAccessControl.UseRoles({
    resource: "HealthActivity",
    action: "read",
    possession: "any",
  })
  async findHealthActivities(
    @graphql.Parent() parent: User,
    @graphql.Args() args: HealthActivityFindManyArgs
  ): Promise<HealthActivity[]> {
    const results = await this.service.findHealthActivities(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [HealthAndWellness], {
    name: "healthAndWellnesses",
  })
  @nestAccessControl.UseRoles({
    resource: "HealthAndWellness",
    action: "read",
    possession: "any",
  })
  async findHealthAndWellnesses(
    @graphql.Parent() parent: User,
    @graphql.Args() args: HealthAndWellnessFindManyArgs
  ): Promise<HealthAndWellness[]> {
    const results = await this.service.findHealthAndWellnesses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [LocalEvent], { name: "localEvents" })
  @nestAccessControl.UseRoles({
    resource: "LocalEvent",
    action: "read",
    possession: "any",
  })
  async findLocalEvents(
    @graphql.Parent() parent: User,
    @graphql.Args() args: LocalEventFindManyArgs
  ): Promise<LocalEvent[]> {
    const results = await this.service.findLocalEvents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MedicalPractitioner], {
    name: "medicalPractitioners",
  })
  @nestAccessControl.UseRoles({
    resource: "MedicalPractitioner",
    action: "read",
    possession: "any",
  })
  async findMedicalPractitioners(
    @graphql.Parent() parent: User,
    @graphql.Args() args: MedicalPractitionerFindManyArgs
  ): Promise<MedicalPractitioner[]> {
    const results = await this.service.findMedicalPractitioners(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MedicationOrder], { name: "medicationOrders" })
  @nestAccessControl.UseRoles({
    resource: "MedicationOrder",
    action: "read",
    possession: "any",
  })
  async findMedicationOrders(
    @graphql.Parent() parent: User,
    @graphql.Args() args: MedicationOrderFindManyArgs
  ): Promise<MedicationOrder[]> {
    const results = await this.service.findMedicationOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ResourcesAndAdvice], {
    name: "resourcesAndAdvices",
  })
  @nestAccessControl.UseRoles({
    resource: "ResourcesAndAdvice",
    action: "read",
    possession: "any",
  })
  async findResourcesAndAdvices(
    @graphql.Parent() parent: User,
    @graphql.Args() args: ResourcesAndAdviceFindManyArgs
  ): Promise<ResourcesAndAdvice[]> {
    const results = await this.service.findResourcesAndAdvices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Review], { name: "reviews" })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async findReviews(
    @graphql.Parent() parent: User,
    @graphql.Args() args: ReviewFindManyArgs
  ): Promise<Review[]> {
    const results = await this.service.findReviews(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [WellnessGoal], { name: "wellnessGoals" })
  @nestAccessControl.UseRoles({
    resource: "WellnessGoal",
    action: "read",
    possession: "any",
  })
  async findWellnessGoals(
    @graphql.Parent() parent: User,
    @graphql.Args() args: WellnessGoalFindManyArgs
  ): Promise<WellnessGoal[]> {
    const results = await this.service.findWellnessGoals(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
