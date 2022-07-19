var clickedTime = 0
function clicked(){
    var clickedCount = document.getElementById("clickedCount")
    var img = document.getElementById("img")
    var title = document.getElementById("title")
    //set clickedCount to var + 1
    //add rotating class to img if img doesn't have it
    img.classList.add("rotating")
    clickedCount.innerHTML = parseInt(clickedCount.innerHTML) + 1 + " lần"
    title.classList.add("glow")
    title.innerHTML = "Playing music"
    playMusic()
}

function playMusic(){
    var audio = document.getElementById("audio")
    audio.play();
}
console.log("loaded");