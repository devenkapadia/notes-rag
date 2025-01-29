import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie"; // Import js-cookie
import "./Login.css";
import loginImage from "../../assets/logo.png"; // Ensure image is in `src/assets/`

const Login = ({ onLogin }) => {
  const handleSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    console.log("User Info:", decoded);

    // Prepare user data
    const userData = {
      name: decoded.name,
      picture: decoded.picture,
      email: decoded.email,
    };

    // Set user data in cookies
    Cookies.set("user", JSON.stringify(userData), { expires: 7 }); // Expires in 7 days

    // Pass user info to parent (App.js)
    onLogin(userData);
  };

  const handleFailure = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={loginImage} alt="Login" className="login-image" />
        <h2>Welcome to Notes App</h2>
        <p>Sign in with Google to continue</p>
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </div>
    </div>
  );
};

export default Login;