var span = document.querySelector("span");
var btn = document.querySelector(".start");
var stop = document.querySelector(".stop");
var restart = document.querySelector(".restart");
var count = 0;
var id;
btn.addEventListener("click", () => {
    id = setInterval(() => {
        span.textContent = count;
        count++;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(id);
});

restart.addEventListener("click", () => {
  count = 0;
  span.textContent = count;
  clearInterval(id);
});