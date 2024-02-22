import React from "react";
import ChatRoutes from "../../components/ChatRoutes/ChatRoutes";

function ChatRoutesPages({ chats, setChats, showChat, setShowChat }) {
  return (
    <div>
      <ChatRoutes
        chats={chats}
        setChats={setChats}
        showChat={showChat}
        setShowChat={setShowChat}
      />
    </div>
  );
}

export default ChatRoutesPages;
