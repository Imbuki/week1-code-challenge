let speed = parseInt(prompt("Please enter the car's speed:"));

const speedLimit = 70;
const pointsPerDemerit = 5;
const demeritThreshold = 12;

if (speed < speedLimit) {
  alert("Ok");
} else {
  let demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);

  if (demeritPoints > demeritThreshold) {
    alert("License suspended");
  } else {
    alert("Points: " + demeritPoints);
  }
}