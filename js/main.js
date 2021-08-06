// filter-btn__close
var elsCatigoryCheckBtn = document.querySelectorAll(".catigory__check-btn");
var elsCatigoryChecked = document.querySelectorAll(".catigory__checked");

elsCatigoryCheckBtn.forEach(function (list) {
  list.addEventListener('click', function () {
    list.closest("p").remove(".catigory__checked");
  });  
});
