import React from "react";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.wrapper} id="contact">
      <div className={styles.headings}>
        <h3>Questions?</h3>
        <h1>
          Our Client Success team is
          <br /> always here to help
        </h1>
      </div>
      <div className={styles.contactsection}>
        <div className={styles.mailandnumber}>
          <div className={styles.mail}>
            <img src="./housepic.png" alt="" width={20} />
            <span
              style={{ color: "#333", fontSize: "20px", fontWeight: "bolder" }}
            >
              support@clearcredit.com
            </span>
          </div>
          <div className={styles.number}>
            <img src="./housepic.png" alt="" width={20} />
            <span
              style={{ color: "#333", fontSize: "20px", fontWeight: "bolder" }}
            >
              111-222-333-444
            </span>
          </div>
        </div>
        <div className={styles.contactcontent}>
          <div>
            <span
              style={{ color: "#333", fontSize: "17px", fontWeight: "bold" }}
            >
              Monday - Friday 9am - 10pmET
            </span>
          </div>
          <div>
            <span style={{ color: "#8B8B8B", fontSize: "13px" }}>
              Want to talk to real person? We’re available by phone. live chat
              and email.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.findmyratesection}>
        <div>
          <span
            style={{ color: "white", fontSize: "3rem", fontWeight: "bolder" }}
          >
            Find a personal
            <br /> loan today.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginTop: "2rem",
            alignItems: "flex-end",
          }}
        >
          <button>Find my Rate</button>
          <span style={{ color: "#1A4048", fontSize: "13px" }}>
            Checking rates won’t affect your credit score
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
