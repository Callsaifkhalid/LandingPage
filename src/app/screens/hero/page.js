import React from "react";
import styles from "./hero.module.css";
const Hero = () => {
  return (
    <section className={styles.herowrapper} id="hero">
      <div className={styles.flexCenter + " " + styles.herocontainer}>
        {/* left side */}
        <div className={styles.flexColStart + " " + styles.heroleft}>
          <div className={styles.herotitle}>
            <h2>
              Debt Consolidation
              <br /> Made Easy.
            </h2>
            <div className={styles.flexColStart + " " + styles.herodes}>
              <span>
                Compare Rates From <br />
                Multiple Lenders in Minutes
              </span>
            </div>
          </div>
          <div className={styles.checknow}>
            <button>Check Now</button>
            <span>Your Personalized Rates</span>
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
          <div className={styles.imagecontainer}>
            <img
              src="./herocircle.png"
              alt=""
              style={{
                height: "80%",
                width: "80%",
                marginLeft: "4rem",
                marginTop: "7rem",
              }}
            />
            <img src="./herogirl.png" alt="" style={{
                height: "100%",
                width: "100%",
                marginTop: "-31.7rem",
              }}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
