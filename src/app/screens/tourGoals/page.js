'use client'
import React from "react";
import styles from "./tour.module.css";
import { useRouter } from "next/navigation";
const TourGoals = () => {
  const router = useRouter()
  const GotoBlogs = ()=>{
    router.push('./blogs')
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.howcircle}>
        <img src="./howcircle.png" />
      </div>
      <div className={styles.headings}>
        <h3>For all tour goals</h3>
        <h1>
          Get a personal loan for all your
          <br /> financial needs
        </h1>
      </div>
      <div className={styles.Cards}>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <div className={styles.card1box1}>
              <div className={styles.card1box1img}>
                <img src="./tourgoal1.png"/>
              </div>
              <div className={styles.card1box1content}>
                <h3>
                  Find a Loan from
                  <br /> Reputable Lenders in <br />
                  Minutes
                </h3>
                <span style={{ color: "#8B8B8B", fontSize: "12px" }}>
                  Description: Whether you're seeking to
                  <br /> consolidate debt or address an unexpected <br />
                  financial need,
                </span>
                <h4
                  style={{
                    color: "#05C8E8",
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  Learn More
                </h4>
              </div>
            </div>
            <div className={styles.card1box1}>
              <div className={styles.card1box1img}>
                <img src="./tourgoal2.png" />
              </div>
              <div className={styles.card1box1content}>
                <h3>
                  Find a Loan from
                  <br /> Reputable Lenders in <br />
                  Minutes
                </h3>
                <span style={{ color: "#8B8B8B", fontSize: "12px" }}>
                  Description: Whether you're seeking to
                  <br /> consolidate debt or address an unexpected <br />
                  financial need,
                </span>
                <h4
                  style={{
                    color: "#05C8E8",
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  Learn More
                </h4>
              </div>
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.card1box1}>
              <div className={styles.card1box1img}>
                <img src="./tourgoal4.png" />
              </div>
              <div className={styles.card1box1content}>
                <h3>
                  Find a Loan from
                  <br /> Reputable Lenders in <br />
                  Minutes
                </h3>
                <span style={{ color: "#8B8B8B", fontSize: "12px" }}>
                  Description: Whether you're seeking to
                  <br /> consolidate debt or address an unexpected <br />
                  financial need,
                </span>
                <h4
                  style={{
                    color: "#05C8E8",
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  Learn More
                </h4>
              </div>
            </div>
            <div className={styles.card1box1}>
              <div className={styles.card1box1img}>
                <img src="./tourgoal5.png" />
              </div>
              <div className={styles.card1box1content}>
                <h3>
                  Find a Loan from
                  <br /> Reputable Lenders in <br />
                  Minutes
                </h3>
                <span style={{ color: "#8B8B8B", fontSize: "12px" }}>
                  Description: Whether you're seeking to
                  <br /> consolidate debt or address an unexpected <br />
                  financial need,
                </span>
                <h4
                  style={{
                    color: "#05C8E8",
                    fontSize: "13px",
                    textDecoration: "underline",
                  }}
                >
                  Learn More
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.viewmorebutton}>
        <button onClick={GotoBlogs}>View More</button>
      </div>
    </div>
  );
};

export default TourGoals;
