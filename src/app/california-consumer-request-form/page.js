"use client";
import React, { useState } from "react";
import styles from "./californiaconsumer.module.css";
import PolicyNavbar from "@/components/policyNavbar/policynavbar";
import Link from "next/link";
import options from "@/utils/stateOptions";
import Select from "react-select";
import Footer2 from "@/components/footer2/footer2";
const CaliforniaRequestForm = () => {
  const [selectedOptionaccount, setselectedOptionaccount] = useState(null);
  const [selectedOptionsend, setselectedOptionsend] = useState(null);
  const [selectedOptioninfo, setselectedOptioninfo] = useState(null);
  const [selectedOptionsensitive, setselectedOptionsensitive] = useState(null);
  const [selectedOptionsdel, setselectedOptionsdel] = useState(null);
  const [selectedOptionscontact, setselectedOptionscontact] = useState(null);

  const handleOptionChangeaccount = (event) => {
    setselectedOptionaccount(event.target.value);
  };
  const handleOptionChangesend = (event) => {
    setselectedOptionsend(event.target.value);
  };
  const handleOptionChangeinfo = (event) => {
    setselectedOptioninfo(event.target.value);
  };
  const handleOptionChangesensitive = (event) => {
    setselectedOptionsensitive(event.target.value);
  };
  const handleOptionChangedel = (event) => {
    setselectedOptionsdel(event.target.value);
  };
  const handleOptionChangecontact = (event) => {
    setselectedOptionscontact(event.target.value);
  };
  const Styles = {
    control: (provided, state) => ({
      display: "flex",
      height: "40px",
      border: "none",
      placeholder: "State",
      alignItems:'center'
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
      <PolicyNavbar />
      <div className={styles.mainHeading}>
        <h1>CCPA Access Deletion Request</h1>
        <span>
          This Webpage applies solely to those who are consumers (“you” or
          “your”) as defined in Section 1798.140(g) of the California Consumer
          Privacy Act of 2018 (“CCPA”) and any terms defined in the CCPA have
          the same meaning when used in this Webpage. Lendah, LLC (“Lendah,”
          “Company,” “we,” or “our”) provides this Webpage to outline the rights
          that the CCPA give to access and request deletion of the personal
          information that a business holds on you and to give you a means
          easily exercise those rights.
          <br />
          <br /> You are entitled to be informed whether your personal
          information is collected, used, stored, and/or disclosed by us. You
          may request, up to twice per 12-month period, to be sent a copy of
          your personal information that we retain in our files, subject to any
          applicable exemptions.
          <br />
          <br /> In addition, you have the right to request that we delete your
          personal information from our records, subject to any applicable
          exemptions. For example, we may retain personal information that is
          needed provide you with a requested service, prevent fraud, or to meet
          our legal obligations (additional exemptions are listed in our{" "}
          <Link href={"/policy-statement-california"}>CA Privacy Notice</Link>).
          Be advised that we are not able to delete your personal information
          from any third party’s records unless that third party is a service
          provider to us.
          <br />
          <br />
          To request access to and/or deletion of your personal information from
          our systems, please complete the form at the bottom of this page or
          call us at 833–4–LENDAH. On receipt of your request, we may request
          additional information to verify your identity and the validity of
          your request.
          <br />
          <br /> While we strive to provide to appropriately answer all Requests
          within 10 days of receiving the Request, Lendah has up to forty-five
          (45) days to respond. If we need additional time, we may also inform
          you that we need up to forty-five (45) additional days to respond and
          the reason(s) for the additional time.
          <br />
          <br /> Before submitting your request, we ask that you review our
          Privacy Policy and{" "}
          <Link href={"/policy-statement-california"}>CA Privacy Notice</Link>.
          The Privacy Policy and{" "}
          <Link href={"/policy-statement-california"}>CA Privacy Notice</Link>{" "}
          provide valuable information about how we collect, use, store, and
          disclose personal information. You may find the answer you are looking
          for faster by reviewing these documents than by submitting a request
          and waiting for our response.
        </span>
      </div>
      <div className={styles.form}>
        <div className={styles.name}>
          <span>Name</span>
          <div className={styles.nameFields}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className={styles.emailandphoneandbirth}>
          <div className={styles.fields}>
            <span>Birth Year</span>
            <input type="number" placeholder="Birth year" />
          </div>
          <div className={styles.fields}>
            <span>Email</span>
            <input type="text" placeholder="Email" />
          </div>
          <div className={styles.fields}>
            <span>Phone</span>
            <input type="number" placeholder="Phone" />
          </div>
        </div>
        <div className={styles.address}>
          <span>Address</span>
          <input type="text" placeholder="Address" />
        </div>
        <div className={styles.emailandphoneandbirth}>
          <div className={styles.fields}>
            <span>City</span>
            <input type="text" placeholder="City" />
          </div>
          <div className={styles.fields}>
            <span>State</span>
            <div className={styles.reactselect}>
              <Select options={options} styles={Styles} placeholder="State" />
            </div>
          </div>
          <div className={styles.fields}>
            <span>ZipCode</span>
            <input type="number" placeholder="ZipCode" />
          </div>
        </div>
        <div className={styles.questions}>
          <span>
            If you have an online account with us, we are required by law to
            provide your personal information via the account. If you do not
            have an online account, you may select between mail and email
            delivery.
          </span>
          <div className={styles.checkboxes}>
            <div className={styles.checkboxe}>
              <span>1. Do you have an online account?</span>
              <div>
                <input
                  type="checkbox"
                  name="options"
                  value="option1account"
                  checked={selectedOptionaccount === "option1account"}
                  onChange={handleOptionChangeaccount}
                />
                <span style={{ marginLeft: "5px" }}>
                  I have an online account.
                </span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="options"
                  value="option2account"
                  checked={selectedOptionaccount === "option2account"}
                  onChange={handleOptionChangeaccount}
                />
                <span style={{ marginLeft: "5px" }}>
                  I do not have an online account.
                </span>
              </div>
            </div>
            <div className={styles.checkboxe}>
              <span>Please send via: </span>
              <div>
                <input
                  type="checkbox"
                  name="options"
                  value="option1account"
                  checked={selectedOptionsend === "option1account"}
                  onChange={handleOptionChangesend}
                />
                <span style={{ marginLeft: "5px" }}>Mail</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="options"
                  value="option2account"
                  checked={selectedOptionsend === "option2account"}
                  onChange={handleOptionChangesend}
                />
                <span style={{ marginLeft: "5px" }}>Email</span>
              </div>
            </div>
          </div>
          <div className={styles.checkboxe}>
            <span>
              2. Would you like us to send you the personal information we have
              collected on you?
            </span>
            <div>
              <input
                type="checkbox"
                name="options"
                value="option1info"
                checked={selectedOptioninfo === "option1info"}
                onChange={handleOptionChangeinfo}
              />
              <span style={{ marginLeft: "5px" }}>Yes</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="options"
                value="option2info"
                checked={selectedOptioninfo === "option2info"}
                onChange={handleOptionChangeinfo}
              />
              <span style={{ marginLeft: "5px" }}>No</span>
            </div>
          </div>
          <div className={styles.checkboxe}>
            <span>
              3. If we have collected your personal information, would you like
              us to exclude sensitive personal information (e.g., social
              security number, date of birth, and financial account information)
              from what we send you? If you choose “yes,” we will still provide
              you with the categories of sensitive information we have on file,
              but not the content of the information. For example, we may say
              that we have your social security number on file, but we will not
              disclosure the actual social security number. If you choose “no,”
              we may require more thorough identity verification to protect the
              security of the information and we may still apply limited
              redactions.
            </span>
            <div>
              <input
                type="checkbox"
                name="options"
                value="option1sensitive"
                checked={selectedOptionsensitive === "option1sensitive"}
                onChange={handleOptionChangesensitive}
              />
              <span style={{ marginLeft: "5px" }}>Yes</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="options"
                value="option2sensitive"
                checked={selectedOptionsensitive === "option2sensitive"}
                onChange={handleOptionChangesensitive}
              />
              <span style={{ marginLeft: "5px" }}>No</span>
            </div>
          </div>
          <div className={styles.extraDetails}>
            <span>Add optional detail.</span>
            <textarea></textarea>
          </div>
          <div className={styles.checkboxe}>
            <span>
              4.Would you like us to delete your personal information (subject
              to applicable exemptions)?
            </span>
            <div>
              <input
                type="checkbox"
                name="options"
                value="option1del"
                checked={selectedOptionsdel === "option1del"}
                onChange={handleOptionChangedel}
              />
              <span style={{ marginLeft: "5px" }}>Yes</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="options"
                value="option2del"
                checked={selectedOptionsdel === "option2del"}
                onChange={handleOptionChangedel}
              />
              <span style={{ marginLeft: "5px" }}>No</span>
            </div>
          </div>
          <div className={styles.checkboxe}>
            <span>
              5. What are your preferred contact methods for questions about
              your request? Select all that apply.
            </span>
            <div>
              <input
                type="checkbox"
                name="options"
                value="option1contact"
                checked={selectedOptionscontact === "option1contact"}
                onChange={handleOptionChangecontact}
              />
              <span style={{ marginLeft: "5px" }}>Mail</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="options"
                value="option2contact"
                checked={selectedOptionscontact === "option2contact"}
                onChange={handleOptionChangecontact}
              />
              <span style={{ marginLeft: "5px" }}>Phone Call</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="options"
                value="option3contact"
                checked={selectedOptionscontact === "option3contact"}
                onChange={handleOptionChangecontact}
              />
              <span style={{ marginLeft: "5px" }}>Text</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="options"
                value="option4contact"
                checked={selectedOptionscontact === "option4contact"}
                onChange={handleOptionChangecontact}
              />
              <span style={{ marginLeft: "5px" }}>Email</span>
            </div>
          </div>
        </div>
        <span>
          By submitting this form, I certify that I am the above-named
          individual or a person authorized by the above-named individual to
          submit this form on their behalf. I understand that Lendah, LLC may
          contact me to obtain identity verification and validate this request.
        </span>
      </div>
      <div className={styles.submitButton}>
        <button>Submit</button>
      </div>
      <Footer2/>
    </div>
  );
};

export default CaliforniaRequestForm;
