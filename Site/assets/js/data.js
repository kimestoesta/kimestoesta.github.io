var projects = [
  {
    title: "That One Spot", 
    tags: ["branding", "packaging", "identity"],
    thumbnail: "images/tos_fold.jpg",
    images: ["images/tos_menus.jpg", "images/tos_mat.jpg", "images/tos_cards.jpg"],
    description: ""
  },
  { 
    title: "EyeSpy.", 
    tags: ["identity", "mobile app", "web"],
    thumbnail: "images/EyeSpyLogin.gif",
    images: ["images/EyeSpyRiddler.jpg","images/EyeSpy-concept.jpg","images/EyeSpy-userprofile.jpg","images/EyeSpy-elephant.jpg","images/EyeSpy-Menu.jpg","images/EyeSpy-flatpurple.jpg", "images/EyeSpy-Vessel.jpg","images/EyeSpy_Welcome.jpg","images/EyeSpy-done.jpg","images/EyeSpy-demoview.jpg"],
    description: "EyeSpy. is a project I did with my classmate, Paige Carl, for the Harn Museum of Art. The project challenge was to design an app for the Harn Museum that focused on the Asian collection emphasizing both mobility and sensor technology. Our solution led to the creation of an app, EyeSpy, which we prototyped with a focus on the Asian collection of the Harn but could also be expanded for future collections. <br><br> EyeSpy is designed to be the Harn Museum’s interactive mystery adventure game app. Users have only 60 minutes to physically explore the museum exhibit to search for clues and figure out riddles to solve the mystery. During the project I had a large focus on the story, concepting, User Interface design, and illustration. Paige and I worked together to create the information architecture and user experience of the game and split screen production design. <br><br> Try the prototype on invision: http://invis.io/UX2RU5KV6</a>"
  },
{ 
    title: "Goode Chocolate Bars", 
    tags: ["packaging", "branding"],
    thumbnail: "images/goode-above.jpg",
    images: ["images/goodechocolate.jpg","images/goode-above.jpg"],
    description: "The Goode Chocolate Company was a fictional chocolate company for a student project celebrating 100 years of bussiness. To honor their anniversary this packaging design pays tribute to some of the company’s best years, the roaring 20s. The company sells three flavors dark, milk, and white chocolate each distinguished by a different colored foil revealed through the New York City skyline where the company originated."
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
    tags: ["branding", "mobile app", "web"],
    thumbnail: "images/haulboxthum.png",
    images:["images/haulboxweb.png", "images/haulboxdemo.png","images/haulboxicons.png","images/haulboxapp.png"],
    description: "Haulbox is a StartUp Company that originated in Gainesville, FL Starting from scratch as their Graphic Designer I created their entire visual branding from their logo to their promotional items to their web and mobile app graphics."
  },
  { 
    title: "The Faces of Luck", 
    tags: ["identity", "menu design"],
    thumbnail: "images/cards-characters.jpg",
    images: ["images/cardsflat.png",],
    description: "Faces of Luck was created for a student project. The illustration depicts an exploded view of playing cards but also holds meaning in the depictions of the King and Queen. Cards can associated with gambling and the images work to subtly show the cycles of gambling, you win some and you lose some. Gambling is a non-discriminatory activity and can effect both male and female. The illustration portrays this serious topic in a lighthearted style and allows people to entertain the thought of lows and highs in gambling. This project will later be expanded into a card deck."
  }, 
  
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