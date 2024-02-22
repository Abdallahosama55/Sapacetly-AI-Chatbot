import { Field, Form, Formik } from "formik";

import logoutIcon from "../assets/Images/navBar/logoutNav.png";
import myaccout from "../assets/Images/navBar/myAccount.png";
import resfresh from "../assets/Images/navBar/shape.png";

import { PiGear } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";

import React, { useState } from "react";
import "./Navbar.css";

import avatar from "../assets/Images/navBar/Avatar.png";

const Navbar = () => {
  const [navDroplist, setNavDroplist] = useState(false);

  //renewalDate For Api
  const [renewalDate, setRenewalDate] = useState("2024-01-01");
  //user's Words For Api
  const [wordsCount, setWordsCount] = useState(850);
  const [wordsUsed, setWordsUsed] = useState(300);
  const widthProgress = (wordsUsed / wordsCount) * 100;

  //Logout Nav For Api
  function handleLogoutNav() {}
  return (
    <div
      dir="rtl"
      className=" d-flex  nav-container .align-items-center gap-2 flex-row ">
      <div className=" nav-input-container flex-grow-1 ">
        <Formik>
          <Form className="h-100  w-100">
            <Field
              placeholder="بحث..."
              className=" nav-input h-100 w-100"></Field>
          </Form>
        </Formik>
      </div>
      <div className=" nav-icon-container position-relative  .align-items-center gap-2 d-flex bg-white px-2   flex-row">
        <button className="nav-icon  ">
          <IoNotificationsOutline style={{ color: "#001B79" }} />
        </button>

        <button className="nav-icon  ">
          <PiGear style={{ color: "#001B79" }} />
        </button>
        <button
          onClick={() => setNavDroplist(!navDroplist)}
          className="nav-icon ">
          <img
            className="nav-icon "
            src={avatar}
          />
        </button>
        {navDroplist && (
          <div className=" position-absolute  user-list">
            <div>
              <div className=" user-name-avatar gap-2">
                <img
                  src={avatar}
                  className=" avatar-droplist"
                />
                <div className=" text-center">
                  <div className=" hello-text">مرحبا</div>
                  <div className=" avatar-name">مصطفي </div>
                </div>
              </div>
              <div className=" d-flex gap-2 pt-3 flex-column">
                <div className=" d-flex gap-2 count-text">
                  عدد الكلمات :
                  <div className="count-mainsub-text  d-flex">
                    <span className="count-subtext"> 150 </span> الف
                  </div>
                </div>
                <div className="d-flex gap-2  count-text">
                  التجديد :{" "}
                  <span
                    className="count-subtext "
                    dir="rtl">
                    2024-01-01
                  </span>
                </div>
                <button className=" button-user-list d-flex  align-items-center  gap-1">
                  <img
                    src={myaccout}
                    alt="myaccout"
                    className="  droplist-sub-icon"
                  />
                  <div className="droplist-subtext">حسابي</div>
                </button>
                <button className=" button-user-list align-items-center d-flex gap-1 ">
                  <img
                    src={resfresh}
                    alt="myaccout"
                    className="  droplist-sub-icon"
                  />
                  <div className="droplist-subtext">إدارة الاشتراك</div>
                </button>
              </div>
              <div className="" />
              <div className="user-navnumbers d-flex justify-content-between align-items-center">
                <div style={{ fontSize: "10px", fontWeight: "700" }}>
                  {wordsUsed}
                </div>
                <div style={{ fontSize: "10px", fontWeight: "700" }}>
                  {wordsCount}
                </div>
              </div>
              <div className=" progress-navbar">
                <div
                  style={{ width: widthProgress }}
                  className=" user-navprogress"
                />
              </div>
              <button
                onClick={() => handleLogoutNav()}
                style={{
                  border: "none",
                  backgroundColor: "white",
                  outline: "none",
                }}
                className=" d-flex  pt-3  align-items-center gap-2">
                <img
                  src={logoutIcon}
                  style={{ maxWidth: "20px", maxHeight: "20px" }}
                  alt="logOut"
                />
                <div
                  style={{
                    fontSize: "12px",
                    color: "#ed5ab3",
                    fontWeight: "600",
                  }}>
                  تسجيل الخروج
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;