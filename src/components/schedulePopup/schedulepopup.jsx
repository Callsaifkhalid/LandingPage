"use client";
import React, { useContext, useState } from "react";
import styles from "./schedule.module.css";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import DatePicker from "react-date-picker";
import { timeoptions } from "@/utils/timeoptions";
import Select from "react-select";
import { InputContext } from "@/app/context/inputContext";
import { ytelCallBack } from "@/app/api/ytelCallback/repo";
const SchedulePopup = ({
  callback_dateandtime,
  setcallback_dateandtime,
  setcalltime,
  setcalldate,
  setcall,
}) => {
  const [popup, setPopup] = useState(true);
  const [dateInput, setDateInput] = useState(null);
  const [time, settime] = useState("");
  setcalltime(time.value);

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
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const formattedDate = dateInput?.toLocaleDateString("en-CA");
  setcalldate(formattedDate);
  setcallback_dateandtime(formattedDate + time.value);
  const handleSchedule = () => {
    ytelCallBack(Data);
    setcall(3);
    setPopup(false);
    console.log(Data);
  };
  const Styles = {
    control: (provided, state) => ({
      display: "flex",
      height: "40px",
      border: "none",
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
    <div>
      {popup && (
        <motion.div
          className={styles.modalBackground}
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.div
            className={styles.modalContainer}
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className={styles.titleCloseBtn}>
              <FaTimes
                style={{ color: "#1a4048", cursor: "pointer" }}
                onClick={() => setPopup((pre) => !pre)}
              />
            </div>

            <div className={styles.body}>
              <div className={styles.schedulebox}>
                <div className={styles.datebox}>
                  <span>Enter Date</span>
                  <DatePicker
                    onChange={(date) => setDateInput(date)}
                    value={dateInput}
                    className={styles.dateinput}
                    dayPlaceholder="DD"
                    monthPlaceholder="MM"
                    yearPlaceholder="YYYY"
                    minDate={minDate}
                  />
                </div>
                <div className={styles.datebox}>
                  <span>Enter Time</span>
                  <Select
                    options={timeoptions}
                    styles={Styles}
                    placeholder="Time"
                    className={styles.dateinput}
                    onChange={settime}
                  />
                </div>
                <button className={styles.button1} onClick={handleSchedule}>
                  Schedule
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SchedulePopup;
