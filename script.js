const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `translateY(-50%) rotate(${secondsDegree}deg)`;
  secondHand.style.transition = secondsDegree < 100 ? "unset" : "all 0.05s";
  secondHand.style.transitionTimingFunction =
    secondsDegree < 100 ? "unset" : "cubic-bezier(0.1, 2.7, 0.58, 1)";

  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `translateY(-50%) rotate(${minutesDegree}deg)`;

  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `translateY(-50%) rotate(${hoursDegree}deg)`;
};

setInterval(setDate, 1000);
