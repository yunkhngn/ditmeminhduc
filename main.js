var clickedTime = 0

//create local storage if it doesn't exist
if(localStorage.getItem("clickedCount") === null){
    localStorage.setItem("clickedCount", 0) 
}
var clickedTime = document.getElementById("clickedCount")
clickedTime.innerHTML = localStorage.getItem("clickedCount") + " lần"

function clicked(){
    var clickedTime = document.getElementById("clickedCount")
    var current = localStorage.getItem("clickedCount")
    var img = document.getElementById("img")
    var title = document.getElementById("title")

    //add rotating class to img if img doesn't have it
    img.classList.add("rotating")
    clickedTime.innerHTML = parseInt(current) + 1 + " lần"
    var currentValue = parseInt(current) + 1
    localStorage.setItem("clickedCount", currentValue)
    title.classList.add("glow")
    title.innerHTML = "Playing music"
    playMusic()
}

function playMusic(){
    var audio = document.getElementById("audio")
    audio.play();
}
console.log("loaded");