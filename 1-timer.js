import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as p}from"./assets/vendor-BbSUbo7J.js";const t={startBtn:document.querySelector("[data-start]"),dataDays:document.querySelector("[data-days]"),dataHours:document.querySelector("[data-hours]"),dataMins:document.querySelector("[data-minutes]"),dataSecs:document.querySelector("[data-seconds]"),dataInput:document.querySelector("#datetime-picker")};let u=null,c=null;t.startBtn.disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const a=e[0];a<=new Date?(p.show({title:"Erorr",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",message:"Please choose a date in the future",messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:" #ef4040",position:"topRight"}),t.startBtn.disabled=!0):(u=a,t.startBtn.disabled=!1)}};h(t.dataInput,y);function S(){t.startBtn.disabled=!0,t.dataInput.disabled=!0,c=setInterval(()=>{b()},1e3)}function b(){const a=u-new Date,{days:n,hours:o,minutes:d,seconds:r}=g(a);i(n,o,d,r),a<=0&&(t.startBtn.disabled=!1,t.dataInput.disabled=!0,clearInterval(c),i(0,0,0,0))}t.startBtn.addEventListener("click",()=>{S()});function g(e){const r=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:l,minutes:m,seconds:f}}function s(e){return String(e).padStart(2,"0")}function i(e,a,n,o){t.dataDays.textContent=s(e),t.dataHours.textContent=s(a),t.dataMins.textContent=s(n),t.dataSecs.textContent=s(o)}
//# sourceMappingURL=1-timer.js.map
