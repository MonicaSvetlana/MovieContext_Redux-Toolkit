import { useRoutes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Movie } from "../pages/Movie";
import { AddMovie } from "../pages/AddMovie";
import { More } from "../pages/More";

export const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Movie />,
        },
        {
          path: "movie/:id",
          element: <More />,
        },
        {
          path: "add-movie",
          element: <AddMovie />,
        },
      ],
    },
  ]);
  return routes;
};
