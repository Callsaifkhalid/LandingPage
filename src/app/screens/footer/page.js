import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.images}>
        <div className={styles.logo}>
          <img src="../logo2.png" alt="" width={250} />
        </div>
        <div className={styles.socials}>
          <img src="../Facebook.svg" />
          <img src="../Twitter.svg" />
          <img src="../Instagram.svg" />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentt1}>
          <div>hello@onirapp.com</div>
          <div>+1-800-123 4567</div>
        </div>
        <div className={styles.content1}>
          <span>About</span>
          <span>Careers</span>
          <span>Blog</span>
        </div>
        <div className={styles.content1}>
          <span>FAQ's</span>
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
