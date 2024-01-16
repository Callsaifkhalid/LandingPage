"use client";
import React, { useState } from "react";
import styles from "./modal.module.css";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
const Modal = () => {
  const [popup, setPopup] = useState(true);
  return (
    <div>
      {popup && (
        <div
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
              <h1>Reduce Your Credit Card Debt upto Half </h1>
              <span>Speak to a debt specialist today for free</span>
              <button>1-844-208-1100</button>
              <Link href={"/checkrates"} className={styles.Link}>
                or complete this form{" "}
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Modal;
