// auto write text for index.html
const text = "Hi, I'm Cody;  "

let index = 0;

function writeText() {
  document.getElementById("homeBtn").innerHTML = text.slice(0, index);

  index++;

  if (index > text.length - 1) {
    index = 0;
  }
}

setInterval(writeText, 300);
