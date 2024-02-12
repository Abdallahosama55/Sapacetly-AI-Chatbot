import React, { useState } from "react";
import "./ChatMassage.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import { CopyToClipboard } from "react-copy-to-clipboard";
import RotateRightOutlinedIcon from '@mui/icons-material/RotateRightOutlined';
import image1 from '../../assets/Images/Ellipse 3254 (1).png'
import image2 from "../../assets/Images/Frame 1171276373 (2).png"
const useList = [
  { name: "انت", content: " الترجمة الي اللغة " },
  { name: "انت", content: "ممكن الترجمة الي اللغة العربية" },
  { name: "انت", content: "ممكن الترجمة الي اللغة العربية" },
  { name: "انت", content: "ممكن الترجمة الي اللغة العربية" },
  { name: "انت", content: "ممكن الترجمة الي اللغة العربية" },
  { name: "انت", content: "ممكن الترجمة الي اللغة العربية" },
  { name: "انت", content: "ممكن الترجمة الي اللغة العربية" },
  { name: "انت", content: "ممكن الترجمة الي اللغة العربية" },
];

const robotList = [
  {
    name: "سبيس شات",
    content:
      "نعم بالطبع يسعدنا ان يتم مساعدتك بافضل طريقة هل يمكنك ان تضع لنا النص الذي تريد ترجمتة",
  },
  {
    name: "سبيس شات",
    content:
      "نعم بالطبع يسعدنا ان يتم مساعدتك بافضل طريقة هل يمكنك ان تضع لنا النص الذي تريد ترجمتة",
  },
  {
    name: "سبيس شات",
    content:
      "نعم بالطبع يسعدنا ان يتم مساعدتك بافضل طريقة هل يمكنك ان تضع لنا النص الذي تريد ترجمتة",
  },
  {
    name: "سبيس شات",
    content:
      "نعم بالطبع يسعدنا ان يتم مساعدتك بافضل طريقة هل يمكنك ان تضع لنا النص الذي تريد ترجمتة",
  },
  {
    name: "سبيس شات",
    content:
      "نعم بالطبع يسعدنا ان يتم مساعدتك بافضل طريقة هل يمكنك ان تضع لنا النص الذي تريد ترجمتة",
  },
  {
    name: "سبيس شات",
    content:
      "نعم بالطبع يسعدنا ان يتم مساعدتك بافضل طريقة هل يمكنك ان تضع لنا النص الذي تريد ترجمتة",
  },
  {
    name: "سبيس شات",
    content:
      "نعم بالطبع يسعدنا ان يتم مساعدتك بافضل طريقة هل يمكنك ان تضع لنا النص الذي تريد ترجمتة",
  },
  {
    name: "سبيس شات",
    content:
      "نعم بالطبع يسعدنا ان يتم مساعدتك بافضل طريقة هل يمكنك ان تضعلنا النص الذي تريد ترجمتة",
  },
];

function ChatMassage() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 1000);
  };

  return (
    <div className="chat-height ar overflow-y-scroll     example px-2 overflow-hidden" style={{ flexDirection: "column-reverse" }} dir="rtl" >
      {useList.map((userChat, index) => (
        <React.Fragment key={index}>
          {/* User Chat */}
          <div className="d-flex py-4 ar align-items-center w-100  justify-content-start" dir="rtl">
          <div className=" ">
          <img
          src={image1}
            className=" rounded-circle "
            width={61}
          />
        </div>
          <div  className=" pe-3">
          <h5 className="">{userChat.name}</h5>
          <p className=" fw-light  font-light content-massage  "  >{userChat.content}</p>
          <div>
          <button className=" btn">
          <EditIcon  className=" text-pink" />
          </button>
          
          </div>
        </div>

        
          </div>

          {/* Robot Chat */}
          <div className="d-flex ar justify-content-start align-items-center" dir="rtl">
          <div className=" ">
          <img
            src={image2}
            className=" rounded-circle "
            width={61}
          />
        </div>
            <div className="ar me-3">
              <div>
                <h5 className="mt-1">{robotList[index].name}</h5>
                <p className="font-light w-100 ">{robotList[index].content}</p>
                <div>

                  <CopyToClipboard
                    text={robotList[index].content}
                    onCopy={() => handleCopy(index)}
                  >
                    <button className="btn">
                      <ContentCopyIcon className="text-pink" />
                    </button>
                  </CopyToClipboard>

                                  
<RotateRightOutlinedIcon className=" text-pink" />
                </div>
              
                {copiedIndex === index && <p  className=" text-pink">تم النسخ</p>}
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default ChatMassage;