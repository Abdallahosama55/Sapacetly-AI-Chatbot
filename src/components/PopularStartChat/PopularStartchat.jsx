import React from "react";
import Header from "../StartChat/Header";
import "./PopularStartChat.css";

const PopularStartchat = ({ items, handleClick }) => {
  return (
    <div>
      <div className="row px-4 px-md-0">
        <div className=" col-md-9 mx-auto ">
          <Header />
          <div className="chat-details ar mt-5 pb-4">
            <div
              className="row justify-content-center align-content-md-stretch"
              dir="rtl">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={`#${index}`}
                  onClick={() => handleClick(item.title)}
                  className="m-2  col-lg-4 col-xl-5 col-sm-12 col-xs-12 col-md-6 shadow-3 border-col rounded-4 link">
                  <div className=" p-2 text-Light">
                    <span className=" d-block">{item.title}</span>
                    <small className="fw-light  text-muted font-small  ">
                      {item.description}
                    </small>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularStartchat;
