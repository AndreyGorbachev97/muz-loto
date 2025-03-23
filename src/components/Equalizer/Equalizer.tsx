import React, { useEffect, useState } from "react";
import styles from "./Equalizer.module.css";

const Equalizer: React.FC = () => {
  const [bars, setBars] = useState<number[]>(Array(10).fill(10));

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(bars.map(() => Math.random() * 100));
    }, 300);

    return () => clearInterval(interval);
  }, [bars]);

  return (
    <div className={styles.equalizer}>
      {bars.map((height, index) => (
        <div
          key={index}
          className={styles.bar}
          style={{ height: `${height}%` }}
        ></div>
      ))}
    </div>
  );
};

export default Equalizer;