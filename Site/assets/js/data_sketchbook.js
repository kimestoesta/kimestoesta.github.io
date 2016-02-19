var sb_projects = [
  {
    title: "That One Spot", 
    tags: ["branding", "packaging", "identity"],
    thumbnail: "images/TOS_fold.jpg",
    images: ["images/tos_menus.jpg", "images/tos_mat.jpg", "images/TOS_Cards.jpg"],
    description: ""
  },
  { 
    title: "EyeSpy.", 
    tags: ["identity", "mobile app", "web"],
    thumbnail: "images/EyeSpyLogin.gif",
    images: ["images/EyeSpyRiddler.jpg","images/EyeSpy-Concept.jpg","images/EyeSpy-UserProfile.jpg","images/EyeSpy-elephant.jpg","images/EyeSpy-menu.jpg","images/EyeSpy-FlatPurple.jpg", "images/EyeSpy-Vessel.jpg","images/EyeSpy_Welcome.jpg","images/EyeSpy-done.jpg","images/EyeSpy-DemoView.jpg"],
    description: "$EyeSpy is a project I did with my classmate, Paige Carl, for the Harn Museum of Art. $The project challenge was to design an app for the Harn Museum that focused on the Asian collection emphasizing both mobility and sensor technology. Our solution led to the creation of an app, EyeSpy, which we prototyped with a focus on the Asian collection of the Harn but could also be expanded for future collections. <br><br> EyeSpy is designed to be the Harn Museum’s interactive mystery adventure game app. Users have only 60 minutes to physically explore the museum exhibit to search for clues and figure out riddles to solve the mystery. During the project I had a large focus on the story, concepting, User Interface design, and illustration. Paige and I worked together to create the information architecture and user experience of the game and split screen production design. <br><br> Try the prototype on <a href='http://invis.io/UX2RU5KV6'>invision</a>"
  }
  
];


var sb_link = function(project, index) {

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
                  '<a href="#" class="work-link" id="' + index + '" data-toggle="modal" data-target="#modal' + index + '"></a>' +
                '</div>' +
              '</article>';
};

var insert_images = function(images, description) {
  for (var i = 0; i < images.length; i++) {
    description = description.replace("$", "<img src='" + images[i] + "' class='img-rounded img-responsive'><br>")
  }
  return description;
}

var sb_modal = function(project, index) {
  return '<div class="modal fade" id="modal' + index + '" tabindex="-1" role="dialog" aria-labelledby="modalLabel' + index + '">' +
            '<div class="modal-dialog" role="document">' +
              '<div class="modal-content">' +
                '<div class="modal-header">' +
                  '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                  '<h2 class="modal-title" id="modalLabel' + index + '">' + project.title + '</h2>' +
                '</div>' +
                '<div class="modal-body">' +
                  insert_images(project.images, project.description) +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>';
}


$(function($) {
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

});


function preload(projects) {
  for (var i = 0; i < sb_projects.length; i++) {
    for (var j = 0; j < sb_projects[i].images.length; j++) {
      sb_projects[i].images[j] = $('<img />').attr('src',sb_projects[i].images[j]);
    }
  }
}

//preload(sb_projects);