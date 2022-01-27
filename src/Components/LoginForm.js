import React from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import main_menu from "./images/main_menu.gif";
import { useGoogleOneTapLogin } from "react-google-one-tap-login";

const projectID = "4f490a3f-849f-4c26-8ec2-3325df4471e4";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [googleOnClick, setGoogleOnClick] = useState(true);

  useGoogleOneTapLogin({
    disabled: googleOnClick,
    onSuccess: (message) => console.log(message),
    onError: (error) => console.log(error),
    googleAccountConfigs: {
      client_id:
        "861098410431-83ccqi8tgpieoe6omserbgvm5rtjbqt9.apps.googleusercontent.com",
    },
  });

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
        <h1 align="center">{error}</h1>
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
          <div align="center">
            <button
              className="button"
              onClick={() => setGoogleOnClick(!googleOnClick)}
            >
              <span>Register Now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
