var $target = $(".containerzz");
inView(".color_change").on("enter", function (el) {
  var color = $(el).attr("bg_color");
  $target.css("background-color", color);
});
