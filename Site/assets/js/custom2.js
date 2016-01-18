(function($){

  var hideAll = function() {
    $("#portfolio-page").hide()
    $("#details-page").hide();
    $("#about-page").hide();
    $("#blog-page").hide();
  };

  var loadDetailsImages = function(project) {
    for (var i = 0; i < project.images.length; i++) {
      $("#details-images").append("<img src='" + project.images[i] + "'>")
    }
  };

  var resizeDetailsImages = function() { $('#details-images').height($(window).height()) };
  var hideAllAndShow = function(page) { 
    hideAll();
    $(page).show(400);
  };

  var filterLocation = 0;

  $(document).ready(function() {
    hideAll();
    $("#portfolio-page").show(0, function() {
      filterLocation = $("#hero").height();
    });
    resizeDetailsImages();
  });

  $("#portfolio-page-link").click( function(){ hideAllAndShow("#portfolio-page") } );
  $("#about-page-link").click( function(){ hideAllAndShow("#about-page") } );
  $("#blog-page-link").click( function(){ hideAllAndShow("#blog-page") } );

  $("#details-return").click(function() {
    hideAll();

    var hero = $("section#hero").remove();
    $("#portfolio-page").show(400, function() {
      hero.insertBefore($("section#portfolio"));
      $(window).scrollTop(filterLocation);
    });
  });

  $("#works-grid").on("click", ".work-link", function(event) {
    hideAll();
    var project = projects[this.id];
    $("#details-description").html(project.description);
    $("#details-images").empty();
    $("#details-page").show(400, function() {
      loadDetailsImages(project);
    });
  })

  $(window).resize(function() {
     resizeDetailsImages();
     filterLocation = $("#hero").height();
  });


})(jQuery);