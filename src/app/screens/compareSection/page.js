import React from "react";
import styles from "./compare.module.css";
const CompareSection = () => {
  return (
    <div className={styles.wrapper} id="compare">
      <div className={styles.headings}>
        <h3>Top Lenders</h3>
        <h1>
          Compare personal loan rates
          <br /> from top lender.
        </h1>
      </div>
      <span>Advertiser Disclosure</span>
      <div className={styles.boxes}>
        <div className={styles.box1}>
          <span>
            Filter $20,000 loan amount and 700-749 credit score, ordered by APR
          </span>
        </div>
        <div className={styles.box2}>
          <div className={styles.div1}>
            <img src="./div1photo.png" alt="" />
          </div>
          <div className={styles.div2}>
            <span>Credible rating</span>
            <div>
              <span>4.5</span>
              <img src="./star.png" alt="" width={15} />
            </div>
          </div>
          <div className={styles.div3}>
            <span style={{color:'#828282',fontSize:'13px'}}>Rate from (APR)</span>
            <span style={{fontWeight:'bolder'}}>%</span>
            <span style={{fontWeight:'bolder'}}>-</span>
          </div>
          <div className={styles.div4}>
            <span style={{color:'#828282',fontSize:'13px'}}>Loan Term</span>
            <span style={{fontWeight:'bolder'}}>2-5 Years</span>
          </div>
          <div className={styles.div4}>
            <span style={{color:'#828282',fontSize:'13px'}}>Loan Term</span>
            <span style={{fontWeight:'bolder'}}>up to $35k</span>
          </div>
          <div className={styles.div5}>
            <button>Find my Rate</button>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.div1}>
            <img src="./div2photo.png" alt="" />
          </div>
          <div className={styles.div2}>
            <span>Credible rating</span>
            <div>
              <span>4.5</span>
              <img src="./star.png" alt="" width={15} />
            </div>
          </div>
          <div className={styles.div3}>
            <span style={{color:'#828282',fontSize:'13px'}}>Rate from (APR)</span>
            <span style={{fontWeight:'bolder'}}>%</span>
            <span style={{fontWeight:'bolder'}}>-</span>
          </div>
          <div className={styles.div4}>
            <span style={{color:'#828282',fontSize:'13px'}}>Loan Term</span>
            <span style={{fontWeight:'bolder'}}>2-5 Years</span>
          </div>
          <div className={styles.div4}>
            <span style={{color:'#828282',fontSize:'13px'}}>Loan Term</span>
            <span style={{fontWeight:'bolder'}}>up to $35k</span>
          </div>
          <div className={styles.div5}>
            <button>Find my Rate</button>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.div1}>
            <img src="./div3photo.png" alt="" />
          </div>
          <div className={styles.div2}>
            <span>Credible rating</span>
            <div>
              <span>4.5</span>
              <img src="./star.png" alt="" width={15} />
            </div>
          </div>
          <div className={styles.div3}>
            <span style={{color:'#828282',fontSize:'13px'}}>Rate from (APR)</span>
            <span style={{fontWeight:'bolder'}}>%</span>
            <span style={{fontWeight:'bolder'}}>-</span>
          </div>
          <div className={styles.div4}>
            <span style={{color:'#828282',fontSize:'13px'}}>Loan Term</span>
            <span style={{fontWeight:'bolder'}}>2-5 Years</span>
          </div>
          <div className={styles.div4}>
            <span style={{color:'#828282',fontSize:'13px'}}>Loan Term</span>
            <span style={{fontWeight:'bolder'}}>up to $35k</span>
          </div>
          <div className={styles.div5}>
            <button>Find my Rate</button>
          </div>
        </div>
        <div className={styles.box2} style={{marginBottom: '9rem'}}>
          <div className={styles.div1}>
            <img src="./div4photo.png" alt="" />
          </div>
          <div className={styles.div2}>
            <span>Credible rating</span>
            <div>
              <span>4.5</span>
              <img src="./star.png" alt="" width={15} />
            </div>
          </div>
          <div className={styles.div3}>
            <span style={{color:'#828282',fontSize:'13px'}}>Rate from (APR)</span>
            <span style={{fontWeight:'bolder'}}>%</span>
            <span style={{fontWeight:'bolder'}}>-</span>
          </div>
          <div className={styles.div4}>
            <span style={{color:'#828282',fontSize:'13px'}}>Loan Term</span>
            <span style={{fontWeight:'bolder'}}>2-5 Years</span>
          </div>
          <div className={styles.div4}>
            <span style={{color:'#828282',fontSize:'13px'}}>Loan Term</span>
            <span style={{fontWeight:'bolder'}}>up to $35k</span>
          </div>
          <div className={styles.div5}>
            <button>Find my Rate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareSection;
