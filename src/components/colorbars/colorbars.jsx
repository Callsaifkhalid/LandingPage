'use client'
import React, { useState, useEffect } from 'react';
import styles from "./colorbar.module.css"; 

const ColorBars = ({ value }) => {
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    const newFillPercentage = (value / 100) * 100;
    setFillPercentage(newFillPercentage);
  }, [value]);

  return (
    <div className={styles.colorbarscontainer}>
      <div className={styles.colorbar} style={{ width: `${fillPercentage}%` }} />
    </div>
  );
};

export default ColorBars;