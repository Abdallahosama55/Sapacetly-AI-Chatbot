// ChatRoutes.jsx
import "./ChatRoutes.css";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import StartChat from "../StartChat/StartChat";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "../../pages/ChatRoutes/StartChatPage.css";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Satellite } from "@mui/icons-material";

function ChatRoutes({ chats, setChats, showChat, setShowChat }) {
  const navigate = useNavigate();
  console.log(chats);
  // const [chats, setChats] = useState([
  //   { id: 1, content: "content1" },
  //   { id: 2, content: "content2" },
  //   { id: 3, content: "content3" },
  //   { id: 4, content: "content4" },
  // ]);
  // const [showChat, setShowChat] = useState(0);

  const { collapseSidebar, rtl } = useProSidebar();

  //Adding new chat
  function newChat() {
    const newChatId = chats.length > 0 ? chats[chats.length - 1].id + 1 : 1;
    const newChat = { id: newChatId };
    setChats((prevChats) => [...prevChats, newChat]);
    setShowChat(newChatId); // Set the showChat to the new chat
    navigate(`/ChatRoutes/${newChatId}`);
  }

  function navigateToChat(id, updatedContent) {
    navigate(`/ChatRoutes/${id}`);
    setShowChat(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
      {/* <div className=" rounded-4  shadow  bg-white">
        <Sidebar
          rtl={true}
          style={{ height: "100vh", backgroundColor: "white" }}
          className=" rounded-4">
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                collapseSidebar();
              }}
              style={{ textAlign: "center" }}></MenuItem>
            <MenuItem
              onClick={() => newChat()}
              icon={<AddOutlinedIcon />}>
              اضف محادثة
            </MenuItem>

            <MenuItem icon={<SearchOutlinedIcon />}>
              <div
                component="form"
                dir="rtl"
                sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
                className=" e rounded-3">
                <InputBase placeholder="بحث" />
              </div>
            </MenuItem>
            <MenuItem>
              <span className="  text-muted">اخر محادثات</span>
            </MenuItem>

            {chats.map((chat) => (
              <MenuItem
              key={chat.id} // Add key prop with unique value
                icon={<ChatOutlinedIcon />}
                onClick={() => navigateToChat(chat.id, chat.content)}>
                {" "}
                <small className="text-muted  opacity-75 fw-light">
                  كيفية التسويق الرقمي عبر الانترنت
                </small>{" "}
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
      </div> */}

      <div style={{ flex: 1 }}>
        <div className=" rounded-4  bg-white ">
          {chats?.map(
            (chat) =>
              chat.id === showChat && <StartChat content={chat.content} />
          )}
          {chats?.length === 0 && <StartChat />}
          {showChat === 0 && <StartChat />}
          {/* <StartChat /> */}
        </div>
      </div>
    </div>
  );
}

export default ChatRoutes; // Ensure to export ChatRoutes as default
