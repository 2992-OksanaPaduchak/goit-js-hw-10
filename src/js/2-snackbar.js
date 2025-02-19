import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iconError from "../img/iconError.svg";
import iconOk from "../img/iconOk.svg";

const form = document.querySelector('form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const delay = Number(evt.target.delay.value);
  const state = evt.target.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay)
      }

      if (state === 'rejected') {
        reject(delay)
      }
    }, delay)
  });

  promise
    .then((delay) => {
      const message = ` Fulfilled promise in ${delay}ms`;
      console.log(message);
      iziToast.show({
        message,
        iconUrl: iconOk,
        title: 'OK',
        titleColor: '#fff',
        titleSize: '16px',
        titleLineHeight: '24px',
        messageSize: '16px',
        messageLineHeight: '24px',
        messageColor: '#fff',
        backgroundColor: '#59A10D',
        position: 'topRight',
      });
    });
    .catch (() => {
    const message = `Rejected promise in ${delay}ms`;
    console.log(message);
    iziToast.show({
      message,
      iconUrl: iconError,
      title: 'Erorr',
      titleColor: '#fff',
      titleSize: '16px',
      titleLineHeight: '24px',
      messageSize: '16px',
      messageLineHeight: '24px',
      messageColor: '#fff',
      backgroundColor: ' #ef4040',
      position: 'topRight',
    });
  });

});












//*====================================

