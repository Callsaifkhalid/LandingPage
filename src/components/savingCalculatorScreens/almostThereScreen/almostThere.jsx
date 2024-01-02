"use client";
import React, { useContext, useState } from "react";
import styles from "./almostThere.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { MdRadioButtonChecked } from "react-icons/md";
import { checkRates } from "@/app/api/checkRates/repo";
import { InputContext } from "@/app/context/inputContext";
const AlmostThere = ({ onContinue }) => {
  const {  heroInput,
    loanreasonvalue,
    employmentvalue,
    first_name,
    last_name,
    dob,
    address,
    suite,
    city,
    state,
    zipCode,
    housing_cost,
    email,
    phone,} = useContext(InputContext);
  const Dataa = {
    "first_name": first_name,
    "last_name": last_name,
    "phone": phone,
    "email": email,
    "dob": dob,
    "debt_or_credit": 1,
    "borrow_amount": heroInput,
    "loan_reason": loanreasonvalue,
    "employment_type": employmentvalue,
    "housing_cost": housing_cost,
    "address": {
      "state": state.label,
      "address": address,
      "apartment": suite,
      "city": city,
      "zipcode": zipCode,
      "debt_or_credit": 1,
      "user_id": 1  // Replace with the actual user ID
    }
  }
  const handleClick=()=>{
    checkRates(Dataa)
    onContinue()
  }
    console.log(state.label)
  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
        <div className={styles.calculatorScreensheading}>
          <h2>Almost There!</h2>
        </div>
        <div className={styles.progressicons}>
          <FaCheckCircle style={{ color: "#05c8e8" }} />
          <GoDash />
          <FaCheckCircle style={{ color: "#05c8e8" }} />
          <GoDash />
          <MdRadioButtonChecked style={{ color: "green", fontSize: "18px" }} />
        </div>
        <div>
          <img src="../confetti.svg" width={100} />
        </div>
        <div className={styles.text}>
          <h3>Everything looks good!</h3>
          <span>
            Let's make it official. Our client representative will call and
            guide you through the final steps!
          </span>
        </div>
        <div className={styles.finalbutton}>
          <button onClick={handleClick}>Finalize my Application</button>
        </div>
        <div className={styles.footertext}>
          By clicking 'Finalize My Application' or 'Schedule an Appointment' you
          authorize ClearCredit Funding, LLC dba ClearCredit Financial to
          contact you by phone, text, email, or mail or by artificial or
          pre-recorded voice, even if you listed yourself on any Do-Not-Call
          List. You also agree to our{" "}
          <span style={{ color: "#05c8e8" }}>Privacy Policy</span> and{" "}
          <span style={{ color: "#05c8e8" }}>Terms of Use</span>. If you do not
          consent to receive automated calls or text messages,please call{" "}
          <span style={{ color: "#05c8e8" }}>1-844-208-1100</span> to continue
          your application.
        </div>
      </div>
    </div>
  );
};

export default AlmostThere;
