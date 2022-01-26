import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="4f490a3f-849f-4c26-8ec2-3325df4471e4"
      userName="admin"
      userSecret="admin"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;

//  https://www.youtube.com/watch?v=jcOKU9f86XE  :  4:17
