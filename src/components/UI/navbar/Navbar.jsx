import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
  const {isAuth, setIsAuth} = React.useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  }
  return (
    <nav className="nav">
      <MyButton onClick={logout}>Log off</MyButton>
      <Link to="/about">About Page</Link>
      <Link to="/posts">Posts Page</Link>
    </nav>
  );
};

export default Navbar;