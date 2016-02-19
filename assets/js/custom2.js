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
      if (callback) 
        callback();
    });
  };

  var goToPortfolio = function() {
    hideAll();
    var hero = $("section#hero").hide();
    $("#portfolio-page").show(400, function() {
      hero.show();
      $('#works-grid').isotope({
        layoutMode: 'masonry',
        itemSelector: '.work-item',
        transitionDuration: '0.3s',
      });
      $(window).scrollTop(filterLocation);
    });
  };

  var routeHash = function() {
    
    var url = location.hash.slice(1) || '/';

    if (url == '/') {
      hideAll();
      $("#portfolio-page").show(0, function() {
        filterLocation = $("#hero").height();
      });
    } 
    else if (url == '/portfolio') {
      goToPortfolio();
    } 
    else if (url == '/about') {
      hideAllAndShow("#about-page");
    } 
    else if (url == '/sketchbook') {
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
    }
    else if (url.slice(0, 8) == "/project"){
      hideAll();
      id = url.slice(9)
      var project = projects[id];
      loadProject(project)
    }
    else if (url.slice(0, 11) == "/sketchbook"){
      hideAllAndShow("#blog-page", function() {
        var sbgrid = $('#sketchbook-grid');

        sbgrid.imagesLoaded(function() {
          sbgrid.isotope({
            layoutMode: 'masonry',
            itemSelector: '.work-item',
            transitionDuration: '0.3s',
          });
        });

        id = url.slice(12)
        $("#modal" + id).modal('show');
      });
    } else {
      hideAll();
      $("#portfolio-page").show(0, function() {
        filterLocation = $("#hero").height();
      });
    }

    if ($(window).width() >= 992)
      resizeDetailsImages();
  }

  var loadProject = function(project) {
    $("#details-description").html(project.description);
    $("#details-title").html(project.title);
    $("#details-tags").html(project.tags.join(", "));
    $("#details-images").empty();
    loadDetailsImages(project);
    $("#details-page").show(400, function() {
      if (window.location.search == "?modal") {

      }
    });
  }

  var filterLocation = 0;

  $(document).ready(function() {
    routeHash();
  });

  window.onhashchange = function() {
    routeHash();
  }
  

  $(window).resize(function() {
    if ($(window).width() >= 992)
      resizeDetailsImages($(window).height());
    filterLocation = $("#hero").height();
  });

})(jQuery);