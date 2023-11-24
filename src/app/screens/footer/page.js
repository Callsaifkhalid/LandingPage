import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.halfcurvecontainer}>
        <div className={styles.halfcurvecontent}>{/* Your content goes here */}</div>
      </div>
      <div className={styles.images}>
        <div>
          <img src="./logo2.png" alt="" width={200} />
        </div>
        <div>
          <img src="./Facebook.png" />
          <img src="./Twitter.png" />
          <img src="./Instagram.png" />
        </div>
      </div>
      <div className={styles.Content}>
        <div className={styles.content}>
          <div className={styles.content1}>
            <span>hello@onirapp.com</span>
            <span>+1-800-123 4567</span>
          </div>
          <div className={styles.content1}>
            <span>About</span>
            <span>Services</span>
            <span>Careers</span>
            <span>Blog</span>
            <span>Pricing</span>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.content1}>
            <span>Help</span>
            <span>FAQ's</span>
            <span>Press</span>
            <span>Teams and Conditions</span>
            <span>Partners</span>
          </div>
          <div className={styles.content1}>
            <span style={{ color: "white" }}>Let's try out</span>
            <button>App Store</button>
            <button>Play Store</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
