"use client";
import React, { useEffect, useState } from "react";
import styles from "./faqs.module.css";
import { getAllFaqs } from "@/app/api/faqs/repo";
import { ErrorCodes } from "@/utils/error-codes";

const FAQS = () => {
  const [click, setClick] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [ErrMsg, setErrMsg] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleclick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  useEffect(() => {
    fetchAllFaqs();
  }, []);
  function fetchAllFaqs() {
    setIsLoading(true);
    getAllFaqs()
      .then(({ data }) => {
        console.log("data faqs", data);
        setIsLoading(false);
        switch (data.error_code) {
          case ErrorCodes.success:
            setFaqs(data.result);
            break;
          case ErrorCodes.failed:
            setErrMsg("Oops! Some server error occued.");

            break;
          case ErrorCodes.not_exist:
            setFaqs([]);
            break;

          default:
            setErrMsg("Oops! Some error occued. EC: " + data.error_code);

            break;
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

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
        {faqs.map((faq, index) => (
            <div className={ expandedIndex === index && styles.paragraph} key={faq.id}>
              <div
                className={
                  expandedIndex === index
                    ? styles.question
                    : styles.questionn
                }
                onClick={() => handleclick(index)}
                style={{
                  borderBottom:
                    expandedIndex === index ? "" : "solid 2px #05c8e8",
                }}
              >
                <h2>{faq.question}</h2>
                {expandedIndex === index ? (
                  <img src="../questionarrow2.png" width={50} />
                ) : (
                  <img src="../questionarrow.png" width={50} />
                )}
              </div>
              {expandedIndex === index && (
                <div className={styles.questioncontent}>{faq.answer}</div>
              )}
            </div>
          ))}
         
        </div>
      </div>
  
    </div>
  );
};

export default FAQS;
