import React, { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaFile, FaImage } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
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
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState(null);
  const [input_NewChat, setInput_NewChat] = useState("");
  const [file, setFile] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const textareaRef = useRef(null);

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

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const fileInputRef = useRef(null);

  return (
    <div className="row m-0 ps-4 pe-4 justify-content-center align-items-center ar pb-5">
      <div className="col-12">
        <SelectChat />
      </div>
      <section style={{ maxWidth: "1200px" }} className="NewChat col-lg-12 col-xl-12 col-md-12 p-0 justify-content-center">
        <div className="NewChatContainer">
          {formSubmitted || content ? (
           
            <ChatMassage />
          
          ) : (
            <PopularStartchat items={items} handleClick={handleClick} />
          )}
          <form onSubmit={handleSubmit}>
            <div className="input mt-2 text-center me-auto ms-auto">
              <textarea
                ref={textareaRef}
                value={input_NewChat}
                onChange={handleInput}
                
                cdkFocusInitial
                placeholder="كيف استطيع مساعدتك اليوم؟"
                className="w-100 d-in overflow-y-auto ar"
              />
              <input type="file" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
              <div className="overlay1">
                <button className="bg-white btn p-0 border-0" type="submit" disabled={!input_NewChat.trim()}>
                  <LazyLoadImage src={arrow} alt={"hi"} effect="blur" opacity="true" placeholderSrc={arrow} />
                </button>
              </div>
              <div className="overlay2 d-flex">
                <button className="btn p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <LazyLoadImage src={micro} alt={"hi"} effect="blur" opacity="true" placeholderSrc={micro} className="col me-2 plus" />
                </button>
                <DropdownButton title={""} className="plus blue-dark w-100  d-block " onSelect={handleSelect} placeholderSrc={plus} variant="blue-dark text-white">
                  <Dropdown.Item eventKey="upload image"> رفع صورة <FaImage/> </Dropdown.Item>
                  <Dropdown.Item eventKey="add link">اضافه لينك<FaLink/></Dropdown.Item>
                  <Dropdown.Item eventKey="upload file">رفع ملف <FaFile/></Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
