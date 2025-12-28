import { useEffect, useState } from "react";
import Reg from "./components/login/Reg";
import Login from "./components/login/Login";
import Hero from "./components/Hero/Hero";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");

    if (loginStatus === "true") {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      {!isLogin && users.length === 0 && <Reg setUsers={setUsers} />}

      {!isLogin && users.length > 0 && (
        <Login users={users} setIsLogin={setIsLogin} />
      )}

      {isLogin && <Hero />}
    </>
  );
};

export default App;
