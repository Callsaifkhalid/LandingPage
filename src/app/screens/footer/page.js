"use client";
import React from "react";
import styles from "./footer.module.css";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
const Footer = () => {
  const phoneNumber = "+1-844-208-1100";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
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
          <a
            href="https://www.linkedin.com/company/clear-credit-ai/"
            target="_blank"
          >
            <img src="../linkedinfooter.png" />
          </a>
          <a href="https://www.instagram.com/clearcreditai/" target="_blank">
            <img src="../Instagram.svg" />
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentt1}>
          <div>
            <a href="mailto:Service@clearcredit.ai">Service@clearcredit.ai</a>
          </div>
          <div style={{ cursor: "pointer" }} onClick={handleCall}>
            +1-844-208-1100
          </div>
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
          <span>
            <ScrollLink
              activeClass="active"
              to="faqs"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              FAQs
            </ScrollLink>
          </span>

          <Link href={"/blogs"} className={styles.Link}>
            Blogs
          </Link>
        </div>
        <div className={styles.content1}>
          <Link href={"/terms-of-use"} className={styles.Link}>
            Terms of Use
          </Link>
          <Link href={"/privacyPolicy"} className={styles.Link}>
            Privacy Policy
          </Link>
          <Link href={"/policy-statement-california"} className={styles.Link}>
            Privacy Statement-CA
          </Link>
          <Link href={"/loanPolicy"} className={styles.Link}>
            Loan Policy
          </Link>
        </div>
      </div>
      <div className={styles.footertext}>
        Clear Credit is a Utah licensed lender under the Utah Department of
        Financial Institutions and also provides loan referral services. We will
        attempt to qualify you for personal loan offers with rates of less than
        35.99% with terms from 6 months to 84 months . All loan or credit
        approval, or rates and terms you may be offered, are solely at the
        discretion of any lender with which you may apply, and you should read
        all disclosures carefully. Rates and terms are based on lender
        discretion and may change at any time. Your exact rate depends on your
        loan amount, loan term, state of residence, and credit-worthiness, and
        will be agreed upon between you and the lender. Repayment example:
        $5,000 personal loan at 9.99% APR with a 36-month term would be
        equivalent to $161.31 per month for a total paid of $5,807.50 over the
        36-month life of the loan. For additional loan options, please call
        1tel:194999051621100
      </div>
      <div className={styles.poweredby}>
        <span>Powered by:</span>
        <a href="https://www.dsmeglobal.com/" target="_blank">
          {" "}
          DSME GLOBAL LINKS
        </a>
      </div>
    </div>
  );
};

export default Footer;
