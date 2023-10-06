import { createContext, useContext, useState } from "react";

const StepFormContext = createContext();

export function useStepContext() {
  return useContext(StepFormContext);
}

export function StepFormProvider({ children }) {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastName: "",
    email: "",
  });

  const [formadata2, setFormData2] = useState({
    addrees: "",
    city: "",
    pin: "",
    gender: "Male",
    phoneNumber: "",
  });

  return (
    <StepFormContext.Provider
      value={{ formdata, setFormdata, formadata2, setFormData2 }}
    >
      {children}
    </StepFormContext.Provider>
  );
}
