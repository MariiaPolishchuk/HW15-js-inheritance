// function Clock(clockNode, fullFormat = true) {
//     this.formatFull = fullFormat;
//     this.clockNode = clockNode;
//     clockNode.addEventListener('click', () => {
//         this.formatFull = !this.formatFull;
//     });
// }

// Clock.prototype.render = function () {
//     let time = new Date().toTimeString().split(' ')[0];

//     if (!this.formatFull) {
//         time = new Date().toTimeString().split(' ')[0].substring(0,5);
//     }

//     this.clockNode.innerHTML = time;
// }

// Clock.prototype.start = function () {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
// }

// Clock.prototype.stop = function () {
//     clearInterval(this.timer);
// }

// Clock.prototype.setFormat = function (format = 'full') {
//     this.formatFull = format === 'short' ? false : true;
// }


// function shortClock(clockNode, fullFormat) {
//     Clock.call(this, clockNode, fullFormat);
// }

// shortClock.prototype = Object.create(Clock.prototype);
// shortClock.prototype.constructor = shortClock;


// function fullClock(clockNode, fullFormat) {
//     Clock.call(this, clockNode, fullFormat);
// }

// fullClock.prototype = Object.create(Clock.prototype);
// fullClock.prototype.constructor = fullClock;

// const clock = new Clock(document.querySelector('#clock'));
// const clockShort = new shortClock(document.querySelector('#shortClock'), false);
// const clockFull = new fullClock(document.querySelector('#fullClock'))

// clock.start();
// clockShort.start();
// clockFull.start();




//

function Clock(clockNode, fullFormat = true) {
    this.formatFull = fullFormat;
    this.clockNode = clockNode;
    clockNode.addEventListener('click', () => {
        this.formatFull = !this.formatFull;
    });
}

Clock.prototype.render = function () {
    let time = new Date().toTimeString().split(' ')[0];

    if (!this.formatFull) {
        time = new Date().toTimeString().split(' ')[0].substring(0,5);
    }

    this.clockNode.innerHTML = time;
}

Clock.prototype.start = function () {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
}

Clock.prototype.stop = function () {
    clearInterval(this.timer);
}

Clock.prototype.setFormat = function (format = 'full') {
    this.formatFull = format === 'short' ? false : true;
}

function clock1(clockNode, fullFormat) {
    Clock.call(this, clockNode, fullFormat);
}

clock1.prototype = Object.create(Clock.prototype);
clock1.prototype.constructor = clock1;

function clock2(clockNode, fullFormat) {
    Clock.call(this, clockNode, fullFormat);
}

clock2.prototype = Object.create(Clock.prototype);
clock2.prototype.constructor = clock2;
;

const clock = new Clock(document.querySelector('#clock'));
const clockShort = new clock1(document.querySelector('#сlock1'), false);
const clockFull = new clock2(document.querySelector('#сlock2'))

clock.start();
clockShort.start();
clockFull.start();