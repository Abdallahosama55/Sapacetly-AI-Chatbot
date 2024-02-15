import React from "react";
import ChatRoutes from "../../components/ChatRoutes/ChatRoutes";
import { ProSidebarProvider } from "react-pro-sidebar";
function ChatRoutesPages({ chats, setChats, showChat, setShowChat }) {
  return (
    <div>
      <ProSidebarProvider>
        <ChatRoutes
          chats={chats}
          setChats={setChats}
          showChat={showChat}
          setShowChat={setShowChat}
        />
      </ProSidebarProvider>
    </div>
  );
}

export default ChatRoutesPages;
