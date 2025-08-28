// document.getElementById("callAbba").addEventListener("click",function(e){
//   e.preventDefault();

// const coinmainas = 20

// const coinmain = parseInt(document.getElementById("coinAbba").innerText)

// const mainkatacoin = coinmain - coinmainas

// document.getElementById("coinAbba").innerText=mainkatacoin


// if (mainkatacoin >= 0) {
//     document.getElementById("coinAbba").innerText = mainkatacoin;
//     alert("calling someone");
//   } else {
//     alert("you have no money");
//   }


// })





// document.getElementById("callAbba").addEventListener("click", function (e) {
//   e.preventDefault();

//   // উপরের টেক্সট থেকে নেওয়া
//   const emaejasyNameAbb = document.getElementById("nameEmarjansy").innerText;
//   const emarjansyNumberAbb = document.getElementById("emarjansyNumber").innerText;

//   // history তে বসানো
//   const historyPage = document.getElementById("historyAbba");

//   // নতুন লাইন বানিয়ে অ্যাড করা
//   const p = document.createElement("p");
//   p.innerText = `📞 ${emaejasyNameAbb} - ${emarjansyNumberAbb}`;
//   historyPage.appendChild(p);
// });








document.getElementById("callAbba").addEventListener("click", function (e) {
  e.preventDefault();

  // === 1. Coin কমানো ===
  const coinmainas = 20;
  const coinmain = parseInt(document.getElementById("coinAbba").innerText);
  const mainkatacoin = coinmain - coinmainas;

  if (mainkatacoin >= 0) {
    document.getElementById("coinAbba").innerText = mainkatacoin;
    alert("calling someone");

    // === 2. History তে নাম্বার বসানো ===
    const emaejasyNameAbb = document.getElementById("nameEmarjansy").innerText;
    const emarjansyNumberAbb = document.getElementById("emarjansyNumber").innerText;

    const historyPage = document.getElementById("historyAbba");
    const p = document.createElement("p");
    p.innerText = `${emaejasyNameAbb} 
      ${emarjansyNumberAbb}`;
    historyPage.appendChild(p);

  } else {
    alert("you have no money");
  }
});
