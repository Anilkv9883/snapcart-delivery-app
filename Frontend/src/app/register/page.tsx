"use client";
import React, { useState } from "react";
import Welcome from "../components/Welcome";

const Register = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step == 1 ? <Welcome nextStep={setStep} /> : "From page code hare"}
    </div>
  );
};

export default Register;
