import React from "react";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.wrapper} id="contact">
      <div className={styles.headings}>
        <h3>Questions?</h3>
        <h1>
          Our Client Success team
          <br /> is always here to help
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
        <img
          src="./contactcircle1.png"
          height={200}
          style={{ marginTop: "-2.8rem", marginLeft: "-8.3rem" }}
        />
        <div className={styles.findmyrate}>
          <span style={{ color: "white", fontSize: "3rem", fontWeight: "900"}}>
            Find a personal
            <br /> <span>loan today.</span>
          </span>
        </div>
        <div className={styles.checkingrates}>
          <button>Find my Rate</button>
          <span style={{ color: "#1A4048", fontSize: "13px" }}>
            Checking rates won’t affect your credit score
          </span>
        </div>
        <img src="./contactcircle2.png" height={200}
          style={{ marginTop: "-2.8rem", marginRight: "-8.3rem" }}/>
      </div>
    </div>
  );
};

export default Contact;
