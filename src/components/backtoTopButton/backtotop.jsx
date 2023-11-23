import React, { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import styles from './bactotop.module.css'
const Backtotop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <FaAngleDoubleUp
          className={styles.topbtnposition +" "+ styles.topbtnstyle}
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default Backtotop;
