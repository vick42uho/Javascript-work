const btn = document.querySelector(".btn")
const container = document.querySelector(".container")
const messages=[
    "สวัสดียามเช้า",
    "Good Morning",
    "สวัสบ่ายๆ",
    "Hello World",
    "จะนอนแล้วก็บาย",
    "Good Night"
]
btn.addEventListener("click",()=>createNotification())

function createNotification(){
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerText=randomMessage()
    container.appendChild(notificationEl)
    setTimeout(()=>{
        notificationEl.remove()
    },3000)
}

function randomMessage(){
    return messages[Math.floor(Math.random()*messages.length)]
}
