"use client";
import React, { useState } from "react";
import styles from "./compare.module.css";
import lenders from "@/utils/compareLenders";
import CurrencyInput from "react-currency-input-field";
import Select from "react-select";
const CompareSection = () => {
  const [click, setClick] = useState(false);

  const options = [
    { value: "", label: "Order by", isDisabled: true },
    { value: "1", label: "A to Z" },
    { value: "2 ", label: "APR" },
    { value: "3", label: "Loan Amount" },
  ];

  const Styles = {
    control: (provided, state) => ({
      ...provided,
      display:'flex',
      height:"47px",
      width:'200px',
      marginLeft:'2%',
      placeholder:'State'
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#05c8e8",
      ":hover": {
        color: "#05c8e8",
      },
    }),
  };
  return (
    <div className={styles.wrapper} id="compare">
      <img src="./whycircle.png" />
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
          <div className={styles.filterbox}>
            <CurrencyInput prefix="$" maxLength={6} placeholder="Loan Amount"/>
            <Select
                options={options}
                placeholder="Order by"
                styles={Styles}
              />
          </div>
          {lenders?.map((lender) => (
            <div className={styles.lendersboxes}>
              <div className={styles.box2} key={lender.id}>
                <div className={styles.div1}>
                  <img src={lender.img} alt="" width={100} />
                  <button onClick={() => setClick(lender.id)}>
                    View Details
                  </button>
                </div>
                <div className={styles.div2}>
                  <span>Credible rating</span>
                  <div>
                    <span>{lender.rating}</span>
                    <img src="./star.png" alt="" width={15} />
                  </div>
                </div>
                <div className={styles.div3}>
                  <span style={{ color: "#828282", fontSize: "13px" }}>
                    Rates from (APR)
                  </span>
                  <span style={{ fontWeight: "bolder" }}>{lender.APR}</span>
                </div>
                <div className={styles.div4}>
                  <span style={{ color: "#828282", fontSize: "13px" }}>
                    Loan Term
                  </span>
                  <span style={{ fontWeight: "bolder" }}>
                    {lender.loanTerm}
                  </span>
                </div>
                <div className={styles.div4}>
                  <span style={{ color: "#828282", fontSize: "13px" }}>
                    Loan Term
                  </span>
                  <span style={{ fontWeight: "bolder" }}>
                    {lender.loanAmount}
                  </span>
                </div>
                <div className={styles.div5}>
                  <button>Find my Rate</button>
                </div>
              </div>
              {lender.details.map((detail) => (
                <div>
                  {click === lender.id && (
                    <div className={styles.viewdetailsbox}>
                      <div>
                        <h3>{detail.title} Personal Loans</h3>
                      </div>
                      <div className={styles.details}>
                        <div className={styles.detailscontent}>
                          <div className={styles.detailsanswers}>
                            <span>
                              <span>Prepayment penalty: </span>
                              {detail.Prepaymentpenalty}
                            </span>
                          </div>
                          <div className={styles.detailsanswers}>
                            <span>
                              <span>Origination Fee: </span>
                              {detail.OriginationFee}
                            </span>
                          </div>
                          <div className={styles.detailsanswers}>
                            <span>
                              <span>Late Fee: </span>
                              {detail.Latefee}
                            </span>
                          </div>
                        </div>
                        <div className={styles.detailscontent}>
                          <div className={styles.detailsanswers}>
                            <span>
                              <span>Unsuccessful payment fee: </span>
                              {detail.Unsuccessfulpaymentfee}
                            </span>
                          </div>
                          <div className={styles.detailsanswers}>
                            <span>
                              <span>Check processing fee: </span>
                              {detail.Checkprocessingfee}
                            </span>
                          </div>
                          <div className={styles.detailsanswers}>
                            <span>
                              <span>Time to fund: </span>
                              {detail.Timetofund}
                            </span>
                          </div>
                        </div>
                        <div className={styles.detailscontent}>
                          <div className={styles.detailsanswers}>
                            <span>
                              <span>Minimum Credit Score: </span>
                              {detail.MinimumCreditScore}
                            </span>
                          </div>
                          <div className={styles.detailsanswers}>
                            <span>
                              <span>Do they allow a cosigner: </span>
                              {detail.Dotheyallowacosigner}
                            </span>
                          </div>
                          <div className={styles.detailsanswers}>
                            <span>
                              <span>Best for: </span>
                              {detail.Bestfor}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareSection;
