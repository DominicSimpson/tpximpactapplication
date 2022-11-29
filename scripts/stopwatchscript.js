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



















