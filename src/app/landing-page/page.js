"use client";
import options from "@/utils/stateOptions";
import styles from "./landingpage.module.css";
import { FaPhone, FaCheck } from "react-icons/fa";
import Select from "react-select";
import { useState } from "react";
const LandingPage = () => {
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [checkemail, setcheckemail] = useState(false);

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputValue);
    setIsValidEmail(isValid);
    setEmail(inputValue);
    setcheckemail(isValid);
  };

  const phoneNumber = "+1-844-208-1100";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const Styles = {
    control: (provided, state) => ({
      display: "flex",
      height: "40px",
      border: "none",
      placeholder: "State",
      alignItems: "center",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#05c8e8",
      ":hover": {
        color: "#05c8e8",
      },
    }),
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <img src="../logo.svg" alt="logo" />
        <div className={styles.callbutton} onClick={handleCall}>
          <FaPhone />
          1-844-208-1100
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.textcontent}>
          <span className={styles.textcontentHeading}>
            Everyone deserves the opportunity to start{" "}
            <span className={styles.headingstylechange}>
              Getting Out Of Debt!
            </span>
          </span>
          <div className={styles.pointersbox}>
            <div className={styles.pointers}>
              <FaCheck size={20} fill="#05c8e8" />
              <span>Unlock Financing Up To $100,000</span>
            </div>
            <div className={styles.pointers}>
              <FaCheck size={20} fill="#05c8e8" />
              <span>Pay down your high-interest debt</span>
            </div>
            <div className={styles.pointers}>
              <FaCheck size={30} fill="#05c8e8" />
              <span>
                Explore Offers Without Any Impact on Your Credit Score
              </span>
            </div>
          </div>
        </div>
        {!click && (
          <div className={styles.inputcontainer}>
            <div className={styles.inputfields}>
              <span>
                To redeem your mail offer, just enter your email and PIN below.
              </span>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                style={{ border: !isValidEmail ? "1px solid red" : "" }}
              />
              <input
                type="text"
                placeholder="Mailer Code"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />

              <button
                className={
                  !checkemail
                    ? styles.disabledbutton
                    : pincode === ""
                    ? styles.disabledbutton
                    : styles.startnowbutton
                }
                onClick={() => setClick(true)}
                disabled={email === "" ? true : pincode === "" ? true : false}
              >
                Redeem Offer
              </button>
              {/* <div className={styles.assistancebox}>
                <p className={styles.assistance}>
                  For immediate assistance, call:
                </p>
                <button className={styles.btnNum} onClick={handleCall}>1-844-208-1100</button>
              </div> */}
            </div>
          </div>
        )}
        {click && (
          <div className={styles.inputcontainer2}>
            <div className={styles.inputfieldsform2}>
              <span>Confirm your information</span>
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="City" />
              <Select
                options={options}
                styles={Styles}
                placeholder="State"
                className={styles.statedropdown}
              />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />

              <button className={styles.startnowbutton}>Submit</button>
              <div className={styles.assistancebox}>
                <p className={styles.assistance}>
                  By clicking submit I agree that I will be contacted by Clear
                  Credit via text message, email, or phone call. Clear Credit{" "}
                  <span style={{ fontWeight: "700" }}>IS NOT</span> a marketing
                  agency and your contact info{" "}
                  <span style={{ fontWeight: "700" }}>WILL NOT</span> be sold.
                  Your contact information will{" "}
                  <span style={{ fontWeight: "700" }}>ONLY</span> be used by
                  Clear Credit for the express and sole purpose of offering a
                  loan or other financial products.
                </p>
                {/* <button className={styles.btnNum} onClick={handleCall}>1-844-208-1100</button> */}
              </div>
            </div>
          </div>
        )}
        <div className={styles.imagebox}>
          <img src="/herogirlwithcircle.svg" alt="herogirl" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
