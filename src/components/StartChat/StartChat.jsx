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
import { useNavigate, useParams } from "react-router-dom";
import { getMessages, newChat, newMessage } from "../../actions/chat";
import { useModel } from "../../hooks/context/use-model";

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
  const textareaRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [messages, setMessages] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  /**
   * fetch the chat content from the server with the id from the params
   */
  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (option === "upload image" || option === "upload file") {
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
  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        const res = await getMessages(params.id);
        setMessages(res.results);
      }
    };
    fetchData();
  }, [params.id]);
  const { selectedModel } = useModel();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      // add message to the chat
      const res = await newMessage(params.id, input_NewChat, selectedModel);
      const newMessages = [
        { ...res, content: res.response, is_from_user: false },
        {
          ...res,
          message_id: res.message_id - 1,
          content: input_NewChat,
          is_from_user: true,
        },
      ];
      setMessages((prev) => [...prev, ...newMessages]);
    } else {
      const res = await newChat(
        input_NewChat.split(" ")[0],
        input_NewChat,
        selectedModel
      );
    }
    setInput_NewChat("");
    setFile("");
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
    <div className="content">
      <div className="">
        <SelectChat />
      </div>
      <section style={{ height: "95%" }}>
        <div className="NewChatContainer mx-auto">
          {params.id ? (
            <ChatMassage messages={messages} />
          ) : (
            <div className="pupolar">
              <PopularStartchat items={items} handleClick={handleClick} />
            </div>
          )}

          <div className="conatiner-form">
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="d-flex input-container">
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                  <button
                    type="submit"
                    className="submit"
                    disabled={!input_NewChat.trim()}
                  >
                    <LazyLoadImage
                      src={arrow}
                      alt={"hi"}
                      effect="blur"
                      opacity="true"
                      placeholderSrc={arrow}
                    />
                  </button>
                  <input
                    ref={textareaRef}
                    value={input_NewChat}
                    onChange={handleInput}
                    autoFocus={true}
                    placeholder="كيف استطيع مساعدتك اليوم؟"
                    className="w-100"
                  />
                  <div className="overlay2 d-flex">
                    <Button onClick={handleMenuClick}>
                      <LazyLoadImage
                        src={plus}
                        alt={"hi"}
                        effect="blur"
                        opacity="true"
                        placeholderSrc={plus}
                        className="plus"
                        style={{ margin: "0 10px" }}
                      />
                      <LazyLoadImage
                        src={micro}
                        alt={"hi"}
                        effect="blur"
                        opacity="true"
                        placeholderSrc={micro}
                        className="   plus"
                      />
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
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
