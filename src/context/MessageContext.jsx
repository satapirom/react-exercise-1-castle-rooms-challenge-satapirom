import { createContext, useState } from "react";

const MessageContext = createContext();

const MessageProvider =({children}) =>{
    const [replyMessage2, setReplyMessage] = useState("");

    const handleReply = (message2) => {
        setReplyMessage(message2);
    }; 

    const message2 = 'Do You love react';

    
    return(
        <MessageContext.Provider value={{replyMessage2, handleReply, message2}}>
            {children}
        </MessageContext.Provider>
    );

};

export {MessageContext, MessageProvider};