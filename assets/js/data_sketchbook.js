var sb_projects = [
  { 
    title: "Personal Brand Card", 
    thumbnail: "images/card-thumbnail.jpg",
    images: ["images/card-sketch.jpg","images/card-draft1.jpg","images/card-draft2.jpg","images/card-draft3.jpg","images/card-draft4.jpg","images/card-final.gif",],
    url: "card",
    description: "I wanted to make a special takeaway item to leave or send people to remind them of me and my work. I wanted it to show a side of me that was a little harder to express on a portfolio or website. I really like paper art and physically making work so I decided to desgn a pop up card. I've never done this type of paper art work so it was a big learning curving trying to figure out how to make this card. First I started with some sketches of what I wanted it to look like then did some problem solving using cut outs and troubleshooting.$$$$$$" 
  }
  
];


var sb_link = function(project, index) {
  return  '<article class="work-item">' +
            '<div class="work-wrapper">' +
              '<div class="work-thumbnail">' +
                '<img src="' + project.thumbnail + '" alt="">' +
                  '</div>' +
                  '<div class="work-caption">' +
                    '<h3 class="work-title font-alt">' + project.title + '</h3>' +
                  '</div>' +
                  '<a href="#" class="work-link" id="' + index + '" data-toggle="modal" data-target="#modal_' + project.url + '"></a>' +
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
  return '<div class="modal fade" id="modal_' + project.url + '" tabindex="-1" role="dialog" aria-labelledby="modalLabel' + index + '">' +
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