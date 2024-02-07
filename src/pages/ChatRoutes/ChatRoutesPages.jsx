import React from 'react'
import ChatRoutes from '../../components/ChatRoutes/ChatRoutes'
import { ProSidebarProvider } from 'react-pro-sidebar';
function ChatRoutesPages() {
  return (
    <div>
    <ProSidebarProvider>
  <ChatRoutes />
</ProSidebarProvider>

    
    </div>
  )
}

export default ChatRoutesPages