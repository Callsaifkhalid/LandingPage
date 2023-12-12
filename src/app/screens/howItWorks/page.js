import React from "react";
import styles from "./how.module.css";
const HowItWorks = () => {
  return (
    <div className={styles.wrapper} >
      <div className={styles.howcircle}>
        <img
          src="./howcircle.png"
          width={200}
          style={{ marginTop: "-10rem" }}
        />
      </div>
      <div className={styles.headings} id="about">
        <h3>Our process</h3>
        <h1>How Clear Credit AI Works</h1>
      </div>
      <div className={styles.flexCenter + " " + styles.howcontainer}>
        {/* left side */}
        <div className={styles.flexCenter + " " + styles.howright}>
          <div className={styles.imagecontainer}>
            <img src="./howimage.png" alt="" />
            <div className={styles.imagecontainer2}>
              {" "}
              <img src="./howtag.png" alt="" />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className={styles.flexColStart + " " + styles.paragraphs}>
          <img src="./howline.png" alt="" className={styles.howline} />
          <div>
            <img src="./how1.png" alt="" />
            <div className={styles.paragraph}>
              <h3>Your Information</h3>
              <span>
                We'll ask you a few questions to better understand your
                financial situation and preferences. This helps us narrow down
                your lender and rate eligibility. What you receive are real
                rates, not mere estimates.
              </span>
            </div>
          </div>
          <div>
            <img src="./how2.png" alt="" />
            <div className={styles.paragraph}>
              <h3>Compare Rates</h3>
              <span>
                We'll ask you a few questions to better understand your
                financial situation and preferences. This helps us narrow down
                your lender and rate eligibility. What you receive are real
                rates, not mere estimates.
              </span>
            </div>
          </div>
          <div>
            <img src="./how3.png" alt="" />
            <div className={styles.paragraph}>
              <h3>Close Your Loan and Fund Your Goal</h3>
              <span>
                We'll ask you a few questions to better understand your
                financial situation and preferences. This helps us narrow down
                your lender and rate eligibility. What you receive are real
                rates, not mere estimates.
              </span>
            </div>
          </div>
          <div>
            <img src="./how4.png" alt="" />
            <div className={styles.paragraph}>
              <h3>Sign Your Documents</h3>
              <span>
                We'll ask you a few questions to better understand your
                financial situation and preferences. This helps us narrow down
                your lender and rate eligibility. What you receive are real
                rates, not mere estimates.
              </span>
            </div>
          </div>
          <div>
            <img src="./how5.png" alt="" width={70} />
            <div className={styles.paragraph}>
              <h3>Funds on Their Way</h3>
              <span>
                We'll ask you a few questions to better understand your
                financial situation and preferences. This helps us narrow down
                your lender and rate eligibility. What you receive are real
                rates, not mere estimates.
              </span>
            </div>
          </div>
        </div>
      </div>
      <img src="./whycircle.png" />
    </div>
  );
};

export default HowItWorks;
