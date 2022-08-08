let set = (className, num) => $("." + className).html(`${num < 10 ? "0" : ""}${num.toFixed(0)}`);
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

  set("hours", hour);
  set("min", minute);
  set("sec", second);

  set("nhours", nhour);
  set("nmin", nminute);
  set("nsec", nsecond);
};

$(document).ready(() => {
  setInterval(() => getTime(), 1000);
});
