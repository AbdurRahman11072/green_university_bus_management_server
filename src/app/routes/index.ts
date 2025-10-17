import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { BusRoutes } from "../modules/bus/bus.routes";

const router = Router();

const modulerRouter = [
  {
    path: "/api/v1/user",
    route: userRoutes,
  },
  {
    path: "/api/v1/bus",
    route: BusRoutes,
  },
];

modulerRouter.forEach((route) => {
  router.use(route.path, route.route);
});

export const appRouter = router;
