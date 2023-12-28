"use client";
import React, { useEffect, useState } from "react";
import styles from "./saving.module.css";
import Select from "react-select";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import ColorBars from "@/components/colorbars/colorbars";
import ColorBars2 from "@/components/colobars2/colorbars2";
import CurrencyInput from "react-currency-input-field";
import { useRouter } from "next/navigation";
const SavingsCalculator = () => {
  const [inputValueLoan, setInputValueLoan] = useState(1000);
  const [currentInterest, setCurrentInterest] = useState("10.00");
  const [currentloanPeriod, setCurrentLoanPeriod] = useState({
    value: "2 ",
    label: "2 Years",
  });
  const [compareInterest, setCompareInterest] = useState("2.00");
  const [compareloanPeriod, setCompareloanPeriod] = useState({
    value: "3 ",
    label: "3 Years",
  });

  const [comapreMonthlyPaymentValue, setComapreMonthlyPaymentValue] =
    useState(0);
  const [currentMonthlyPaymentValue, setCurrentMonthlyPaymentValue] =
    useState(0);
  const [payMonthlyInterestPaymentValue, setPayMonthlyInterestPaymentValue] =
    useState(0);
  const [
    currentpayMonthlyInterestPaymentValue,
    setcurrentPayMonthlyInterestPaymentValue,
  ] = useState(0);
  const [interestboxvalue, setInterestBoxValue] = useState(0);
  const [monthlyboxvalue, setMonthlyBoxValue] = useState(0);

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputFocused1, setIsInputFocused1] = useState(false);
  const [isInputFocused2, setIsInputFocused2] = useState(false);
  const [isInputFocused3, setIsInputFocused3] = useState(false);
  const [isInputFocused4, setIsInputFocused4] = useState(false);
  const router = useRouter();
  const options = [
    { value: "", label: "Loan Term", isDisabled: true },
    { value: "1", label: "1 Year" },
    { value: "2 ", label: "2 Years" },
    { value: "3", label: "3 Years" },
    { value: "4", label: "4 Years" },
    { value: "5", label: "5 Years" },
    { value: "6", label: "6 Years" },
  ];

  const Styles = {
    control: (provided, state) => ({}),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#05c8e8",
      ":hover": {
        color: "#05c8e8",
      },
    }),
  };
  const handleclick = () => {
    if (
      !inputValueLoan ||
      inputValueLoan === 0 ||
      inputValueLoan < 600 ||
      inputValueLoan > 200000 ||
      !currentInterest ||
      currentInterest === 0 ||
      !compareInterest ||
      compareInterest === 0
    ) {
      return;
    } else {
      router.push("/checkrates");
    }
  };
  useEffect(() => {
    if (
      inputValueLoan &&
      inputValueLoan != 0 &&
      inputValueLoan >= 600 &&
      inputValueLoan <= 200000 &&
      currentInterest &&
      currentInterest != 0 &&
      currentloanPeriod &&
      compareInterest &&
      compareInterest != 0 &&
      compareloanPeriod
    )
      calculateLoanDetails();
    else {
      setComapreMonthlyPaymentValue(0);
      setCurrentMonthlyPaymentValue(0);
      setPayMonthlyInterestPaymentValue(0);
      setcurrentPayMonthlyInterestPaymentValue(0);
      setInterestBoxValue(0);
      setMonthlyBoxValue(0);
    }
  }, [
    inputValueLoan,
    currentInterest,
    currentloanPeriod,
    compareInterest,
    compareloanPeriod,
  ]);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const handleInputFocus1 = () => {
    setIsInputFocused1(true);
  };

  const handleInputBlur1 = () => {
    setIsInputFocused1(false);
  };

  const handleInputFocus2 = () => {
    setIsInputFocused2(true);
  };

  const handleInputBlur2 = () => {
    setIsInputFocused2(false);
  };

  const handleInputFocus3 = () => {
    setIsInputFocused3(true);
  };

  const handleInputBlur3 = () => {
    setIsInputFocused3(false);
  };

  const handleInputFocus4 = () => {
    setIsInputFocused4(true);
  };

  const handleInputBlur4 = () => {
    setIsInputFocused4(false);
  };

  const handleLoanPeriod = (value) => {
    setCompareloanPeriod(value);
  };

  const handleCurrentLoanPeriod = (value) => {
    setCurrentLoanPeriod(value);
  };

  const calculateLoanDetails = () => {
    const comparemonthlyInterestRate = compareInterest / 12 / 100;
    const comparenumberOfPayments = parseFloat(compareloanPeriod.value) * 12;
    const comparemonthlyPayment =
      (inputValueLoan * comparemonthlyInterestRate) /
      (1 - Math.pow(1 + comparemonthlyInterestRate, -comparenumberOfPayments));
    setComapreMonthlyPaymentValue(comparemonthlyPayment);

    const currentmonthlyInterestRate = currentInterest / 12 / 100;
    const currentnumberOfPayments = parseFloat(currentloanPeriod.value) * 12;
    const currentmonthlyPayment =
      (inputValueLoan * currentmonthlyInterestRate) /
      (1 - Math.pow(1 + currentmonthlyInterestRate, -currentnumberOfPayments));
    setCurrentMonthlyPaymentValue(currentmonthlyPayment);

    const comparetotalPayments =
      comparemonthlyPayment * compareloanPeriod.value * 12;
    const payMonthlyInterestPaymentValue =
      comparetotalPayments - inputValueLoan;
    setPayMonthlyInterestPaymentValue(payMonthlyInterestPaymentValue);

    const currenttotalPayments =
      currentmonthlyPayment * currentloanPeriod.value * 12;
    const currentpayMonthlyInterestPaymentValue =
      currenttotalPayments - inputValueLoan;
    setcurrentPayMonthlyInterestPaymentValue(
      currentpayMonthlyInterestPaymentValue
    );

    const interestboxvalue = parseFloat(
      currentpayMonthlyInterestPaymentValue - payMonthlyInterestPaymentValue
    ).toFixed(1);
    setInterestBoxValue(interestboxvalue);

    const monthlyboxvalue = parseFloat(
      currentmonthlyPayment - comparemonthlyPayment
    ).toFixed(1);
    setMonthlyBoxValue(monthlyboxvalue);
  };
  // const handlee = (value) => {
  //   // Remove non-digit characters
  //   if(!value) return
  //   const cleanValue = value.replace(/[^\d]/g, '');

  //   // Check if there are at least two digits
  //   if (cleanValue.length >= 2) {
  //     // Insert a decimal after the first two digits
  //     const newValue = cleanValue.slice(0, 2) + '.' + cleanValue.slice(2);
  //     setCurrentInterest(newValue);
  //   } else {
  //     setCurrentInterest(cleanValue);
  //   }

  // };
  return (
    <div className={styles.wrapper} id="savings">
      <div className={styles.headings}>
        <h3>Savings Calculator</h3>
        <h1>
          Calculate Your Savings
          <br /> with Clear Credit AI
        </h1>
      </div>
      <div className={styles.calculator}>
        <div className={styles.calculatorstuff}>
          <div className={styles.calculatorheading}>
            <h3>1. Enter your current loan details</h3>
          </div>
          <div className={styles.boxes}>
            <div
              className={isInputFocused ? styles.boxerror : styles.box}
              style={{
                border: inputValueLoan === undefined ? "1px solid red" : "",
              }}
            >
              <h5>Loan Amount</h5>
              <CurrencyInput
                prefix="$"
                maxLength={6}
                value={inputValueLoan}
                onValueChange={(value) => {
                  setInputValueLoan(value);
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <span>$</span>
            </div>
            <div
              className={isInputFocused1 ? styles.boxerror : styles.box}
              style={{
                border: !currentInterest ? "1px solid red" : "",
              }}
            >
              <h5>Interest Rate</h5>
              <CurrencyInput
                value={currentInterest}
                maxLength={6}
                decimalsLimit={2}
                onValueChange={(value) => {
                  if (!value || value <= 100) setCurrentInterest(value);
                }}
                onFocus={handleInputFocus1}
                onBlur={handleInputBlur1}
              />
              <span>%</span>
            </div>

            <div className={isInputFocused2 ? styles.boxxerror : styles.boxx}>
              <h5
                style={{
                  color: "#05c8e8",
                }}
              >
                Loan Term
              </h5>
              <Select
                options={options}
                className="customSelect"
                classNamePrefix="select"
                styles={Styles}
                value={currentloanPeriod}
                onChange={handleCurrentLoanPeriod}
                onFocus={handleInputFocus2}
                onBlur={handleInputBlur2}
              />
            </div>
          </div>
          <div className={styles.errormsgs}>
            {!inputValueLoan && <span>Please fill this field</span>}
            {inputValueLoan < 600 && (
              <span>Enter amount ($600 to $200,000)</span>
            )}
            {inputValueLoan > 200000 && (
              <span>Enter amount ($600 to $200,000)</span>
            )}
          </div>
          <div className={styles.errormsg}>
            {!currentInterest && <span>Please fill this field</span>}
          </div>
          <div className={styles.calculatorheading}>
            <h3 style={{ marginTop: "3rem" }}>2. Choose a rate to compare</h3>
            <span>
              Our lender rates vary from{" "}
              <span style={{ color: "#1A4048" }}>5.20%</span> to{" "}
              <span style={{ color: "#1A4048" }}>35.99%</span> APR<sup>1</sup>
            </span>
          </div>
          <div className={styles.boxes2}>
            <div
              className={isInputFocused3 ? styles.boxerror : styles.box}
              style={{
                border: !compareInterest ? "1px solid red" : "",
              }}
            >
              <h5>Interest Rate</h5>
              <CurrencyInput
                value={compareInterest}
                maxLength={6}
                decimalsLimit={2}
                onValueChange={(value) => {
                  if (!value || value <= 100) setCompareInterest(value);
                }}
                onFocus={handleInputFocus3}
                onBlur={handleInputBlur3}
              />
              <span>%</span>
            </div>
            <div className={isInputFocused4 ? styles.boxxerror : styles.boxx}>
              <h5
                style={{
                  color: "#05c8e8",
                }}
              >
                Loan Term
              </h5>
              <Select
                options={options}
                className="customSelect"
                classNamePrefix="select"
                styles={Styles}
                value={compareloanPeriod}
                onChange={handleLoanPeriod}
                onFocus={handleInputFocus4}
                onBlur={handleInputBlur4}
              />
            </div>
          </div>
          <div className={styles.compareerrormsgs}>
            {!compareInterest && <span>Please fill this field</span>}
          </div>
          <div className={styles.calculatorheading}>
            <h3 style={{ marginTop: "4rem" }}>3. Check the results</h3>
            <span>
              With an interest rate of{" "}
              <span style={{ color: "#1a4048", fontWeight: "600" }}>
                {compareInterest}%
              </span>{" "}
              over{" "}
              <span style={{ color: "#1a4048", fontWeight: "600" }}>
                {compareloanPeriod?.label}
              </span>{" "}
              , you will pay{" "}
              <span style={{ color: "#1a4048", fontWeight: "600" }}>
                ${Math.round(comapreMonthlyPaymentValue.toFixed(1))}
              </span>{" "}
              per month and{" "}
              <span style={{ color: "#1a4048", fontWeight: "600" }}>
                ${Math.round(payMonthlyInterestPaymentValue.toFixed(1))}
              </span>{" "}
              in interest over the lifetime of your loan.
            </span>
          </div>
          <div className={styles.barboxes}>
            <div className={styles.barbox}>
              <div className={styles.moneysignbox}>
                <div>
                  <span>
                    ${Math.abs(Math.floor(interestboxvalue))}
                    {interestboxvalue > 0 ? (
                      <FaArrowDown
                        style={{
                          color: "#1a4048",
                          marginLeft: "0.5rem",
                          marginBottom: "-0.4rem",
                          color: "green",
                        }}
                      />
                    ) : interestboxvalue < 0 ? (
                      <FaArrowUp
                        style={{
                          color: "#1a4048",
                          marginLeft: "0.5rem",
                          marginBottom: "-0.2rem",
                          color: "crimson",
                        }}
                      />
                    ) : null}
                  </span>
                  {interestboxvalue > 0 && <p>Less in interest</p>}
                  {interestboxvalue < 0 && <p>More in interest</p>}
                  {interestboxvalue == 0 && <p>No change in interest</p>}
                </div>
              </div>
              <div className={styles.interestbox}>
                {interestboxvalue <= 0 && <span>Total interest: </span>}
                {interestboxvalue > 0 && (
                  <span>
                    Total interest savings:{" "}
                    <span style={{ color: "#1A4048", fontWeight: "bolder" }}>
                      ${Math.abs(Math.floor(interestboxvalue))}
                    </span>
                  </span>
                )}
                <div className={styles.colorboxes}>
                  <img src="./blackbox.png" alt="" height={17} />
                  <span>New Loan</span>
                  <img src="./bluebox.png" alt="" height={17} />
                  <span>Current Loan</span>
                </div>
                <div className={styles.colorbarboxes}>
                  <span style={{ color: "#1A4048", fontWeight: "bolder" }}>
                    {payMonthlyInterestPaymentValue
                      ? `$${Math.round(
                          payMonthlyInterestPaymentValue.toFixed(1)
                        )}`
                      : `_`}
                  </span>
                  <ColorBars
                    value={
                      payMonthlyInterestPaymentValue
                        ? payMonthlyInterestPaymentValue.toFixed(1)
                        : 0
                    }
                  />
                </div>
                <div className={styles.colorbarboxes}>
                  <span style={{ color: "#05c8e8", fontWeight: "bolder" }}>
                    {currentpayMonthlyInterestPaymentValue
                      ? `$${Math.round(
                          currentpayMonthlyInterestPaymentValue.toFixed(1)
                        )}`
                      : `_`}
                  </span>
                  <ColorBars2
                    value={
                      currentpayMonthlyInterestPaymentValue
                        ? Math.round(
                            currentpayMonthlyInterestPaymentValue.toFixed(1)
                          )
                        : 0
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.barboxes}>
            <div className={styles.barbox}>
              <div className={styles.moneysignbox}>
                <div>
                  <span>
                    ${Math.abs(Math.floor(monthlyboxvalue))}
                    {monthlyboxvalue > 0 ? (
                      <FaArrowDown
                        style={{
                          color: "#1a4048",
                          marginLeft: "0.5rem",
                          marginBottom: "-0.4rem",
                          color: "green",
                        }}
                      />
                    ) : monthlyboxvalue < 0 ? (
                      <FaArrowUp
                        style={{
                          color: "#1a4048",
                          marginLeft: "0.5rem",
                          marginBottom: "-0.2rem",
                          color: "crimson",
                        }}
                      />
                    ) : null}
                  </span>
                  {monthlyboxvalue > 0 && <p>Less per month</p>}
                  {monthlyboxvalue < 0 && <p>More per month</p>}
                  {monthlyboxvalue == 0 && <p>No change per month</p>}
                </div>
              </div>
              <div className={styles.interestbox}>
                {monthlyboxvalue <= 0 && <span>Monthly payment: </span>}
                {monthlyboxvalue > 0 && (
                  <span>
                    Monthly payment savings:{" "}
                    <span style={{ color: "#1A4048", fontWeight: "bolder" }}>
                      ${Math.abs(Math.floor(monthlyboxvalue))}
                    </span>
                  </span>
                )}
                <div className={styles.colorboxes}>
                  <img src="./bluebox.png" alt="" height={17} />
                  <span>New Loan</span>
                  <img src="./blackbox.png" alt="" height={17} />
                  <span>Current Loan</span>
                </div>
                <div className={styles.colorbarboxes}>
                  <span style={{ color: "#1A4048", fontWeight: "bolder" }}>
                    {comapreMonthlyPaymentValue
                      ? `$${Math.round(comapreMonthlyPaymentValue.toFixed(1))}`
                      : `_`}
                  </span>
                  <ColorBars
                    value={
                      comapreMonthlyPaymentValue
                        ? Math.round(comapreMonthlyPaymentValue.toFixed(1))
                        : 0
                    }
                  />
                </div>
                <div className={styles.colorbarboxes}>
                  <span style={{ color: "#05c8e8", fontWeight: "bolder" }}>
                    {currentMonthlyPaymentValue
                      ? `$${Math.round(currentMonthlyPaymentValue.toFixed(1))}`
                      : "_"}
                  </span>
                  <ColorBars2
                    value={
                      currentMonthlyPaymentValue
                        ? Math.round(currentMonthlyPaymentValue.toFixed(1))
                        : 0
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <button onClick={handleclick}>Check Rates</button>
            <span>
              Checking rates won’t affect your credit score. Calculator results
              are for illustrative purposes only.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
