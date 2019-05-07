
// let countDownDate = new Date("Jan 5, 2021 15:18:56").getTime();

// let x = setInterval(function() {
//   let now = new Date().getTime(),
//   	  distance = countDownDate - now;

//   var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//       m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//       s = Math.floor((distance % (1000 * 60)) / 1000);
// 	ss = s < 10 ? "0" + s : s
// 	hh = h < 10 ? "0" + h : h
// 	mm = m < 10 ? "0" + m : m

//   document.getElementById("time").innerHTML = ss + ":" + hh + ":" + mm;
// }, 1000);

function startTime() {
	  	var today = new Date(),
      		
        	h = today.getHours(),
			m = today.getMinutes(),
 			s = today.getSeconds();
			ss = s < 10 ? "0" + s : s
			m = m < 10 ? "0" + m : m
			h = h < 10 ? "0" + h : h
				document.getElementById('time').innerHTML = ss + ":" + h + ":" + m;
			t = setTimeout(function () {
								startTime()
					}, 1000);
				}
startTime(); 

