import confetti from "canvas-confetti";

const boom = () => {
  confetti({
    particleCount: 200, // Количество частиц
    spread: 500, // Разброс
    origin: { y: 0.3, x: -0.1 }, // Откуда летит (0 - сверху, 1 - снизу)
  });

  const timer1 = setTimeout(() => {
    confetti({
      particleCount: 200, // Количество частиц
      spread: 500, // Разброс
      origin: { y: 0.3, x: 1.1 }, // Откуда летит (0 - сверху, 1 - снизу)
    });
    clearTimeout(timer1)
  }, 500)

  const timer2 = setTimeout(() => {
    confetti({
      particleCount: 200, // Количество частиц
      spread: 500, // Разброс
      origin: { y: -0.3, x: 0.5 }, // Откуда летит (0 - сверху, 1 - снизу)
    });
    clearTimeout(timer2)
  }, 1000)
}
export const launchConfetti = () => {
  boom()
};