import {MainPage, NotFoundPage} from "@/pages";
import {type RouteProps} from "react-router-dom";

type Routes = "main" | "notFound";

export const RoutePath: Record<Routes, string> = {
  main: "/",
  notFound: "*",
};

export const {main, notFound} = RoutePath;

// можно также разбить на отдельные папки если в проекте много страниц
export const routeConfig: Record<Routes, RouteProps> = {
  main: {
    path: main,
    element: <MainPage />,
  },
  notFound: {
    path: notFound,
    element: <NotFoundPage />,
  },
};
