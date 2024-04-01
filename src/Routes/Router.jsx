import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import SlideHomePage from "../pages/SlideHomePage";
import HomePage from "../pages/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
path:'/',
element: <HomePage/>
      },
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      {
        path: "/new",
        element: <SlideHomePage />,
      },
    ],
  },
]);

export default router;
