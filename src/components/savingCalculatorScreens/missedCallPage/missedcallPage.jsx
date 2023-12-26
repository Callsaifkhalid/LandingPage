import React from "react";
import styles from "./missed.module.css";
import { FaPhoneVolume } from "react-icons/fa6";
const MissedcallPage = () => {
  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
        <div>
          <FaPhoneVolume style={{ fontSize: "3rem", color: "#05c8e8" }} />
        </div>
        <div className={styles.calculatorScreensheading}>
          <h3>Please hold as we connect you with a Client Advocate!</h3>
        </div>
        <div className={styles.optionstext}>
          <span style={{color:'#05c8e8'}}>If you've missed our call from 111-222-333-444</span>, please
          select one of the options below:{" "}
        </div>
        <div className={styles.buttons}>
          <button className={styles.button1}>Call Me Now</button>
          <button className={styles.button2}>Call in 15 Minutes</button>
          <button className={styles.button2}>Schedule a Call</button>
        </div>
      </div>
    </div>
  );
};

export default MissedcallPage;
