import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../Auth/auth.css";
import logo from "../../../assets/Images/logo.svg";
import { Link } from "react-router-dom";

const NewPassword = () => {
  return (
    <section className="d-flex ar  ">
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
          أنشأ كلمه مرور جديدة
        </h2>
        <p
          style={{ fontSize: "15px", width: "80%" }}
          className="color_pink fw-normal mt-1 text-center"
        >
          رجاءا أدخل كلمة المرور مع التأكيد كلمة مرورك الجديدة ستحتاح إلى إعادة
          تسجيل الدخول
        </p>

        <form className="d-flex flex-column justify-content-between w-100 px-5 h-75 ">
          <div className="d-flex flex-column gap-2">
            <label htmlFor="password" className="fs_auth fw-bold  primary">
              كلمة المرور
            </label>
            <span className=" span_input">
              <input
                id="password"
                type="password"
                className="input_style_auth"
                placeholder="كلمة المرور"
              />
              <svg
                className="icon_input"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.25 13C10.25 12.0335 11.0335 11.25 12 11.25C12.9665 11.25 13.75 12.0335 13.75 13C13.75 13.6981 13.3412 14.3007 12.75 14.5816V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V14.5816C10.6588 14.3007 10.25 13.6981 10.25 13Z"
                  fill="#ED5AB3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.93414 2.93414C9.01247 1.8558 10.475 1.25 12 1.25C13.525 1.25 14.9875 1.8558 16.0659 2.93414C17.1442 4.01247 17.75 5.47501 17.75 7C17.75 7.06963 17.7405 7.13705 17.7228 7.20102C20.1229 8.51803 21.75 11.069 21.75 14C21.75 18.2802 18.2802 21.75 14 21.75H10C5.71979 21.75 2.25 18.2802 2.25 14C2.25 11.069 3.87706 8.51803 6.27725 7.20102C6.25949 7.13705 6.25 7.06963 6.25 7C6.25 5.475 6.8558 4.01247 7.93414 2.93414ZM15.0052 3.9948C15.7015 4.69108 16.1312 5.60408 16.2287 6.57526C15.5229 6.36368 14.7747 6.25 14 6.25H10C9.22528 6.25 8.47711 6.36367 7.77126 6.57525C7.86878 5.60408 8.29852 4.69108 8.9948 3.9948C9.79183 3.19777 10.8728 2.75 12 2.75C13.1272 2.75 14.2082 3.19777 15.0052 3.9948ZM10 7.75C6.54822 7.75 3.75 10.5482 3.75 14C3.75 17.4518 6.54822 20.25 10 20.25H14C17.4518 20.25 20.25 17.4518 20.25 14C20.25 10.5482 17.4518 7.75 14 7.75H10Z"
                  fill="#ED5AB3"
                />
              </svg>
            </span>
            <label
              htmlFor="confirmpassword"
              className="fs_auth fw-bold  primary"
            >
              تأكيد كلمة المرور
            </label>
            <span className=" span_input">
              <input
                id="confirmpassword"
                type="password"
                className="input_style_auth"
                placeholder="تأكيد كلمة المرور"
              />
              <svg
                className="icon_input"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.25 13C10.25 12.0335 11.0335 11.25 12 11.25C12.9665 11.25 13.75 12.0335 13.75 13C13.75 13.6981 13.3412 14.3007 12.75 14.5816V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V14.5816C10.6588 14.3007 10.25 13.6981 10.25 13Z"
                  fill="#ED5AB3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.93414 2.93414C9.01247 1.8558 10.475 1.25 12 1.25C13.525 1.25 14.9875 1.8558 16.0659 2.93414C17.1442 4.01247 17.75 5.47501 17.75 7C17.75 7.06963 17.7405 7.13705 17.7228 7.20102C20.1229 8.51803 21.75 11.069 21.75 14C21.75 18.2802 18.2802 21.75 14 21.75H10C5.71979 21.75 2.25 18.2802 2.25 14C2.25 11.069 3.87706 8.51803 6.27725 7.20102C6.25949 7.13705 6.25 7.06963 6.25 7C6.25 5.475 6.8558 4.01247 7.93414 2.93414ZM15.0052 3.9948C15.7015 4.69108 16.1312 5.60408 16.2287 6.57526C15.5229 6.36368 14.7747 6.25 14 6.25H10C9.22528 6.25 8.47711 6.36367 7.77126 6.57525C7.86878 5.60408 8.29852 4.69108 8.9948 3.9948C9.79183 3.19777 10.8728 2.75 12 2.75C13.1272 2.75 14.2082 3.19777 15.0052 3.9948ZM10 7.75C6.54822 7.75 3.75 10.5482 3.75 14C3.75 17.4518 6.54822 20.25 10 20.25H14C17.4518 20.25 20.25 17.4518 20.25 14C20.25 10.5482 17.4518 7.75 14 7.75H10Z"
                  fill="#ED5AB3"
                />
              </svg>
            </span>
          </div>
          <Link
            to={"/signin"}
            style={{ background: "#ed5ab3", border: "1px" }}
            className="button_auth fs_auth"
          >
            تغيير كلمة السر{" "}
          </Link>
        </form>
      </div>
      <div className=" col-xl-8 col-lg-6  bg_auth h_vh_RES "></div>
    </section>
  );
};

export default NewPassword;
