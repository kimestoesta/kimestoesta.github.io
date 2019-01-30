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
          new TextNode({
            text:
              'Git Merge is a full-day conference offering technical content and user case studies, plus a day of workshops for Git users of all levels. I had the opportunity to lead the design for Git Merge conferences 2017 and 2018. It was an interesting challenge to reinvision the design in 2018 since doing it in 2017. The problem: How do I make this brand look the same but also different?',
            header: 'TLDR'
          }),
          new ImageNode('images/gitmerge-pattern.jpg', 2)
        ],
        [
          new TextNode({
            text: ' ',
            header: 'Git Merge 2017 Brand'
          })
        ],
        [new ImageNode('images/gitmerge-2017brand.jpg')],
        [
          new TextNode({
            text:
              '- Engage with the Git Community \n - Create a rewarding attendee experience \n - Create a Platform for Speakers and exhibitors',
            header: 'Goals Git Merge 2018',
            headerStyles: 'mx-5 projectheader',
            nodeStyles: 'mx-1'
          }),
          new TextNode({
            text:
              '- Branding \n - Marketing on social media \n - Swag items \n - Signage and way finding exhibitors',
            header: 'Responsibilities'
          }),
          new TextNode({
            text:
              'How do we evolve the Git Merge brand from last year? \n 2017 branding took a micro look into git branches, git lines were zoomed in. \n Consider: \n - zooming out \n - what the git lines mean in a larger context?',
            header: 'Explorations'
          })
        ],
        [new ImageNode('images/gitmerge-explorations2018.jpg')],
        [
          new TextNode({
            text:
              'This year we zoom out and thought about what these git lines mean. The lines are part of building a project so I settled on squares on a grid that could be visually built and rearranged. Grouping squares into tetris like shapes also helped visualize the idea of building and how projects are all different but can be created through the same process of git.',
            header: 'Brand Guide'
          }),
          new TextNode({
            text: ' '
          })
        ],
        [new ImageNode('images/gitmerge-brand2018.jpg')],
        [new ImageNode('images/gitmerge-site2018.jpg')],
        [
          new TextNode({
            text:
              'Git Merge 2018 happened in Barcelona at Convent Dels Àngels at the MACBA. The historical building that was once a church and is now preserved and part of their museum of contemporary art. I flew to Barcelona to meet with vendors, plan directional signage, lighting, and discuss any restrictions the venue had on branding the space. ',
            header: 'Site Visit'
          }),
          new TextNode({
            text: '  '
          })
        ],
        [new ImageNode('images/gitmerge-venue.jpg')],
        [
          new TextNode({
            text: '  ',
            header: 'Things I am thinking about'
          })
        ],
        [
          new TextNode({
            text:
              '- How people can navigate the space? Are there points of confusion in the user journey? \n - Branding vs directional signage (Directional is priority but then you build from that. What spaces are lacking visual queues and breaking the experience of being at the conference?'
          }),
          new TextNode({
            text:
              '- Make sure you are communicating what you are imagining, especially to vendors! Making visual mock ups and providing reference images are the best way to communicate your ideas. It made working asynchronously in different time zones and language barriers on this project easier.'
          }),
          new TextNode({
            text:
              '- What is the attendee experience day of? Will  ex) schedule of events, staff members for questions'
          })
        ],
        [
          new TextNode({
            text: ' ',
            header: 'The final outcome'
          })
        ],
        [new ImageNode('images/gitmerge-photos.jpg')]
      ]
    },
    {
      title: 'Building the Future',
      tags: ['digital', 'web design'],
      thumbnail: 'images/btf-dibbble.gif',
      rows: [
        [
          new TextNode({
            text:
              'This campaign highlights developers in the open source community. Their projects are building the future by creating things that help people around them and around the world. Every one has the ability to build the future and GitHub makes it easy for people to share ideas and work together to make it happen. \n\n See it live: https://github.com/buildingthefuture \n\n I was responsible for branding, designing, and coding the website while also overseeing the production of the on-site gallery part of the campaign at our flagship conference, Universe.'
          }),
          new ImageNode('images/btf-websizes.jpg', 2)
        ],
        [
          new TextNode({
            text:
              'GitHub celebrated their 10 year anniversary in 2018 so we launched a campaign that celebrated all the milestones the community has accomplished in the past 10 years. The next chapter in that story is what comes next — a pivot and look towards the next 10 years. In this phase we want to empower the community to think about what they will build and how their work can impact the world around them.',
            header: 'Background'
          }),
          new TextNode({
            text:
              'Create a website that contains all the campaign videos and information in one place.',
            header: 'Task'
          }),
          new TextNode({
            text:
              '- Designing parallel to the creation of the campaign videos contractors were working on. The photos and videos were a big part of the visuals but there was not room on the timeline to wait to get assets in before creating the website and gallery designs. \n - Working simultaneously on all parts of the project: visual design,  front-end development, photo treatment, and environmental print pieces.',
            header: 'Challenges'
          })
        ],
        [
          new TextNode({
            text: ' ',
            header: 'Research and Explorations'
          })
        ],
        [
          new ImageNode('images/btf-research.jpg'),
          new ImageNode('images/btf-sketch.jpg')
        ],
        [
          new TextNode({
            text: ' ',
            header: 'Wireframes'
          })
        ],
        [new ImageNode('images/btf-wireframes.jpg')],
        [
          new TextNode({
            text: ' ',
            header: 'Mocks Ups'
          }),
          new ImageNode('images/btf-typeexplorations.png', 2)
        ],
        [new ImageNode('images/btf-whitemockup.jpg')],
        [
          new TextNode({
            text: ' ',
            header: 'Brand Definition'
          })
        ],
        [new ImageNode('images/btf-branddefinition.png')],
        [
          new TextNode({
            text: ' ',
            header: 'Final Mockup'
          })
        ],
        [new ImageNode('images/btf-mockupdark.jpg')],
        [
          new TextNode({
            text: ' ',
            header: 'Build'
          })
        ],
        [
          new ImageNode('images/btf-site1.png'),
          new ImageNode('images/btf-featureflag.png')
        ],
        [
          new ImageNode('images/btf-jamica.png'),
          new ImageNode('images/btf-julius.png')
        ],
        [
          new TextNode({
            text: 'visit https://github.com/buildingthefuture',
            header: 'Final Site'
          })
        ],
        [new ImageNode('images/btf-fullsite.png')]
      ]
    },
    {
      title: 'Primal Screen',
      tags: ['interactive', 'digital', 'illustration'],
      thumbnail: 'images/nickjr-dressup.png',
      rows: [
        [
          new TextNode({
            text:
              'Primal Screen is an award winning design studio based in Atlanta, Georgia. That provide a full gamut of design service including animation, motion graphics, live action, audio, music composition, and interactive development.\n\n While I was working at Primal I was able to work on a variety of projects for clients like:\n - PBS kids \n - Sesame Workshop \n- Adult Swim \n- Nick Jr',
            header: 'TLDR'
          }),
          new ImageNode('images/Never_Give_Up.jpg', 2)
        ],
        [
          new TextNode({
            text:
              "Project: Daniel Tiger's Neighborhood app \n\n My contributions: User Interface, User Experience, Information Architecture, Prototyping \n\n Background: Daniel Tiger is an animated family-oriented television series based on the Neighborhood of Make Believe from Mister Roger's Neighborhood. The show is aimed to teach children emotional intelligence and human respect. The show has produced numerous clips of their lessons and wanted a way for parents to access those videos in an app. I worked on designing the screens and interface of the app then later animated and created a prototype. One of biggest challenges we faced was accessibility. The audience was aimed for all parents of varying financial situations we had to keep in mind how videos and content could be loaded and still mobile without eating too much data. Unfortunately, I left Primal Screen before finishing this project.  ",
            header: 'Client: PBS Kids'
          }),
          new TextNode({
            text:
              'Project: Breath, Think, Do E-book \n\n My contributions: Illustrator \n\n Background: Breathe, Think, Do is a campaign by Sesame Street that teaches children to deal with emotions like anger and frustration. Primal Screen previously created the Breath, Think, Do app for Sesame Workshop and asked this app be translated into a story and illustrated for an E-book. I was responsible for transposing all the imagery from the app to a more textured and painterly style for the E-book. ',
            header: 'Client: Sesame Workshop'
          })
        ],
        [
          new TextNode({
            text:
              "Project: Squidbillies Bumper \n My contributions: Character design \n Background: \n\n Primal Screen has a long standing relationship with Cartoon Network also based in Atlanta. For this project we worked to create a season premier bumper for Adult Swim's show Squidbillies, an adult animated comedy about anthropomorphic hillbilly mud squids. The idea was to create a Godzilla inspired bumper with the main characters of the show destroying the city and causing chaos. I helped turn them from giant squids to giant gross monsters.",
            header: 'Client: Adult Swim'
          }),
          new VideoNode(
            'https://www.youtube.com/embed/W5r4UJZBM9c',
            'squidbillies',
            2
          )
        ],
        [new ImageNode('images/squidbillies-design.jpg')],
        [
          new TextNode({
            text:
              'Project: Bubble Guppies Kideo \n\n My contributions: Storyboard, stage hand on set, asset design, typography, title card design and motion graphics \n\n Background: \n Nickelodeon has been a long time client of Primal Screen. This bumper was one of several videos we created to help them to promote a variety of their Nick Jr. shows including Bubble Guppies, Shimmer and Shine, Team Umizoomi, Blaze and the Monster Machine, and Paw Patrol. For this video we made a mini music video using a song from the show Bubble Guppies. While planning for the video I created all the animated assets and type and helped storyboard the shots we would need on set. On set I assisted the art director and worked to help direct the kids. In post production I animated the title card of the video.',
            header: 'Client: Nickelodeon'
          }),
          new VideoNode(
            'https://www.youtube.com/embed/95pfhGG7OXM',
            'bubbleguppies',
            2
          )
        ],
        [
          new TextNode({
            text:
              'Project: Nick Jr Dress up - Paw Patrols & General \n\n My contributions: Storyboard, stage hand on set, asset creation, rotoscoping, title card design and animation. \n\n Background: \n The inspiration for these videos were augmented reality face filters originally made popular by snapchat. We produced a video for their Nick Jr. shows Bubble Guppies, Shimmer and Shine, Team Umizoomi, Blaze and the Monster Machine, and Paw Patrol and another specifically for the just for the show Paw Patrol. During pre-production I rotoscoped all the assets they would use to overlay as filters and helped storyboard the shots we would need on set. On set I assisted the art director and worked to help direct the kids. During post production I designed and animated the title cards for both videos.',
            header: 'Client: Nickelodeon'
          }),
          new VideoNode(
            'https://www.youtube.com/embed/prYG8uOQxuU',
            'dressup',
            2
          )
        ],
        [
          new VideoNode(
            'https://www.youtube.com/embed/AEjA3ooi180',
            'pawpatrol'
          )
        ]
      ]
    },
    {
      title: 'Jelly Belly',
      tags: ['branding', 'illustration', 'print'],
      thumbnail: 'images/jelly-bag.jpg',
      rows: [
        [
          new TextNode({
            text:
              "This project is the beginning of a rebrand for Jelly Belly, the makers of gourmet jelly beans. After researching Jelly Belly's history I learned that jelly beans were actually made popular by President Ronald Reagan during his time in office. Since then Jelly Belly has kept their brand identity the same so I wanted to bring new life to the brand and make it more relevant to today. As the generation of Ronald Reagan ages I wanted to focus to a new and younger audience. Here I have have created a new logo, mascot, flavor guide, and packaging concept. The project will later extend to show character animations and a larger packaging system.",
            header: 'TLDR'
          }),
          new ImageNode('images/jelly-all.jpg', 2)
        ],
        [
          new ImageNode('images/jelly-flavorbag.jpg'),
          new ImageNode('images/jelly-cards.jpg')
        ],
        [
          new ImageNode('images/jelly-bag.jpg'),
          new ImageNode('images/jelly-flavordetails.jpg', 2)
        ],
        [
          new ImageNode('images/jelly-bagdance.gif'),
          new ImageNode('images/jelly-bags.jpg')
        ]
      ]
    },
    {
      title: 'Constellation Roadshow',
      tags: ['branding', 'digital'],
      thumbnail: 'images/constellation-thumb.png',
      rows: [
        [
          new TextNode({
            text:
              'With the success of Constellation Tokyo, GitHub Constellation evolved into a roadshow event visiting communities all around the world. Jumping from the more site specific branding of Constellation Tokyo, I wanted to keep the lock up and give it a brand that could work for all the future stops on this roadshow. The biggest challenge of this project was designing a system that would allow each location to have distinct contrast from one another on site and through digital communications while also branding them cohesively to allow assets to be reused from location to location. \n\n Working with contractors Andrew and Kyle I passed on the brand kit and they brought http://githubconstellation.com/ to life.',
            header: 'TLDR'
          }),
          new ImageNode('images/constellation-roadshow.png', 2)
        ],
        [new ImageNode('images/constellation-assets.png')],
        [new TextNode({ text: ' ', header: 'Digital Identity' })],
        [new ImageNode('images/constellation-city-brand.jpg')],
        [
          new TextNode({ text: ' ' }),
          new ImageNode('images/constellation-toronto.jpg', 2)
        ],
        [
          new ImageNode('images/constellation-boston.png'),
          new ImageNode('images/constellation-chicago.jpg'),
          new ImageNode('images/constellation-seattle.png')
        ],
        [
          new ImageNode('images/constellation-london.png'),
          new ImageNode('images/constellation-dc.png'),
          new TextNode({ text: '  ' })
        ],
        [new TextNode({ text: ' ', header: 'Site Design' })],
        [new ImageNode('images/constellation-site18.png')]
      ]
    },
    {
      title: 'That One Spot',
      tags: ['print', 'branding', 'illustration'],
      thumbnail: 'images/spot-takeout.jpg',
      rows: [
        [
          new TextNode({
            text:
              'That One Spot is a rebrand I did for a client running a family owned burger restaurant located in Ocoee, FL. They are known for their well crafted and customizable burgers with a variety of meat options but also provide a variety of salads and sides. While their ingredients are fresh and local they aim to be a fast casual spot for everyone to grab a bite. Keeping their brand in mind I was hired to rebrand the restaurant to more closely reflect their voice today and as they look to grow.',
            header: 'TLDR'
          }),
          new ImageNode('images/spot-all2.jpg', 2)
        ],
        [
          new ImageNode('images/spot-bigmenu.jpg'),
          new ImageNode('images/spot_mat.jpg'),
          new ImageNode('images/spot-businesscards.jpg')
        ],
        [
          new ImageNode('images/spot-takeout1.jpg'),
          new ImageNode('images/spot-takeout2.jpg')
        ],
        [new ImageNode('images/spot_menus.jpg')],
        [new ImageNode('images/spot-all.jpg')]
      ]
    },
    {
      title: 'Constellation Tokyo',
      tags: ['branding', 'digital'],
      thumbnail: 'images/tokyo-thumb.jpg',
      rows: [
        [
          new TextNode({
            text:
              "GitHub's flagship conference, Universe is hosted in San Francisco every year. Here we announce products, host workshops, and meet with customers to listen to their needs and answer their questions. It's a great experience to come together as a community and it's the type of event that we wanted to make sure more of our customers could have access to. We started with GitHub Satellite as a European touch point and now Constellation Tokyo was our opportunity to better connect with our Asian Pacific audience.",
            header: 'TLDR'
          }),
          new ImageNode('images/tokyo-redbrand.png', 2)
        ],
        [
          new TextNode({
            text:
              "Working within the Universe logo family I explored logos that used Mona's silhouette with a more customized mark to represent Japan. This allowed for a system that we could hopefully expand year to year, as the location changed.",
            header: 'Logo'
          }),
          new TextNode({
            text: ' '
          })
        ],
        [
          new ImageNode('images/tokyo-logoexploration1.png'),
          new ImageNode('images/tokyo-logoexploration2.png')
        ],
        [
          new TextNode({
            text:
              'In researching Japanese history and culture I found inspiration for color and pattern in their textiles and art. Japanese printmaking, ink-wash paintings, and indigo dye led to the colors of deep blue, gold, ivory, and red. Sakiori weaving, a Japanese textile looming method, inspired the overlapping blocks, constellation pattern, lines, and stitches of the design.',
            header: 'Color & Pattern'
          }),
          new TextNode({
            text: ' '
          })
        ],
        [
          new ImageNode('images/tokyo-tokyoblue.png'),
          new ImageNode('images/tokyo-tokyoivory.png'),
          new ImageNode('images/tokyo-tokyored.png')
        ],
        [
          new TextNode({
            text: ' ',
            header: 'Final Brand'
          })
        ],
        [new ImageNode('images/tokyo-tokyobrand.png')],
        [
          new VideoNode(
            'https://www.youtube.com/embed/8jN2K1SnPJ4',
            'constelation-tokyo'
          )
        ],
        [new ImageNode('images/tokyo-social.jpg')],
        [new ImageNode('images/tokyo-redbrand.png')],
        [
          new ImageNode('images/tokyo-schedule1.png'),
          new ImageNode('images/tokyo-schedule2.png'),
          new ImageNode('images/tokyo-schedule3.png')
        ],
        [
          new ImageNode('images/tokyo-talk1.png'),
          new ImageNode('images/tokyo-talk2.png')
        ],
        [new ImageNode('images/tokyo-speaker1.png')],
        [new ImageNode('images/tokyo-speaker2.png')],
        [new ImageNode('images/tokyo-bluebrand.png')]
      ]
    },
    {
      title: 'GitHub Holiday Card 2017',
      tags: ['print', 'digital', 'illustration'],
      thumbnail: 'images/holiday-thumb.gif',
      rows: [
        [
          new TextNode({
            text:
              "We sent out some holiday cards to customers this past December. We printed post cards and sent them through good ole snail mail. Couldn't pick between the two versions so we used both. One we printed and another as a .gif for an E-card version. Super fun to work in a more illustrative textured style!",
            header: 'TLDR'
          }),
          new ImageNode('images/holiday-v2.gif', 2)
        ],
        [
          new TextNode({
            text: ' ',
            header: 'Moodboards and Explorations'
          })
        ],
        [new ImageNode('images/holiday-moodboard.jpg')],
        [new ImageNode('images/holiday-process.png')],
        [
          new TextNode({
            text: ' ',
            header: 'Final'
          })
        ],
        [
          new ImageNode('images/holiday-v1.png'),
          new ImageNode('images/holiday-v2.gif')
        ]
      ]
    },
    {
      title: 'GitHub Intern Recruitment',
      tags: ['illustration'],
      thumbnail: 'images/recruitment-thumb.jpg',
      rows: [
        [
          new TextNode({
            text:
              'GitHub hosts internships for college students every summer. Interns are invited to stay in San Francisco to work from GitHub HQ so I created this San Francisco inspired illustration to use in our intern recruitment materials. \n https://internships.github.com/',
            header: 'TLDR'
          }),
          new ImageNode('images/recruitment-intern.png', 2)
        ],
        [
          new ImageNode('images/recruitment-banner.jpg'),
          new ImageNode('images/recruitment-banner2.jpg')
        ],
        [new ImageNode('images/recruitment-twittercard.png')]
      ]
    },
    {
      title: 'RecSports Small Group Training',
      tags: ['print', 'digital', 'campaign'],
      thumbnail: 'images/findfit-thumbnail.jpg',
      rows: [
        [
          new TextNode({
            text:
              'The marketing team for Recreational Sports at the University of Florida is comprised of designers, videographers, photographers, and media specialists. I work in-house where we service many different departments within RecSports like clients making sure to boost visibility and spread awareness of several campaigns or events. This was a 4 page booklet I designed for Small Group Training. It includes the different formats offered for that semester as well as the rates and calendar of all the classes being offered. For the campagn we printed and distributed the 4 pager at all our facilities and ran the campaign through our website and social media channels. I also animated the campaign for our digital outlets that play throughout the day on severals screens throughout the fitness facilites.',
            header: 'TLDR'
          }),
          new ImageNode('images/findfit-double.jpg', 2)
        ],
        [new ImageNode('images/findfit-multiple.jpg')],
        [
          new ImageNode('images/findfit-booklet.gif'),
          new ImageNode('images/findfit-sides.jpg')
        ],
        [
          new VideoNode(
            'https://player.vimeo.com/video/155912657',
            'recsports'
          ),
          new ImageNode('images/findfit-social.jpg')
        ],
        [new ImageNode('images/findfit-tvs.jpg')]
      ]
    },
    {
      title: 'Net Neutrality',
      tags: ['digital', 'motion graphics'],
      thumbnail: 'images/net-neutrality_save.jpg',
      rows: [
        [
          new TextNode({
            text:
              "Back in July of 2018 GitHub joined millions of people to stand up for Net Neutrality. In the days leading up to the vote GitHub put up a banner on the site, made this blog post, and shared on twitter to support the open internet. Our team of 3 designers at the time banded together to push out these last minute assets within a few hours. Net Neutrality has been through it's ups and downs and California continues to fight with it's state net neutrality bill.",
            header: 'TLDR'
          }),
          new ImageNode('images/net-neutralityads.gif', 2)
        ],
        [new TextNode({ text: ' ', header: 'Storyboard and Reference' })],
        [
          new ImageNode('images/net-neutralityplan.png', 2),
          new ImageNode('images/net-reference.gif'),
          new ImageNode('images/net-reference1.gif')
        ],
        [new TextNode({ text: ' ', header: 'Process' })],
        [
          new ImageNode('images/net-img-1.jpg'),
          new ImageNode('images/net-img-2.jpg')
        ],
        [
          new ImageNode('images/net-img-4.jpg'),
          new ImageNode('images/net-img-5.jpg')
        ],
        [new ImageNode('images/net-neutralitypopup.gif')],
        [new ImageNode('images/net-neutralityads.gif')]
      ]
    },
    {
      title: 'Relient K Band Tour',
      tags: ['branding', 'illustration'],
      thumbnail: 'images/relientk-digitalad.gif',
      rows: [
        [
          new TextNode({
            text:
              'Relient K - Only Fools Know Everything was a retrospective tour campaign I created for a student project. For this retrospective tour I wanted to capture the essence of growing up and making mistakes but having fun doing it which is how the band has characterized themselves through their music over the years. The idea is that because you were a fool you messed up and it has made you who you are today. <br><br>The tour is accompanied by a book release in which the band writes on their journey and process of writing their songs as well as a special edition CD release that includes a lyric booklet of all the songs on the album. Fans and new listeners will notice that each song is accompanied by illustrations relating to lyrics within the songs. These illustrations comprise the identity of the tour itself shown through posters, VIP passes, book and album art. '
          }),
          new ImageNode('images/relientk-all.jpg', 2)
        ],
        [new ImageNode('images/relientk-posters.jpg')],
        [
          new ImageNode('images/relientk-lyricbook.jpg'),
          new ImageNode('images/relientk-trio.jpg')
        ],
        [
          new ImageNode('images/relientk-cd.jpg'),
          new ImageNode('images/relientk-pass.jpg'),
          new ImageNode('images/relientk-book.jpg')
        ],
        [new ImageNode('images/relientk-all2.jpg')]
      ]
    },
    {
      title: 'Haulbox Startup',
      tags: ['branding', 'digital', 'mobile app', 'web'],
      thumbnail: 'images/haulboxthum.png',
      rows: [
        [
          new TextNode({
            text:
              "Haulbox is a StartUp Company that originated in Gainesville, FL. As their lead graphic designer I collaborated with the founders to ideate and create their entire visual branding system from the ground up. From designing the logo to creating the icons for the user interface of the app and site I wanted to reflect the company's convenient, friendly, and easy service. During this experience I worked with entreprenuers and programmers directly in an open studio layout at the startup incubator Starterspace. I was later promoted to work with other startups within Starterspace as a creative director and designer."
          }),
          new ImageNode('images/haulboxicons.png', 2)
        ],
        [new ImageNode('images/haulboxweb.png')],
        [
          new ImageNode('images/haulboxdemo.png'),
          new ImageNode('images/haulboxapp.png')
        ]
      ]
    }
  ];
}

export default Data;
