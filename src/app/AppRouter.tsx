import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Exam1 from "../components/Exam1";
import Exam2 from "../components/Exam2";
import PageNotFound from "../pages/PageNotFound";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Exam1 />,
    children: [
      {
        // element: <Exam2 />,
        path: "exam",
        children: [
          {
            path: "", //WHY it work ??? -> read logic
            element: <Exam2 />,
          },
          {
            path: "not-found",
            element: <PageNotFound />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes, { basename: "/base" });

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
