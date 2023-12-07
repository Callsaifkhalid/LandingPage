"use client";
import React, { useState } from "react";
import styles from "./compare.module.css";

const CompareSection = () => {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);

 

  return (
    <div className={styles.wrapper} id="compare">
      <div className={styles.headings}>
        <h3>Top Lenders</h3>
        <h1>
          Compare personal loan rates
          <br /> from top lender.
        </h1>
      </div>

      <div className={styles.boxesborder}>
        <span>Advertiser Disclosure</span>
        <div className={styles.boxes}>
          <div className={styles.box1}>
            <span>
              Filter $20,000 loan amount and 700-749 credit score, ordered by
              APR
            </span>
          </div>
          <div className={styles.box2}>
            <div className={styles.div1}>
              <img src="./div1photo.svg" alt="" />
              <button onClick={() => setClick((pre) => !pre)}>
                View Details
              </button>
            </div>
            <div className={styles.div2}>
              <span>Credible rating</span>
              <div>
                <span>4.5</span>
                <img src="./star.png" alt="" width={15} />
              </div>
            </div>
            <div className={styles.div3}>
              <span style={{ color: "#828282", fontSize: "13px" }}>
                Rate from (APR)
              </span>
              <span style={{ fontWeight: "bolder" }}>%</span>
              <span style={{ fontWeight: "bolder" }}>-</span>
            </div>
            <div className={styles.div4}>
              <span style={{ color: "#828282", fontSize: "13px" }}>
                Loan Term
              </span>
              <span style={{ fontWeight: "bolder" }}>2-5 Years</span>
            </div>
            <div className={styles.div4}>
              <span style={{ color: "#828282", fontSize: "13px" }}>
                Loan Term
              </span>
              <span style={{ fontWeight: "bolder" }}>up to $35k</span>
            </div>
            <div className={styles.div5}>
              <button>Find my Rate</button>
            </div>
          </div>
          {click && (
            <div className={styles.viewdetailsbox}>
              <div>
                <h3>ClearDebt Personal Loans</h3>
              </div>
              <div className={styles.details}>
                <div className={styles.detailscontent}>
                  <div className={styles.detailsanswers}>
                    <h5>Prepayment penalty:</h5>
                    <span>None</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Origination Fee:</h5>
                    <span>0% to 12%</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Late fee:</h5>
                    <span>
                      5% of late payment or $15(whichever is greater){" "}
                    </span>
                  </div>
                </div>
                <div className={styles.detailscontent}>
                  <div className={styles.detailsanswers}>
                    <h5>Unsuccessful payment fee:</h5>
                    <span>$15</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Check processing fee:</h5>
                    <span>None</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Time to fund:</h5>
                    <span>As soon as 1 - 3 business days</span>
                  </div>
                </div>
                <div className={styles.detailscontent}>
                  <div className={styles.detailsanswers}>
                    <h5>Minimum Credit Score:</h5>
                    <span>620</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Do they allow a cosigner:</h5>
                    <span>No</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Best for:</h5>
                    <span>Fast personal loans for bad credit</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.box2}>
            <div className={styles.div1}>
              <img src="./div2photo.png" alt="" />
              <button onClick={() => setClick1((pre) => !pre)}>
                View Details
              </button>
            </div>
            <div className={styles.div2}>
              <span>Credible rating</span>
              <div>
                <span>4.5</span>
                <img src="./star.png" alt="" width={15} />
              </div>
            </div>
            <div className={styles.div3}>
              <span style={{ color: "#828282", fontSize: "13px" }}>
                Rate from (APR)
              </span>
              <span style={{ fontWeight: "bolder" }}>%</span>
              <span style={{ fontWeight: "bolder" }}>-</span>
            </div>
            <div className={styles.div4}>
              <span style={{ color: "#828282", fontSize: "13px" }}>
                Loan Term
              </span>
              <span style={{ fontWeight: "bolder" }}>2-5 Years</span>
            </div>
            <div className={styles.div4}>
              <span style={{ color: "#828282", fontSize: "13px" }}>
                Loan Term
              </span>
              <span style={{ fontWeight: "bolder" }}>up to $35k</span>
            </div>
            <div className={styles.div5}>
              <button>Find my Rate</button>
            </div>
          </div>
          {click1 && (
            <div className={styles.viewdetailsbox}>
              <div>
                <h3>ClearDebt Personal Loans</h3>
              </div>
              <div className={styles.details}>
                <div className={styles.detailscontent}>
                  <div className={styles.detailsanswers}>
                    <h5>Prepayment penalty:</h5>
                    <span>None</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Origination Fee:</h5>
                    <span>0% to 12%</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Late fee:</h5>
                    <span>
                      5% of late payment or $15(whichever is greater){" "}
                    </span>
                  </div>
                </div>
                <div className={styles.detailscontent}>
                  <div className={styles.detailsanswers}>
                    <h5>Unsuccessful payment fee:</h5>
                    <span>$15</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Check processing fee:</h5>
                    <span>None</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Time to fund:</h5>
                    <span>As soon as 1 - 3 business days</span>
                  </div>
                </div>
                <div className={styles.detailscontent}>
                  <div className={styles.detailsanswers}>
                    <h5>Minimum Credit Score:</h5>
                    <span>620</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Do they allow a cosigner:</h5>
                    <span>No</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Best for:</h5>
                    <span>Fast personal loans for bad credit</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.box2}>
            <div className={styles.div1}>
              <img src="./div3photo.svg" alt="" />
              <button onClick={() => setClick2((pre) => !pre)}>
                View Details
              </button>
            </div>
            <div className={styles.div2}>
              <span>Credible rating</span>
              <div>
                <span>4.5</span>
                <img src="./star.png" alt="" width={15} />
              </div>
            </div>
            <div className={styles.div3}>
              <span style={{ color: "#828282", fontSize: "13px" }}>
                Rate from (APR)
              </span>
              <span style={{ fontWeight: "bolder" }}>%</span>
              <span style={{ fontWeight: "bolder" }}>-</span>
            </div>
            <div className={styles.div4}>
              <span style={{ color: "#828282", fontSize: "13px" }}>
                Loan Term
              </span>
              <span style={{ fontWeight: "bolder" }}>2-5 Years</span>
            </div>
            <div className={styles.div4}>
              <span style={{ color: "#828282", fontSize: "13px" }}>
                Loan Term
              </span>
              <span style={{ fontWeight: "bolder" }}>up to $35k</span>
            </div>
            <div className={styles.div5}>
              <button>Find my Rate</button>
            </div>
          </div>
          {click2 && (
            <div className={styles.viewdetailsbox}>
              <div>
                <h3>ClearDebt Personal Loans</h3>
              </div>
              <div className={styles.details}>
                <div className={styles.detailscontent}>
                  <div className={styles.detailsanswers}>
                    <h5>Prepayment penalty:</h5>
                    <span>None</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Origination Fee:</h5>
                    <span>0% to 12%</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Late fee:</h5>
                    <span>
                      5% of late payment or $15(whichever is greater){" "}
                    </span>
                  </div>
                </div>
                <div className={styles.detailscontent}>
                  <div className={styles.detailsanswers}>
                    <h5>Unsuccessful payment fee:</h5>
                    <span>$15</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Check processing fee:</h5>
                    <span>None</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Time to fund:</h5>
                    <span>As soon as 1 - 3 business days</span>
                  </div>
                </div>
                <div className={styles.detailscontent}>
                  <div className={styles.detailsanswers}>
                    <h5>Minimum Credit Score:</h5>
                    <span>620</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Do they allow a cosigner:</h5>
                    <span>No</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Best for:</h5>
                    <span>Fast personal loans for bad credit</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.box2}>
            <div className={styles.div1}>
              <img src="./div4photo.svg" alt="" />
              <button onClick={() => setClick3((pre) => !pre)}>
                View Details
              </button>
            </div>
            <div className={styles.div2}>
              <span>Credible rating</span>
              <div>
                <span>4.5</span>
                <img src="./star.png" alt="" width={15} />
              </div>
            </div>
            <div className={styles.div3}>
              <span style={{ color: "#828282", fontSize: "13px" }}>
                Rate from (APR)
              </span>
              <span style={{ fontWeight: "bolder" }}>%</span>
              <span style={{ fontWeight: "bolder" }}>-</span>
            </div>
            <div className={styles.div4}>
              <span style={{ color: "#828282", fontSize: "13px" }}>
                Loan Term
              </span>
              <span style={{ fontWeight: "bolder" }}>2-5 Years</span>
            </div>
            <div className={styles.div4}>
              <span style={{ color: "#828282", fontSize: "13px" }}>
                Loan Term
              </span>
              <span style={{ fontWeight: "bolder" }}>up to $35k</span>
            </div>
            <div className={styles.div5}>
              <button>Find my Rate</button>
            </div>
          </div>
          {click3 && (
            <div className={styles.viewdetailsbox}>
              <div>
                <h3>ClearDebt Personal Loans</h3>
              </div>
              <div className={styles.details}>
                <div className={styles.detailscontent}>
                  <div className={styles.detailsanswers}>
                    <h5>Prepayment penalty:</h5>
                    <span>None</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Origination Fee:</h5>
                    <span>0% to 12%</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Late fee:</h5>
                    <span>
                      5% of late payment or $15(whichever is greater){" "}
                    </span>
                  </div>
                </div>
                <div className={styles.detailscontent}>
                  <div className={styles.detailsanswers}>
                    <h5>Unsuccessful payment fee:</h5>
                    <span>$15</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Check processing fee:</h5>
                    <span>None</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Time to fund:</h5>
                    <span>As soon as 1 - 3 business days</span>
                  </div>
                </div>
                <div className={styles.detailscontent}>
                  <div className={styles.detailsanswers}>
                    <h5>Minimum Credit Score:</h5>
                    <span>620</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Do they allow a cosigner:</h5>
                    <span>No</span>
                  </div>
                  <div className={styles.detailsanswers}>
                    <h5>Best for:</h5>
                    <span>Fast personal loans for bad credit</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.divs}>
        <span>rgrg</span>{" "}
      </div>
      <div className={styles.divs}>
        {" "}
        <span>rgrg</span>
      </div>
      <div className={styles.divs}>
        {" "}
        <span>rgrgrg</span>
      </div>
      <div className={styles.divs}>
        {" "}
        <span>rgrgrg</span>
      </div>
      <div className={styles.divs}>
        {" "}
        <span>rgrgrg</span>
      </div>
    </div>
  );
};

export default CompareSection;
