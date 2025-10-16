import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";

const router = Router();

const modulerRouter = [
  {
    path: "/api/v1/user",
    route: userRoutes,
  },
];

modulerRouter.forEach((route) => {
  router.use(route.path, route.route);
});

export const appRouter = router;
