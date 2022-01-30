const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const apps = $(".apps")
const div = document.createElement('div');
const boxes = $$(".box")
const audio = $("audio")
const listNode = {
    do : "./mp3piano/Q.mp3",
    re : "./mp3piano/W.mp3",
    mi : "./mp3piano/E.mp3",
    fa : "./mp3piano/R.mp3",
    son : "./mp3piano/T.mp3",
    la : "./mp3piano/Y.mp3",
}

for (i in listNode){
    console.log(i)

}

for (let i = 0; i < 135;i++){
    const box = document.createElement('div');
    box.classList.add("box")
    apps.appendChild(box)
    box.onmouseover = changeColor
    box.onmouseout = remove
}
// 

function changeColor() {
    let color = randomColor()
    this.style.backgroundColor = color;
    this.style.boxShadow = `0px 1px 6px 0px ${color},0px -1px 6px 0px ${color},1px 0px 6px 0px ${color},-1px 0px 6px 0px ${color}`
    this.style.transition = ""
}
function remove() {
    this.style.transition = "all 2s"
    this.style.backgroundColor = ''
    this.style.boxShadow = ''
}
function randomColor(){
    let colorRandom = `rgb(${Math.ceil(Math.random() *254)},${Math.ceil(Math.random() *254)},${Math.ceil(Math.random() *254)})`
    return colorRandom
}
