import React from "react";
import ChatRoutes from "../../components/ChatRoutes/ChatRoutes";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ModelProvider } from "../../hooks/context/use-model";
function ChatRoutesPages() {
  return (
    <div>
      <ModelProvider>
        <ProSidebarProvider>
          <ChatRoutes />
        </ProSidebarProvider>
      </ModelProvider>
    </div>
  );
}

export default ChatRoutesPages;
