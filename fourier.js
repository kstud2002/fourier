//Variablendeklaration
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var intervalGameLoop;

//Custom
var signalsX = [];
var signalsY = [];
var fourierX;
var fourierY;
var path = [];
var det;
var shape;
var drawing = [
    //unten links --> oben links
    { x: -100, y: 100 },
    { x: -100, y: 90 },
    { x: -100, y: 80 },
    { x: -100, y: 70 },
    { x: -100, y: 60 },
    { x: -100, y: 50 },
    { x: -100, y: 40 },
    { x: -100, y: 30 },
    { x: -100, y: 20 },
    { x: -100, y: 10 },
    { x: -100, y: 0 },
    { x: -100, y: -10 },
    { x: -100, y: -20 },
    { x: -100, y: -30 },
    { x: -100, y: -40 },
    { x: -100, y: -50 },
    { x: -100, y: -60 },
    { x: -100, y: -70 },
    { x: -100, y: -80 },
    { x: -100, y: -90 },
    //oben links --> oben Rechts
    { x: -100, y: -100 },
    { x: -90, y: -100 },
    { x: -80, y: -100 },
    { x: -70, y: -100 },
    { x: -60, y: -100 },
    { x: -50, y: -100 },
    { x: -40, y: -100 },
    { x: -30, y: -100 },
    { x: -20, y: -100 },
    { x: -10, y: -100 },
    { x: 0, y: -100 },
    { x: 10, y: -100 },
    { x: 20, y: -100 },
    { x: 30, y: -100 },
    { x: 40, y: -100 },
    { x: 50, y: -100 },
    { x: 60, y: -100 },
    { x: 70, y: -100 },
    { x: 80, y: -100 },
    { x: 90, y: -100 },
    //oben Rechts --> unten links
    { x: 100, y: -100 },
    { x: 90, y: -90 },
    { x: 80, y: -80 },
    { x: 70, y: -70 },
    { x: 60, y: -60 },
    { x: 50, y: -50 },
    { x: 40, y: -40 },
    { x: 30, y: -30 },
    { x: 20, y: -20 },
    { x: 10, y: -10 },
    { x: 0, y: 0 },
    { x: -10, y: 10 },
    { x: -20, y: 20 },
    { x: -30, y: 30 },
    { x: -40, y: 40 },
    { x: -50, y: 50 },
    { x: -60, y: 60 },
    { x: -70, y: 70 },
    { x: -80, y: 80 },
    { x: -90, y: 90 },
    //unten links --> unten rechts
    { x: -100, y: 100 },
    { x: -90, y: 100 },
    { x: -80, y: 100 },
    { x: -70, y: 100 },
    { x: -60, y: 100 },
    { x: -50, y: 100 },
    { x: -40, y: 100 },
    { x: -30, y: 100 },
    { x: -20, y: 100 },
    { x: -10, y: 100 },
    { x: 0, y: 100 },
    { x: 10, y: 100 },
    { x: 20, y: 100 },
    { x: 30, y: 100 },
    { x: 40, y: 100 },
    { x: 50, y: 100 },
    { x: 60, y: 100 },
    { x: 70, y: 100 },
    { x: 80, y: 100 },
    { x: 90, y: 100 },
    //unten rechts --> oben links
    { x: 100, y: 100 },
    { x: 90, y: 90 },
    { x: 80, y: 80 },
    { x: 70, y: 70 },
    { x: 60, y: 60 },
    { x: 50, y: 50 },
    { x: 40, y: 40 },
    { x: 30, y: 30 },
    { x: 20, y: 20 },
    { x: 10, y: 10 },
    { x: 0, y: 0 },
    { x: -10, y: -10 },
    { x: -20, y: -20 },
    { x: -30, y: -30 },
    { x: -40, y: -40 },
    { x: -50, y: -50 },
    { x: -60, y: -60 },
    { x: -70, y: -70 },
    { x: -80, y: -80 },
    { x: -90, y: -90 },
    { x: -100, y: -100 },
    //Dach
    { x: -90, y: -110 },
    { x: -80, y: -120 },
    { x: -70, y: -130 },
    { x: -60, y: -140 },
    { x: -50, y: -150 },
    { x: -40, y: -160 },
    { x: -30, y: -170 },
    { x: -20, y: -180 },
    { x: -10, y: -190 },
    { x: 0, y: -200 },
    { x: 10, y: -190 },
    { x: 20, y: -180 },
    { x: 30, y: -170 },
    { x: 40, y: -160 },
    { x: 50, y: -150 },
    { x: 60, y: -140 },
    { x: 70, y: -130 },
    { x: 80, y: -120 },
    { x: 90, y: -110 },
    { x: 100, y: -100 },
    //oben rechts --> unten rechts
    { x: 100, y: -90 },
    { x: 100, y: -80 },
    { x: 100, y: -70 },
    { x: 100, y: -60 },
    { x: 100, y: -50 },
    { x: 100, y: -40 },
    { x: 100, y: -30 },
    { x: 100, y: -20 },
    { x: 100, y: -10 },
    { x: 100, y: 0 },
    { x: 100, y: 10 },
    { x: 100, y: 20 },
    { x: 100, y: 30 },
    { x: 100, y: 40 },
    { x: 100, y: 50 },
    { x: 100, y: 60 },
    { x: 100, y: 70 },
    { x: 100, y: 80 },
    { x: 100, y: 90 },
    { x: 100, y: 100 },
    //unten rechts --> unten links
    { x: 90, y: 100 },
    { x: 80, y: 100 },
    { x: 70, y: 100 },
    { x: 60, y: 100 },
    { x: 50, y: 100 },
    { x: 40, y: 100 },
    { x: 30, y: 100 },
    { x: 20, y: 100 },
    { x: 10, y: 100 },
    { x: 0, y: 100 },
    { x: -10, y: 100 },
    { x: -20, y: 100 },
    { x: -30, y: 100 },
    { x: -40, y: 100 },
    { x: -50, y: 100 },
    { x: -60, y: 100 },
    { x: -70, y: 100 },
    { x: -80, y: 100 },
    { x: -90, y: 100 },
];
var xy = false;

//Square and Stair
var r = 100;
var radius;
var time = 0;
var wave = [];
var maxArr = 500;
var t = 0.05;
var pixelate = false;

var x,
    y;

var xoffset,
    yoffset;

var prevx,
    prevy;

var n;
var s = 1;

var grid = 20;

var container = document.getElementById("sliderbox");
var waveContent = document.getElementById("waveSliders").innerHTML;
var customContent = document.getElementById("customSliders").innerHTML;
var drawContent = document.getElementById("drawButtons").innerHTML;

var sliderN = document.getElementById("number");
var outputN = document.getElementById("outputN");
var perfect = document.getElementById("perfect");
var divN = document.getElementById("numberSlider")

var sliderR = document.getElementById("radius");
var outputR = document.getElementById("outputR");
var divR = document.getElementById("radiusSlider")

var sliderS = document.getElementById("speed");
var outputS = document.getElementById("outputS");

var sliderCS = document.getElementById("customSpeed");
var outputCS = document.getElementById("outputCS");

var sliderD = document.getElementById("detail");
var outputD = document.getElementById("outputD");
var divD = document.getElementById("customSlider")

var sliderShape = document.getElementById("shape");
var outputShape = document.getElementById("outputShape");
var divShape = document.getElementById("shapeSlider");

var clearButton = document.getElementById("clearButton");
var saveButton = document.getElementById("saveButton");

//Initialisierungsmethode
function initGame() {

    canvas.width = document.documentElement.clientWidth / 2.375;
    if (canvas.width <= 200) {
        canvas.width = document.documentElement.clientWidth;
    }
    canvas.height = canvas.width / 4 * 3;
    xoffset = canvas.width / 3.2;
    yoffset = canvas.height / 2;
    updateSliders("init");
    container.innerHTML = null;
    intervalGameLoop = setInterval(gameLoop, 20);
    ctx.translate(xoffset, yoffset);
    outputN.innerHTML = sliderN.value;
    outputR.innerHTML = sliderR.value;
    outputS.innerHTML = sliderS.value;
    outputD.innerHTML = sliderD.value;
    outputCS.innerHTML = sliderCS.value;
    outputShape.innerHTML = sliderShape.value;
    det = parseInt(sliderD.value);
    shape = sliderShape.value;

    refresh();

}

function refresh() {
    if (xy) {
        signalsX.splice(0, signalsX.length);
        signalsY.splice(0, signalsY.length);
        for (let i = 0; i < drawing.length; i += det) {
            signalsX.push(drawing[i].x - xoffset);
            signalsY.push(drawing[i].y);
        }

        fourierX = dft(signalsX);
        fourierX.sort((a, b) => b.amp - a.amp);
        fourierY = dft(signalsY);
        fourierY.sort((a, b) => b.amp - a.amp);

    } else {
        signalsX.splice(0, signalsX.length);
        for (let i = 0; i < drawing.length; i += det) {
            const c = new Complex(drawing[i].x, drawing[i].y);
            signalsX.push(c);
        }
        fourierX = dft(signalsX);
        fourierX.sort((a, b) => b.amp - a.amp);
    }

}


//Gameloop
function gameLoop() {
    xoffset = canvas.width / 3.2;
    yoffset = canvas.height / 2;
    ctx.fillStyle = "white";
    ctx.fillRect(-xoffset, -yoffset, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    if (pixelate) {
        ctx.lineWidth = grid / 2;
    } else {
        ctx.lineWidth = 1;
    }

    ctx.strokeStyle = "#000000"

    if (document.getElementById("square").checked || document.getElementById("stair").checked) {
        if (perfect.checked) {
            s = 1000;
            sliderN.disabled = true;
        } else {
            s = sliderN.value;
            sliderN.disabled = false;
        }
    }

    if (document.getElementById("square").checked) {
        if (container.innerHTML == customContent || container.innerHTML == "" || container.innerHTML == drawContent) {
            container.innerHTML = waveContent;
            updateSliders("square");
            time = 0;
        }
        outputN.innerHTML = sliderN.value;
        outputR.innerHTML = sliderR.value;
        outputS.innerHTML = Math.round(sliderS.value * 100 * 100) / 10;

        drawSquare();
        //debugger;
        if (pixelate) {
            drawGrid(grid);
        }

        waveContent = container.innerHTML;

    } else if (document.getElementById("stair").checked) {
        if (container.innerHTML == customContent || container.innerHTML == "" || container.innerHTML == drawContent) {
            container.innerHTML = waveContent;
            updateSliders("stair");
            time = 0;
        }
        outputN.innerHTML = sliderN.value;
        outputR.innerHTML = sliderR.value;
        outputS.innerHTML = Math.round(sliderS.value * 100 * 100) / 10;

        r = r * 2;
        drawStairs();
        r = r * 0.5;

        if (pixelate) {
            drawGrid(grid);
        }

        waveContent = container.innerHTML;

    } else if (document.getElementById("custom1").checked) {
        if (container.innerHTML == waveContent || container.innerHTML == "" || container.innerHTML == drawContent || xy) {
            container.innerHTML = customContent;
            updateSliders("custom1");
            xy = false;
            refresh();
            time = 0;
            drawing.forEach(element => {
                element.x = Math.round(element.x / 800 * canvas.width);
                element.y = Math.round(element.y / 800 * canvas.width);
            });
        }
        outputShape.innerHTML = sliderShape.value;
        outputCS.innerHTML = sliderCS.value;
        outputD.innerHTML = sliderD.value;

        drawCustom();

        if (pixelate) {
            drawGrid(grid);
        }

        customContent = container.innerHTML;
    }
    else if (document.getElementById("custom2").checked) {
        if (container.innerHTML == waveContent || container.innerHTML == "" || container.innerHTML == drawContent || !xy) {
            container.innerHTML = customContent;
            updateSliders("custom2");
            xy = true;
            refresh();
            time = 0;
            drawing.forEach(element => {
                element.x = Math.round(element.x / 800 * canvas.width);
                element.y = Math.round(element.y / 800 * canvas.width);

            });
        }
        outputShape.innerHTML = sliderShape.value;
        outputCS.innerHTML = sliderCS.value;
        outputD.innerHTML = sliderD.value;

        drawCustom();

        if (pixelate) {
            drawGrid(grid);
        }

        customContent = container.innerHTML;
    }
    else if (document.getElementById("draw").checked) {
        if (container.innerHTML == waveContent || container.innerHTML == "" || container.innerHTML == customContent) {
            container.innerHTML = drawContent;
            clearCanvas();
            updateSliders("draw");
            clearButton.disabled = true;
            saveButton.disabled = true;
        }
        customDrawing();

        if (pixelate) {
            drawGrid(grid);
        }

        drawContent = container.innerHTML;
    }
}

function dft(x) {
    var X = [];
    const N = x.length;
    if (xy) {
        for (let k = 0; k < N; k++) {
            var re = 0;
            var im = 0;
            for (let n = 0; n < N; n++) {
                const phi = (2 * Math.PI * k * n) / N;
                re += x[n] * Math.cos(phi);
                im -= x[n] * Math.sin(phi);
            }
            re = re / N;
            im = im / N;

            var freq = k;
            var amp = Math.sqrt(re * re + im * im);
            var phase = Math.atan2(im, re);

            X[k] = { re, im, freq, amp, phase };
        }
    } else {
        for (let k = 0; k < N; k++) {
            let sum = new Complex(0, 0);
            for (let n = 0; n < N; n++) {
                const phi = (2 * Math.PI * k * n) / N;
                const c = new Complex(Math.cos(phi), -Math.sin(phi));
                sum.add(x[n].mult(c));
            }
            sum.re = sum.re / N;
            sum.im = sum.im / N;

            var freq = k;
            var amp = Math.sqrt(sum.re * sum.re + sum.im * sum.im);
            var phase = Math.atan2(sum.im, sum.re);

            X[k] = { re: sum.re, im: sum.im, freq, amp, phase };
        }
    }
    return X;
}

function epiCycles(x, y, rotation, fourier) {
    for (let i = 0; i < fourier.length; i++) {
        prevx = x;
        prevy = y;
        n = fourier[i].freq;
        radius = fourier[i].amp;
        x += radius * Math.cos(n * time + fourier[i].phase + rotation);
        y += radius * Math.sin(n * time + fourier[i].phase + rotation);

        ctx.strokeStyle = "#999";
        ctx.beginPath();
        ctx.arc(prevx, prevy, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.strokeStyle = "#999";
        ctx.beginPath();
        ctx.moveTo(prevx, prevy);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.strokeStyle = "#000";
    }
    let v = { x, y };
    return v;
}

function drawCustom() {
    x = 0;
    y = 0;
    if (xy) {
        let vxx = Math.round(epiCycles(yoffset, -xoffset, 0, fourierX).x);
        let vyy = Math.round(epiCycles(-yoffset / 1.5, xoffset / 2.5, Math.PI / 2, fourierY).y);
        let vxy = Math.round(epiCycles(yoffset, -xoffset, 0, fourierX).y);
        let vyx = Math.round(epiCycles(-yoffset / 1.5, xoffset / 2.5, Math.PI / 2, fourierY).x);
        let v = { vxx, vyy };
        path.unshift(v);

        ctx.beginPath();
        ctx.moveTo(vxx, vxy);
        ctx.lineTo(v.vxx, v.vyy);
        ctx.moveTo(vyx, vyy);
        ctx.lineTo(v.vxx, v.vyy);
        ctx.stroke();

        for (i = 0; i < path.length; i++) {
            ctx.beginPath();
            ctx.arc(path[i].vxx, path[i].vyy, 0.5, 0, 2 * Math.PI);
            if (i >= 1) {
                ctx.moveTo(path[i - 1].vxx, path[i - 1].vyy);
            }
            ctx.lineTo(path[i].vxx, path[i].vyy);
            ctx.stroke();
        }
    } else {
        let v = epiCycles(0, 0 / 2, 0, fourierX);
        path.unshift(v);

        for (i = 0; i < path.length; i++) {
            ctx.beginPath();
            ctx.arc(path[i].x, path[i].y, 0.5, 0, 2 * Math.PI);
            if (i >= 1) {
                ctx.moveTo(path[i - 1].x, path[i - 1].y);
            }
            ctx.lineTo(path[i].x, path[i].y);
            ctx.stroke();
        }
    }

    const dt = 2 * Math.PI / fourierX.length / shape;
    time += dt;

    while (path.length > (drawing.length / parseInt(sliderD.value) * shape) + 1) {
        path.pop();
    }
}

function drawStairs() {
    x = 0;
    y = 0;

    for (let i = 1; i <= s; i++) {
        prevx = x;
        prevy = y;
        if (n % 2 == 0) {
            n = i;
        } else {
            n = -i;
        }
        radius = r * (2 / (n * Math.PI));
        x += radius * Math.cos(n * time);
        y += radius * Math.sin(n * time);

        if (radius < 0) {
            radius = radius * -1;
        }

        ctx.beginPath();
        ctx.arc(prevx, prevy, radius, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();

        ctx.moveTo(prevx, prevy);
        ctx.lineTo(x, y);
        ctx.stroke();

        //ctx.beginPath();
        //ctx.arc(x, y, 5, 0, 2 * Math.PI);
        //ctx.fill();
    }


    wave.unshift(y);

    ctx.beginPath();
    ctx.moveTo(r, wave[0]);
    ctx.lineTo(x, y);
    ctx.stroke();

    for (var i = 0; i < wave.length; i++) {
        ctx.beginPath();
        ctx.arc(i + r, wave[i], 0.5, 0, 2 * Math.PI);
        ctx.lineTo(i + r, wave[i + 1]);
        ctx.stroke();
    }

    time -= t;

    if (wave.length > maxArr) {
        wave.pop();
    }
}

function drawSquare() {
    x = 0;
    y = 0;

    for (let i = 0; i < s; i++) {
        prevx = x;
        prevy = y;
        n = i * 2 + 1;
        radius = r * (4 / (n * Math.PI));
        x += radius * Math.cos(n * time);
        y += radius * Math.sin(n * time);

        ctx.beginPath();
        ctx.arc(prevx, prevy, radius, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(prevx, prevy);
        ctx.lineTo(x, y);
        ctx.stroke();

        //ctx.beginPath();
        //ctx.arc(x, y, 5, 0, 2 * Math.PI);
        //ctx.fill();
    }
    wave.unshift(y);

    ctx.beginPath();
    ctx.moveTo(r * 2, wave[0]);
    ctx.lineTo(x, y);
    ctx.stroke();

    for (var i = 0; i < wave.length; i++) {
        ctx.beginPath();
        ctx.arc(i + r * 2, wave[i], 0.5, 0, 2 * Math.PI);

        ctx.lineTo(i + r * 2, wave[i + 1]);
        ctx.stroke();

    }

    time += t;

    if (wave.length > maxArr) {
        wave.pop();
    }
}
var arrDrawing = [];
var isDrawable = true;
var mouseX,
    mouseY;

function customDrawing() {
    ctx.lineWidth = 5;
    if (isDrawable) {
        canvas.onmousedown = function () {
            canvas.onmousemove = function (event) {
                mouseX = event.clientX;
                mouseY = event.clientY;
                mouseX -= canvas.offsetLeft + xoffset;
                mouseY -= canvas.offsetTop + yoffset;

                var coor = "X coords: " + mouseX + ", Y coords: " + mouseY;

                if (arrDrawing.length < 1000) {
                    arrDrawing.push({ x: mouseX, y: mouseY });
                    if (Math.abs(arrDrawing[0].x - mouseX) <= 3 && Math.abs(arrDrawing[0].y - mouseY) <= 3 && arrDrawing.length > 5) {
                        clearButton.disabled = false;
                        saveButton.disabled = false;
                        isDrawable = false;
                        canvas.onmousemove = null;
                        canvas.onmousedown = null;
                        canvas.onmouseleave = null;
                        canvas.onmouseup = null;
                    }
                    //console.log(coor);
                } else {
                    console.log("full");
                }
            };
            canvas.onmouseleave = function () {
                clearButton.disabled = false;
                saveButton.disabled = false;
                isDrawable = false;
                canvas.onmousemove = null;
                canvas.onmousedown = null;
                canvas.onmouseleave = null;
                canvas.onmouseup = null;
                console.log("leave")
            }
            canvas.onmouseup = function () {
                clearButton.disabled = false;
                saveButton.disabled = false;
                isDrawable = false;
                canvas.onmousemove = null;
                canvas.onmousedown = null;
                canvas.onmouseleave = null;
                canvas.onmouseup = null;
                console.log("up")
            }
        };
        canvas.ontouchstart = function () {
            canvas.ontouchmove = function (event) {
                touchX = event.targetTouches[0].clientX;
                touchY = event.targetTouches[0].clientY;
                touchX -= canvas.offsetLeft + xoffset;
                touchY -= canvas.offsetTop + yoffset;

                var coor = "X coords: " + touchX + ", Y coords: " + touchY;

                if (arrDrawing.length < 1000) {
                    arrDrawing.push({ x: touchX, y: touchY });
                    if (Math.abs(arrDrawing[0].x - touchX) <= 3 && Math.abs(arrDrawing[0].y - touchY) <= 3 && arrDrawing.length > 5) {
                        clearButton.disabled = false;
                        saveButton.disabled = false;
                        isDrawable = false;
                        canvas.ontouchstart = null;
                        canvas.ontouchstart = null;
                        canvas.ontouchend = null;
                        canvas.ontouchcancel = null;
                    }
                    //console.log(coor);
                } else {
                    console.log("full");
                }
            };
            canvas.ontouchcancel = function () {
                clearButton.disabled = false;
                saveButton.disabled = false;
                isDrawable = false;
                canvas.ontouchstart = null;
                canvas.ontouchmove = null;
                canvas.ontouchend = null;
                canvas.ontouchcancel = null;
                console.log("cancel")
            }
            canvas.ontouchend = function () {
                clearButton.disabled = false;
                saveButton.disabled = false;
                isDrawable = false;
                canvas.ontouchstart = null;
                canvas.ontouchmove = null;
                canvas.ontouchend = null;
                canvas.ontouchcancel = null;
                console.log("end")
            }
        };
    }
    for (let i = 1; i < arrDrawing.length; i++) {
        ctx.beginPath();
        ctx.arc(arrDrawing[i - 1].x, arrDrawing[i - 1].y, 0.5, 0, 2 * Math.PI);
        ctx.lineTo(arrDrawing[i].x, arrDrawing[i].y);
        ctx.stroke();
    }
    ctx.lineWidth = 1;
}

function clearCanvas() {
    arrDrawing.splice(0, arrDrawing.length);
    isDrawable = true;
    clearButton.disabled = true;
    saveButton.disabled = true;
};

function save() {
    drawing = arrDrawing;
    time = 0;

    refresh();

    document.getElementById("custom1").checked = true;
    document.getElementById("draw").checked = false;
};

function updateSliders(s) {
    console.log(s);

    if (s == "custom1" || s == "custom2") {
        sliderCS = document.getElementById("customSpeed");
        outputCS = document.getElementById("outputCS");

        sliderD = document.getElementById("detail");
        outputD = document.getElementById("outputD");
        divD = document.getElementById("customSlider")

        sliderShape = document.getElementById("shape");
        outputShape = document.getElementById("outputShape");
        divShape = document.getElementById("shapeSlider");
    } else if (s == "draw") {
        clearButton = document.getElementById("clearButton");
        saveButton = document.getElementById("saveButton");
    } else {
        sliderN = document.getElementById("number");
        outputN = document.getElementById("outputN");
        perfect = document.getElementById("perfect");
        divN = document.getElementById("numberSlider")

        sliderR = document.getElementById("radius");
        outputR = document.getElementById("outputR");
        divR = document.getElementById("radiusSlider")

        sliderS = document.getElementById("speed");
        outputS = document.getElementById("outputS");
    }

    sliderR.max = Math.round(canvas.height / 4);
    sliderR.min = Math.round(canvas.height / 12);
    sliderR.value = Math.round(sliderR.max / 2);
    r = sliderR.value;

    sliderShape.oninput = function () {
        time = 0;
        outputShape.innerHTML = this.value;
        shape = this.value;
    }

    sliderN.oninput = function () {
        outputN.innerHTML = this.value;
        s = this.value;
    }

    sliderR.oninput = function () {
        outputR.innerHTML = this.value;
        r = this.value;
    }

    sliderS.oninput = function () {
        outputS.innerHTML = Math.round(this.value * 100 * 100) / 10;
        t = parseFloat(this.value);
    }

    sliderCS.oninput = function () {
        outputCS.innerHTML = this.value;
        clearInterval(intervalGameLoop);
        intervalGameLoop = setInterval(gameLoop, (this.value - 100) * -1);
    }

    sliderD.oninput = function () {
        time = 0;
        outputD.innerHTML = this.value;
        det = parseInt(this.value);

        refresh();

        drawCustom();
    }
}

var d;
var total;
var side;

function drawGrid(grid) {

    side = grid;

    for (let ci = 0; ci < canvas.width; ci += side) {
        for (let cj = 0; cj < canvas.height; cj += side) {
            d = ctx.getImageData(ci, cj, side, side).data;

            total = 0;
            d.forEach(element => {
                total += element;
            });

            var avg = total / d.length;

            ctx.fillStyle = "rgba(" + avg + "," + avg + "," + avg + "," + (255) + ")";
            ctx.fillRect(ci - xoffset, cj - yoffset, side, side);

            //console.log("(" + ci + "/" + cj + ")");
            //console.log(avg);
        }
    }
    ctx.lineWidth = 1;

    for (let i = -xoffset; i < canvas.width; i += side) {
        for (let j = -yoffset; j < canvas.height; j += side) {
            ctx.beginPath();
            ctx.strokeStyle = "#aaaaaa";
            ctx.rect(i, j, side, side);
            ctx.stroke();
        }
    }

    console.log("finish");
    //debugger;
}

class Complex {
    constructor(a, b) {
        this.re = a;
        this.im = b;
    }

    add(c) {
        this.re += c.re;
        this.im += c.im;
    }

    mult(c) {
        const re = this.re * c.re - this.im * c.im;
        const im = this.re * c.im + this.im * c.re;
        return new Complex(re, im);
    }
}

function secret() {
    if (pixelate) {
        pixelate = false;
    } else {
        grid = Math.floor(Math.random() * 50) + 10;
        pixelate = true;
    }
}

