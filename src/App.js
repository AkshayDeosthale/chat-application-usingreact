import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <div className="test-name">
      <ChatEngine
        height="100vh"
        projectID="4f490a3f-849f-4c26-8ec2-3325df4471e4"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      {localStorage.getItem("username") && (
        <div className="logOut">
          <button
            className="ce-danger-button"
            style={{
              backgroundColor: "red",
              fontSize: "15px",
              padding: "10px",
              borderRadius: "30px",
              width: "90%",
              borderColor: "red",
              borderWidth: "1px",
              color: "red",
            }}
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Log OUT
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

//  https://www.youtube.com/watch?v=jcOKU9f86XE  :  4:17
