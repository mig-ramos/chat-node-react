import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  return (
    <div className="App">
      {chatVisibility ? (
        <Chat />
      ) : (
        <Join setChatVisibility={setChatVisibility} />
      )}
    </div>
  );
}

export default App;
