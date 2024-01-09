"use client";
import PolicyNavbar from "@/components/policyNavbar/policynavbar";
import styles from "./respondtomail.module.css";
import { FaCheck } from "react-icons/fa";
import Footer2 from "@/components/footer2/footer2";
import { useRouter } from "next/navigation";

export default function RespondtoMail() {
  const router = useRouter();
  const handleContinue = () => {
    router.push("/offer-form");
  };
  return (
    <>
      <main className={styles.main}>
        <PolicyNavbar />
        <div className={styles.first}>
          <div className={styles.firstChildOne}>
            <h2 className={styles.firstChildOneHead}>
              Discover the Perfect Loan Tailored Just for You!
            </h2>
            <div className={styles.firstChildOnePoints}>
              <FaCheck size={20} fill="#05c8e8" />

              <p className={styles.para}>Unlock Financing Up To $100,000</p>
            </div>
            <div className={styles.firstChildOnePoints}>
              <FaCheck size={20} fill="#05c8e8" />

              <p className={styles.para}>
                Experience Swift and Effortless Approvals
              </p>
            </div>
            <div className={styles.firstChildOnePoints}>
              <FaCheck size={20} fill="#05c8e8" />

              <p className={styles.para}>
                Explore Offers Without Any Impact on Your Credit Score
              </p>
            </div>
          </div>
          <div className={styles.firstChildTwo}>
            <h2 className={styles.redeemHead}>Redeem your mail offer</h2>
            <div className={styles.btnMain}>
              <input
                className={styles.btn1}
                type="text"
                id="username"
                name="username"
                placeholder="Enter Mailer Code"
              ></input>

              <button className={styles.btn2} onClick={handleContinue}>
                Continue
              </button>

              <button className={styles.btn3}>I don't have a code</button>
            </div>
            <p className={styles.btnPara1}>For immediate assistance, call:</p>

            <button className={styles.btnNum}>(877) 851-1246</button>
          </div>
        </div>
      </main>
      <Footer2 />
    </>
  );
}
