import React, { useRef } from "react";

function Chat() {
  const messageRef = useRef();
  const handleSubmit = () => {};
  return (
    <div>
      <h1>Chat</h1>
      <input type="text" ref={messageRef} placeholder="Mensagem" />
      <button onClick={() => handleSubmit()}>Enviar</button>
    </div>
  );
}

export default Chat;
