let setClock = (className, time) => $("." + className).html(`${time}`);
let setTime = (h, m, s) => `${h < 10 ? "0" : ""}${h} : ${m < 10 ? "0" : ""}${m} : ${s < 10 ? "0" : ""}${s.toFixed(0)}`;
let getTime = () => {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let totalSec = hour * 3600 + minute * 60 + second;
  let ntotalSec = (totalSec / 86400) * 1000000;
  let nhourRemain = ntotalSec % 10000;
  let nhour = (ntotalSec - nhourRemain) / 10000;
  let nminuteRemain = nhourRemain % 100;
  let nminute = (nhourRemain - nminuteRemain) / 100;
  let nsecond = nminuteRemain;

  setClock("oclock", setTime(hour, minute, second));
  setClock("nclock", setTime(nhour, nminute, nsecond));
};

$(document).ready(() => {
  setInterval(() => getTime(), 1000);
});
