import PolicyNavbar from "@/components/policyNavbar/policynavbar";
import styles from "./respondtomail.module.css";
import { FaCheck } from "react-icons/fa";
import Footer2 from "@/components/footer2/footer2";

export default function RespondtoMail() {
  return (
    <main className={styles.main}>
      <PolicyNavbar />
      <div className={styles.first}>
        <div className={styles.firstChildOne}>
          <h2 className={styles.firstChildOneHead}>
            Find the <b>right loan for you!</b>
          </h2>
          <div className={styles.firstChildOnePoints}>
            <div>
              <FaCheck size={20} fill="#05c8e8" />
            </div>
            <div>
              <p className={styles.para}>Loans Up To $100,000</p>
            </div>
          </div>
          <div className={styles.firstChildOnePoints}>
            <div>
              <FaCheck size={20} fill="#05c8e8" />
            </div>
            <div>
              <p className={styles.para}>Loans Up To $100,000</p>
            </div>
          </div>
          <div className={styles.firstChildOnePoints}>
            <div>
              <FaCheck size={20} fill="#05c8e8" />
            </div>
            <div>
              <p className={styles.para}>Loans Up To $100,000</p>
            </div>
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

            <button className={styles.btn2}>Continue</button>

            <button className={styles.btn3}>I don't have a code</button>
          </div>
          <p className={styles.btnPara1}>For immediate assistance, call:</p>

          <button className={styles.btnNum}>(877) 851-1246</button>
        </div>
      </div>

      <Footer2 />
    </main>
  );
}
