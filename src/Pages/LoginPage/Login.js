import React, { useState } from "react";

import { useAuth } from "../../Context/AuthContext";

const LoginPage = () => {

    const { login } = useAuth();
    const [userName, setUserName] = useState('');

    const handleLogin = () => {
               
        // Simular login
        login({name: userName});
        
    };

    return (

        <div>
            <h2>Login Page</h2>
            <input type="text" placeholder="Username" value={userName} onChange={(e) => {setUserName(e.target.value)}} />
            <button onClick={handleLogin}>Login</button>
        </div>

    );

};


export default LoginPage;
