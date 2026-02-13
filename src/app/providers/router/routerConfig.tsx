import type { RouteProps } from "react-router";
import { HomePage } from "@/pages/Home";
import { LoginPage } from "@/pages/Login";
import { routePaths, AppRoutes } from "@/shared/config";
import { NotFoundPage } from "@/pages/NotFound";

export const routerConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: <LoginPage />,
  },
  {
    path: routePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
