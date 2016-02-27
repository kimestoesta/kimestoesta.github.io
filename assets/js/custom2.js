(function($){

  var hideAll = function() {
    $("#portfolio-page").hide()
    $("#details-page").hide();
    $("#about-page").hide();
    $("#blog-page").hide();
  };

  var loadDetailsImages = function(project) {
    var clipIndex = 0;
    for (var i = 0; i < project.images.length; i++) {
      if (project.images[i] != "$")
        $("#details-images").append($('<img />').attr('src',project.images[i]));
      else {
        $("#details-images").append($('<img />').attr('src',project.clips[clipIndex]));
        clipIndex += 1;
      }
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
    $("#details-page").show(400);
  }
  

  var filterLocation = 0;

  $(document).ready(function() {
    routeHash();
  });

  window.onhashchange = function() {
    routeHash();
  }

  function preload(projects) {
    function imageloadpost() {
      loadedImages++;
      if (loadedImages == index - 1) {
        postaction(images);
      }
    }

    loadedImages = 0;
    clipIndex = 0;

    var images = new Array();
    var postaction = function() {};
    var index = 0;

    for (var i = 0; i < projects.length; i++) {
      images[index] = new Image();
      images[index].src = projects[i].thumbnail;
      index += 1;

      for (var j = 0; j < projects[i].images.length; j++) {
        if (projects[i].images[j] == "$") continue;
        images[index] = new Image()
        images[index].src = projects[i].images[j];
        index += 1;
      }
    }

    for (var i = 0; i < sb_projects.length; i++) {
      images[index] = new Image();
      images[index].src = sb_projects[i].thumbnail;
      index += 1;
      for (var j = 0; j < sb_projects[i].images.length; j++) {
        if (sb_projects[i].images[j] == "$") continue;
        images[index] = new Image()
        images[index].src = sb_projects[i].images[j];
        index += 1;
      }
    }

    for (var i = 0; i < images.length; i++) {
      images[i].onload = function() {
        imageloadpost()
      }
    }

    return { //return blank object with done() method
      done:function(f){
        postaction=f || postaction //remember user defined callback functions to be called when images load
      }
    }
  }

  var loadPage = function() {
    $('.page-loader').delay(350).fadeOut('slow');
    $('.page-loader img').delay(350).fadeOut('slow');
  }

  window.loadedElements = 0;

  $(window).load(function() {

    routeHash();

    preload(projects).done(function(images) {
      console.log("all images loaded");
    });

    for (var i = 0; i < projects.length; i++) {
      $("#works-grid").append(portfolio_link(projects[i], i));
    }

    $("#works-grid").imagesLoaded(function(){
      $("#works-grid").isotope({
        layoutMode: 'masonry',
        itemSelector: '.work-item',
        transitionDuration: '0.3s',
      });
    });


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
    });

    
    loadPage();
    
  });

  
  $(window).resize(function() {
    if ($(window).width() >= 992)
      resizeDetailsImages($(window).height());
    filterLocation = $("#hero").height();
  });

})(jQuery);