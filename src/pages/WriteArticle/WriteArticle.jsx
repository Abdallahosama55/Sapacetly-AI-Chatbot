import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Correct import statement
import KeyWordForm from "../../components/KeyWordForm/KeyWordForm";
import KeyWordResult from "../../components/KeyWordForm/KeyWordResult";
import AdressForm from "../../components/Adress/AdressForm";
import AdressFormResult from "../../components/Adress/AdressFormResult";
import ImageForm from "../../components/Image/ImageForm";
import SubTite from "../../components/SubTitle/SubTitle";
import SubTitleResult from "../../components/SubTitle/SubTitleResult";
import ArticleForm from "../../components/Article/ArticleForm";
import ActiveStepper from "../../components/Active Stepper/ActiveStepper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./WriteArticle.css";
// Array of step labels
const steps = [
  "الكلمات المفتاحية",
  "العنوان",
  "الصورة",
  "العناوين الفرعية",
  "المقال",
];

const WriteArticle = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Check if a step is skipped
  const isStepSkipped = (step) => skipped.has(step);

  // Handle the "Next" button click
  const handleNext = () => {
    const newSkipped = isStepSkipped(activeStep)
      ? new Set(skipped.values()).delete(activeStep)
      : skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    // Check if it's the final step, and navigate to the Editor component
    if (activeStep === steps.length - 1) {
      navigate("/edit");
    }
  };

  // Handle the "Back" button click
  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  // Render the appropriate component based on the active step
  const renderComponent = () => {
    switch (activeStep) {
      case 0:
        return <KeyWordForm />;
      case 1:
        return <AdressForm />;
      case 2:
        return <ImageForm />;
      case 3:
        return <SubTite />;
      case 4:
        return <ArticleForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div
        className=" bg-white  writearticel shadow rounded-3 m-2 mt-3 ps-md-3 pe-md-3 me-md-5 ms-md-3 pt-md-3 pb-md-3"
        dir="rtl">
        <div className="row  size-row gap-3 pe-3 ps-3 ">
          <div className="col ms-0  shadow ">
            <ActiveStepper activeStep={activeStep} />
            <div>
              {renderComponent()}
              {activeStep !== steps.length && (
                <div className=" d-flex  pb-3 justify-content-end align-items-center ps-5  gap-3  ">
                  <Button
                    onClick={handleNext}
                    className=" bg-primecolor text-blue Border-blue-bold rounded-circle  mt-1 mt-md-0"
                    type="btn">
                    {activeStep === steps.length - 1 ? (
                      <IoIosArrowForward />
                    ) : (
                      <IoIosArrowForward />
                    )}
                  </Button>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className=" bg-primecolor ms-1 text-blue Border-blue-bold rounded-circle"
                    type="btn">
                    <IoIosArrowBack />
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="col   rounded-3  shadow    ">
            {activeStep === 0 && (
              <div className="  h-100">
                {" "}
                <KeyWordResult />{" "}
              </div>
            )}
            {activeStep === 1 && (
              <div>
                {" "}
                <AdressFormResult />{" "}
              </div>
            )}
            {activeStep === 3 && (
              <div>
                {" "}
                <SubTitleResult />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;
