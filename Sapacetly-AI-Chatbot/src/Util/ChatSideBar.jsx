import React from "react";
import "../components/ChatRoutes/ChatRoutes.css";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import "../pages/ChatRoutes/StartChatPage.css";
// import "../../pages/ChatRoutes/StartChatPage.css";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StartChat from "../components/StartChat/StartChat";

const ChatSideBar = ({
  chats,
  setChats,
  showChat,
  setShowChat,
  openSideBar,
  setOpenSideBar,
}) => {
  const navigate = useNavigate();

  //List of chats
  // const [chats, setChats] = useState([
  //   { id: 1, content: "content1" },
  //   { id: 2, content: "content2" },
  //   { id: 3, content: "content3" },
  //   { id: 4, content: "content4" },
  // ]);
  // const [showChat, setShowChat] = useState(0);

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
    <div className=" rounded-4  shadow  bg-white">
      <Sidebar
        rtl={true}
        style={{ height: "100vh", backgroundColor: "white" }}
        className=" rounded-4">
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
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
              key={chat.id}
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
    </div>
  );
};

export default ChatSideBar;
