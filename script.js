const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `translateY(-50%) rotate(${secondsDegree}deg)`;

  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `translateY(-50%) rotate(${minutesDegree}deg)`;
};

setInterval(setDate, 1000);
