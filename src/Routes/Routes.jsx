import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Catagory from "../Pages/Home/Catagory/Catagory";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News/News";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Terms from "../Pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/catagori/0"></Navigate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "/catagori",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Catagory></Catagory>,
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-shahin2525.vercel.app/catagories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoutes>
            <News></News>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-server-shahin2525.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
