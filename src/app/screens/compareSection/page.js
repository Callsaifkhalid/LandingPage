"use client";
import React, { useState } from "react";
import styles from "./compare.module.css";
import lenders from "@/utils/compareLenders";
import CurrencyInput from "react-currency-input-field";
import Select from "react-select";
import { LuListFilter } from "react-icons/lu";
import { Link as ScrollLink } from "react-scroll/modules";
import OutsideClickHandler from "react-outside-click-handler";
const CompareSection = () => {
  const [click, setClick] = useState(false);
  const [inputLoan, setInputLoan] = useState("20000");
  const [showFilteredLoanEnter, setShowFilteredLoanEnter] = useState(null);
  const [resentButton, setResetBtton] = useState(false);
  const [reactselect, setreactselect] = useState({ value: "2", label: "APR" });
  const [filterbox, setFilterBox] = useState(false);
  const [filteredLenders, setFilteredLenders] = useState([]);
  const [filteredLendersDesc, setFilteredLendersDesc] = useState([]);
  const [filteredLendersAsc, setFilteredLendersAsc] = useState([]);
  const [filteredLendersAPR, setFilteredLendersAPR] = useState([]);
  const [tooltip, showTooltip] = useState(false);
  const defaultArray = [...lenders].sort((a, b) => {
    const aprA = parseFloat(a.APR.replace("%", ""));
    const aprB = parseFloat(b.APR.replace("%", ""));
    return aprA - aprB;
  });
  const handleFilter = (value) => {
    setInputLoan(value);
    setResetBtton(true);

    const filteredResults = [...defaultArray].filter(
      (lender) => lender.filterloanAmount >= value
    );
    setFilteredLenders(filteredResults);
    setShowFilteredLoanEnter(1);

    if (!value) {
      setFilteredLenders(defaultArray);
    }
  };
  const handleSelect = (options) => {
    setResetBtton(true);
    if (options.value === "LM") {
      if (inputLoan === "20000") {
        setreactselect({ value: "LM", label: "Loan Amount" });
        const descendingOrder = [...lenders].sort(
          (a, b) => b.filterloanAmount - a.filterloanAmount
        );
        setFilteredLendersDesc(descendingOrder);
        setShowFilteredLoanEnter(2);
      } else {
        setreactselect({ value: "LM", label: "Loan Amount" });
        const descendingOrder = [...filteredLenders].sort(
          (a, b) => b.filterloanAmount - a.filterloanAmount
        );
        setFilteredLendersDesc(descendingOrder);
        setShowFilteredLoanEnter(2);
      }
    }
    if (options.value === "1") {
      if (inputLoan === "20000") {
        setreactselect({ value: "1", label: "A to Z" });
        const ascendingOrder = [...lenders].sort((a, b) =>
          a.details[0].title.localeCompare(b.details[0].title)
        );
        setFilteredLendersAsc(ascendingOrder);
        setShowFilteredLoanEnter(3);
      } else {
        setreactselect({ value: "1", label: "A to Z" });
        const ascendingOrder = [...filteredLenders].sort((a, b) =>
          a.details[0].title.localeCompare(b.details[0].title)
        );
        setFilteredLendersAsc(ascendingOrder);
        setShowFilteredLoanEnter(3);
      }
    }
    if (options.value === "2") {
      if (inputLoan === "20000") {
        setreactselect({ value: "2", label: "APR" });
        const sortedLendersByAPR = [...lenders].sort((a, b) => {
          const aprA = parseFloat(a.APR.replace("%", ""));
          const aprB = parseFloat(b.APR.replace("%", ""));
          return aprA - aprB;
        });
        setFilteredLendersAPR(sortedLendersByAPR);
        setShowFilteredLoanEnter(4);
      } else {
        setreactselect({ value: "2", label: "APR" });
        const sortedLendersByAPR = [...filteredLenders].sort((a, b) => {
          const aprA = parseFloat(a.APR.replace("%", ""));
          const aprB = parseFloat(b.APR.replace("%", ""));
          return aprA - aprB;
        });
        setFilteredLendersAPR(sortedLendersByAPR);
        setShowFilteredLoanEnter(4);
      }
    }
  };
  const handleReset = () => {
    setShowFilteredLoanEnter(null);
    setInputLoan("20000");
    setreactselect({ value: "2", label: "APR" });
    setClick(false);
  };

  const lendersToDisplay =
    showFilteredLoanEnter === 1
      ? filteredLenders
      : showFilteredLoanEnter === 2
      ? filteredLendersDesc
      : showFilteredLoanEnter === 3
      ? filteredLendersAsc
      : showFilteredLoanEnter === 4
      ? filteredLendersAPR
      : defaultArray;

  const options = [
    { value: "", label: "Order by", isDisabled: true },
    { value: "1", label: "A to Z" },
    { value: "2", label: "APR" },
    { value: "LM", label: "Loan Amount" },
  ];

  const Styles = {
    control: (provided, state) => ({
      ...provided,
      display: "flex",
      height: "47px",
      width: "200px",
      marginLeft: "2%",
      placeholder: "State",
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
        <OutsideClickHandler onOutsideClick={() => showTooltip(false)}>
          {tooltip && (
            <div className={styles.tooltip}>
              The rates that appear are from companies which Clear Credit
              receives compensation. This compensation does not impact how or
              where products appear within the table. The rates and information
              shown do not include all financial service providers or all of the
              displayed lender's available services and product offerings.
            </div>
          )}
        </OutsideClickHandler>
        <span onClick={() => showTooltip(pre=>!pre)}>Advertiser Disclosure</span>

        <div className={styles.boxes}>
          <div
            className={styles.box1}
            onClick={() => setFilterBox((pre) => !pre)}
          >
            <LuListFilter style={{ fontSize: "1.5rem", marginRight: "10px" }} />
            <span>
              Filter{" "}
              <span style={{ color: "#1a4048" }}>
                {!inputLoan ? "$" : `$${parseInt(inputLoan)}`}
              </span>{" "}
              loan amount, ordered by{" "}
              <span style={{ color: "#1a4048" }}>{reactselect.label}</span>
            </span>
          </div>
          {filterbox && (
            <div className={styles.filterbox}>
              <CurrencyInput
                prefix="$"
                maxLength={6}
                placeholder="Loan Amount"
                value={inputLoan}
                onValueChange={(value) => handleFilter(value)}
              />
              <Select
                options={options}
                value={reactselect}
                styles={Styles}
                placeholder="APR"
                onChange={handleSelect}
              />
              {resentButton && (
                <button onClick={handleReset} className={styles.resetButton}>
                  Reset
                </button>
              )}
            </div>
          )}
          {lendersToDisplay?.map((lender) => (
            <div className={styles.lendersboxes}>
              <div className={styles.box2} key={lender.id}>
                <div className={styles.div1}>
                  <img src={lender.img} alt="" width={100} />
                  <button onClick={() => setClick(lender.id)}>
                    View Details
                  </button>
                </div>
                {/* <div className={styles.div2}>
                  <span>Credible rating</span>
                  <div>
                    <span>{lender.rating}</span>
                    <img src="./Star.png" alt="" width={15} />
                  </div>
                </div> */}
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
                    Loan Amount
                  </span>
                  <span style={{ fontWeight: "bolder" }}>
                    {lender.loanAmount}
                  </span>
                </div>
                <div className={styles.div5}>
                  <button>
                    <ScrollLink
                      to="hero"
                      spy={true}
                      smooth={true}
                      offset={10}
                      duration={500}
                    >
                      Find my Rate
                    </ScrollLink>
                  </button>
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
