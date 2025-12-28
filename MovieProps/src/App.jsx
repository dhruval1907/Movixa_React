import { useState } from "react";
import Reg from "./components/login/Reg";
import Login from "./components/login/Login";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    
    <>
      {isLogin ? (
        <Login users={users} setIsLogin={setIsLogin} />
      ) : (
        <Reg setUsers={setUsers} setIsLogin={setIsLogin} />
      )}
    </>
  );
};

export default App;
