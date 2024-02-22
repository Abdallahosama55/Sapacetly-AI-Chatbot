import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaSignOutAlt } from "react-icons/fa";

import { Outlet } from "react-router-dom";

import "./Applayout.css";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import openSideIcon from "../assets/Images/sideBar/bxs_down-arrow-alt.png";
import ChatSideBar from "./ChatSideBar";

const AppLayout = ({ chats, setChats, showChat, setShowChat }) => {
  const [openSideBar, setOpenSideBar] = useState(true);
  const [sideBar, setSideBar] = useState(true);
  console.log("chats", chats);

  return (
    <div className="overflow-x-hidden   h-100  row ">
      <div
        className={` px-4 position-relative ${
          openSideBar ? "col-lg-10" : ""
        }  `}>
        <FaSignOutAlt
          src={openSideIcon}
          style={
            !openSideBar
              ? { rotate: "180deg", transitionDuration: "500ms" }
              : { transitionDuration: "500ms" }
          }
          onClick={() => setOpenSideBar(!openSideBar)}
          alt=" OpenIcon"
          className=" position-absolute openSideBarIcon"
        />
        <div>
          <header>
            <Navbar />
          </header>
        </div>
        <div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <div
        dir="rtl"
        className={`${
          openSideBar ? "col-lg-2 media-close-sidebar " : " closeSideBar  "
        }   `}>
        {sideBar ? (
          <ChatSideBar
            chats={chats}
            setChats={setChats}
            showChat={showChat}
            setShowChat={setShowChat}
            setOpenSideBar={setOpenSideBar}
            openSideBar={openSideBar}
          />
        ) : (
          <Sidebar
            setOpenSideBar={setOpenSideBar}
            openSideBar={openSideBar}
          />
        )}
      </div>
    </div>
  );
};

export default AppLayout;
