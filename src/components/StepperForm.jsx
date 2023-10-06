import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { useStepContext } from "../StepContext";
import Suceess from "./Suceess";
import PreviewModel from "./PreviewModel";
import { useNavigate } from "react-router-dom";

const StepperForm = () => {
  const navigate = useNavigate();
  const { formdata, formadata2, setFormdata, setFormData2 } = useStepContext();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Personal Information", " Additional Information"];
  const [previewOpen, setPreviewOpen] = useState(false);

  const getStepperContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      default:
        return <Suceess />;
    }
  };

  const handleNext = () => {
    if (!formdata.firstname || !formdata.lastName || !formdata.email) {
      alert("please ennter the all fiiled");
    } else {
      setActiveStep((prevState) => prevState + 1);
    }
  };
  const handleBack = () => {
    setActiveStep((prevState) => prevState - 1);
    setPreviewOpen(false);
  };

  const handleFinish = () => {
    if (
      !formadata2.addrees ||
      !formadata2.city ||
      !formadata2.pin ||
      !formadata2.phoneNumber ||
      !formadata2.gender
    ) {
      alert("please ennter the all fiiled");
    } else {
      setPreviewOpen(true);
    }
  };

  const handleConfirm = () => {
    setPreviewOpen(false);
    setFormdata({});
    setFormData2({});
    navigate("/success");
  };

  return (
    <>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepperContent(activeStep)}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          className="nextButon"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button
            variant="outlined"
            className="nextButon"
            onClick={handleFinish}
            style={{ marginLeft: "10px" }}
          >
            Finish
          </Button>
        ) : activeStep === 2 ? (
          <Button
            variant="outlined"
            disabled
            className="nextButon"
            onClick={handleNext}
            style={{ marginLeft: "10px" }}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="outlined"
            className="nextButon"
            onClick={handleNext}
            style={{ marginLeft: "10px" }}
          >
            Next
          </Button>
        )}
      </div>
      {/* previewModel open */}
      <PreviewModel
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        onConfirm={handleConfirm}
        edit={handleBack}
      />
    </>
  );
};

export default StepperForm;
