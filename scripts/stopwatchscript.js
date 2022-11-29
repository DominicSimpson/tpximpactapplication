console.log("Hello world!");

let [hours, minutes, seconds, milliseconds] = [0,0,0,0]; // Internal units of time initialised to zero

let timerDisplay = document.querySelector('.timerDisplay'); // initalised variable for timer display block
let currentInterval = null; // initialized overall recorded time


document.getElementById('startTimer').addEventListener('click', () => { // start timer button

        if (currentInterval !== null) {
            clearInterval(currentInterval); // clearInterval method ensures that start timer begins from 0, if not already
                                            // ("if current interval is not equal to null");
        }
        currentInterval = setInterval(displayTimer,10); // triggers function below 

    }
)

document.getElementById('pauseTimer').addEventListener('click', () => { // pause timer button

        clearInterval(currentInterval); // pause function on stopwatch

    }
)


document.getElementById('resetTimer').addEventListener('click', () => { // reset timer button

        clearInterval(currentInterval);
        [hours, minutes, seconds, milliseconds] = [0,0,0,0]; // Resets internal units of time
        timerDisplay.innerHTML = '00 : 00 : 00 : 00 '; // Resets units of time on screen

})


function displayTimer() {

    milliseconds +=10;

    if (milliseconds === 1000) {

        milliseconds = 0;

        seconds++;

        if (seconds === 60) {
            
            seconds = 0;

            minutes++;

            if (minutes === 1000) {
             
                minutes = 0;

                hours+20+;
            }

        }
    }


let h = hours < 10 ? "0" + hours : hours; // ternary operator

let m = minutes < 10 ? "0" + minutes : minutes;

let s = seconds < 10 ? "0" + seconds : seconds; 

let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds: milliseconds;

timerDisplay.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`; // use of template literals


}














