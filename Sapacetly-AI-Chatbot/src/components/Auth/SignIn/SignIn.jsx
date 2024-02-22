import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../../Auth/auth.css";
import logo from "../../../assets/Images/logo.svg";
import google from "../../../assets/Images/google.png";
import apple from "../../../assets/Images/apple.png";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("الأيميل غير صالح").required("ادخل الايميل"),
      password: Yup.string().required("ادخل الباسورد"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <section className="d-flex ar bg-white " dir="rtl">
      <div className="d-flex flex-column justify-content-center  align-items-center  col-xl-4 col-lg-6 col-12 h_vh_IN">
        <LazyLoadImage
          alt={"hi"}
          effect="blur"
          src={logo}
          className="h-100 img_xxl"
          opacity="true"
          placeholderSrc={logo}
        />
        <form
          className="mt-5 d-flex flex-column gap-1 align-content-end w-100 px-5  gap-2"
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="email" className=" fs_auth fw-bold  primary">
            بريدك الألكتروني{" "}
          </label>
          <input
            id="email"
            type="text"
            className="input_style_auth"
            placeholder="البريد الإلكتروني"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password" className="fs_auth fw-bold  primary">
            كلمة المرور
          </label>
          <span className=" span_input">
            <input
              id="password"
              type="password"
              className="input_style_auth"
              placeholder="كلمة المرور"
              {...formik.getFieldProps("password")}
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
          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
          <div className="form-check fw-bold  primary">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label
              className="form-check-label fs_auth"
              htmlFor="flexCheckDefault"
            >
              تذكرني
            </label>
          </div>
          <button
            type="submit"
            className="button_auth fs_auth"
            style={{ background: "#ed5ab3", border: "1px" }}
          >
            تسجيل دخول
          </button>
        </form>
        <p className="fs-5 fw-normal my-2 fs_auth ">أو الدخول بواسطة</p>

        <div className="d-flex flex-column gap-3 align-content-end w-100 px-5  gap-2">
          <button className="button_auth fs_auth">
            دخول بواسطة جوجل
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={google}
              className="h-100"
              opacity="true"
              placeholderSrc={google}
            />
          </button>
          <button className="button_auth fs_auth text-white">
            دخول بواسطة أبل
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={apple}
              className="h-100"
              opacity="true"
              placeholderSrc={apple}
            />
          </button>
          <button className="button_auth fs_auth">
            دخول بواسطة فيس بوك
            <SiFacebook className=" white fs-5" />
          </button>
        </div>
        <Link to="/forgotpassword" className="mt-4 fs-6 text-black-50 ">
          فقدت كلمة المرور الخاصة بك؟
        </Link>

        <span className="mt-4 d-flex gap-2">
          <p className=" fs-6 text-black-50">ليس لديك حساب؟</p>
          <Link to="/signup" className="fs-6 fw-bolder  primary    ">
            إنشاء حساب
          </Link>
        </span>
      </div>
      <div className=" col-xl-8 col-lg-6  bg_auth h_vh_IN "></div>
    </section>
  );
};

export default SignIn;
