import React from "react";
import "./PopularStartChat.css";

const PopularStartChat = ({ items, handleClick }) => {
  return (
    <div className="row" dir="rtl">
      {items.map((item, index) => (
        <div key={index} className="col-lg-6 col-md-12 mb-4 d-flex">
          <a
            href={`#${index}`}
            onClick={() => handleClick(item.title)}
            className="w-100 d-block"
            style={{
              padding: "5px 10px",
              borderRadius: " 15px",
              display: "flex",
              boxShadow: "0 0 0 1px #8a57ea33",
              color: "#8a57ea",
              height: "fit-content",
              minHeight: "89px",
            }}
          >
            <div className="pt-1 px-2">
              <span className="d-block" style={{ color: "#8a57ea" }}>
                {item.title}
              </span>
              <p className="font-small mt-2" style={{ color: "#001B7960" }}>
                {item.description}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default PopularStartChat;
