'use client'
import React, { useState } from "react";
import styles from "./almostThere.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { MdRadioButtonChecked } from "react-icons/md";
const AlmostThere = ({ onContinue }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://client.forthcrm.com/post/7d7608ca21470e510d0133cec99649d218661c5c/?fname=${"Henry"}&lname=${"Cavil"}&dob=${"22/03/2011"}&email=${"test2@gmail.com"}&phone=${"111222333555"}&address=${"dha pahse 3"}&apartment=${"apartment no. 35"}&city=${"London"}&zipcode=${"57385"}&borrow_amount=${40000}&loan_reason=${"Business"}&housing_cost=${3000}`,
        {
          method: "POST",
          mode:"cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key1: "value1",
            key2: "value2",
          }),
        }
      );

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error making POST request:", error);
    } finally {
      setLoading(false);
    }
    onContinue();
  };
  console.log(data)
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
