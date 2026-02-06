import { createBrowserRouter } from "react-router-dom";
import SignIn from "../hooks/SignIn";
import SignUp from "../hooks/SignUp";
import AuthLayout from "../zustand/AuthLayout";
import Zustand02 from "../zustand/Zustand02";
import Zustand03 from "../zustand/Zustand03";
import ZustandLayout from "../zustand/ZustandLayout";
import Community from "./detail/Community";
import Detail from "./detail/Detail";
import DetailLayout from "./detail/DetailLayout";
import Intro from "./intro/Intro";
import Job from "./job/Job";
import Layout from "./layout/Layout";
import Main from "./main/Main";
import NotFound from "./notfound/NotFound";
import Post from "./post/Post";
import NotUser from "./user/NotUser";
import User from "./user/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path: "", //중첩 라우팅
        element: <Main />
      },
      {
        path: "/intro",
        element: <Intro />
      },
      {
        path: "/job",
        element: <Job />
      },
      {
        path: "/post/:id",  //:변수명
        element: <Post />
      },
      {
        path: "/detail",
        element: <DetailLayout />,
        children: [
          {
            path: "info", // /detail/info
            element: <Detail />
          },
          {
            path: "community",
            element: <Community />
          }
        ]
      },
      {
        path: "/user",
        element: <User />
      },
      {
        path: "/not-user",
        element: <NotUser />
      },
    ]
  },
  {
    path: "/zustand",
    element: <ZustandLayout />,
    children: [
      {
        path: "02",
        element: <Zustand02 />,
      },
      {
        path: "03",
        element: <AuthLayout />,
        children: [
          {
            path: "",
            element: <Zustand03 />
          }
        ]
      }
    ]
  },
  {
      path: "/sign-up", //path는 가독성때매 짝대기 그어줘야함.
      element: <SignUp />,
  },
  {
      path: "/sign-In", //path는 가독성때매 짝대기 그어줘야함.
      element: <SignIn />,
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router;