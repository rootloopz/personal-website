// auto write text for index.html
const text = "Hi, I'm Cody;  "

let index = 0;

function writeText () {
  document.getElementById("homeBtn").innerHTML = text.slice(0, index);

  index++;

  if(index > text.length - 1) {
    index = 0;
  }
}

setInterval(writeText, 300);


// WakaTime embedded json stuff

$.ajax({
    type: 'GET',
    url: 'https://wakatime.com/share/@1f3e5ab8-5278-4e95-bdc3-0c136d039366/41a99696-d566-4661-ba42-4ca00aa973fd.json',
    dataType: 'jsonp',
    success: function(response) {
      document.getElementById("arrayZero").innerHTML = response.data[0].name;
      document.getElementById("arrayZeroPer").innerHTML = response.data[0].percent + "%";
      document.getElementById("arrayOne").innerHTML = response.data[1].name;
      document.getElementById("arrayOnePer").innerHTML = response.data[1].percent + "%";
      document.getElementById("arrayTwo").innerHTML = response.data[2].name;
      document.getElementById("arrayTwoPer").innerHTML = response.data[2].percent + "%";
    },
  });




  $.ajax({
    type: 'GET',
    url: 'https://wakatime.com/share/@1f3e5ab8-5278-4e95-bdc3-0c136d039366/4c7f2f65-20cf-4098-bbde-a90c33787352.json',
    dataType: 'jsonp',
    success: function(response) {
      let totalTime = response.data[0].grand_total.total_seconds + response.data[1].grand_total.total_seconds + response.data[2].grand_total.total_seconds + response.data[3].grand_total.total_seconds + response.data[4].grand_total.total_seconds + response.data[5].grand_total.total_seconds + response.data[6].grand_total.total_seconds;

      let newTotal = new Date(totalTime * 1000).toISOString().substr(11, 8);
        document.getElementById('totalTime').innerHTML = newTotal;
    

    },
  });