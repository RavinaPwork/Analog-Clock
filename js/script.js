// ---------------Theme-toggle-------------------
function toggle(){
    const body= document.querySelector('body');
    body.classList.toggle('dark');
}

// ------------------Clock-hands-code----------------
const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
    let d = new Date();
    let hh = d.getHours()*30;
    let mm = d.getMinutes()*deg;
    let ss = d.getSeconds()*deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
});