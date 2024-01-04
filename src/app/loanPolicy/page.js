import PolicyNavbar from "@/components/policyNavbar/policynavbar";
import React from "react";
import styles from "./loanPolicy.module.css";
import Footer2 from "@/components/footer2/footer2";
const LoanPolicy = () => {
  return (
    <div>
      <PolicyNavbar />
      <div className={styles.mainHeading}>
        <h1>Loan Disclosure</h1>
      </div>
      <div className={styles.text}>
        <span>
          Clear Credit ai, LLC is a Utah licensed lending under the Utah
          Department of Financial Institutions and also provides loan referral
          services. This offer is an estimate and loan amounts range between{" "}
          <span style={{ fontWeight: "700" }}>$5,000 and $100,000</span>. The
          actual amount will be based on your current credit report. Loans may
          be brokered. APR will range from{" "}
          <span style={{ fontWeight: "700" }}>5.95% – 35.99%</span> depending on
          state. Not all applicants will qualify for{" "}
          <span style={{ fontWeight: "700" }}>*5.95% APR</span>. To qualify you
          must show proof of $18,000 in income, retirement, or other savings.
          Will it hurt my credit score to check my rate? No. Checking your rate
          does not impact your credit score and will only take a few minutes.
          Unsecured Personal LoanPersonal Loan amounts vary to a maximum of
          $100,000, but not all lenders provide up to $100,000. Clear Credit AI,
          LLC does not guarantee that you will ultimately be approved for any
          type of loan and the APR/Interest rate will vary depending on the
          lender’s terms. This offer is subject to the expiration date listed on
          the front page. By responding to this offer, you are authorizing us to
          make inquiries and obtain information about you as we deem appropriate
          for the purpose of evaluating you for this extension of credit,
          including but not limited to: credit reports, income verification, and
          contacting your employer.
          <br /> <br />
          <span style={{ fontWeight: "700" }}>Terms and Conditions:</span> To
          receive a loan, you must be a US citizen or permanent resident, and
          currently reside in the US and at least 18 years old. Clear Credit is
          not responsible for errors made by any credit reporting agency. Not
          available in every state and loans may be brokered.
          <br />
          <br />{" "}
          <span style={{ fontWeight: "700" }}>
            PRESCREEN & OPT-OUT NOTICE:
          </span>{" "}
          This “prescreened” offer of credit is based on information in your
          credit report indicating that you meet certain criteria. This offer is
          not guaranteed if after responding it is determined that you no longer
          meet this criteria. If you do not want to receive prescreened offers
          of credit from this or any other companies, call the consumer
          reporting agencies toll-free at 1-888-567-8688 or visit the website at{" "}
          <a href="http://www.optoutprescreen.com">www.optoutprescreen.com</a>;
          or write TransUnion Opt-Out Request, P.O. Box 505 Woodlyn, PA
          19094-0505, Equifax Operations, P.O. Box 740123, Atlanta, GA 30374,
          Experian Information Systems, Inc., P.O. Box 919, Allen, TX 75013.
        </span>
      </div>
      <Footer2 />
    </div>
  );
};

export default LoanPolicy;
