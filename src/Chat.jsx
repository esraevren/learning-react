import React from "react";

const Chat = ({ message, contact, dispatch}) => {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"chat to " + contact.name}
        onChange={(e) => {
          dispatch({ type: 'edited_message', message: e.target.value });
        }}
      />
      <br />
      <button onClick={()=> {
        alert(`Sending ${message} to ${contact.name} `)
        dispatch({type:'sent_message'})
      }}>Send email</button>
    </section>
  );
};

export default Chat;
