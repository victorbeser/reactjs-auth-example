import React from "react";
import { AuthProvider } from "./Context/AuthContext";
import DashboardPage from "./Pages/Dashboard/Dashboard";
import LoginPage from "./Pages/LoginPage/Login";

const App = () => {

  return(
    <AuthProvider>
      <div>
        <h1>React e Autenticação</h1>
        <LoginPage />
        <DashboardPage />
      </div>
    </AuthProvider>
  );

};

export default App;