(function($){

  var hideAll = function() {
    $("#portfolio-page").hide()
    $("#details-page").hide();
    $("#about-page").hide();
  };

  var loadDetailsImages = function(project) {
    $("#details-images").empty();
    for (var i = 0; i < project.images.length; i++) {
      $("#details-images").append("<img src='" + project.images[i] + "'>")
    }
  };

  var resizeDetailsImages = function() {
    $('#details-images').height($(window).height());
  }

  var filterLocation = 0;

  $(document).ready(function() {
    hideAll();
    $("#portfolio-page").show(0, function() {
      filterLocation = $("#hero").height();
    });
    resizeDetailsImages();
  });

  $("#portfolio-page-link").click(function() {
    hideAll();
    $("#portfolio-page").show(400);
  });

  $("#about-page-link").click(function() {
    hideAll();
    $("#about-page").show(400);
  });

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
    
    $("#details-page").show(400, function() {
      loadDetailsImages(project);
    });
  })

  $(window).resize(function() {
     resizeDetailsImages();
     filterLocation = $("#hero").height();
  });

  $( window ).scroll(function() {
    // if (!alreadyHidden && $(window).scrollTop() > 0) {
    //   $(".sidebar").offcanvas('hide');
    //   alreadyHidden = true;
    // }

    // if ($(window).scrollTop() == 0) {
    //   $(".sidebar").offcanvas('show');
    //   alreadyHidden = false;
    // }
  });



})(jQuery);