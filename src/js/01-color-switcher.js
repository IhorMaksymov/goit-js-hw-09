const refs = {
    wrapp: document.querySelector('body'),
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.btnStart.addEventListener('click', () => {
    timerEve = setInterval(() => {
        refs.wrapp.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.btnStart.disabled = true;
});

refs.btnStop.addEventListener('click', () => {
    refs.btnStart.disabled = false;
    clearInterval(timerEve);
});
