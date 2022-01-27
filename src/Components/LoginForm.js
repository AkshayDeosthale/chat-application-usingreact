import React from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import main_menu from "./images/main_menu.gif";

const projectID = "4f490a3f-849f-4c26-8ec2-3325df4471e4";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("Wrong credentials");
    }
  };
  //<img src="https://media.giphy.com/media/l0HlTy9x8FZo0XO1i/giphy.gif" />
  return (
    <>
      <div className="wrapper">
        <div>
          <img src={main_menu} alt="main_menu" />
        </div>

        <div className="form">
          <h1 className="title">Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Password"
              required
            />
            <div align="center">
              <button type="submit" className="button">
                <span>Login Now!</span>
              </button>
            </div>
          </form>
          <h1 align="center">{error}</h1>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
