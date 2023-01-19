import React from "react";
import "./assets/styles/App.scss";
import Navbar from "./components/UI/navbar/Navbar";
import Footer from "./components/UI/footer/Footer";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [authLoading, setAuthLoading] = React.useState(true);
  React.useEffect(() => {
    if (localStorage.getItem("auth")){
      setIsAuth(true);
    }
    setAuthLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      authLoading,
    }}>
      <div className="App container">
        <Navbar/>
        <AppRouter/>
        <Footer/>
      </div>
    </AuthContext.Provider>
  )
}

export default App;
