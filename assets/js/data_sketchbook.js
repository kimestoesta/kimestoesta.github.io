var sb_projects = [
  { 
    title: "Personal Brand Card", 
    thumbnail: "images/card-thumbnail.jpg",
    images: ["images/card-sketch.jpg","images/card-draft1.jpg","images/card-draft2.jpg","images/card-draft3.jpg","images/card-draft4.jpg","images/card-final.gif",],
    url: "card",
    description: "I wanted to make a special takeaway item to leave or send people to remind them of me and my work. I wanted it to show a side of me that was a little harder to express on a portfolio or website. I really like paper art and physically making work so I decided to desgn a pop up card. I've never done this type of paper art work so it was a big learning curving trying to figure out how to make this card. First I started with some sketches of what I wanted it to look like then did some problem solving using cut outs and troubleshooting.$$$ At this point I started to create the general boxes I needed to fold and cut on illustrator. The computer screen faintly shows the file I was working on in illustrator.$ Here I figured out the right pop up mechanism and I could finally put in the dtails of the images I wanted to have popout. $ Did some scaling and now it's all set and ready to send! $" 
  },
  { 
    title: "UFGD Valentine's 2016", 
    thumbnail: "images/valentine-thumb.jpg",
    images: ["images/valentine-card.jpg", "images/valentine-box.jpg",],
    url: "valentines2016",
    description: "For Valentine's Day this year we decided to do a throwback to our kindergarten days and make cards for everyone in the graphic design program. Instead of candy I wanted to make some chocolate dipped mint oreos! I've learned that almost no one can turn down an oreo. $ Don't laugh at my box it was a busy time in my life haha. Looks like it did in elementary school :P $" 
  },
  { 
    title: "Wander Often, Wonder Always", 
    thumbnail: "images/wander-thumb.jpg",
    images: ["images/wander-full.gif","images/wander-rocks.jpg","images/wander-wolf.jpg","images/wander-monster.jpg","images/wander-cover.jpg",],
    url: "wander",
    description: "$$$$$" 
  },
  { 
    title: "12.28.15", 
    thumbnail: "images/sketch-collargirl.jpg",
    images: ["images/sketch-collargirl.jpg",],
    url: "122815",
    description: "$" 
  },
  { 
    title: "12.25.15", 
    thumbnail: "images/sketch-girlorange.jpg",
    images: ["images/sketch-girlorange.jpg",],
    url: "122515",
    description: "$" 
  },
  { 
    title: "Find my Way to You", 
    thumbnail: "images/sail-thumb.jpg",
    images: ["images/sail-inside.jpg","images/sail-top.jpg","images/sail-angle.jpg","images/sail-cover.jpg",],
    url: "sail",
    description: "$$$$" 
  },
  { 
    title: "UFGD Class of 2016", 
    thumbnail: "images/class-poster.jpg",
    images: ["images/class-all.gif", "images/class-angle.jpg", "images/class-pinnedposter.jpg",  "images/class-cover.jpg",],
    url: "class",
    description: "$$$$" 
  },
  { 
    title: "Admit One", 
    thumbnail: "images/circus-ticket.gif",
    images: ["images/circus-series.gif", "images/circus-intro.jpg", "images/circus-red.jpg","images/circus-accordian.jpg",],
    url: "circus",
    description: "$$$$" 
  },
  { 
    title: "Sulley Practice Sketch", 
    thumbnail: "images/sketch-sulley.jpg",
    images: ["images/sketch-sulley.jpg",],
    url: "sulley",
    description: "A practice digital painting I did for a personal 30 day drawing a day challenge in 2013. Did it before I watched Monsters University. Quality pre-quel to a beloved movie which is a hard thing to do. $" 
  },
  { 
    title: "Wall-E Practice Sketch", 
    thumbnail: "images/sketch-walle.jpg",
    images: ["images/sketch-walle.jpg",],
    url: "wall-e",
    description: "One of the practice digital paintings I did for a personal 30 day drawing a day challenge in 2013. <br> Shout out to Pixar this movie was adorable. An underated film but the topics and concepts are so clever. If you haven't watched it yet do it now. $" 
  },
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
  for (var i = 0; i < images.length; i++)
    description = description.replace("$", "</p><img src='" + images[i] + "' class='img-rounded img-responsive'><p>")
  while (description.indexOf("<p></p>") != -1)
    description = description.replace("<p></p>", "");

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
                  '<p>' +
                    insert_images(project.images, project.description) +
                  '</p>' +
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