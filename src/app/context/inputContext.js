'use client'
import React, { createContext, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
const [heroInput,setHeroInput]=useState(10000);
const [loanreasonvalue,setloanreasonvalue]=useState("");
const [meme,setmeme]=useState("")
const heroSectionInput = (value)=>{
    setHeroInput(value)
}

const value = {
heroSectionInput,
heroInput,
loanreasonvalue,
setmeme,
meme
}

    return (
  <InputContext.Provider value={value}>
    <div>{children}</div>
  </InputContext.Provider>
);
};

export default InputProvider;
