const secondHand = document.querySelector(".second-hand");

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `translateY(-50%) rotate(${secondsDegree}deg)`;
};

setInterval(setDate, 1000);
