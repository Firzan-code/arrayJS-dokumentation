const shftBtn = document.getElementById("shift-btn");
const unshftBtn = document.getElementById("unshift-btn");
const pushBtn = document.getElementById("push-btn");
const popBtn = document.getElementById("pop-btn");
const panel = document.getElementById("panel-array");
const inputData = document.getElementById("data");
const dataArray = document.querySelectorAll("p");

shftBtn.addEventListener("click", function () {
  const firstChild = panel.firstElementChild;
  if (firstChild) {
    panel.removeChild(firstChild);
  }
});

unshftBtn.addEventListener("click", function () {
  if (inputData.value.length === 0) {
    alert("Input Tidak Boleh Kosong");
    return;
  }
  const firstChild = panel.firstElementChild;
  const p = document.createElement("p");
  const textP = document.createTextNode(inputData.value);
  p.appendChild(textP);
  panel.insertBefore(p, firstChild);
});

pushBtn.addEventListener("click", function () {
  if (inputData.value.length === 0) {
    alert("Input Tidak Boleh Kosong");
    return;
  }
  const p = document.createElement("p");
  const textP = document.createTextNode(inputData.value);
  p.appendChild(textP);
  panel.appendChild(p);
  inputData.value = "";
});

popBtn.addEventListener("click", function () {
  const lastChild = panel.lastElementChild;
  if (lastChild) {
    panel.removeChild(lastChild);
  }
});
