let set = (className, time) => $("." + className).html(`${time}`);
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

  set("oclock", hour + " : " + minute + " : " + second.toFixed(0));
  set("nclock", nhour + " : " + nminute + " : " + nsecond.toFixed(0));
};

$(document).ready(() => {
  setInterval(() => getTime(), 1000);
});
