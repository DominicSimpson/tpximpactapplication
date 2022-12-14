console.log("Hello world!");

let [hours, minutes, seconds, centiseconds] = [0,0,0,0]; // Internal units of time initialised to zero

let timerDisplay = document.querySelector('.timerDisplay'); // initalised variable for timer display block
let currentInterval = null; // initialized overall recorded time
let lapRecord = document.getElementById('lapRecord');
let laps = 1; // initalizing number of laps
let lapNow = null; // initialized record of laps


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
        [hours, minutes, seconds, centiseconds] = [0,0,0,0]; // Resets internal units of time
        timerDisplay.innerHTML = '00 : 00 : 00 : 00 '; // Resets units of time on screen

})

document.getElementById('lapTimer').addEventListener('click', () => { // lap timer button

        lapNow = `<div class="lap">${laps }. ${hours} : ${minutes} : ${seconds} : ${centiseconds}</div>`;
        lapRecord.innerHTML += lapNow;
        laps++; // displays each lap in numerical order, starting from 1
}
)

document.getElementById('clearLapTimer').addEventListener('click', () => { // lap timer button

        lapRecord.innerHTML = '';   
        laps = 1; // ensures that any further laps are displayed in numerical order starting from 1 again            
}
)


function displayTimer() {

    centiseconds +=10;

    if (centiseconds === 1000) {

        centiseconds = 0;

        seconds++;

        if (seconds === 60) {
            
            seconds = 0;

            minutes++;

            if (minutes === 60) {
             
                minutes = 0;

                hours++;
            }

        }
    }


let h = hours < 10 ? "0" + hours : hours; // ternary operator used to show digits in timer

let m = minutes < 10 ? "0" + minutes : minutes;

let s = seconds < 10 ? "0" + seconds : seconds; 

let cs = centiseconds < 10 ? "00" + centiseconds : centiseconds < 100 ? "0" + centiseconds: centiseconds;

timerDisplay.innerHTML = ` ${h} : ${m} : ${s} : ${cs}`; // use of template literals when matching units of time with those on screen


}














