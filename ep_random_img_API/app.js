const container = document.querySelector(".container")
const rows = 3
const cols = 3

function randomNumber(){
    return Math.floor(Math.random()*500)

}
for(let i=0;i<rows*cols;i++){
    const url = `https://source.unsplash.com/random/${randomNumber()}`
    const imageEl = document.createElement("img")
    imageEl.src=url
    container.appendChild(imageEl)
}
