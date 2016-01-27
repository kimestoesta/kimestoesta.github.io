var projects = [
  {
    title: "Hilo Hawaiian Products", 
    tags: ["branding", "packaging", "identity"],
    thumbnail: "images/hiloall.jpg",
    images: ["images/hilobox.png", "images/hilobox2.png", "images/hilobox3.png", "images/hilocandle.png", "images/hilocandle3.png", "images/hilooil.png"],
    description: "Hilo is a fictional family owned company based in Hilo Island Hawaii that make products using fresh resources grown from the rich soils of the Mauna Loa Volcano. Their products include an ohelo berry herbal tea, macadamia nut cooking oil, and kukui nut candle. The pheonix represented in their packaging illustrates their beliefs in natural cycle of destruction and creation. Hawaiian beliefs and philosophies are srongly tied with their observations of nature. In destruction there is always hope for new life in the same way that their products are born from the ashes of a volcano."
  },
  { 
    title: "EyeSpy.", 
    tags: ["branding", "mobile app", "web"],
    thumbnail: "images/EyeSpyLogin.gif",
    images: ["images/EyeSpyMenu.jpg", "images/EyeSpy_vessel.gif", "images/EyeSpy_Welcome.jpg",],
    description: "EyeSpy is a project I did with Paige Carl for the Harn Museum of Art. The project challenge was to design an app for the Harn Museum that focused on the Asian collection emphasizing both mobility and sensor technology. Our solution led to the creation of an app, EyeSpy, which we prototyped with a focus on the Asian collection of the Harn but could also be expanded for future collections. <br><br> EyeSpy is designed to be the Harn Museum’s interactive mystery adventure game app. Users have only 60 minutes to physically explore the museum exhibit to search for clues and figure out riddles to solve the mystery. During the project I had a large focus on the story, concepting, User Interface design, and illustration. Paige and I worked together to create the information architecture and user experience of the game and split screen production design. <br><br> Please feel free to play with the prototype provided for you on the right."
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
    thumbnail: "images/RelientK_DigitalAd.gif",
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