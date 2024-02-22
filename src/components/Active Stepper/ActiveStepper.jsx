import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

function ActiveStepper(props) {
  const steps = [
    "الكلمات المفتاحية",
    "العنوان",
    "الصورة",
    "العناوين الفرعية",
    "المقال",
  ];

  return (
    <div>
      <div>
        <Stepper
          activeStep={props.activeStep}
          alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}

export default ActiveStepper;
