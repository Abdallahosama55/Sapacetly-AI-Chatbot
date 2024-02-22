import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

import openSideIcon from "../assets/Images/sideBar/bxs_down-arrow-alt.png";
import logo from "../assets/Images/sideBar/logoSideBar.png";

import category from "../assets/Images/sideBar/Category.png";
import activeCategory from "../assets/Images/sideBar/CategoryActive.png";

import startChatIcon from "../assets/Images/sideBar/StartChat.png";
import activChat from "../assets/Images/sideBar/chatActive.png";

import sectionContentIcon from "../assets/Images/sideBar/sectionContent.png";
import activeSections from "../assets/Images/sideBar/avtiveSections.png";

import typingIcon from "../assets/Images/sideBar/shape.png";
import activeTyping from "../assets/Images/sideBar/avtiveTyping.png";

import langChecker from "../assets/Images/sideBar/magic wand.png";
import activeLangChecker from "../assets/Images/sideBar/activeLangchecker.png";

import makingphoto from "../assets/Images/sideBar/bxs_image-alt.png";
import activeMakingPhoto from "../assets/Images/sideBar/activeMakingPhoto.png";

import refresh from "../assets/Images/sideBar/refresh-circle.png";
import activerefresh from "../assets/Images/sideBar/activerefresh.png";

import userIcon from "../assets/Images/sideBar/userIcon.png";

import managing from "../assets/Images/sideBar/bxs_doughnut-chart.png";
import activemanaging from "../assets/Images/sideBar/activebxs_doughnut-chart.png";

import person from "../assets/Images/sideBar/person.png";
import activeAccount from "../assets/Images/sideBar/activeAccount.png";
import logout from "../assets/Images/sideBar/exit.png";

const sideSections = [
  { title: "لوحة التحكم", icon: category, iconActive: activeCategory },
  { title: "ابدا محادثة جديدة", icon: startChatIcon, iconActive: activChat },
  {
    title: "اقسام المحتوي",
    icon: sectionContentIcon,
    iconActive: activeSections,
  },
  { title: "كتابة مقال كامل", icon: typingIcon, iconActive: activeTyping },
  { title: "المدقق اللغوي ", icon: langChecker, iconActive: activeLangChecker },
  { title: "تصميم صورة", icon: makingphoto, iconActive: activeMakingPhoto },
  { title: "اعادة الصياغة", icon: refresh, iconActive: activerefresh },
];
const sideSectionsSecond = [
  { title: "ادارة الاشتراك", icon: managing, iconActive: activemanaging },
  { title: "حسابي", icon: person, iconActive: activeAccount },
];

const Sidebar = ({ openSideBar, setOpenSideBar }) => {
  const [selectedSection, setSelectedSection] = useState("");
  const [wordslength, setWordsCount] = useState(850);
  const [wordsUsed, setWordsUsed] = useState(300);
  const widthProgress = (wordsUsed / wordslength) * 100;

  const navigate = useNavigate();

  //Upgrade-User For Api
  function upgradeUser() {}

  //Nav-To-Page For Api
  function navToPage(sectionTitle) {
    setSelectedSection(sectionTitle);
    navigate();
  }

  return (
    <div className=" sidbar   sidebar-scroll ">
      <div
        dir="rtl"
        className="side-container">
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("#");
          }}
          src={logo}
          className=" hover-of-link w-100 h-100 side-logo"
        />

        <div className=" main-content  justify-content-between  d-flex ">
          <div className=" main-text">الرئيسية</div>
          <img
            onClick={() => setOpenSideBar(!openSideBar)}
            src={openSideIcon}
            className=" openSideIcon"
          />
        </div>
        <ul className="side-sections">
          {sideSections.map((section, index) => (
            <Link
              to="#"
              key={index}
              style={
                selectedSection === section.title
                  ? { backgroundColor: "#001a78", color: "white" }
                  : { backgroundColor: "" }
              }
              onClick={() => navToPage(section.title)}
              className="side-section-container   d-flex gap-3">
              <img
                src={
                  selectedSection === section.title
                    ? section.iconActive
                    : section.icon
                }
                className="side-icon"
              />
              <div>{section.title}</div>
            </Link>
          ))}
        </ul>
        <div className=" main-content  d-flex justify-content-start">
          <div className=" main-text">العضوية</div>
        </div>
        <ul className="side-sections">
          {sideSectionsSecond.map((section, index) => (
            <Link
              key={index}
              to="#"
              style={
                selectedSection === section.title
                  ? { backgroundColor: "#001a78", color: "white" }
                  : { backgroundColor: "" }
              }
              onClick={() => {
                console.log(section.title);
                setSelectedSection(section.title);
              }}
              className={`side-section-container ${
                section.color ? "  color-red  " : ""
              }   d-flex gap-3`}>
              <img
                src={
                  selectedSection === section.title
                    ? section.iconActive
                    : section.icon
                }
                className="side-icon"
              />
              <div>{section.title}</div>
            </Link>
          ))}
        </ul>
        <button className={` color-red    d-flex gap-3`}>
          <img
            src={logout}
            className="side-icon"
          />
          <div> تسجيل الخروج</div>
        </button>
        <div className=" w-100  position-relative usesection">
          <img
            src={userIcon}
            className="userIcon"
          />
          <div className="user-numbers d-flex justify-content-between align-items-center">
            <div>{wordsUsed}</div>
            <div>{wordslength}</div>
          </div>
          <div className=" progress-bar">
            <div
              style={{ width: widthProgress }}
              className=" user-progress"
            />
          </div>
          <div
            style={{ marginTop: "10px", textAlign: "center" }}
            className=" userData">
            سجل الاستخدام
          </div>
          <div style={{ textAlign: "center", width: "100%" }}>
            <button
              onClick={() => upgradeUser()}
              className=" user-button">
              ترقية
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
