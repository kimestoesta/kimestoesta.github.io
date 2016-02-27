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
    $(".xactive").removeClass("xactive");
    var url = location.hash.slice(1) || '/';

    if (url == '/') {
      $("#portfolio-page-link").addClass("xactive");
      hideAll();
      $("#portfolio-page").show(0, function() {
        filterLocation = $("#hero").height();
      });
    } 
    else if (url == '/portfolio') {
      $("#portfolio-page-link").addClass("xactive");
      hideAll();
      goToPortfolio();
    } 
    else if (url == '/about') {
      $("#about-page-link").addClass("xactive");
      hideAllAndShow("#about-page");
    } 
    else if (url == '/sketchbook') {
      $("#blog-page-link").addClass("xactive");
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
      $("#blog-page-link").addClass("xactive");
      hideAllAndShow("#blog-page", function() {
        var sbgrid = $('#sketchbook-grid');

        sbgrid.imagesLoaded(function() {
          sbgrid.isotope({
            layoutMode: 'masonry',
            itemSelector: '.work-item',
            transitionDuration: '0.3s',
          });
        });

        projectName = url.slice(12)

        $("#modal_" + projectName).modal('show');
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

  function preload(projects, callback) {
    clipIndex = 0;
    for (var i = 0; i < projects.length; i++) {
      for (var j = 0; j < projects[i].images.length; j++) {
        if (projects[i].images[j] != "$")
          projects[i].images[j] = $('<img />').attr('src',projects[i].images[j]);
        else {
          projects[i].images[j] = projects[i].clips[clipIndex];
          clipIndex += 1;
        }
      }
    }
    window.loadedElements += 1;
    callback();
  }

  var tryLoadPage = function() {
    if (window.loadedElements == 2) {
      $('.page-loader').delay(350).fadeOut('slow');
    }
  }

  window.loadedElements = 0;

  $(window).load(function() {
    for (var i = 0; i < sb_projects.length; i++) {
      $("#sketchbook-grid").append(sb_link(sb_projects[i], i));
      $("#sketchbook-modals").append(sb_modal(sb_projects[i], i));
    }

    $("#sketchbook-grid").imagesLoaded(function(){
      $("#sketchbook-grid").isotope({
        layoutMode: 'masonry',
        itemSelector: '.work-item',
        transitionDuration: '0.3s',
      });
      window.loadedElements += 1;
      tryLoadPage();
    });

    preload(projects, tryLoadPage);

    
  });

  
  $(window).resize(function() {
    if ($(window).width() >= 992)
      resizeDetailsImages($(window).height());
    filterLocation = $("#hero").height();
  });

})(jQuery);