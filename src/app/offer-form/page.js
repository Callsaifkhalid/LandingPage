"use client";
import React, { useState } from "react";
import styles from "./offerform.module.css";
import CurrencyInput from "react-currency-input-field";
import Select from "react-select";
import {
  businessOptions,
  creditScoreOptions,
  languageOptions,
} from "@/utils/offer-form-options";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import options from "@/utils/stateOptions";
import { FaLock } from "react-icons/fa";
import PolicyNavbar from "@/components/policyNavbar/policynavbar";
import Footer2 from "@/components/footer2/footer2";
import { useRouter } from "next/navigation";
const OfferForm = () => {
  const [dob, setDOB] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [checkphone, setcheckphone] = useState(false);
  const [eemail, seteEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [checkemail, setcheckemail] = useState(false);
  const router = useRouter();
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 18);
  const Styles = {
    control: (provided, state) => ({
      display: "flex",
      height: "40px",
      border: "none",
      marginLeft: "2%",
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
  const handleInputChangeEmail = (event) => {
    const inputValue = event.target.value;
    seteEmail(inputValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputValue);
    setIsValidEmail(isValid);
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

    setcheckphone(isValid);
  };
  return (
    <div>
      <PolicyNavbar />
      <div className={styles.wrapper}>
        <div className={styles.mainHeading}>
          <h1>Now let's get you the best debt consolidation available.</h1>
        </div>
        <div className={styles.debtdetails}>
          <h3>Debt Details</h3>
          <div className={styles.debtandcreditscore}>
            <div className={styles.fields}>
              <span>Your Unsecured Debt Amount </span>
              <CurrencyInput
                prefix="$"
                maxLength={6}
                placeholder="Debt Amount "
              />
            </div>
            <div className={styles.fields}>
              <span>Credit Score</span>
              <Select
                options={creditScoreOptions}
                styles={Styles}
                placeholder="Credit Score"
                className={styles.reactselect}
              />
            </div>
          </div>
          <div className={styles.debtandcreditscore}>
            <div className={styles.fields}>
              <span>Annual Income </span>
              <CurrencyInput
                prefix="$"
                maxLength={6}
                placeholder="Annual Income"
              />
            </div>
            <div className={styles.fields}>
              <span>Primary Language</span>
              <Select
                options={languageOptions}
                styles={Styles}
                placeholder="Language"
                className={styles.reactselect}
              />
            </div>
          </div>
        </div>
        <div className={styles.personalDetails}>
          <h3>Personal Details</h3>
          <div className={styles.debtandcreditscore}>
            <div className={styles.fields}>
              <span>First Name</span>
              <input type="text" placeholder="First Name" />
            </div>
            <div className={styles.fields}>
              <span>Last Name </span>
              <input type="text" placeholder="Last Name " />
            </div>
          </div>
          <div className={styles.dateandbusiness}>
            <div className={styles.fields}>
              <span>Date of Birth (MM/DD/YYYY)</span>
              <div>
                <DatePicker
                  className={styles.datepicker}
                  dayPlaceholder="DD"
                  monthPlaceholder="M"
                  yearPlaceholder="YYYY"
                  maxDate={minDate}
                  value={dob}
                  onChange={(date) => setDOB(date)}
                />
              </div>
            </div>
            <div className={styles.fields}>
              <span>Are you a business owner?</span>
              <Select
                options={businessOptions}
                styles={Styles}
                placeholder="Select"
                className={styles.reactselect}
              />
            </div>
          </div>
          <div className={styles.debtandcreditscore}>
            <div className={styles.fields}>
              <span>Phone Number </span>
              <input
                placeholder="Phone"
                type="text"
                value={phoneNumber}
                onChange={handleInputChangePhone}
              />
            </div>
            <div className={styles.fields}>
              <span>Email Address </span>
              <input
                type="text"
                placeholder="Email"
                value={eemail}
                onChange={handleInputChangeEmail}
              />
            </div>
          </div>
          <div className={styles.debtandcreditscore}>
            <div className={styles.fields} style={{ width: "70%" }}>
              <span>Street Address </span>
              <input placeholder="Street Address" type="text" />
            </div>
            <div className={styles.fields} style={{ width: "25%" }}>
              <span>Suite/Apt </span>
              <input type="text" placeholder="Suite/Apt" />
            </div>
          </div>
          <div className={styles.debtandcreditscore}>
            <div className={styles.fields} style={{ width: "40%" }}>
              <span>City</span>
              <input placeholder="City" type="text" />
            </div>
            <div className={styles.fields} style={{ width: "30%" }}>
              {" "}
              <Select
                options={options}
                styles={Styles}
                placeholder="State"
                className={styles.reactselect2}
              />
            </div>

            <div className={styles.fields} style={{ width: "25%" }}>
              <span>ZipCode </span>
              <input type="number" placeholder="zipcode" />
            </div>
          </div>
          <div className={styles.submitButton}>
            <button>See my Offers</button>
            <div className={styles.affect}>
              <FaLock style={{ marginRight: "10px" }} />{" "}
              <span>This will not affect your credit score</span>
            </div>
            <span style={{ marginTop: "7%", lineHeight: "1.6em" }}>
              By clicking ‘SEE MY OFFERS’ I consent to a{" "}
              <span style={{ fontWeight: "700" }}>Soft Inquiry</span>, agree to
              Clear Credit's{" "}
              <span
                style={{ fontWeight: "700", cursor: "pointer" }}
                onClick={() => router.push("/terms-of-use")}
              >
                Terms of Service
              </span>{" "}
              and{" "}
              <span
                style={{ fontWeight: "700", cursor: "pointer" }}
                onClick={() => router.push("/privacyPolicy")}
              >
                Privacy Policy
              </span>{" "}
              and authorize Clear Credit and these{" "}
              <span style={{ fontWeight: "700" }}>Partners</span> to contact me
              by phone, email or SMS text, which may include automated dialing,
              messaging and prerecorded voice technology. SMS text and data
              rates may apply. SMS text frequency varies. Text HELP for SMS text
              assistance or STOP to cancel SMS texts.
            </span>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default OfferForm;
