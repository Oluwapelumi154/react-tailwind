import { createBrowserRouter } from "react-router-dom";
import { Routes } from "@Routes/Route";

const routes = (routes: Array<{ Path: string; Component: React.FC }>) => {
  const route = routes.map(
    ({ Path, Component }: { Path: string; Component: React.FC }) => ({
      path: Path,
      element: <Component />,
      children: [],
    })
  );
  return route;
};

export const router = createBrowserRouter(routes(Routes));
