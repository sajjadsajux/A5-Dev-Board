document.getElementById("discover-btn").addEventListener("click", function () {
  window.location.href = "../A5-Dev-Board/blogs.html";
});

const now = new Date();
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
};
document.getElementById("currentDate").innerText = now.toLocaleDateString(
  "en-US",
  options
);

const taskCount = document.getElementById("taskCount");
let clickedButtons = 0;
const taskCountAdd = document.getElementById("taskCountAdd");
const msgBox = document.getElementById("msgBox");

function handleClick(buttonId) {
  const btn = document.getElementById(buttonId);
  let ntaskCount = parseInt(taskCount.innerText);
  let sum = ntaskCount - 1;
  taskCount.innerText = sum;

  let ntaskCountAdd = parseInt(taskCountAdd.innerText);
  let sum2 = ntaskCountAdd + 1;
  taskCountAdd.innerHTML = sum2;

  const now = new Date();
  const timeNow = now.toLocaleTimeString();

  const p = document.createElement("p");
  p.innerText = `
  You Have Completed the task at ${timeNow}
  
  `;
  msgBox.appendChild(p);

  btn.disabled = true;

  alert("Board Updated Successfully");
  clickedButtons++;
  if (clickedButtons === 6) {
    alert("Congratss, You've successfully complete all the pending task");
  }
}

document.getElementById("btnSix").addEventListener("click", function () {
  handleClick("btnSix");
});
document.getElementById("btnFive").addEventListener("click", function () {
  handleClick("btnFive");
});
document.getElementById("btnFour").addEventListener("click", function () {
  handleClick("btnFour");
});
document.getElementById("btnThree").addEventListener("click", function () {
  handleClick("btnThree");
});
document.getElementById("btnTwo").addEventListener("click", function () {
  handleClick("btnTwo");
});
document.getElementById("btnOne").addEventListener("click", function () {
  handleClick("btnOne");
});
