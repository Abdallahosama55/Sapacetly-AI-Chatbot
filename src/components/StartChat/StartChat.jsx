import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "./Header";
import micro from "../../assets/Images/bxs_microphone.png";
import link from "../../assets/Images/link.svg";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import plus from "../../assets/Images/bxs_plus-circle.png";
import arrow from "../../assets/Images/bxs_navigation.png";

import "./StartChat.css";
import PopularStartchat from "../PopularStartChat/PopularStartchat";
import ChatMassage from "../Massages/ChatMassage";
import SelectChat from "../SelectChat/SelectChat";

const items = [
  {
    title: "إنشاء استراتيجية تسويق",
    description: "ما هي العوامل الأساسية التي يجب مراعاتها عند إنشاء استراتيجية تسويق رقمي شاملة?",
  },
  {
    title: "التخطيط لحملة على وسائل التواصل الاجتماعي",
    description: "قم بصياغة حملة على وسائل التواصل الاجتماعي لبراند ملابس.",
  },
  {
    title: "زيادة معدلات النقر إلى الظهور",
    description: "اقترح طرق مبتكرة لزيادة معدلات النقر على رسائل البريد الإلكتروني.",
  },
  {
    title: "تحسين تجربة خدمة العملاء لدينا",
    description: "اقترح علينا كيف يمكننا تحسين تجربة خدمة العملاء لدينا؟",
  },
];

export default function StartChat() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [input_NewChat, setInput_NewChat] = useState("");
  const [file, setFile] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false); // State variable to track form submission

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleInput = (e) => {
    setInput_NewChat(e.target.value);
  };

  const handleClick = (paragraph) => {
    setInput_NewChat(paragraph);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted with input:", input_NewChat);
    console.log("File:", file);
    // Reset input field after submission
    setInput_NewChat("");
    setFile(null);
    setFormSubmitted(true); // Set formSubmitted to true upon successful submission
  };

  return (
    <div className="row p-3 m-0 p-0 justify-content-center align-items-center ar pb-5 ">
   

    <div className="col-12">
    <SelectChat/>
    </div>
      <section className="NewChat col-lg-12 col-xl-12 col-md-12 w-100 p-0">
        <div className="">
          <div className="NewChatContainer">
            <div>
            {formSubmitted ? (
              
                
                <ChatMassage/>
                
               
              ) : (
                <PopularStartchat items={items} handleClick={handleClick} />
              )}
              <form onSubmit={handleSubmit}>
                <div className="input mt-4 text-center w-100 me-auto ms-auto">
                  <input
                    type="text"
                    name=""
                    value={input_NewChat}
                    onChange={handleInput}
                    placeholder="كيف استطيع مساعدتك اليوم؟"
                    className="w-100  ar"
                  />
                  <div className="overlay1">
                    <button className=" bg-white btn p-0 border-0" disabled={!input_NewChat.trim()}> 
                      <LazyLoadImage
                        src={arrow}
                        alt={"hi"}
                        effect="blur"
                        opacity="true"
                        placeholderSrc={arrow}
                      />
                    </button>
                  </div>
                  <div className="overlay2 d-flex ">
                    <button className="btn p-0 " type="button" data-bs-toggle="dropdown" aria-expanded="Falserue">
                      <LazyLoadImage
                        src={micro}
                        alt={"hi"}
                        effect="blur"
                        opacity="true"
                        placeholderSrc={micro}
                        className="col me-2 plus"
                      />
                    </button>

                    <DropdownButton
                      title={""}
                      className=" plus blue-dark  "
                      onSelect={handleSelect}
                      placeholderSrc={plus}
                      variant="blue-dark text-white "
                    >
                      <Dropdown.Item eventKey="Option 1">تحميل صوره</Dropdown.Item>
                      <Dropdown.Item eventKey="Option 2">اضافه ملف </Dropdown.Item>
                      <Dropdown.Item eventKey="Option 3">أضافة رابط </Dropdown.Item>
                    </DropdownButton>
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
