import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../Auth/auth.css";
import logo from "../../../assets/Images/logo.svg";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <section className="d-flex ar bg-white   " dir='rtl'>
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
          نسيت كلمة السر{" "}
        </h2>
        <p
          style={{ fontSize: "15px", width: "80%" }}
          className="color_pink fw-normal mt-1 text-center"
        >
          لا تقلق ! أدخل عنوان بريدك الإلكتروني أدناه وسنرسل لك رمزًا لإعادة
          تعيين كلمة المرور.
        </p>

        <form className="d-flex flex-column justify-content-between w-100 px-5 h-75 ">
          <div>
            <label htmlFor="email" className=" mb-2 fs_auth fw-bold  primary">
              بريدك الألكتروني
            </label>
            <input
              id="email"
              type="text"
              className="input_style_auth"
              placeholder="البريد الإلكتروني"
            ></input>
          </div>
          <Link
            to={"/verifyaccount"}
            style={{ background: "#ed5ab3", border: "1px" }}
            className="button_auth fs_auth text-white"
          >
            أرسل تعليمات إعادة الضبط
          </Link>
        </form>
      </div>
      <div className=" col-xl-8 col-lg-6  bg_auth h_vh_RES "></div>
    </section>
  );
};

export default ForgotPassword;
