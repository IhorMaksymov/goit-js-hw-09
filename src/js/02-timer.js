import Notiflix from 'notiflix';

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

refs.btnStart.disabled = true;
refs.btnStart.addEventListener('click', startTimer)

let timerId;
let selectedDate;
let date;

console.log(date)


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {    

    date = new Date();
        selectedDate = selectedDates[0];
        
        console.log(date)

    if (date >= selectedDate) {
        Notiflix.Notify.failure('Please choose a date in the future');
    } else if (date <= selectedDate) {
        refs.btnStart.disabled = false;
    };
    },
};
flatpickr(refs.input, options);

function startTimer() {
    timerId = setInterval(() => {
        const date = selectedDate - new Date();
        // const currentDate = selectedDate - new Date();
        // const timeValue = convertMs(currentDate);
        const timeValue = convertMs(date);
        refs.days.textContent = addLeadingZero(timeValue.days);
        refs.hours.textContent = addLeadingZero(timeValue.hours);
        refs.minutes.textContent = addLeadingZero(timeValue.minutes);
        refs.seconds.textContent = addLeadingZero(timeValue.seconds);

        if (timeValue.days === 0 && timeValue.hours === 0 && timeValue.minutes === 0 && timeValue.seconds === 0) {
            clearInterval(timerId);
            return;
        }
    }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}