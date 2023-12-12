"use client";
import React from "react";
import styles from "./footer.module.css";
import { Link as ScrollLink } from "react-scroll"
import Link from "next/link";
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
          <span>
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              About
            </ScrollLink>
          </span>
          <span>Careers</span>
          
            <Link href={"/screens/blogs"} className={styles.Link}>
              Blogs
            </Link>
          
        </div>
        <div className={styles.content1}>
          <span>
            <ScrollLink
              activeClass="active"
              to="faqs"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              FAQ's
            </ScrollLink>
          </span>
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
