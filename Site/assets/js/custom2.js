(function($){

  var hideAll = function() {
    $("#portfolio-page").hide()
    $("#details-page").hide();
    $("#about-page").hide();
    $("#blog-page").hide();
  };

  var loadDetailsImages = function(project) {
    for (var i = 0; i < project.images.length; i++) {
      $("#details-images").append(project.images[i])
    }
  };


  var resizeDetailsImages = function(height) { 
      $('#details-images').height(height);
      $('#details-left').height(height);
      $('#details-page .row').height(height);
  };

  var hideAllAndShow = function(page, callback) { 
    hideAll();
    $(page).show(400, function() {
      callback();
    });
  };

  var filterLocation = 0;

  $(document).ready(function() {
    hideAll();
    $("#portfolio-page").show(0, function() {
      filterLocation = $("#hero").height();
    });

    if ($(window).width() >= 992)
      resizeDetailsImages();
  });

  var goToPortfolio = function() {
    hideAll();
    var hero = $("section#hero").hide();
    $("#portfolio-page").show(400, function() {
      hero.show();
      $(window).scrollTop(filterLocation);
    });
  };

  $("#portfolio-page-link").click( function(){ goToPortfolio() } );
  $("#details-return").click(function() { goToPortfolio() });
  $("#about-page-link").click( function(){ hideAllAndShow("#about-page") } );
  $("#blog-page-link").click( function(){ 
    hideAllAndShow("#blog-page", function() {
      var sbgrid = $('#sketchbook-grid');

      sbgrid.imagesLoaded(function() {
        sbgrid.isotope({
          layoutMode: 'masonry',
          itemSelector: '.work-item',
          transitionDuration: '0.3s',
        });
      });
    });
  } );
  

  $("#works-grid").on("click", ".work-link", function(event) {
    hideAll();
    var project = projects[this.id];
    $("#details-description").html(project.description);
    $("#details-title").html(project.title);
    $("#details-tags").html(project.tags.join(", "));
    $("#details-images").empty();
    loadDetailsImages(project);
    $("#details-page").show(400);
  })

  $(window).resize(function() {
    if ($(window).width() >= 992)
      resizeDetailsImages($(window).height());
    filterLocation = $("#hero").height();
  });


})(jQuery);