"use client";
import React, { useState } from "react";
import styles from "./faqs.module.css";

const FAQS = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.howcircle}>
        <img
          src="./howcircle.png"
          width={200}
          style={{ marginTop: "-10rem" }}
        />
      </div>
      <div className={styles.headings}>
        <h3>Asked Questions</h3>
        <h1>
          There’s no such thing as too <br />
          many questions
        </h1>
      </div>
      <div className={styles.questions}>
        <div className={styles.questioncontainer}>
          <div className={click && styles.paragraph}>
            <div
              className={click ? styles.question : styles.questionn}
              onClick={() => setClick((prev) => !prev)}
              style={{
                borderBottom: click === true ? "" : "solid 2px #05c8e8",
              }}
            >
              <h2>How many types of bank are there?</h2>
              {click ? (
                <img src="../questionarrow2.png" width={50} />
              ) : (
                <img src="../questionarrow.png" width={50} />
              )}
            </div>
            {click && (
              <div className={styles.questioncontent}>
                A bank is a financial institution licensed to receive deposits
                and make loans. Banks may also provide financial services such
                as wealth management, currency exchange, and safe deposit boxes.
                There are several different kinds of banks including retail
                banks, commercial or corporate banks, and investment banks.
              </div>
            )}
          </div>
          <div className={click2 && styles.paragraph}>
            <div
              className={click2 ? styles.question : styles.questionn}
              onClick={() => setClick2((prev) => !prev)}
              style={{
                borderBottom: click2 === true ? "" : "solid 2px #05c8e8",
              }}
            >
              <h2>How many types of bank are there?</h2>
              {click2 ? (
                <img src="../questionarrow2.png" width={50} />
              ) : (
                <img src="../questionarrow.png" width={50} />
              )}
            </div>
            {click2 && (
              <div className={styles.questioncontent}>
                A bank is a financial institution licensed to receive deposits
                and make loans. Banks may also provide financial services such
                as wealth management, currency exchange, and safe deposit boxes.
                There are several different kinds of banks including retail
                banks, commercial or corporate banks, and investment banks.
              </div>
            )}
          </div>
          <div className={click3 && styles.paragraph}>
            <div
              className={click3 ? styles.question : styles.questionn}
              onClick={() => setClick3((prev) => !prev)}
              style={{
                borderBottom: click3 === true ? "" : "solid 2px #05c8e8",
              }}
            >
              <h2>How many types of bank are there?</h2>
              {click3 ? (
                <img src="../questionarrow2.png" width={50} />
              ) : (
                <img src="../questionarrow.png" width={50} />
              )}
            </div>
            {click3 && (
              <div className={styles.questioncontent}>
                A bank is a financial institution licensed to receive deposits
                and make loans. Banks may also provide financial services such
                as wealth management, currency exchange, and safe deposit boxes.
                There are several different kinds of banks including retail
                banks, commercial or corporate banks, and investment banks.
              </div>
            )}
          </div>
          <div className={click4 && styles.paragraph}>
            <div
              className={click4 ? styles.question : styles.questionn}
              onClick={() => setClick4((prev) => !prev)}
              style={{
                borderBottom: click4 === true ? "" : "solid 2px #05c8e8",
              }}
            >
              <h2>How many types of bank are there?</h2>
              {click4 ? (
                <img src="../questionarrow2.png" width={50} />
              ) : (
                <img src="../questionarrow.png" width={50} />
              )}
            </div>
            {click4 && (
              <div className={styles.questioncontent}>
                A bank is a financial institution licensed to receive deposits
                and make loans. Banks may also provide financial services such
                as wealth management, currency exchange, and safe deposit boxes.
                There are several different kinds of banks including retail
                banks, commercial or corporate banks, and investment banks.
              </div>
            )}
          </div>
          <div className={click5 && styles.paragraph}>
            <div
              className={click5 ? styles.question : styles.questionn}
              onClick={() => setClick5((prev) => !prev)}
              style={{
                borderBottom: click5 === true ? "" : "solid 2px #05c8e8",
              }}
            >
              <h2>How many types of bank are there?</h2>
              {click5 ? (
                <img src="../questionarrow2.png" width={50} />
              ) : (
                <img src="../questionarrow.png" width={50} />
              )}
            </div>
            {click5 && (
              <div className={styles.questioncontent}>
                A bank is a financial institution licensed to receive deposits
                and make loans. Banks may also provide financial services such
                as wealth management, currency exchange, and safe deposit boxes.
                There are several different kinds of banks including retail
                banks, commercial or corporate banks, and investment banks.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
