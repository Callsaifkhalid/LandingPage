"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./missed.module.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { InputContext } from "@/app/context/inputContext";
import { ytelCallBack } from "@/app/api/ytelCallback/repo";
import { format, addMinutes } from "date-fns";
import SchedulePopup from "@/components/schedulePopup/schedulepopup";
const MissedcallPage = () => {
  const [callback_dateandtime, setcallback_dateandtime] = useState("");
  const [scheduleClick, setscheduleClick] = useState(false);
  const [call, setcall] = useState(0);
  const [calldate,setcalldate]=useState("");
  const [calltime,setcalltime]=useState("");
  console.log(calldate,calltime)
  const getCurrentDateTime = () => {
    const now = new Date();
    const formattedDateTime = format(now, "yyyy-MM-dd HH:mm:ss");
    setcallback_dateandtime(formattedDateTime);
    ytelCallBack(Data);
    setcall(1);
  };
  const get15minute = () => {
    const now = new Date();
    const futureDate = addMinutes(now, 15);

    const formattedDateTime = format(futureDate, "yyyy-MM-dd HH:mm:ss");

    setcallback_dateandtime(formattedDateTime);

    ytelCallBack(Data);
    setcall(2);
  };
  console.log(callback_dateandtime);
  const {
    heroInput,
    loanreasonvalue,
    employmentvalue,
    first_name,
    last_name,
    dob,
    address,
    suite,
    city,
    state,
    zipCode,
    housing_cost,
    email,
    phone,
  } = useContext(InputContext);
  const Data = {
    user: "101",
    pass: "SHwYP0c8Xe1U7v1",
    source: "website leads",
    phone_code: "1",
    phone_number: phone,
    search_method: "PHONE_NUMBER",
    search_location: "SYSTEM",
    insert_if_not_found: "Y",
    custom_fields: "Y",
    campaign_id: "1000",
    add_to_hopper: "Y",
    hopper_priority: "99",
    hopper_local_call_time_check: "Y",
    list_id: "1005",
    first_name: first_name,
    last_name: last_name,
    address1: address,
    city: city,
    state: state,
    postal_code: zipCode,
    country_code: "US",
    email: email,
    borrow_amount: heroInput,
    loan_reason: loanreasonvalue,
    employment_type: employmentvalue,
    housing_cost: housing_cost,
    lead_source: "Clear Credit Website",
    date_of_birth: dob,
    callback: "Y",
    callback_status: "CALLBK",
    callback_datetime: callback_dateandtime,
  };

  return (
    <>
      {scheduleClick && (
        <SchedulePopup
          setcallback_dateandtime={setcallback_dateandtime}
          callback_dateandtime={callback_dateandtime}
          setcalldate={setcalldate}
          setcalltime={setcalltime}
          setcall={setcall}
        />
      )}
      <div className={styles.calculator}>
        <div className={styles.calculatorScreens}>
          <div>
            <FaPhoneVolume style={{ fontSize: "3rem", color: "#05c8e8" }} />
          </div>
          <div className={styles.calculatorScreensheading}>
            <h3>Please hold as we connect you with a Client Advocate!</h3>
          </div>
          <div className={styles.optionstext}>
            <span style={{ color: "#05c8e8" }}>
              If you've missed our call from 1-844-208-1100
            </span>
            , please select one of the options below:{" "}
          </div>
          <div className={styles.buttons}>
            <button className={styles.button1} onClick={getCurrentDateTime}>
              Call Me Now
            </button>
            <button className={styles.button2} onClick={get15minute}>
              Call in 15 Minutes
            </button>
            <button
              className={styles.button2}
              onClick={() => setscheduleClick((pre) => !pre)}
            >
              Schedule a Call
            </button>
          </div>
          {call === 1 && <span>Thanks, we will call you now!</span>}
          {call === 2 && <span>Thanks, we will call you in 15 minutes!</span>}
          {call === 3 && <span>Thanks, we will call you on {calldate} at {calltime}</span>}
        </div>
      </div>
    </>
  );
};

export default MissedcallPage;
