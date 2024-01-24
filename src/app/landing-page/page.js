"use client";
import React, { useState } from "react";
import styles from "./landingpage.module.css";
import { IoCheckmark } from "react-icons/io5";
import CurrencyInput from "react-currency-input-field";
import { IoMdThumbsUp } from "react-icons/io";
import { useContext } from "react";
import { InputContext } from "@/app/context/inputContext";
import { useRouter } from "next/navigation";
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
const LandingPage = () => {
  const { heroSectionInput } = useContext(InputContext);
  const [inputvalue, setinputvalue] = useState(600);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const handlechange = (value) => {
    heroSectionInput(value);
    setinputvalue(value);
  };
  const handleclick = () => {
    if (inputvalue < 600) {
      return;
    } else if (inputvalue > 200000) {
    } else {
      router.push("/checkrates");
    }
  };

  return (
    <section className={styles.herowrapper} id="hero">
      <div className={styles.navbar}>
        <img src="../logo.svg" alt="logo" width={270}/>
        <button className={styles.loginbutton}>
            <FaPhone />
            1-844-208-1100
          </button>
      </div>
      <div className={styles.flexCenter + " " + styles.herocontainer}>
        {/* left side */}
        <div className={styles.flexColStart + " " + styles.heroleft}>
          <div className={styles.herotitle}>
            <h2>
              Debt Consolidation
              <br /> Made Easy.
            </h2>
            <div className={styles.herodes}>
              <IoCheckmark style={{ fontSize: "20px", color: "#05c8e8" }} />
              <span>
                Rates from 5.20% - 35.99% APR<sup>1</sup>
              </span>
            </div>
            <div className={styles.herodes2}>
              <IoCheckmark style={{ fontSize: "20px", color: "#05c8e8" }} />
              <span>Loan amounts from $600 to $200,000</span>
            </div>
          </div>
          <div
            className={
              inputvalue < 600 || inputvalue > 200000
                ? styles.findmyrateerror
                : styles.findmyrate
            }
          >
            <CurrencyInput
              placeholder="Enter amount ($600 to $200,000)"
              prefix="$"
              maxLength={6}
              onValueChange={(value) => handlechange(value)}
            />
            <button className={styles.Link} onClick={handleclick}>
              Find My Rate{" "}
            </button>
          </div>

          {inputvalue < 600 && (
            <div className={styles.errormsg}>
              <span>Enter amount ($600 to $200,000)</span>
            </div>
          )}
          {inputvalue > 200000 && (
            <div className={styles.errormsg}>
              <span>Enter amount ($600 to $200,000)</span>
            </div>
          )}
          <div className={styles.thumbsup}>
            <IoMdThumbsUp />
            <span>Checking rates won’t affect your credit score</span>
          </div>
          <div className={styles.ovals}>
            <img src="./Oval1.png" alt="" />
            <img src="./Oval3.png" alt="" />
            <img src="./Oval2.png" alt="" />
            <span>50,000+ clients around the world</span>
          </div>
        </div>
        {/* right side */}
        <div className={styles.flexCenter + " " + styles.heroright}>
          <div
            className={styles.imagecontainer}
            initial={{ y: "7rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <img src="./herocircle.png" alt="" className={styles.herocircle} />
            <img src="./herogirl.png" alt="" className={styles.herogirl} />
          </div>
        </div>
      </div>
      <div className={styles.inputcontainerposition}>
        <div className={styles.inputcontainer}>
          <div className={styles.inputfields}>
            <span>Let's Get Started</span>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className={
                firstName === ""
                  ? styles.startnowbuttonerror
                  : lastName === ""
                  ? styles.startnowbuttonerror
                  : phone === ""
                  ? styles.startnowbuttonerror
                  : email === ""
                  ? styles.startnowbuttonerror
                  : styles.startnowbutton
              }
              disabled={
                firstName === ""
                  ? true
                  : lastName === ""
                  ? true
                  : phone === ""
                  ? true
                  : email === ""
                  ? true
                  : false
              }
            >
              Start now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
