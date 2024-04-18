var doc = document.getElementById("btn")
doc.addEventListener('click', function (event){
    //console.log("Button Clicked!")
    if(event.target.tagName === "BUTTON"){
        console.log("button " + event.target.innerText + " is clicked!")
    }
})