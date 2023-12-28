'use client'
import React, { createContext, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
const [heroInput,setHeroInput]=useState(10000)

const heroSectionInput = (value)=>{
    setHeroInput(value)
}
const value = {
heroSectionInput,
heroInput
}
    return (
  <InputContext.Provider value={value}>
    <div>{children}</div>
  </InputContext.Provider>
);
};

export default InputProvider;
