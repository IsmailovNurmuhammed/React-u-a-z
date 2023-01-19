import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFoundPage from "../pages/NotFoundPage";
import PostIdPage from "../pages/PostIdPage";
import {routes, privateRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, authLoading} = React.useContext(AuthContext);
  console.log(isAuth);
  if (authLoading){
      return <Loader/>
  }
  return (
    isAuth
      ? <div>
        <Routes>
          {/*<Route path="/about" element={<About/>}/>*/}
          {/*<Route path="/posts" element={<Posts/>}/>*/}
          {/*<Route path="/posts/:id" element={<PostIdPage/>}/>*/}
          {/*<Route path="*" element={<NotFoundPage/>}/>*/}
          {/*<Route path="/" element={<Posts/>}/>*/}
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element}/>
          ))}
        </Routes>
      </div>
      : <div>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element}/>
          ))}
        </Routes>
      </div>
  );
};

export default AppRouter;