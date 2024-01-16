"use client";
import React, { useRef } from "react";
import styles from "./dialerpage.module.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { useState, useEffect } from "react";
const Dilaerpage = ({onContinue}) => {
  const [seconds, setSeconds] = useState(0);
  const secondsRef = useRef(seconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        secondsRef.current = prevSeconds + 1;
        return prevSeconds + 1;
      });

      if (secondsRef.current === 29) {
        clearInterval(intervalId);
        onContinue()
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = new Date(1000 * seconds).toISOString().substr(11, 8);
  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
        <div className={styles.calculatorScreensheading}>
          <h2>
            Please expect a call from <br />
            1-844-208-1100
          </h2>
          <span>Keep an eye on your phone</span>
        </div>
        <div className={styles.dialericon}>
          <div className={styles.pulse}>
            <FaPhoneVolume style={{ fontSize: "2rem" }} />
          </div>
          <span>{formattedTime}</span>
        </div>
        <span style={{ color: "#1a4048" }}>
          We are very excited to help you!
        </span>
        <div className={styles.footertext}>
          By clicking 'Finalize My Application' or 'Schedule an Appointment' you
          authorize ClearCredit Funding, LLC dba ClearCredit Financial to
          contact you by phone, text, email, or mail or by artificial or
          pre-recorded voice, even if you listed yourself on any Do-Not-Call
          List. You also agree to our{" "}
          <span style={{ color: "#05c8e8" ,cursor:'pointer'}} onClick={()=>router.push('/privacyPolicy')}>Privacy Policy</span> and{" "}
          <span style={{ color: "#05c8e8" ,cursor:'pointer'}} onClick={()=>router.push('/terms-of-use')}>Terms of Use</span>. If you do not
          consent to receive automated calls or text messages,please call{" "}
          <span style={{ color: "#05c8e8" }}>1-844-208-1100</span> to continue
          your application.
        </div>
      </div>
    </div>
  );
};

export default Dilaerpage;
