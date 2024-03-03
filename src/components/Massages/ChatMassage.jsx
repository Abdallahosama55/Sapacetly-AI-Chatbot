import React, { useState } from "react";
import "./ChatMassage.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import { CopyToClipboard } from "react-copy-to-clipboard";
import RotateRightOutlinedIcon from "@mui/icons-material/RotateRightOutlined";
import image1 from "../../assets/Images/Ellipse 3254 (1).png";
import image2 from "../../assets/Images/Frame 1171276373 (2).png";
function ChatMassage({ messages }) {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const handleCopy = (index) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 1000);
  };

  const sortedMessages = messages.sort((a, b) => a.id - b.id);

  return (
    <div
      className="chat-height me-md-5 pe-md-5 ar overflow-y-scroll example px-2 overflow-hidden"
      style={{ flexDirection: "column-reverse" }}
      dir="rtl"
    >
      {sortedMessages.map((message, index) => (
        <div
          key={index}
          className={`d-flex py-4 pe-md-5 ar align-items-start w-100 `}
          dir="rtl"
        >
          <div className=" ">
            <img
              src={message.is_from_user ? image1 : image2}
              className=" rounded-circle "
              width={35}
            />
          </div>
          <div className={`pe-3 ltr`}>
            <h5>{message.is_from_user ? "انت" : ""}</h5>
            <p className="fw-light font-light content-massage">
              {message.content.startsWith("http") ||
              message.content.startsWith("https") ? (
                <img src={message.content} alt="image" width={500} />
              ) : (
                message.content
              )}
            </p>
            {message.is_from_user && (
              <div>
                <button className=" btn">
                  <EditIcon className=" text-pink" />
                </button>
              </div>
            )}
            {!message.is_from_user && (
              <div>
                <CopyToClipboard
                  text={message.content}
                  onCopy={() => handleCopy(index)}
                >
                  <button className="btn">
                    <ContentCopyIcon className="text-pink" />
                  </button>
                </CopyToClipboard>
                <RotateRightOutlinedIcon className=" text-pink" />
                {copiedIndex === index && (
                  <p className=" text-pink">تم النسخ</p>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatMassage;
