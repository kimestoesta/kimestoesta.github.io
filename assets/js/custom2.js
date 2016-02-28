window.onerror = function(msg, url, line, col, error) {
   // Note that col & error are new to the HTML 5 spec and may not be 
   // supported in every browser.  It worked for me in Chrome.
   var extra = !col ? '' : '\ncolumn: ' + col;
   extra += !error ? '' : '\nerror: ' + error;

   // You can view the information in an alert to see things working like this:
   alert("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);

   // TODO: Report this error via ajax so you can keep track
   //       of what pages have JS issues

   var suppressErrorAlert = true;
   // If you return true, then error alerts (like in older versions of 
   // Internet Explorer) will be suppressed.
   return suppressErrorAlert;
};



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
        $("#details-images").append(project.clips[clipIndex]);
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
    loadedImages = 0;
    var index = 0;
    
    clipIndex = 0;

    var images = new Array();

    for (var i = 0; i < projects.length; i++) {
      for (var j = 0; j < projects[i].images.length; j++) {
        if (projects[i].images[j] == "$") continue;
        images[index] = new Image()
        images[index].src = projects[i].images[j];
        index += 1;
      }
    }

    for (var i = 0; i < sb_projects.length; i++) {
      for (var j = 0; j < sb_projects[i].images.length; j++) {
        if (sb_projects[i].images[j] == "$") continue;
        images[index] = new Image()
        images[index].src = sb_projects[i].images[j];
        index += 1;
      }
    }
  }

  var loadPage = function() {
    $('.page-loader').delay(350).fadeOut('slow');
    $('.page-loader img').delay(350).fadeOut('slow');
  }

  $(window).load(function() {

    preload(projects);
    routeHash();
    loadPage();
    
  });

  
  $(window).resize(function() {
    if ($(window).width() >= 992)
      resizeDetailsImages($(window).height());
    filterLocation = $("#hero").height();
  });

