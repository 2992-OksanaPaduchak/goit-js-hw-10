import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const refs = {
  startBtn: document.querySelector('[data-start]'),  
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMins: document.querySelector('[data-minutes]'),
    dataSecs: document.querySelector('[data-seconds]'),
  dataInput: document.querySelector('#datetime-picker')
};
let userSelectedDate = null;
let intervalTime = null;
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
   onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      iziToast.show({
          title: 'Erorr',
          titleColor: '#fff',
          titleSize: '16px',
          titleLineHeight: '24px',
          message: "Please choose a date in the future",
          messageSize: '16px',
          messageLineHeight: '24px',
          messageColor: '#fff',
          backgroundColor: ' #ef4040',
          position: 'topRight',          
                });
      refs.startBtn.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr(refs.dataInput, options);

function start() {
     refs.startBtn.disabled = true;
    refs.dataInput.disabled = true;
    intervalTime = setInterval(() => {
            tick();
      }, 1000);
}
 
function tick() {
    const currentTime = new Date();
    const ms = userSelectedDate - currentTime;
    const { days, hours, minutes, seconds } = convertMs(ms);
    timeElement(days, hours, minutes, seconds);
    if (ms <= 0) {
        refs.startBtn.disabled = false;
        refs.dataInput.disabled = true;
        clearInterval(intervalTime);
        timeElement(0, 0, 0, 0);
    }
    return;    
}

refs.startBtn.addEventListener('click', () => {    
  start();
});

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

function timeToSTR(value) { 
   return String(value).padStart(2, '0');
}

function timeElement(days, hours, minutes, seconds) {
  refs.dataDays.textContent = timeToSTR(days);
  refs.dataHours.textContent = timeToSTR(hours);
  refs.dataMins.textContent = timeToSTR(minutes);
  refs.dataSecs.textContent = timeToSTR(seconds);
}

