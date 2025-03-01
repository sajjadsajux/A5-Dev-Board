const now = new Date();
const options = {
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric",
};
document.getElementById("currentDate").innerText = now.toLocaleDateString(
  "en-US",
  options
);
