const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

btn.addEventListener("click", (e) => {
  coupon.select();
  coupon.setSelectionRange(0, 999999);
  navigator.clipboard.writeText(coupon.value);
  btn.textContent = "คัดลอกคูปองแล้ว!";
  setTimeout(() => {
    btn.textContent = "คัดลอก";
  }, 300);
});


const timeEL = document.querySelector(".time");
const btnToggle = document.querySelector(".toggle");

function setTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  timeEL.innerHTML = `${hours}:
  ${minutes < 10 ? "0" + minutes : minutes}:
  ${seconds < 10 ? "0" + seconds : seconds}`;
}

btnToggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "โหมดกลางคืน";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "โหมดกลางวัน";
  }
});

setTime();
setInterval(setTime, 1000);


const count = document.querySelector(".count");
const input = document.querySelector(".input");

input.addEventListener("keyup", () => {
  const characterCount = input.value.length;
  count.textContent = `${characterCount}`;
});


const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const start = +counter.innerText;
    const increment = target / 200;
    if (start < target) {
      counter.innerText = `${Math.ceil(start + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});



const openBtn=document.querySelector(".open-btn")
const closeBtn=document.querySelector(".close-btn")
const modalContainer = document.querySelector(".modal-container")

openBtn.addEventListener("click",()=>{
modalContainer.classList.add("show")
})

closeBtn.addEventListener("click",()=>{
  modalContainer.classList.remove("show")
  })

