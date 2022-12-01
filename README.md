# TPXImpact Application Technical Challenges

---

## Background

---

## Part One: HTML / CSS (index.html, style.css in repository)

[View first part of application live here](https://dominicsimpson.github.io/tpximpactapplication)

### For the first part of my application for TPXImpact, I completed a mock-up of a vintage graphic design poster in HTML and CSS. This was taken from a selection provided by TPXImpact of vintage European posters. My choice was the below - 'Literature and Cultural Life, October - December 1965', at the Süddeutscher Rundfunk Stuttgart. 

![Flickr Photo Download- Hans Geipel- Prospekt f%FCr den S%FCddeutschen Rundfunk, 1965](https://user-images.githubusercontent.com/52511353/205156216-63cf4e8f-5043-4a56-8d7d-31a4f2742d66.jpg)

### And here is my final attempt at a mock-up of the image at full screen (i.e. with the browser window at maximum size).

![screenshot(5)](https://user-images.githubusercontent.com/52511353/205160770-dac72eaa-6e18-4d8a-9d9e-54f8b7c54a2d.png)

###### I gave the body a colour that approximated that of the poster as much as possible, ```rgb(248, 234, 216)```.
###### I then created eighteen columns, each delineated in the HTML with its own column ID, and with each column containing three divs for the three colour elements, or 'sections', in each column. I used mathmatical calculations to make the three sections of each column add up to 500px in the CSS, thus making the height of each column roughly the same (though there are in irregularities at the bottom of the columns).
###### I then started applying the colours in CSS. It became obvious quickly that I would have to do quite a bit of work to replicate the gradient element effects that you can see in the colours in the original. But before that, I had to try and approximate the colours generally that you can see in the original image as much as possible. My own [colour picker](https://github.com/DominicSimpson/facprecolorpicker), which I completed as a pre-course task for Founders & Coders, was useful, as was [other online colour pickers](https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF). But ultimately, using the colour pallette built into Visual Studio Code when working on CSS colours, was just as helpful.
###### For the dark colours - black and purple, the latter a dark shade of purple - I used linear-gradient effects to approximate the light tinge which hangs over these two colours in the original image.
###### Achieving the grainy, gradient element effect that appears on the lighter colours took some time to research and replicate. I used [SVGs](https://en.wikipedia.org/wiki/SVG) in the HTML to achieve this effect - the first time I have used such a format, and which involved researching the 'noise' effects that can be used with SVGs. This partially approximated with the gradients of the original. However, the process of specifying the height of the SVG effect - which in itself felt errenous, given that heights and widths should be specified in CSS - led to problems: at 100% width, the SVG effect still didn't cover the full length of some of the column sections with a substantial height, and expanding the height beyond 100% made no difference. Some examples are below:

![screenshot(6)](https://user-images.githubusercontent.com/52511353/205163670-9e95c775-e58c-4a9d-adb9-9c3816312483.png)
![screenshot(7)](https://user-images.githubusercontent.com/52511353/205163932-626c48cd-f170-4263-af26-712d3823c427.png)

###### I unfortunately ran out of time to properly research what to do in this situation, but the whole process was still a worthwhile learning experience.
###### I then used Google Fonts to test the text against different fonts, and finally settled on Public Sans as the closest to the original. However, once again, I came up against problems: in ensuring that the text is located in the correct place at full screen - just above the columns on either side (the 'Literatur und Kulturrels' etc on the left, the 'Süddeutscher Rundfunk Stuttgart' on the right) - I used margin properties in the CSS, given that other properties such as ```text-align: center``` or ```align-items: center``` wouldn't position the text correctly. If the user drags the browser window to minimise it, the text does not follow the columns in the correct appropriate position as they responsively first scale, and then wrap on a new line (which I achieved using flexbox), precisely because of those margin commands. Using media queries may have sold this issue, but once again, I sadly ran out of time.


![screenshot(8)](https://user-images.githubusercontent.com/52511353/205165645-3d0d6813-9f07-4c95-95b6-11fe341c08a0.png)

---

## Part Two: Stopwatch (stopwatch.html, stopwatchstyle.css, stopwatchscript.js in repository)

### For the second part of my TPXImpact application, I produced a stopwatch. In order to do so: I created the following variables:

| Variables                               | Description                                                       | Type                  |
| -------------                           |:-------------:                                                    | -----:                |
| [hours, minutes, seconds, milliseconds] | Array of internal units of time                                   | DOM variable          |
| timerDisplay                            | Variable for timer display block                                  | DOM variable          |
| currentInterval                         | Recorded time                                                     | Variable              |
| lapRecord                               | Stores and displays each individual lap record                    | DOM variable          |
| laps                                    | Number of each individual lap                                     | Variable              |
| lapNow                                  | Record of each lap                                                | Variable              |



