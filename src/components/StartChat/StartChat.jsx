import React, { useState, useEffect, useRef } from "react";
import { Button, Menu, MenuItem, TextareaAutosize } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaFile, FaImage, FaLink } from "react-icons/fa";
import "./StartChat.css";
import PopularStartchat from "../PopularStartChat/PopularStartchat";
import ChatMassage from "../Massages/ChatMassage";
import SelectChat from "../SelectChat/SelectChat";
import arrow from "../../assets/Images/bxs_navigation.png";
import micro from "../../assets/Images/bxs_microphone.png";
import plus from "../../assets/Images/bxs_plus-circle.png";

const items = [
  {
    title: "إنشاء استراتيجية تسويق",
    description:
      "ما هي العوامل الأساسية التي يجب مراعاتها عند إنشاء استراتيجية تسويق رقمي شاملة?",
  },
  {
    title: "التخطيط لحملة على وسائل التواصل الاجتماعي",
    description: "قم بصياغة حملة على وسائل التواصل الاجتماعي لبراند ملابس.",
  },
  {
    title: "زيادة معدلات النقر إلى الظهور",
    description:
      "اقترح طرق مبتكرة لزيادة معدلات النقر على رسائل البريد الإلكتروني.",
  },
  {
    title: "تحسين تجربة خدمة العملاء لدينا",
    description: "اقترح علينا كيف يمكننا تحسين تجربة خدمة العملاء لدينا؟",
  },
];

export default function StartChat({ content }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [input_NewChat, setInput_NewChat] = useState("");
  const [file, setFile] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const textareaRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (option === "upload image" || option === "upload file") {
      // Programmatically click on the hidden file input
      fileInputRef.current.click();
    } else if (option === "add link") {
      const link = prompt("Enter the link:");
      if (link) {
        setInput_NewChat(input_NewChat + " " + link);
      }
    }
  };

  const handleInput = (e) => {
    setInput_NewChat(e.target.value);
  };

  const handleClick = (paragraph) => {
    setInput_NewChat(paragraph);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with input:", input_NewChat);
    console.log("File:", file);
    setInput_NewChat("");
    setFile(null);
    setFormSubmitted(true);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const fileInputRef = useRef(null);

  return (
    <div className="row m-0 ps-md-4 pe-md-4 justify-content-center align-items-center ar pb-1 ">
      <div className="col-12 mt-3 ps-5">
        <SelectChat />
      </div>
      <section
        style={{ maxWidth: "1200px" }}
        className="NewChat col-lg-12 col-xl-12 col-md-12 p-0 justify-content-center">
        <div className="NewChatContainer mx-auto">
          {formSubmitted || content ? (
            <ChatMassage />
          ) : (
            <div className=" ">
              <PopularStartchat
                items={items}
                handleClick={handleClick}
              />
            </div>
          )}

          <div className="row col-md-8 mx-auto justify-content-center">
            <div className=" col-md-8   w-100 ">
              <form onSubmit={handleSubmit}>
                <div className="input  text-center me-auto ms-auto">
                  <TextareaAutosize
                    ref={textareaRef}
                    value={input_NewChat}
                    onChange={handleInput}
                    autoFocus={true}
                    placeholder="كيف استطيع مساعدتك اليوم؟"
                    className="w-100 d-in overflow-y-auto ar"
                  />
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                  <div className="overlay1">
                    <Button
                      type="submit"
                      disabled={!input_NewChat.trim()}>
                      <LazyLoadImage
                        src={arrow}
                        alt={"hi"}
                        effect="blur"
                        opacity="true"
                        placeholderSrc={arrow}
                      />
                    </Button>
                  </div>
                  <div className="overlay2 d-flex">
                    <Button onClick={handleMenuClick}>
                      <LazyLoadImage
                        src={micro}
                        alt={"hi"}
                        effect="blur"
                        opacity="true"
                        placeholderSrc={micro}
                        className="   plus"
                      />
                      <LazyLoadImage
                        src={plus}
                        alt={"hi"}
                        effect="blur"
                        opacity="true"
                        placeholderSrc={plus}
                        className="plus"
                      />
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}>
                      <MenuItem onClick={() => handleSelect("upload image")}>
                        {" "}
                        رفع صورة <FaImage />{" "}
                      </MenuItem>
                      <MenuItem onClick={() => handleSelect("add link")}>
                        اضافه لينك
                        <FaLink />
                      </MenuItem>
                      <MenuItem onClick={() => handleSelect("upload file")}>
                        رفع ملف <FaFile />
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
