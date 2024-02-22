import React, { useEffect, useState } from "react";

import { FaSignOutAlt } from "react-icons/fa";

import { Outlet, useLocation, useParams } from "react-router-dom";

import "./Applayout.css";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import openSideIcon from "../assets/Images/sideBar/bxs_down-arrow-alt.png";
import ChatSideBar from "./ChatSideBar";
import ArtSideBar from "./ArtSideBar";

const AppLayout = ({ chats, setChats, showChat, setShowChat }) => {
  const [openSideBar, setOpenSideBar] = useState(true);

  //Change between Chat and Main SideBar
  // const [sideBar, setSideBar] = useState(true);

  //Change between TwoChats
  const [switchSideBar, setSwitchSideBar] = useState(true);

  const [selectedSection, setSelectedSection] = useState("");

  const location = useLocation();
  const { id } = useParams();
  console.log(location.pathname);
  console.log("userId", id);
  console.log(
    "location.pathname === `/ChatRoutes/${userId}`",
    location.pathname === `/ChatRoutes/${id}`
  );

  //close when screen is mobile
  const [sideBar, setSideBar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setOpenSideBar(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-x-hidden    w-100 applayout   ">
      <div
        className={`  px-2 position-relative h-100 flex-grow-1  ${
          openSideBar ? "" : ""
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
          className=" position-absolute openSideBarIcon "
        />
        <div>
          <header className=" headerLayout">
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
          openSideBar ? " media-close-sidebar " : " closeSideBar  "
        }`}>
        {/* <ArtSideBar /> */}
        {location.pathname === `/edit` ? (
          !openSideBar ? (
            <Sidebar
              setOpenSideBar={setOpenSideBar}
              openSideBar={openSideBar}
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          ) : switchSideBar ? (
            <ArtSideBar
              switchIcon="switchicon"
              switchSideBar={switchSideBar}
              setOpenSideBar={setOpenSideBar}
              setSwitchSideBar={setSwitchSideBar}
              openSideBar={openSideBar}
            />
          ) : (
            <Sidebar
              switchIcon="switchicon"
              setSwitchSideBar={setSwitchSideBar}
              switchSideBar={switchSideBar}
              setOpenSideBar={setOpenSideBar}
              openSideBar={openSideBar}
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          )
        ) : (
          ""
        )}
        {/* {location.pathname === `/edit` ? (
          !sideBar ? (
            <Sidebar
              setOpenSideBar={setOpenSideBar}
              openSideBar={openSideBar}
            />
          ) : switchSideBar ? (
            <ArtSideBar
              switchIcon="switchicon"
              switchSideBar={switchSideBar}
              setOpenSideBar={setOpenSideBar}
              setSwitchSideBar={setSwitchSideBar}
              openSideBar={openSideBar}
            />
          ) : (
            <Sidebar
              switchIcon="switchicon"
              setSwitchSideBar={setSwitchSideBar}
              switchSideBar={switchSideBar}
              setOpenSideBar={setOpenSideBar}
              openSideBar={openSideBar}
            />
          )
        ) : (
          ""
        )} */}
        {location.pathname !== `/ChatRoutes/${id}` &&
        location.pathname !== `/ChatRoutes` &&
        location.pathname !== `/edit` ? (
          <Sidebar
            setOpenSideBar={setOpenSideBar}
            openSideBar={openSideBar}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        ) : (
          ""
        )}
        {location.pathname === `/ChatRoutes/${id}` ||
        location.pathname === `/ChatRoutes` ? (
          !openSideBar ? (
            <Sidebar
              setOpenSideBar={setOpenSideBar}
              openSideBar={openSideBar}
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          ) : switchSideBar ? (
            <ChatSideBar
              switchIcon="switchicon"
              switchSideBar={switchSideBar}
              chats={chats}
              setChats={setChats}
              showChat={showChat}
              setShowChat={setShowChat}
              setOpenSideBar={setOpenSideBar}
              setSwitchSideBar={setSwitchSideBar}
              openSideBar={openSideBar}
            />
          ) : (
            <Sidebar
              switchIcon="switchicon"
              setSwitchSideBar={setSwitchSideBar}
              switchSideBar={switchSideBar}
              setOpenSideBar={setOpenSideBar}
              openSideBar={openSideBar}
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          )
        ) : (
          ""
        )}
        {/* test */}
        {/* {location.pathname === `/ChatRoutes/${userId}` ||
        location.pathname === `/ChatRoutes` ? (
          openSideBar ? (
            !sideBar ? (
              <ChatSideBar
                switchIcon="switchicon"
                switchSideBar={switchSideBar}
                chats={chats}
                setChats={setChats}
                showChat={showChat}
                setShowChat={setShowChat}
                setOpenSideBar={setOpenSideBar}
                setSwitchSideBar={setSwitchSideBar}
                openSideBar={openSideBar}
              />
            ) : switchSideBar ? (
              <ChatSideBar
                switchIcon="switchicon"
                switchSideBar={switchSideBar}
                chats={chats}
                setChats={setChats}
                showChat={showChat}
                setShowChat={setShowChat}
                setOpenSideBar={setOpenSideBar}
                setSwitchSideBar={setSwitchSideBar}
                openSideBar={openSideBar}
              />
            ) : (
              <Sidebar
                switchIcon="switchicon"
                setSwitchSideBar={setSwitchSideBar}
                switchSideBar={switchSideBar}
                setOpenSideBar={setOpenSideBar}
                openSideBar={openSideBar}
              />
            )
          ) : (
            <Sidebar
              switchIcon="switchicon"
              setSwitchSideBar={setSwitchSideBar}
              switchSideBar={switchSideBar}
              setOpenSideBar={setOpenSideBar}
              openSideBar={openSideBar}
            />
          )
        ) : (
          ""
        )} */}
        {/* first one */}
        {/* {location.pathname === `/ChatRoutes/${id}` ||
        location.pathname === `/ChatRoutes` ? (
          !sideBar ? (
            <Sidebar
              setOpenSideBar={setOpenSideBar}
              openSideBar={openSideBar}
            />
          ) : switchSideBar ? (
            <ChatSideBar
              setSideBar={setSideBar}
              switchIcon="switchicon"
              switchSideBar={switchSideBar}
              chats={chats}
              setChats={setChats}
              showChat={showChat}
              setShowChat={setShowChat}
              setOpenSideBar={setOpenSideBar}
              setSwitchSideBar={setSwitchSideBar}
              openSideBar={openSideBar}
            />
          ) : (
            <Sidebar
              switchIcon="switchicon"
              setSwitchSideBar={setSwitchSideBar}
              switchSideBar={switchSideBar}
              setOpenSideBar={setOpenSideBar}
              openSideBar={openSideBar}
            />
          )
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
};

export default AppLayout;

// !sideBar ? (
//   <Sidebar
//     setOpenSideBar={setOpenSideBar}
//     openSideBar={openSideBar}
//   />
// ) : switchSideBar ? (
//   <ChatSideBar
//     switchIcon="switchicon"
//     switchSideBar={switchSideBar}
//     chats={chats}
//     setChats={setChats}
//     showChat={showChat}
//     setShowChat={setShowChat}
//     setOpenSideBar={setOpenSideBar}
//     setSwitchSideBar={setSwitchSideBar}
//     openSideBar={openSideBar}
//   />
// ) : (
//   <Sidebar
//     switchIcon="switchicon"
//     setSwitchSideBar={setSwitchSideBar}
//     switchSideBar={switchSideBar}
//     setOpenSideBar={setOpenSideBar}
//     openSideBar={openSideBar}
//   />
// );
