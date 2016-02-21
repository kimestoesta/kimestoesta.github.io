var projects = [
  {
    title: "That One Spot", 
    tags: ["branding", "packaging"],
    thumbnail: "images/spot-takeout.jpg",
    images: ["images/spot-all.jpg", "images/tos_mat.jpg", "images/spot-bigmenu.jpg", "images/spot-businesscards.jpg", "images/spot-takeout1.jpg","images/spot-takeout2.jpg", "images/spot-items.jpg", "images/spot-all2.jpg",],
    description: "That One Spot is a family owned burger restaurant located in Ocoee, FL. They are known for their well crafted and customizable burgers with a variety of meat options but also provide a variety of salads and sides. While their ingredients are fresh and local they aim to be a fast casual spot for everyone to grab a bite. Keeping their brand in mind I was hired to rebrand the restaurant to more closely reflect their voice today and as they look to grow."
  },
  { 
    title: "EyeSpy.", 
    tags: ["interactive", "app"],
    thumbnail: "images/EyeSpyLogin.gif",
    images: ["images/EyeSpyRiddler.jpg","images/EyeSpy-Concept.jpg","images/EyeSpy-UserProfile.jpg","images/EyeSpy-elephant.jpg","images/EyeSpy-menu.jpg","images/EyeSpy-FlatPurple.jpg", "images/EyeSpy-Vessel.jpg","images/EyeSpy_Welcome.jpg","images/EyeSpy-done.jpg","images/EyeSpy-DemoView.jpg"],
    description: "EyeSpy is a project I did with my classmate, Paige Carl, for the Harn Museum of Art. The project challenge was to design an app for the Harn Museum that focused on the Asian collection emphasizing both mobility and sensor technology. Our solution led to the creation of an app, EyeSpy, which we prototyped with a focus on the Asian collection of the Harn but could also be expanded for future collections. <br><br> EyeSpy is designed to be the Harn Museum’s interactive mystery adventure game app. Users have only 60 minutes to physically explore the museum exhibit to search for clues and figure out riddles to solve the mystery. During the project I had a large focus on the story, concepting, User Interface design, and illustration. Paige and I worked together to create the information architecture and user experience of the game and split screen production design. <br><br> Try the prototype on <a href='http://invis.io/UX2RU5KV6'>invision</a>"
  },
{ 
    title: "RecSports Small Group Training", 
    tags: ["print", "digital"],
    thumbnail: "images/findfit-thumbnail.jpg",
    clips: ['<iframe src="https://player.vimeo.com/video/155912657" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'],
    images: ["images/findfit-multiple.jpg","images/findfit-double.jpg", "images/findfit-booklet.gif", "images/findfit-social.jpg", "images/findfit-table.jpg", "images/findfit-sides.jpg", "$", "images/findfit-tvs.jpg",],
    description: 'The marketing team for Recreation Sports at the University of Florida is comprised of designers, videographers, photographers, and media specialists. Working in-house we service many different departments within RecSports like clients making sure to boost visibility and spread awareness of several campaigns or events.'
  },
  { 
    title: "Relient K Band Tour", 
    tags: ["branding", "illustration"],
    thumbnail: "images/relientk-digitalad.gif",
    images: ["images/relientk-all2.jpg", "images/relientk-posters.jpg", "images/relientk-trio.jpg", "images/relientk-CD.jpg", "images/relientk-book.jpg", "images/relientk-bookdetails.jpg", "images/relientk-pass.jpg", "images/relientk-lyricbook.jpg", "images/relientk-all.jpg",],
    description: "Relient K - Only Fools Know Everything was a retrospective tour campaign for a student project. For this retrospective tour I wanted to capture the essence of growing up and making mistakes but having fun doing it. The idea is that because you were a fool you messed up and it has made you who you are today. <br><br> This project was selected to be displayed at Ligature25."
  },
  { 
    title: "Haulbox Startup", 
    tags: ["branding", "mobile app", "web"],
    thumbnail: "images/haulboxthum.png",
    images:["images/haulboxweb.png", "images/haulboxdemo.png","images/haulboxicons.png","images/haulboxapp.png"],
    description: "Haulbox is a StartUp Company that originated in Gainesville, FL. As their graphic designer I collaborated with the founders to ideate and create their entire visual branding system. From designing the logo to creating the icons for the user interface of the app and site I wanted to reflect the character of the company and its founders."
  },
  { 
    title: "The Kailune Chronicles", 
    tags: ["branding", "mobile app", "web"],
    thumbnail: "images/imaginations-logo.jpg",
    images:["images/imaginations-1.jpg", "images/imaginations-2.jpg","images/imaginations-3.jpg","images/imaginations-4.jpg", "images/imaginations-5.jpg","images/imaginations-6.jpg",],
    description: "."
  },
  { 
    title: "The Faces of Luck", 
    tags: ["identity", "menu design"],
    thumbnail: "images/Cards-characters.jpg",
    images: ["images/cardsflat.png",],
    description: "Faces of Luck was created for a student project. The illustration depicts an exploded view of playing cards but also holds meaning in the depictions of the King and Queen. Cards can associated with gambling and the images work to subtly show the cycles of gambling, you win some and you lose some. Gambling is a non-discriminatory activity and can effect both male and female. The illustration portrays this serious topic in a lighthearted style and allows people to entertain the thought of lows and highs in gambling. This project will later be expanded into a card deck."
  }, 
  { 
    title: "Jelly Belly", 
    tags: ["identity", "menu design"],
    thumbnail: "images/jelly-bag.jpg",
    images: ["images/jelly-all.jpg", "images/jelly-cards.jpg", "images/jelly-poster.gif", "images/jelly-flavordetails.jpg", "images/jelly-flavorbag.jpg"],
    description: "."
  }, 
  { 
    title: "Goode Chocolate Bars", 
    tags: ["packaging", "branding"],
    thumbnail: "images/goode-above.jpg",
    images: ["images/goodechocolate.jpg","images/goode-above.jpg"],
    description: "The Goode Chocolate Company was a fictional chocolate company for a student project celebrating 100 years of bussiness. To honor their anniversary this packaging design pays tribute to some of the company’s best years, the roaring 20s. The company sells three flavors dark, milk, and white chocolate each distinguished by a different colored foil revealed through the New York City skyline where the company originated."
  },
  { 
    title: "Emergent Adventure", 
    tags: ["digital", "coding"],
    thumbnail: "images/webfull.png",
    images: ["images/webfull.png","images/webboxes.png", "images/webpoint.png"],
    description: "."
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
                  '<a href="#/project/' + index + '" class="work-link" id="' + index + '"></a>' +
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
}

preload(projects);