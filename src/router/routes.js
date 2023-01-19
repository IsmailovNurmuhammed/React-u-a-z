import {createBrowserRouter} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {path: "/about", element: <About/>},
  {path: "/posts", element: <Posts/>},
  {path: "/posts/:id", element: <PostIdPage/>},
  {path: "*", element: <NotFoundPage/>},
  {path: "/", element: <Posts/>},

])
export const routes = [
  {path: "*", element: <Login/>},
  {path: "/", element: <Posts/>},
  {path: "/posts", element: <Posts/>},

];
export const privateRoutes = [
  {path: "/login", element: <Login/>},
  {path: "/about", element: <About/>},
  {path: "/posts", element: <Posts/>},
  {path: "/posts/:id", element: <PostIdPage/>},
];