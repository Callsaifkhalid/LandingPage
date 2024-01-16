"use client";
import React, { useState } from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div>
      <div className={styles.modalBackground}>
      <div className={styles.loadingdotscontainer}>
      <div className={styles.dotcontainer}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>

      </div>
    </div>
  );
};

export default Loader;
