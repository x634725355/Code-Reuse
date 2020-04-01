
let arg = {
    circleLeft: 135,
    circleRight: -135,
    mark: false
}
const circleLeft = document.querySelector(".circle-left-circle");
const circleRight = document.querySelector(".circle-right-circle");

const animate = setInterval(() => {
    // console.log(arg);
    if (arg.circleRight >= 45) {
        arg.mark = true;
    } else {
        circleRight.style.transform = `rotate(${++arg.circleRight}deg)`;
    }
    arg.mark && (circleLeft.style.transform = `rotate(${++arg.circleLeft}deg)`);
    arg.circleLeft >= 315 && !(clearInterval(animate)) && (arg = { circleLeft: 135, circleRight: -135, mark: false });
}, 10);
