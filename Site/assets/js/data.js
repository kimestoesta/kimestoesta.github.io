var projects = [
  {
    title: "That One Spot", 
    tags: ["branding", "packaging", "identity"],
    thumbnail: "images/tos-fold.jpg",
    images: ["images/tos-menus.jpg", "images/tos-mat.jpg", "images/tos-cards.jpg"],
    description: "Hilo is a fictional family owned company based in Hilo Island Hawaii that make products using fresh resources grown from the rich soils of the Mauna Loa Volcano. Their products include an ohelo berry herbal tea, macadamia nut cooking oil, and kukui nut candle. The pheonix represented in their packaging illustrates their beliefs in natural cycle of destruction and creation. Hawaiian beliefs and philosophies are srongly tied with their observations of nature. In destruction there is always hope for new life in the same way that their products are born from the ashes of a volcano."
  },
  { 
    title: "EyeSpy.", 
    tags: ["branding", "mobile app", "web"],
    thumbnail: "images/EyeSpyLogin.gif",
    images: ["images/EyeSpyRiddler.jpg","images/EyeSpy-elephant.jpg","images/EyeSpy-Menu.jpg", "images/EyeSpy-Vessel.jpg","images/EyeSpy_Welcome.jpg","images/EyeSpy-done.jpg","images/EyeSpy-concept.jpg","images/EyeSpy-userprofile.jpg","images/EyeSpy-flatpurple.jpg","images/EyeSpy-demoview.jpg"],
    description: "EyeSpy. is a project I did with my classmate, Paige Carl, for the Harn Museum of Art. The project challenge was to design an app for the Harn Museum that focused on the Asian collection emphasizing both mobility and sensor technology. Our solution led to the creation of an app, EyeSpy, which we prototyped with a focus on the Asian collection of the Harn but could also be expanded for future collections. <br><br> EyeSpy is designed to be the Harn Museum’s interactive mystery adventure game app. Users have only 60 minutes to physically explore the museum exhibit to search for clues and figure out riddles to solve the mystery. During the project I had a large focus on the story, concepting, User Interface design, and illustration. Paige and I worked together to create the information architecture and user experience of the game and split screen production design. <br><br> Try the prototype on invision: http://invis.io/UX2RU5KV6</a>"
  },
  { 
    title: "Midnight Cookies Menu", 
    tags: ["identity", "menu design"],
    thumbnail: "images/midnightall.jpg",
    images: [],
    description: "Stuff"
  },
  { 
    title: "Relient K Band Tour", 
    tags: ["identity", "illustration"],
    thumbnail: "images/RelientK_DigitalAd.gif",
    images: ["images/relientk-set.jpg","images/relientk-poster.jpg","images/relientk-book.jpg","images/relientK_case.jpg","images/relientk-album.jpg","images/relientk-cd.jpg","images/relientk_mocks.jpg",],
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