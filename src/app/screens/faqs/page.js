"use client";
import React, { useState } from "react";
import styles from "./faqs.module.css";

const FAQS = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const [click6, setClick6] = useState(false);

  return (
    <div className={styles.wrapper} id="faqs">
      <div className={styles.howcircle}>
        <img src="./howcircle.png" />
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
              <h2>What is a personal loan?</h2>
              {click ? (
                <img src="../questionarrow2.png" width={50} />
              ) : (
                <img src="../questionarrow.png" width={50} />
              )}
            </div>
            {click && (
              <div className={styles.questioncontent}>
                A personal loan is usually an unsecured loan that you can get
                from a bank, credit union, or online lender. You can use a
                personal loan for virtually anything, including paying for a
                vacation, wedding, home improvements, or consolidating debt.
                Interest rates are typically fixed, which means your payments
                won’t change for the life of the loan. Repayment terms range
                from a few months to over 10 years. Loan amounts are available
                from under $1,000 to over $100,000, depending on your credit,
                the loan’s purpose, and the lender.
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
              <h2> How can I get a personal loan?</h2>
              {click2 ? (
                <img src="../questionarrow2.png" width={50} />
              ) : (
                <img src="../questionarrow.png" width={50} />
              )}
            </div>
            {click2 && (
              <div className={styles.questioncontent}>
                To get a personal loan, you’ll generally need a reliable source
                of income, a credit score and credit history, and a
                debt-to-income ratio (DTI) under 36%. Different lenders have
                different requirements, however. For example, some lenders
                consider applicants with fair and bad credit, while others only
                consider applicants with good credit.
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
              <h2>What can I use a personal loan for?</h2>
              {click3 ? (
                <img src="../questionarrow2.png" width={50} />
              ) : (
                <img src="../questionarrow.png" width={50} />
              )}
            </div>
            {click3 && (
              <div className={styles.questioncontent}>
                Personal loan uses cover a wide range of purposes, such as
                consolidating debt, paying for home renovations, going on
                vacation, or moving. Not all lenders approve loans for all
                purposes — you have to declare what you want to use the loan
                funds for when you apply. Personal loans often can’t be used to
                pay for tuition, a down payment on a home, or for business
                expenses.
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
              <h2>Can I refinance a personal loan?</h2>
              {click4 ? (
                <img src="../questionarrow2.png" width={50} />
              ) : (
                <img src="../questionarrow.png" width={50} />
              )}
            </div>
            {click4 && (
              <div className={styles.questioncontent}>
                Yes, you can refinance a personal loan. If your credit score has
                improved, for example, you may be able to qualify for a personal
                loan at a lower rate than the one you currently have. Check your
                credit regularly, and if you see your score increase, prequalify
                with multiple lenders to find out if you should refinance. If
                interest rates drop, you might also be able to refinance at a
                lower rate.
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
              <h2>Will checking my rates affect my credit score?</h2>
              {click5 ? (
                <img src="../questionarrow2.png" width={50} />
              ) : (
                <img src="../questionarrow.png" width={50} />
              )}
            </div>
            {click5 && (
              <div className={styles.questioncontent}>
                Using Clear Credit to check your rates doesn’t affect your
                credit score. Here’s how it works: Clear Credit prequalification
                process uses a soft credit inquiry that allows you to see
                personalized prequalified rates. There is no obligation to
                proceed with any of the loan options presented on your
                dashboard, but if you see a loan option with one of our partner
                lenders that you'd like to proceed with, you'll be asked to
                authorize a hard credit check when you apply for an unsecured
                personal loan. A hard inquiry can impact your credit score by
                two to nine points, but typically by no more than five.
              </div>
            )}
          </div>
          <div className={click6 && styles.paragraph}>
            <div
              className={click6 ? styles.question : styles.questionn}
              onClick={() => setClick6((prev) => !prev)}
              style={{
                borderBottom: click6 === true ? "" : "solid 2px #05c8e8",
              }}
            >
              <h2>What interest rate can I expect?</h2>
              {click6 ? (
                <img src="../questionarrow2.png" width={50} />
              ) : (
                <img src="../questionarrow.png" width={50} />
              )}
            </div>
            {click6 && (
              <div className={styles.questioncontent}>
                Generally, the shorter the loan term, the lower the interest
                rate offered by most loan companies. Some lenders even offer an
                autopay discount if you authorize your monthly loan payments to
                be directly withdrawn from your checking account or savings
                account. Qualifying for lower rates offered by a lender is
                dependent on your online loan application, credit history and
                credit score, whether you get a short-term loan or a long-term
                loan, loan purpose, and other factors. The better your credit
                score, the better the interest rate you can qualify for.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;
