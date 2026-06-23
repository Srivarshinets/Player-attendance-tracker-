import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await API.post("/auth/login", {
        username,
        password,
      });

      console.log(response.data);

      alert("Login Successful!");

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Username or Password");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h1>WFC Football Club</h1>

      <div className="login-box">
        <h2>Coach Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;