import React from "react";
import styles from "./why.module.css";
const WhySection = () => {
  return (
    <div className={styles.wrapper} id="about">
      <img src="./whycircle.png" width={300} />
      <div className={styles.headings}>
        <h3>EASY, SIMPLE, FREE</h3>
        <h1>Why Choose Clear Credit AI <br/>for Your Debt Consolidation Needs?</h1>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div>
            <img src="./card1.png" alt="" />
          </div>
          <h3>Find a Loan from Reputable Lenders in Minutes</h3>
          <span>
            Whether you're seeking to consolidate debt or address an unexpected
            financial need, Clear Credit AI simplifies the process of finding a
            personal loan tailored to your unique circumstances. We connect you
            with reputable lenders quickly and effortlessly.
          </span>
          <button>Learn More</button>
        </div>
        <div className={styles.card}>
          <div>
            <img src="./card3.png" alt="" />
          </div>
          <h3>Your Data Is Safe & Secure</h3>
          <span>
            Your privacy matters to us. When you check your prequalified rates
            from multiple lenders on Clear Credit AI, rest assured that it's
            100% free, and your data is never shared or sold to lenders. Your
            financial information remains confidential and secure.
          </span>
          <button>Learn More</button>
        </div>
        <div className={styles.card}>
          <div>
            <img src="./card2.png" alt="" />
          </div>
          <h3>We Are Unbiased and Transparent</h3>
          <span>
            At Clear Credit AI, we don't play favorites or accept payments to
            promote specific loan products. Our commitment to transparency means
            you'll always have a clear understanding of the costs involved.
            Before selecting a lender, you'll know precisely how your loan
            breaks down, with no hidden fees or surprises.
          </span>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
