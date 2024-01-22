"use client";
import React, { useState } from "react";
import styles from "./donotsell.module.css";
import Footer2 from "@/components/footer2/footer2";
import PolicyNavbar from "@/components/policyNavbar/policynavbar";
const DonotSell = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <PolicyNavbar />
      <div className={styles.mainHeading}>
        <h1>Do Not Sell My Personal Information</h1>
        <span>
          The California Consumer Privacy Act (CCPA) affords California
          residents the right to prevent business from selling their personal
          information. Clear Credit takes your privacy seriously. We do not sell
          your information. However, if you would like to make a formal request
          to Clear Credit that it never sell your personal information in the
          future, please fill out the following form:
        </span>
      </div>
      <div className={styles.form}>
        <div className={styles.name}>
          <span>Name</span>
          <div className={styles.nameFields}>
            <div className={styles.namesinputfields}>
              <input type="text" placeholder="First Name" />
            </div>
            <div className={styles.namesinputfields}>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
        </div>
        <div className={styles.emailandphone}>
          <div className={styles.fields}>
            <span>Email</span>
            <input type="text" placeholder="Email" />
          </div>
          <div className={styles.fields}>
            <span>Phone</span>
            <input type="number" placeholder="Phone" />
          </div>
        </div>
        <div className={styles.zipcode}>
          <span>Zip Code</span>
         
            <div className={styles.namesinputfields}>
              <input type="number" placeholder="ZipCode" />
            </div>
         
        </div>
        <div className={styles.checkboxes}>
          <span>Confirm that you live in California?</span>
          <div>
            <input
              type="checkbox"
              name="options"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            <span style={{ marginLeft: "5px" }}>
              I am a resident of California
            </span>
          </div>
          <div>
            <input
              type="checkbox"
              name="options"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            <span style={{ marginLeft: "5px" }}>
              I am a resident of another state
            </span>
          </div>
        </div>
        <div className={styles.submitButton}>
          <button>Submit</button>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default DonotSell;
