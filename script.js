// function to get inner text and convert to number
function getInnerTextIntoNum(id) {
  let getText = document.getElementById(id);
  let text = getText.innerText;
  let numText = parseInt(text);
  return numText;
}

// LOVE ICON functionality
let loveIcon = document.querySelectorAll(".loveicon");
for (let icon of loveIcon) {
  icon.addEventListener("click", function () {
    let heart = getInnerTextIntoNum("heart_text");
    document.getElementById("heart_text").innerText = heart + 1;
  });
}

// COPY BUTTON functionality (history এ add হবে না)
let copyBtns = document.querySelectorAll(".copy_btn");
let numbers = Array.from(document.querySelectorAll(".service_num")).map(el => el.innerText);

copyBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    // increase copy counter
    let copyTextEl = document.getElementById("copy_text");
    let copyBox = parseInt(copyTextEl.innerText);
    copyTextEl.innerText = copyBox + 1;

    // copy number to clipboard
    let copyNum = numbers[index];
    navigator.clipboard.writeText(copyNum);
    alert("Hotline number copied successfully 😊");
  });
});

// CALL BUTTON functionality
let callBtn = document.querySelectorAll(".call_btn");
let serviceNames = Array.from(document.querySelectorAll(".service_name")).map(el => el.innerText);
let serviceNums = Array.from(document.querySelectorAll(".service_num")).map(el => el.innerText);

callBtn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    let coin = getInnerTextIntoNum("coin_text");
    if (coin < 20) {
      alert("Sorry! Not enough coins 😔");
      return;
    }

    // decrease coin
    document.getElementById("coin_text").innerText = coin - 20;

    // Call alert
    let name = serviceNames[index];
    let num = serviceNums[index];
    alert("📞 Calling " + name + " " + num + "...");

    // Add to history
    addToHistory(name, num, "Called");
  });
});

// CLEAR BUTTON
document.getElementById("clear_btn").addEventListener("click", function () {
  document.getElementById("historyAbba").innerHTML = "";
});

// ADD TO HISTORY function
function addToHistory(name, num, action) {
  let historyList = document.getElementById("historyAbba");
  let date = new Date().toLocaleTimeString();

  let newChild = document.createElement("div");
  newChild.className = "flex justify-between shadow-sm p-3 mt-10 bg-white rounded w-full  lg:w-[330px]";

  newChild.innerHTML = `
    <div class="w-[60%]">
      <h1 class="text-sm mb-1 font-bold">${name}</h1>
      <p class="text-sm">${num}</p>
    </div>
    <div class="time w-[40%] flex flex-col items-end">
      <p class="text-sm text-green-600">${action}</p>
      <p class="text-sm text-gray-400">${date}</p>
    </div>
  `;

  // newest on top
  historyList.prepend(newChild);
}
