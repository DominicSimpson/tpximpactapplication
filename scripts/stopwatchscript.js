console.log("Hello world!");

let [hours, minutes, seconds, milliseconds] = 0; // Units of time initialised to zero

let timerDisplay = document.querySelector('.timerDisplay'); // initalised variable for timer display block

let currentInterval = null; // initialized overall recorded time

document.getElementById('startTimer').addEventListener('click', () => { // start timer

        if (currentInterval !== null) {
            clearInterval(currentInterval); // clearInterval method ensures that start timer begins from 0, if not already
                                            // ("if current interval is not equal to null");
        }
        currentInterval = setInterval(displayTimer,10); 

    }
)


document.getElementById('pauseTimer').addEventListener('click', () => {

        clearInterval(currentInterval); // pause function on stopwatch

    }
)





