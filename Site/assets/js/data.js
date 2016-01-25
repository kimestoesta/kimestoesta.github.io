var projects = [
  { 
    title: "Hilo Hawaiian Products", 
    tags: ["branding", "packaging", "identity"],
    thumbnail: "images/hiloall.jpg",
    images: ["images/hilobox.png", "images/hilobox2.png", "images/hilobox3.png", "images/hilocandle.png", "images/hilocandle3.png", "images/hilooil.png"],
    description: "Hilo is a fictional family owned company based in Hilo Island Hawaii that make products using fresh resources grown from the rich soils of the Mauna Loa Volcano. Their products include an ohelo berry herbal tea, macadamia nut cooking oil, and kukui nut candle. The pheonix represented in their packaging illustrates their beliefs in natural cycle of destruction and creation. Hawaiian beliefs and philosophies are srongly tied with their observations of nature. In destruction there is always hope for new life in the same way that their products are born from the ashes of a volcano."
  },
  { 
    title: "Haulbox Startup", 
    tags: ["branding", "mobile app", "web"],
    thumbnail: "images/hiloall.png",
    images: [],
    description: "Stuff"
  },
  { 
    title: "Midnight Cookies Menu", 
    tags: ["identity", "menu design"],
    thumbnail: "images/midnightall.jpg",
    images: [],
    description: "Stuff"
  },
  { 
    title: "Epic", 
    tags: ["E-Book", "illustration"],
    thumbnail: "images/epicthumb.png",
    images: [],
    description: "Stuff"
  },
  { 
    title: "Haulbox Startup", 
    tags: [],
    thumbnail: "images/haulboxthum.png",
    images: [],
    description: "Stuff"
  },
  { 
    title: "Midnight Cookies Menu", 
    tags: [],
    thumbnail: "images/midnightall.jpg",
    images: [],
    description: "Stuff"
  },
  { 
    title: "Epic", 
    tags: [],
    thumbnail: "images/epicthumb.png",
    images: [],
    description: "Stuff"
  },
  { 
    title: "Haulbox Startup", 
    tags: [],
    thumbnail: "images/haulboxthum.png",
    images: [],
    description: "Stuff"
  },
  { 
    title: "Midnight Cookies Menu", 
    tags: [],
    thumbnail: "images/midnightall.jpg",
    images: [],
    description: "Stuff"
  },
  { 
    title: "Epic", 
    tags: [],
    thumbnail: "images/epicthumb.png",
    images: [],
    description: "Stuff"
  }
];


var portfolio_link = function(project, index) {

  var tag_classes = project.tags;
  for (var i = 0; i < tag_classes.length; i++) {
    tag_classes[i] = tag_classes[i].replace(" ", "-");
  }
  return  '<article class="work-item ' + tag_classes.join(" ") + '">' +
            '<div class="work-wrapper">' +
              '<div class="work-thumbnail">' +
                '<img src="' + project.thumbnail + '" alt="">' +
                  '</div>' +
                  '<div class="work-caption">' +
                    '<h3 class="work-title font-alt">' + project.title + '</h3>' +
                    '<span class="work-category font-serif"><a href="#">' + project.tags.join(", ") + '</a></span>' +
                  '</div>' +
                  '<a href="#" class="work-link" id="' + index + '"></a>' +
                '</div>' +
              '</article>'
}


$(function($) {
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

});


function preload(projects) {
  for (var i = 0; i < projects.length; i++) {
    for (var j = 0; j < projects[i].images.length; j++) {
      projects[i].images[j] = $('<img />').attr('src',projects[i].images[j]);
    }
  }
}

preload(projects);