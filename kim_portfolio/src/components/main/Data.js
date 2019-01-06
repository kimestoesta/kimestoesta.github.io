import ImageNode from './project/nodes/ImageNode';
import TextNode from './project/nodes/TextNode';
import VideoNode from './project/nodes/VideoNode';

class Data {

  static projects = [
    {
      title: 'Git Merge',
      tags: ['branding'],
      thumbnail: 'images/gitmerge-badge.jpg',
      rows: [
        [
          new TextNode(
            'Git Merge is a full-day conference offering technical content and user case studies, plus a day of workshops for Git users of all levels. I had the opportunity to lead the design for Git Merge conferences 2017 and 2018. It was an interesting challenge to reinvision the design in 2018 since doing it in 2017. The problem: How do I make this brand look the same but also different?',
            'TLDR'),
          new ImageNode(
            'images/gitmerge-pattern.jpg',
            2,
          )
        ],
        [
          new TextNode(
            ' ','Git Merge 2017 Brand'),
        ],
        [
          new ImageNode('images/gitmerge-2017brand.jpg'),
        ],
        [
          new TextNode(
              '- Engage with the Git Community \n - Create a rewarding attendee experience \n - Create a Platform for Speakers and exhibitors','Goals Git Merge 2018'),
          new TextNode(
            '- Branding \n - Marketing on social media \n - Swag items \n - Signage and way finding exhibitors','Responsibilities'),
          new TextNode(
            'How do we evolve the Git Merge brand from last year? \n 2017 branding took a micro look into git branches, git lines were zoomed in. \n Consider: \n - zooming out \n - what the git lines mean in a larger context?','Explorations'),
        ],
        [
          new ImageNode('images/gitmerge-explorations2018.jpg'),
        ],
        [
          new TextNode(
            'This year we zoom out and thought about what these git lines mean. The lines are part of building a project so I settled on squares on a grid that could be visually built and rearranged. Grouping squares into tetris like shapes also helped visualize the idea of building and how projects are all different but can be created through the same process of git.','Brand Guide'),
            new TextNode(
            ' '),
        ],
        [
          new ImageNode('images/gitmerge-brand2018.jpg'),
        ],
        [
          new ImageNode('images/gitmerge-site2018.jpg'),
        ],
        [
          new TextNode(
            'Git Merge 2018 happened in Barcelona at Convent Dels Àngels at the MACBA. The historical building that was once a church and is now preserved and part of their museum of contemporary art. I flew to Barcelona to meet with vendors, plan directional signage, lighting, and discuss any restrictions the venue had on branding the space. ','Site Visit'),
          new TextNode(
            '  '),
        ],
        [
          new ImageNode(
            'images/gitmerge-venue.jpg')
        ],
        [
          new TextNode(
            '  ','Things I am thinking about'),
        ],
        [
          new TextNode(
            '- How people can navigate the space? Are there points of confusion in the user journey? \n - Branding vs directional signage (Directional is priority but then you build from that. What spaces are lacking visual queues and breaking the experience of being at the conference?'),
          new TextNode(
            '- Make sure you are communicating what you are imagining, especially to vendors! Making visual mock ups and providing reference images are the best way to communicate your ideas. It made working asynchronously in different time zones and language barriers on this project easier.'),
            new TextNode(
              '- What is the attendee experience day of? Will  ex) schedule of events, staff members for questions')
        ],
        [
          new TextNode(
            ' ','The final outcome'),
        ],
        [
          new ImageNode(
            'images/gitmerge-photos.jpg')
        ],
      ],
    },
    {
      title: 'Building the Future',
      tags: ['digital', 'web design',],
      thumbnail: 'images/btf-dibbble.gif',
      rows: [
        [
          new TextNode(
            'This campaign highlights developers in the open source community. Their projects are building the future by creating things that help people around them and around the world. Every one has the ability to build the future and GitHub makes it easy for people to share ideas and work together to make it happen. \n\n See it live: https://github.com/buildingthefuture \n\n I was responsible for branding, designing, and coding the website while also overseeing the production of the on-site gallery part of the campaign at our flagship conference, Universe.'),
          new ImageNode('images/btf-websizes.jpg',2,),
        ],
        [
          new TextNode(
            'GitHub celebrated their 10 year anniversary in 2018 so we launched a campaign that celebrated all the milestones the community has accomplished in the past 10 years. The next chapter in that story is what comes next — a pivot and look towards the next 10 years. In this phase we want to empower the community to think about what they will build and how their work can impact the world around them.','Background'),
          new TextNode(
            'Create a website that contains all the campaign videos and information in one place.','Task'),
          new TextNode(
            '- Designing parallel to the creation of the campaign videos contractors were working on. The photos and videos were a big part of the visuals but there was not room on the timeline to wait to get assets in before creating the website and gallery designs. \n - Working both on all parts of the project including design, front-end development, and environmental pieces.','Challenges')
        ],
        [
          new TextNode(
            ' ','Research and Explorations'),
        ],
        [
          new ImageNode('images/btf-research.jpg'),
          new ImageNode('images/btf-sketch.jpg'),
        ],
        [
          new TextNode(
            ' ','Wireframes'),
        ],
        [
          new ImageNode('images/btf-wireframes.jpg'),
        ],
        [
          new TextNode(
            ' ','Mocks Ups'),
          new ImageNode('images/btf-typeexplorations.png',2,),
        ],
        [
          new ImageNode('images/btf-whitemockup.jpg'),
        ],
        [
          new TextNode(
            ' ','Brand Definition'),
        ],
        [
          new ImageNode('images/btf-branddefinition.png'),
        ],
        [
          new TextNode(
            ' ','Final Mockup'),
        ],
        [
          new ImageNode('images/btf-mockupdark.jpg'),
        ],
        [
          new TextNode(
            ' ','Build'),
        ],
        [
          new ImageNode('images/btf-site1.png'),
          new ImageNode('images/btf-featureflag.png'),
        ],
        [
          new ImageNode('images/btf-jamica.png'),
          new ImageNode('images/btf-julius.png'),
        ],
        [
          new TextNode(
            'visit https://github.com/buildingthefuture','Final Site'),
        ],
        [
          new ImageNode('images/btf-fullsite.png'),
        ],
      ],
    },
    {
      title: 'Primal Screen',
      tags: ['interactive', 'digital', 'illustration'],
      thumbnail: 'images/nickjr-dressup.png',
      rows: [
        [
          new TextNode(
            'Primal Screen is an award winning design studio based in Atlanta, Georgia. That provide a full gamut of design service including animation, motion graphics, live action, audio, music composition, and interactive development.\n\n While I was working at Primal I was able to work on a variety of projects for clients like:\n - PBS kids \n - Sesame Workshop \n- Adult Swim \n- Nick Jr','TLDR'),
          new ImageNode(
            'images/Never_Give_Up.jpg',
            2,
          ),
        ],
        [
          new TextNode(
            'Project: Daniel Tiger\'s Neighborhood app \n\n My contributions: User Interface, User Experience, Information Architecture, Prototyping \n\n Background: Daniel Tiger is an animated family-oriented television series based on the Neighborhood of Make Believe from Mister Roger\'s Neighborhood. The show is aimed to teach children emotional intelligence and human respect. The show has produced numerous clips of their lessons and wanted a way for parents to access those videos in an app. I worked on designing the screens and interface of the app then later animated and created a prototype. One of biggest challenges we faced was accessibility. The audience was aimed for all parents of varying financial situations we had to keep in mind how videos and content could be loaded and still mobile without eating too much data. Unfortunately, I left Primal Screen before finishing this project.  ','Client: PBS Kids'),
          new TextNode(
            'Project: Breath, Think, Do E-book \n\n My contributions: Illustrator \n\n Background: Breathe, Think, Do is a campaign by Sesame Street that teaches children to deal with emotions like anger and frustration. Primal Screen previously created the Breath, Think, Do app for Sesame Workshop and asked this app be translated into a story and illustrated for an E-book. I was responsible for transposing all the imagery from the app to a more textured and painterly style for the E-book. ','Client: Sesame Workshop'),

        ],
        [
          new TextNode(
            'Project: Squidbillies Bumper \n My contributions: Character design \n Background: \n\n Primal Screen has a long standing relationship with Cartoon Network also based in Atlanta. For this project we worked to create a season premier bumper for Adult Swim\'s show Squidbillies, an adult animated comedy about anthropomorphic hillbilly mud squids. The idea was to create a Godzilla inspired bumper with the main characters of the show destroying the city and causing chaos. I helped turn them from giant squids to giant gross monsters.','Client: Adult Swim'),
            new VideoNode(
              'https://www.youtube.com/embed/W5r4UJZBM9c',
              'squidbillies',
              2,
            ),
        ],
        [
          new ImageNode('images/squidbillies-design.jpg'),
        ],
        [
          new TextNode(
            'Project: Bubble Guppies Kideo \n\n My contributions: Storyboard, stage hand on set, asset design, typography, title card design and motion graphics \n\n Background: \n Nickelodeon has been a long time client of Primal Screen. This bumper was one of several videos we created to help them to promote a variety of their Nick Jr. shows including Bubble Guppies, Shimmer and Shine, Team Umizoomi, Blaze and the Monster Machine, and Paw Patrol. For this video we made a mini music video using a song from the show Bubble Guppies. While planning for the video I created all the animated assets and type and helped storyboard the shots we would need on set. On set I assisted the art director and worked to help direct the kids. In post production I animated the title card of the video.','Client: Nickelodeon'),
          new VideoNode(
            'https://www.youtube.com/embed/95pfhGG7OXM',
            'bubbleguppies',2,),
        ],
        [
          new TextNode(
            'Project: Nick Jr Dress up - Paw Patrols & General \n\n My contributions: Storyboard, stage hand on set, asset creation, rotoscoping, title card design and animation. \n\n Background: \n The inspiration for these videos were augmented reality face filters originally made popular by snapchat. We produced a video for their Nick Jr. shows Bubble Guppies, Shimmer and Shine, Team Umizoomi, Blaze and the Monster Machine, and Paw Patrol and another specifically for the just for the show Paw Patrol. During pre-production I rotoscoped all the assets they would use to overlay as filters and helped storyboard the shots we would need on set. On set I assisted the art director and worked to help direct the kids. During post production I designed and animated the title cards for both videos.','Client: Nickelodeon'),
          new VideoNode(
            'https://www.youtube.com/embed/prYG8uOQxuU',
            'dressup',2,),
        ],
        [
          new VideoNode(
            'https://www.youtube.com/embed/AEjA3ooi180',
            'pawpatrol'),
        ],
      ],
    },
    {
      title: 'Jelly Belly',
      tags: ['branding', 'illustration', 'print'],
      thumbnail: 'images/jelly-bag.jpg',
      rows: [
        [
          new TextNode(
            'This project is the beginning of a rebrand for Jelly Belly, the makers of gourmet jelly beans. After researching Jelly Belly\'s history I learned that jelly beans were actually made popular by President Ronald Reagan during his time in office. Since then Jelly Belly has kept their brand identity the same so I wanted to bring new life to the brand and make it more relevant to today. As the generation of Ronald Reagan ages I wanted to focus to a new and younger audience. Here I have have created a new logo, mascot, flavor guide, and packaging concept. The project will later extend to show character animations and a larger packaging system.','TLDR'),
          new ImageNode(
            'images/jelly-all.jpg',
            2,
          ),
        ],
        [
          new ImageNode('images/jelly-flavorbag.jpg'),
          new ImageNode('images/jelly-cards.jpg'),
        ],
        [
          new ImageNode('images/jelly-bag.jpg'),
          new ImageNode('images/jelly-flavordetails.jpg',2,),
        ],
        [
          new ImageNode('images/jelly-bagdance.gif'),
          new ImageNode('images/jelly-bags.jpg'),
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
        ],
        [
          new ImageNode('images/relientk-lyricbook.jpg'),
          new ImageNode('images/relientk-trio.jpg'),
        ],
        [
          new ImageNode('images/relientk-cd.jpg'),
          new ImageNode('images/relientk-pass.jpg'),
          new ImageNode('images/relientk-book.jpg'),
        ],
        [
          new ImageNode('images/relientk-all2.jpg'),
        ],
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
