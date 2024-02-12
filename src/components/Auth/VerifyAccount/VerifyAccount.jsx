import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../Auth/auth.css";
import logo from "../../../assets/Images/logo.svg";
import { Link } from "react-router-dom";

const VerifyAccount = () => {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    // Update the code state with the new value at the specified index
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next input if there is a value
    if (value !== "" && index < code.length - 1) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, event) => {
    // Move focus to the previous input on backspace if the current input is empty
    if (event.key === "Backspace" && index > 0 && code[index] === "") {
      document.getElementById(`input-${index - 1}`).focus();
    }
  };

  return (
    <section className="d-flex ar bg-white   " dir="rtl" >
      <div className=" py-5 d-flex flex-column justify-content-center  align-items-center  col-xl-4 col-lg-6 col-12 ">
        <LazyLoadImage
          alt={"hi"}
          effect="blur"
          src={logo}
          className="h-100 img_xxl"
          opacity="true"
          placeholderSrc={logo}
        />
        <h2 className="mt-5 color_pink fw-bolder mt-1 primary">
          التحقق من الحساب
        </h2>
        <p
          style={{ fontSize: "15px", width: "75%" }}
          className="color_pink fw-normal mt-1 text-center"
        >
          لقد تم إرسال الكود إلى
          <span className=" px-1 primary fw-normal">amradham@gmail.com</span>
          أدخل كود التحقق هنا
        </p>

        <form className="d-flex flex-column justify-content-between w-100 px-5 h-75 ">
          <div className=" d-flex flex-column justify-content-center text-center">
            <label htmlFor="email" className=" mb-2 fs_auth fw-bold  primary">
              ادخل الكود{" "}
            </label>
            <div className="d-flex gap-2 w-100 justify-content-center">
              {code.map((value, index) => (
                <input
                  key={index}
                  id={`input-${index}`}
                  type="text"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="input_style_auth"
                  style={{ width: "15%" }}
                />
              ))}
            </div>

            <p className=" primary fw-normal mt-5 text-center ">
              لم تستلم الكود؟
              <u className="primary fw-normal pe-1 ">إعادة الإرسال </u>
            </p>
            <p className="color_pink fw-normal  text-center">
              إعادة ارسال الكود في خلال 00.59
            </p>
          </div>
          <Link
            to={"/newpassword"}
            style={{ background: "#ed5ab3", border: "1px" }}
            className="button_auth fs_auth"
          >
            التحقق من الحساب{" "}
          </Link>
        </form>
      </div>
      <div className=" col-xl-8 col-lg-6  bg_auth h_vh_RES "></div>
    </section>
  );
};

export default VerifyAccount;
