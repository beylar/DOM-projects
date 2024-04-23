let myDiv = document.querySelectorAll(".count");
const countDownDuration = 60;

function startCountDown (){
    let countInterval = setInterval(() => {
        if(countInterval > 0){
            countInterval--;
          updateCountDown();

        }
        else{
            clearInterval(countInterval);
            count = countDownDuration;
            updateCountDown();
        }
    })

    }
function updateCountDown(){
    let buttons = document.querySelectorAll('btn');
buttons.addEventListener('click', function (event){
    if(event.target.className === "AddFiveCount"){
        countInterval += 5

    }
    else if(event.target.className === "AddTenCount"){
        countInterval += 10
    }
    else if(event.target.className === "AddFiftenCount"){
        countInterval += 15
    }
} )
}

window.onload = startCountDown;
