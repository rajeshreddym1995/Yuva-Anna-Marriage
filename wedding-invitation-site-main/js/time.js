// var d = new Date();
// var year = d.getFullYear();
const targetDay = new Date(2022 , 01, 07);
targetDay.setHours(9);
targetDay.setMinutes(0);

// countdown
let timer = setInterval(function() {
  let lang=document.getElementById("language_selected").value;
  // get today's date
  //console.log(targetDay);
  const today = new Date().getTime();
  const targetTime = targetDay.getTime();
//   // get the difference

    let diff = targetTime - today;



  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>"+((lang == 'te')?'రోజులు':'days')+"</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>"+((lang == 'te')?'గంటలు':'hours')+"</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>"+((lang == 'te')?'నిమిషాలు':'minutes')+"</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>"+((lang == 'te')?'సెకన్లు':'seconds')+"</div> \
</div>";

}, 1000);