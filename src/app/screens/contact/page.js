"use client";
import React from "react";
import styles from "./contact.module.css";
import Link from "next/link";
import { PiLaptopFill } from "react-icons/pi";
import { FaPhone } from "react-icons/fa";
const Contact = () => {
  const handleScheduleClick = (event) => {
    event.preventDefault();
    Calendly.initPopupWidget({
      url: "https://calendly.com/cleardebt?text_color=5bc4e4",
    });
  };
  const phoneNumber = "+1-844-208-1100";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div className={styles.wrapper} id="contact">
      <div className={styles.headings}>
        <h3>Questions?</h3>
        <h1>
          Our Client Success team
          <br /> is always here to help
        </h1>
      </div>
      <div className={styles.contactcenter}>
        <div className={styles.contactsection}>
          <div className={styles.meetingcontainer}>
            <div className={styles.meeting}>
              <PiLaptopFill
                style={{
                  color: "#05c8e8",
                  fontSize: "25px",
                  marginLeft: "8px",
                }}
              />
              <span>
                <link
                  href="https://assets.calendly.com/assets/external/widget.css"
                  rel="stylesheet"
                />
                <script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  type="text/javascript"
                  async
                ></script>
                <a href="#" onClick={handleScheduleClick}>
                  Schedule a Meeting
                </a>
              </span>
            </div>
          </div>
          <div className={styles.mailandnumber}>
            <div className={styles.mail}>
              <img src="./housepic.svg" alt="" width={20} />
              <span>
                <a href="mailto:Service@clearcredit.ai">
                  Service@clearcredit.ai
                </a>
              </span>
            </div>
            <div className={styles.number}>
              <FaPhone
                style={{
                  color: "#05c8e8",
                  fontSize: "20px",
                  marginLeft: "8px",
                }}
              />
              <div style={{cursor:'pointer'}} onClick={handleCall}>1-844-208-1100</div>
            </div>
          </div>
          <div className={styles.contactcontent}>
            <div className={styles.contactcontent1}>
              <span>Monday - Friday 9am - 10pmET</span>
            </div>
            <div className={styles.contactcontent2}>
              <span>
                Want to talk to real person? We’re available by phone. live chat
                and email.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.findcenter}>
        <div className={styles.findmyratesection}>
          <img
            src="./contactcircle1.png"
            height={200}
            style={{ marginTop: "-2.8rem", marginLeft: "-8.8rem" }}
          />
          <div className={styles.findmyrate}>
            <span>
              Find a personal
              <br /> <span>loan today.</span>
            </span>
          </div>
          <div className={styles.checkingrates}>
            <button>
              <Link href={"/checkrates"} className={styles.Link}>
                Find My Rate{" "}
              </Link>
            </button>
            <span>Checking rates won’t affect your credit score</span>
          </div>
          <img
            src="./contactcircle2.png"
            height={200}
            style={{ marginTop: "-2.8rem", marginRight: "-8.8rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
