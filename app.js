import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setMessage("Please fill in both fields ❌");
    } else {
      setMessage(`Welcome, ${username}! ✅`);
    }
  };

  return (
    <div className="container">
      <h1>Login Form App</h1>

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

      <button onClick={handleLogin}>Login</button>
      <p className="message">{message}</p>
    </div>
  );
}
