import React, { useContext, useState } from "react";
import styles from "./screen10.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { InputContext } from "@/app/context/inputContext";
const Screen10 = ({ onBack, progress, onContinue }) => {
  const { email, setEmail, phone, setPhone } = useContext(InputContext);
  const [eemail, seteEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [checkemail, setcheckemail] = useState(false);
  const [checkphone, setcheckphone] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    seteEmail(inputValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputValue);
    setIsValidEmail(isValid);
    setEmail(inputValue);
    setcheckemail(isValid);
  };
  const formatPhoneNumber = (inputValue) => {
    const cleanedNumber = inputValue.replace(/\D/g, "");
    if (!cleanedNumber || cleanedNumber === "(") {
      return "";
    }
    const firstTenDigits = cleanedNumber.slice(0, 10);
    let formattedNumber = `(${firstTenDigits.slice(0, 3)}`;
    if (firstTenDigits.length > 3) {
      formattedNumber += `) ${firstTenDigits.slice(3, 6)}`;
    }
    if (firstTenDigits.length > 6) {
      formattedNumber += `-${firstTenDigits.slice(6, 10)}`;
    }
    return formattedNumber;
  };
  const handleInputChangePhone = (event) => {
    const inputValue = event.target.value;
    const formattedNumber = formatPhoneNumber(inputValue);
    const validInput = /^\d{0,10}$/;
    if (!validInput.test(formattedNumber.replace(/\D/g, ""))) {
      return;
    }
    setPhoneNumber(formattedNumber.slice(0, 14));
    const phoneRegex = /^\d{10}$/;
    const isValid = phoneRegex.test(formattedNumber.replace(/\D/g, ""));
    setIsValidPhoneNumber(isValid);
    setPhone(formattedNumber);
    setcheckphone(isValid);
  };

  console.log(phone);
  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
        <IoMdArrowRoundBack onClick={onBack} className={styles.backbutton} />
        <div className={styles.calculatorScreensImg}>
          <img src="../telephone.png" alt="" width={100} />
        </div>
        <div className={styles.calculatorScreensheading}>
          <h1>What is your contact detail?</h1>
        </div>
        <div className={styles.inputfields}>
          <div
            className={styles.inputs}
            style={{ border: !isValidEmail ? "1px solid red" : "" }}
          >
            <input
              type="text"
              placeholder="Email"
              className={styles.nameinput}
              value={eemail}
              onChange={handleInputChange}
            />{" "}
            {checkemail && <IoMdCheckmark style={{ color: "#05c8e8" }} />}
          </div>
          {!isValidEmail && (
            <p className={styles.errormsg}>
              Please enter a valid email address.
            </p>
          )}
          <div
            className={styles.inputs}
            style={{ border: !isValidPhoneNumber ? "1px solid red" : "" }}
          >
            <input
              placeholder="Phone"
              type="text"
              className={styles.nameinput}
              value={phoneNumber}
              onChange={handleInputChangePhone}
            />{" "}
            {checkphone && <IoMdCheckmark style={{ color: "#05c8e8" }} />}
          </div>
          {!isValidPhoneNumber && (
            <p className={styles.errormsg}>
              Please enter a valid phone number.
            </p>
          )}
        </div>
        <button
          className={
            !checkemail
              ? styles.disabledbutton
              : !checkphone
              ? styles.disabledbutton
              : styles.continuebutton
          }
          onClick={onContinue}
          disabled={email === "" ? true : phone === "" ? true : false}
        >
          Continue
        </button>
        <span
          style={{ color: "#8B8B8B", fontSize: "12px", textAlign: "center" }}
        >
          I certify I am at least 18 years of age and accept Clear Credit's
          Terms of Use, Disclosure and Privacy Policy and/or California Privacy
          Policy, and give Clear Credit and its approved partners express
          written consent to contact me about financial service or credit
          related offers via email, text message, and by phone at the number
          above, including by automated dialer, even if your telephone number is
          currently listed on any internal, corporate, state or federal
          Do-Not-Call list. I understand this consent is not a condition of
          receiving services from Clear Credit AI, LLC.
        </span>
        <div className={styles.securityheading}>
          <FaLock style={{ marginRight: "10px" }} />
          <h4>Your security is our top priority</h4>
        </div>
        <div className={styles.footer}>
          <div className={styles.learnmore}>
            <IoMdCheckmark />
            <span>
              We use TLS encryption, the same security protocols used by top
              banks
              <br /> and lenders. <Link href={""}>Learn More</Link>
            </span>
          </div>
          <div className={styles.privacypolicy}>
            <IoMdCheckmark />
            <span>
              We don’t sell your information to third parties. Read our{" "}
              <Link href={""}>Privacy Policy</Link>
            </span>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "5px",
            backgroundColor: "#b0b0b0",
            marginBottom: "-3rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#05c8e8",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Screen10;
