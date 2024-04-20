var doc = document.getElementById("btn")
doc.addEventListener('click', function (event){
    //console.log("Button Clicked!")
    if(event.target.tagName === "BUTTON"){
        console.log("button " + event.target.innerText + " is clicked!")
    }
});
//new clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();