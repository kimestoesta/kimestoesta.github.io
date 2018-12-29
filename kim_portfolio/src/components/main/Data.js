import ImageNode from './project/nodes/ImageNode';
import TextNode from './project/nodes/TextNode';
import VideoNode from './project/nodes/VideoNode';

class Data {

  static projects = [
    {
      title: 'That One Spot',
      tags: ['branding', 'print', 'packaging'],
      thumbnail: 'images/spot-takeout.jpg',
      rows: [
        [
          new TextNode(
            'That One Spot is a rebrand I did for a client running a family owned burger restaurant located in Ocoee, FL. They are known for their well crafted and customizable burgers with a variety of meat options but also provide a variety of salads and sides. While their ingredients are fresh and local they aim to be a fast casual spot for everyone to grab a bite. Keeping their brand in mind I was hired to rebrand the restaurant to more closely reflect their voice today and as they look to grow.',
            'TLDR'),
          new ImageNode(
            'images/spot-all.jpg',
            2,
          )
        ],
        [
          new ImageNode('images/tos_mat.jpg'),
          new ImageNode('images/spot-bigmenu.jpg'),
        ],
        [
          new ImageNode('images/spot-businesscards.jpg'),
          new TextNode(),
          new ImageNode('images/spot-takeout1.jpg',),
        ],
        [
          new ImageNode('images/spot-takeout2.jpg'),
          new ImageNode('images/spot-items.jpg'),
          new ImageNode('images/spot-all2.jpg'),
        ],
      ],
    },
    {
      title: 'EyeSpy.',
      tags: ['digital', 'app', 'interactive'],
      thumbnail: 'images/EyeSpyLogin.gif',
      rows: [
        [
          new TextNode(
            'EyeSpy is a project I did with my classmate, Paige Carl, for the Harn Museum of Art in Gainesville, FL. The project challenge was to design an app for the Harn Museum that focused on the Asian collection emphasizing both mobility and sensor technology. Our solution led to the creation of an app, EyeSpy, which we prototyped with a focus on the Asian collection of the Harn but could also be expanded for future collections. \n\n EyeSpy is designed to be the Harn Museum’s interactive mystery adventure game app. Users have only 60 minutes to physically explore the museum exhibit to search for clues and figure out riddles to solve the mystery. During the project I had a large focus on the story, concepting, research, User Interface design, and illustration. Paige and I worked together to create the information architecture and user experience of the game and split screen production design. \n\n Try the prototype on [invision](http://invis.io/UX2RU5KV6)'
          ),
          new ImageNode('images/EyeSpyRiddler.jpg'),
        ],
        [
          new ImageNode('images/eyespy-user.jpg'),
          new ImageNode('images/EyeSpy-elephant.jpg'),
          new ImageNode('images/EyeSpy-menu.jpg'),
          new ImageNode('images/EyeSpy-Concept.jpg'),
        ],
        [
          new ImageNode('images/EyeSpy-FlatPurple.jpg'),
          new ImageNode('images/eyespy-infoarchitecture.jpg'),
        ],
        [
          new ImageNode('images/EyeSpy-Vessel.jpg'),
          new ImageNode('images/EyeSpy_Welcome.jpg'),
          new ImageNode('images/EyeSpy-done.jpg'),
          new ImageNode('images/EyeSpy-DemoView.jpg'),
        ],
      ],
    },
    {
      title: 'RecSports Small Group Training',
      tags: ['print', 'digital', 'campaign'],
      thumbnail: 'images/findfit-thumbnail.jpg',
      rows: [
        [
          new TextNode(
            'The marketing team for Recreational Sports at the University of Florida is comprised of designers, videographers, photographers, and media specialists. I work in-house where we service many different departments within RecSports like clients making sure to boost visibility and spread awareness of several campaigns or events. This was a 4 page booklet I designed for Small Group Training. It includes the different formats offered for that semester as well as the rates and calendar of all the classes being offered. For the campagn we printed and distributed the 4 pager at all our facilities and ran the campaign through our website and social media channels. I also animated the campaign for our digital outlets that play throughout the day on severals screens throughout the fitness facilites.',
            'TLDR'),
          new VideoNode(
            'https://player.vimeo.com/video/155912657',
            'EyeSpy',
            2,
          ),
        ],
        [
          new ImageNode('images/findfit-multiple.jpg'),
          new ImageNode('images/findfit-double.jpg'),
          new ImageNode('images/findfit-social.jpg'),
          
        ],
        [
          new ImageNode('images/findfit-booklet.gif'),
          new ImageNode('images/findfit-double.jpg', 2),
        ],
        [
          new ImageNode('images/findfit-sides.jpg', 2),
          new ImageNode('images/findfit-tvs.jpg'),
        ]
      ],
    },
    {
      title: 'Relient K Band Tour',
      tags: ['branding', 'illustration'],
      thumbnail: 'images/relientk-digitalad.gif',
      rows: [
        [
          new TextNode(
            'Relient K - Only Fools Know Everything was a retrospective tour campaign I created for a student project. For this retrospective tour I wanted to capture the essence of growing up and making mistakes but having fun doing it which is how the band has characterized themselves through their music over the years. The idea is that because you were a fool you messed up and it has made you who you are today. <br><br>The tour is accompanied by a book release in which the band writes on their journey and process of writing their songs as well as a special edition CD release that includes a lyric booklet of all the songs on the album. Fans and new listeners will notice that each song is accompanied by illustrations relating to lyrics within the songs. These illustrations comprise the identity of the tour itself shown through posters, VIP passes, book and album art. '
          ),
          new ImageNode(
            'images/relientk-all.jpg',
            2,
          ),
        ],
        [
          new ImageNode('images/relientk-posters.jpg'),
          new ImageNode('images/relientk-trio.jpg'),
          new ImageNode('images/relientk-cd.jpg'),
        ],
        [
          new ImageNode('images/relientk-book.jpg'),
          new ImageNode('images/relientk-bookdetails.jpg'),
          new ImageNode('images/relientk-pass.jpg'),
        ],
        [
          new ImageNode('images/relientk-lyricbook.jpg'),
          new ImageNode('images/relientk-all2.jpg'),
        ]
      ],
    },
    {
      title: 'The Kailune Chronicles',
      tags: ['concept', 'storytelling', 'illustration'],
      thumbnail: 'images/imaginations-poster.jpg',
      rows: [
        [
          new TextNode(
            'The Kailune Chronicles is a project designed for the Disney Imaginations Competition. I recruited 3 other students - Elizabeth Rhodes, Brandon Kocher, and Shari Brown. The 2015 challenge was to create a form of traveling entertainment that could be set up and broken down within a day. Together we collaborated and came up with the story of the Kailune Chronicles. In production we split up our duties to create the final presentation. My contributions to the project were creating the logo, the official park map, helping with concept and UX of the app, concept art of the domes and airships, research of airship technology, Maya 3-D model of the airships, and the storyboard art sequence of the final show. Overall I worked as the team leader and art director making calendars and controlling task management of the group.'
          ),
          new ImageNode(
            'images/imaginations-logo.jpg',
            2,
          ),
        ],
        [
          new ImageNode('images/imaginations-2.jpg'),
          new ImageNode('images/imaginations-3.jpg'),
          new ImageNode('images/imaginations-4.jpg'),
        ],
        [
          new ImageNode('images/imaginations-5.jpg'),
          new ImageNode('images/imaginations-6.jpg'),
          new ImageNode('images/imaginations-map.jpg'),
          new ImageNode('images/imaginations-process.jpg'),
        ],
      ],
    },
    {
      title: 'Haulbox Startup',
      tags: ['branding', 'digital', 'mobile app', 'web'],
      thumbnail: 'images/haulboxthum.png',
      rows: [
        [
          new TextNode(
            'Haulbox is a StartUp Company that originated in Gainesville, FL. As their lead graphic designer I collaborated with the founders to ideate and create their entire visual branding system from the ground up. From designing the logo to creating the icons for the user interface of the app and site I wanted to reflect the company\'s convenient, friendly, and easy service. During this experience I worked with entreprenuers and programmers directly in an open studio layout at the startup incubator Starterspace. I was later promoted to work with other startups within Starterspace as a creative director and designer.'),
          new ImageNode(
            'images/haulboxicons.png',
            2,
          ),
        ],
        [
          new ImageNode(
            'images/haulboxweb.png',
          ),
          new ImageNode(
            'images/haulboxdemo.png',
          ),
          new ImageNode(
            'images/haulboxapp.png',
          ),
        ],
      ],
    },
    {
      title: 'The Faces of Luck',
      tags: ['digital', 'illustration'],
      thumbnail: 'images/cards-characters.jpg',
      rows: [
        [
          new TextNode(
            'Faces of Luck was created for a student project. The illustration depicts an exploded view of playing cards but also holds meaning in the depictions of the King and Queen. Cards can associated with gambling and the images work to subtly show the cycles of gambling, you win some and you lose some. Gambling is a non-discriminatory activity and can effect both male and female. The illustration portrays this serious topic in a lighthearted style and allows people to entertain the thought of lows and highs in gambling. The video animation will later be expanded to follow the storyboard included. This project will also later be expanded into a card deck.'),
          new VideoNode(
            'https://player.vimeo.com/video/157179695',
            'FOL',
          ),
        ],
        [
          new ImageNode(
            'images/cardsflat.png'
          ),
          new ImageNode(
            'images/cards-suits.jpg'
          ),
          new ImageNode(
            'images/cards-storyboard.jpg'
          ),
        ],
      ],
    },
    {
      title: 'Intramural Sports Campaign',
      tags: ['branding', 'print'],
      thumbnail: 'images/im-thumb.jpg',
      images: [
        'images/im-preview1.jpg',
        'images/im-multiple.jpg',
        'images/im-coverpage.jpg',
        'images/im-inside.jpg',
        'images/im-backpage.jpg',
        'images/im-context.jpg'
      ],
      description:
        'The marketing team for Recreational Sports at the University of Florida is comprised of designers, videographers, photographers, and media specialists. I work in-house where we service many different departments within RecSports like clients making sure to boost visibility and spread awareness of several campaigns or events. This project is a campaign for 2016 - 2017 Intramural Sports. For this campaign I took advantage of all the resources and talent available. As the creative director and lead designer I worked with our photographers Camron and Muxi to take photos of over 20 different sports offered. From there I developed a style for the campaign and designed the materials for Summer 2016. I will be training and passing on this project to younger designers so the style can be applied to the campaign for Fall and Spring Semesters.'
    },
    {
      title: 'Jelly Belly',
      tags: ['branding', 'illustration', 'print'],
      thumbnail: 'images/jelly-bag.jpg',
      images: [
        'images/jelly-all.jpg',
        'images/jelly-flavordetails.jpg',
        'images/jelly-cards.jpg',
        'images/jelly-poster.gif',
        'images/jelly-flavorbag.jpg',
        'images/jelly-bagdance.gif'
      ],
      description:
        "This student project is the beginning of a rebrand for Jelly Belly, the makers of gourmet jelly beans. After researching Jelly Belly's history I learned that jelly beans were actually made popular by President Ronald Reagan during his time in office. Since then Jelly Belly has kept their brand identity the same so I wanted to bring new life to the brand and make it more relevant to today. As the generation of Ronald Reagan ages I wanted to focus to a new and younger audience. Here I have have created a new logo, mascot, flavor guide, and packaging concept. The project will later extend to show character animations and a larger packaging system."
    },
    {
      title: 'Goode Chocolate Bars',
      tags: ['packaging', 'branding', 'print'],
      thumbnail: 'images/goode-thumb.jpg',
      images: [
        'images/goodechocolate.jpg',
        'images/goode-back.jpg',
        'images/goode-above.jpg'
      ],
      description:
        'The Goode Chocolate Company was a fictional chocolate company for a student project celebrating 100 years of business. To honor their anniversary this packaging design pays tribute to some of the company’s best years, the roaring 20s. The company sells three flavors dark, milk, and white chocolate each distinguished by a different colored foil revealed through the die cut New York City skyline where the company originated.'
    },
    {
      title: 'Wacom 2015 Annual Report',
      tags: ['digital', 'web'],
      thumbnail: 'images/wacom-thumb.gif',
      clips: [
        '<iframe src="https://player.vimeo.com/video/160619108?autoplay=1&loop=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
      ],
      images: [
        '$',
        'images/wacom-intro.gif',
        'images/wacom-brand.gif',
        'images/wacom-home.jpg',
        'images/wacom-goodbye.jpg'
      ],
      description:
        'This student project required us to select a publicly traded company and produce an annual report using their released information and statistics. Wacom is a technology and solutions company most known for their digital tablet products. They believe in encouraging and supporting a creative world through their technologies. Their current annual report is a .pdf version of their a several page print book. Wacom was last rebranded in 2007 but their website reflects a slightly changed brand language not included in their brand guideline. I wanted to create an annual report that fit with the current brand of Wacom for a completely digital platform. For this project I learned and used muse to create the website prototype shown. '
    }
  ];
}

export default Data;
