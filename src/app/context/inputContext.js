"use client";
import React, { createContext, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 18);
  const [heroInput, setHeroInput] = useState(10000);
  const [loanreasonvalue, setloanreasonvalue] = useState("");
  const [employmentvalue, setemploymentvalue] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setlastName] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [housing_cost, setHousingCost] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const heroSectionInput = (value) => {
    setHeroInput(value);
  };
  
  const value = {
    heroSectionInput,
    heroInput,
    loanreasonvalue,
    setloanreasonvalue,
    employmentvalue,
    setemploymentvalue,
    first_name,
    setFirstName,
    last_name,
    setlastName,
    dob,
    setDOB,
    address,
    setAddress,
    suite,
    setSuite,
    city,
    setCity,
    state,
    setState,
    zipCode,
    setZipCode,
    housing_cost,
    setHousingCost,
    email,
    setEmail,
    phone,
    setPhone,
   
  };
  
  return (
    <InputContext.Provider value={value}>
      <div>{children}</div>
    </InputContext.Provider>
  );
};

export default InputProvider;
