import React, { useEffect } from "react";
import styles from "./GameOver.module.css";
import { launchConfetti } from "../../utils";

const GameOver: React.FC = () => {
  useEffect(() => {
    launchConfetti();
    const interval = setInterval(() => {
      launchConfetti();
    }, 3000);

    return () => clearInterval(interval)

  }, []);

  return (
    <div className={styles.modal}>
      <h2>🎉 Игра завершена! 🎉</h2>
      <p>Поздравляем победителей!</p>
    </div>
  );
};

export default GameOver;