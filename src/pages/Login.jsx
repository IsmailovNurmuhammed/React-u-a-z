import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
  const {isAuth, setIsAuth} = React.useContext(AuthContext);
  const submit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={submit}>
        <MyInput type="text" placeholder="insert Login"/>
        <MyInput type="password" placeholder="insert password"/>
        <MyButton>Enter</MyButton>
      </form>
    </div>
  );
};

export default Login;