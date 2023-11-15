
let date = new Date(`Oct 25 2023 00:00:00`);
function counts() {
   let now = new Date();
   gap = date - now;
   console.log(gap);
   let days = Math.floor(gap / 1000 / 60 / 60 / 24);
   //kol-vo mili sec delim na 1000 poluchaem secundi i dalshe delim na 60 kol minut dal 60 kol chasov i delim na 24 kol dnej
   let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
   let minutes = Math.floor(gap / 1000 / 60) % 60;
   let seconds = Math.floor(gap / 1000) % 60;
   console.log(days);
   document.querySelector('.timer_day').innerText = days;
   document.querySelector('.timer_hours').innerText = hours;
   document.querySelector('.timer_minut').innerText = minutes;
   document.querySelector('.timer_seconds').innerText = seconds;
}
counts();