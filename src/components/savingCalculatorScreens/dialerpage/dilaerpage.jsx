import React from "react";
import styles from "./dialerpage.module.css";
import { FaPhoneVolume } from "react-icons/fa6";
import PhoneIcon from "../AnimatedPhoneIcon/animatedphoneicon";
const Dilaerpage = () => {
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
          {/* <FaPhoneVolume
            style={{ fontSize: "3rem", color: "#05c8e8", marginLeft: "9rem" }}
          /> */}
          <PhoneIcon/>
          <span>00:07:46</span>
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

export default Dilaerpage;
