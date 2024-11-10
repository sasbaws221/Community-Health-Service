import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DailyActivityController } from "../dailyActivity.controller";
import { DailyActivityService } from "../dailyActivity.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  date: new Date(),
  exercise: "exampleExercise",
  id: "exampleId",
  meals: "exampleMeals",
  note: "exampleNote",
  sleepHours: 42.424242424,
  waterIntake: 42.424242424,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  date: new Date(),
  exercise: "exampleExercise",
  id: "exampleId",
  meals: "exampleMeals",
  note: "exampleNote",
  sleepHours: 42.424242424,
  waterIntake: 42.424242424,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    date: new Date(),
    exercise: "exampleExercise",
    id: "exampleId",
    meals: "exampleMeals",
    note: "exampleNote",
    sleepHours: 42.424242424,
    waterIntake: 42.424242424,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  date: new Date(),
  exercise: "exampleExercise",
  id: "exampleId",
  meals: "exampleMeals",
  note: "exampleNote",
  sleepHours: 42.424242424,
  waterIntake: 42.424242424,
};

const service = {
  createDailyActivity() {
    return CREATE_RESULT;
  },
  dailyActivities: () => FIND_MANY_RESULT,
  dailyActivity: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DailyActivity", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DailyActivityService,
          useValue: service,
        },
      ],
      controllers: [DailyActivityController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /dailyActivities", async () => {
    await request(app.getHttpServer())
      .post("/dailyActivities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
      });
  });

  test("GET /dailyActivities", async () => {
    await request(app.getHttpServer())
      .get("/dailyActivities")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
        },
      ]);
  });

  test("GET /dailyActivities/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dailyActivities"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /dailyActivities/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dailyActivities"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
      });
  });

  test("POST /dailyActivities existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/dailyActivities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
      })
      .then(function () {
        agent
          .post("/dailyActivities")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
