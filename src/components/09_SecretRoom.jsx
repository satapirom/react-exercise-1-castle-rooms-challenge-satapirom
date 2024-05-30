import { useState } from "react";

const SecretRoom = ({mesage1, onReply}) => {
  const [reply, setReply] =useState("");

  const handleReply = ()=> {
    onReply(reply)
  }

  return(
    <div>
      <h1>SecretRoom</h1>
      <p>Message for JSD7: {mesage1}</p>
      <textarea
        value={reply}
        onChange={(event) =>setReply(event.target.value)}/>
      <button onClick={handleReply}>Send Reply</button>
    </div>
  )
 
};

export default SecretRoom;
