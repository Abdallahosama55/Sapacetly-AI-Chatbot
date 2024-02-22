import React, { Fragment, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../Auth/auth.css";
import logo from "../../../assets/Images/logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("مطلوب كتابه الايميل"),
  });

  const handleSubmit = async (values) => {
    // Handle form submission here

    console.log("Form submitted with values:", values);
    try {
      const response = await axios.post(
        `http://srv475086.hstgr.cloud/api/forgot_password/`,
        values
      );
      // Assuming the response contains user data
      const userData = response.data;
      // const tokenKey = userData.tokens.access;
      console.log("userData", userData.details);
      setMessage(userData.details);

      // Save token to localStorage
      // if (checkBoxValue) localStorage.setItem("token", tokenKey);

      // Navigate to the desired route
      // navigate("/newpassword", { state: { data: userData.token } });
    } catch (error) {
      // Handle error
      console.error("Error posting data:", error);
      console.log("state.error", error?.response?.data?.detail);
    }
  };

  return (
    <Fragment>
    <section
      className="d-flex ar   vh-100    justify-content-center align-items-center  "
      dir="rtl">
      <div className=" py-5 pb-5 mb-5 d-flex    flex-column justify-content-center  align-items-center  col-xl-4 col-lg-6 col-12 ">
        <LazyLoadImage
          alt={"hi"}
          effect="blur"
          src={logo}
          className="h-100 img_xxl"
          opacity="true"
          placeholderSrc={logo}
        />
        <h2 className="mt-5  text-move fw-bolder mt-1 primary  mt-1 ">
           هل نسيت كلمة السر  ؟{" "}
        </h2>
        <p
          style={{ fontSize: "15px", width: "80%" }}
          className="text-move fw-normal mt-1 text-center">
          لا تقلق ! أدخل عنوان بريدك الإلكتروني أدناه وسنرسل لك رمزًا لإعادة
          تعيين كلمة المرور.
        </p>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="d-flex flex-column justify-content-between w-100 px-5 h-75 ">
              <div>
                <label
                  htmlFor="email"
                  className=" mb-2 fs_auth text-move fw-bold  primary">
                  بريدك الألكتروني
                </label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  className="input_style_auth"
                  placeholder="البريد الإلكتروني"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="  text-primary">{message}</div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{ background: " #692BEF", border: "1px" }}
                className=" btn-move  mt-3 btn-move text-white">
                {isSubmitting ? "جارٍ الإرسال..." : "أرسل تعليمات إعادة الضبط"}
              </button>
            </Form>
          )}
        </Formik>
      </div>

    </section>
    </Fragment>
  );
};

export default ForgotPassword;
