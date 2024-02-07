import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Correct import statement
import KeyWordForm from '../../components/KeyWordForm/KeyWordForm';
import KeyWordResult from '../../components/KeyWordForm/KeyWordResult';
import AdressForm from '../../components/Adress/AdressForm';
import AdressFormResult from '../../components/Adress/AdressFormResult';
import ImageForm from '../../components/Image/ImageForm';
import SubTite from '../../components/SubTitle/SubTitle';
import SubTitleResult from '../../components/SubTitle/SubTitleResult';
import ArticleForm from '../../components/Article/ArticleForm';
import ActiveStepper from '../../components/Active Stepper/ActiveStepper';

// Array of step labels
const steps = ['الكلمات المفتاحية', 'العنوان', 'الصورة', 'العناوين الفرعية', 'المقال'];

const WriteArticle = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  // Check if a step is skipped
  const isStepSkipped = (step) => skipped.has(step);

  // Handle the "Next" button click
  const handleNext = () => {
    const newSkipped = isStepSkipped(activeStep) ? new Set(skipped.values()).delete(activeStep) : skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    // Check if it's the final step, and navigate to the Editor component
    if (activeStep === steps.length - 1) {
      navigate('/edit');
     
    }
  };

  // Handle the "Back" button click
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

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
    <div className='container bg-white shadow rounded-5 mt-5 p-md-5' dir='rtl'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-6 border-1 shadow-1 align-items-center border-form '>
          <ActiveStepper activeStep={activeStep} />
          <div>
            {renderComponent()}
            {activeStep !== steps.length && (
              <React.Fragment>
                <div className=' row justify-content-center align-items-center mt-2'>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className='btn-blue ms-1 mt-1'
                    type='btn'
                  >
                    الخطوة السابقة
                  </Button>
                  <Button onClick={handleNext} className='btn-pink mt-1' type="btn">
                    {activeStep === steps.length - 1 ? 'انهاء' : 'الخطوة التالية'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
        <div className='col-md-6 '>
          {activeStep === 0 && <div className='border-form '> <KeyWordResult/> </div>}
          {activeStep === 1 && <div className='border-form '> <AdressFormResult/> </div>}
          {activeStep === 3 && <div className='border-form '> <SubTitleResult/></div>}
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;
