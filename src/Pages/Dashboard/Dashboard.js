import React from "react";

import { useAuth } from "../../Context/AuthContext";

const DashboardPage = () => {

    const {user, logout, isAuthenticated } = useAuth();

    if(!isAuthenticated()) {
        return <p>Você precisa estar logado!</p>;
    }

    return(
        <div>
            <h2>Dashboard</h2>
            <p>Olá, {user.name}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );

};

export default DashboardPage;