"use client";
import React from "react";
import styles from "./footer2.module.css";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
const Footer2 = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.images}>
        <div className={styles.logo}>
          <img src="../logo2.png" alt="" width={250} />
        </div>
        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/profile.php?id=61555093109862"
            target="_blank"
          >
            <img src="../Facebook.svg" />
          </a>
          <a>
            <img src="../Twitter.svg" />
          </a>
          <a href="https://www.instagram.com/clearcreditai/" target="_blank">
            <img src="../Instagram.svg" />
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentt1}>
          <div>hello@onirapp.com</div>
          <div>+1-800-123 4567</div>
        </div>
        <div className={styles.content1}>
          <span>
            <Link href={"/#about"} className={styles.Link}>
              About
            </Link>
          </span>
          <span>Careers</span>

          <Link href={"/blogs"} className={styles.Link}>
            Blogs
          </Link>
        </div>
        <div className={styles.content1}>
          <span>
            <Link href={"/#faqs"} className={styles.Link}>
              FAQs
            </Link>
          </span>
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
