// import { useState } from "react";
// import Castle from "./components/01_Castle";

// // This is a Kingdom Component
// function App() {
//   const [replyMessage, setReplyMessage] = useState("");

//   const handleReply = (message) => {
//     setReplyMessage(message);
//   };
//   const message1 = "Do you love React?";
//   return (
//     <div>
//       <p>Message for JSD7: {message1}</p>
//       <p>
//         Reply from the Secret Room:{" "}
//         <span className="text-red">
//           {replyMessage ? replyMessage : "Waiting for a reply..."}
//         </span>
//       </p>
//       <Castle message1={message1} onReply={handleReply} />
//     </div>
//   );
// }

// export default App;

//useContext exercise

import React, { useContext, useState } from "react";
import { MessageProvider, MessageContext } from "./context/MessageContext";

const MessageComponent = () => {
  const { replyMessage2, handleReply, message2 } = useContext(MessageContext); 
  const [reply, setReply] = useState(replyMessage2);

  const handleSendReply = () => {
    handleReply(reply);
  };

  return (
    <div>
      <h1>SecretRoom</h1>
      <p>Message for JSD7: {replyMessage2 || message2}</p>
      <textarea
        value={reply}
        onChange={(event) => setReply(event.target.value)}
      />
      <button onClick={handleSendReply}>Send Reply</button>
    </div>
  );
};

function App() {
  return (
    <MessageProvider>
      <MessageComponent />
    </MessageProvider>
  );
}

export default App;




