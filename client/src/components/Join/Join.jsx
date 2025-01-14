import React, { useRef } from "react";
import io from "socket.io-client";

function Join({ setChatVisibility }) {
  const usernameRef = useRef();

  const handleSubmit = () => {
    const username = usernameRef.current.value;
    if (!username.trim()) return;
    const socket = io.connect("http://localhost:3001");
    // console.log(username);
    setChatVisibility(true);
  };
  return (
    <div>
      <h1>Join</h1>
      <input type="text" ref={usernameRef} placeholder="Nome de usuário" />
      <button onClick={() => handleSubmit()}>Entrar</button>
    </div>
  );
}

export default Join;
