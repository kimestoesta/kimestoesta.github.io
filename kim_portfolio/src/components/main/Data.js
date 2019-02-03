import ImageNode from './project/nodes/ImageNode';
import TextNode from './project/nodes/TextNode';
import VideoNode from './project/nodes/VideoNode';

class Data {
  static projects = {
    git_merge: {
      title: 'Git Merge',
      tags: ['branding', 'environmental design', 'event design', 'web'],
      thumbnail: 'images/gitmerge-badge.jpg',
      rows: [
        [
          new TextNode({
            text:
              'Git Merge is a full-day conference offering technical content and user case studies, plus a day of workshops for Git users of all levels. I had the opportunity to lead the design for Git Merge conferences 2017 and 2018. It was an interesting challenge to reenvision the design in 2018 since doing it in 2017.',
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3'
          }),
          new ImageNode({url:'images/gitmerge-pattern.jpg', columns: 2} )
        ],
        [new ImageNode({url:'images/gitmerge-2017brand.jpg',
        header: 'Git Merge 2017 Brand',
        headerStyles: 'mt-5 mb-3',
        nodeStyles: ' '
        })],
        [
          new TextNode({
            text:
              '- Engage with the Git Community \n - Create a rewarding attendee experience \n - Create a Platform for Speakers and exhibitors',
            header: 'Goals Git Merge 2018',
            headerStyles: 'mt-5 mb-3',
            nodeStyles: 'mt-5 mb-3'
          }),
          new TextNode({
            text:
              '- Branding \n - Marketing on social media \n - Swag items \n - Signage and way finding',
            header: 'Responsibilities',
            headerStyles: 'mt-md-5 mb-3',
            nodeStyles: ' '
          }),
          new TextNode({
            text:
              'How do we evolve the Git Merge brand from last year? \n 2017 branding took a micro look into git branches. The git lines were zoomed in and the brand focused on the git paths and intersections. \n \n Consider: \n - zooming out \n - what the git lines mean in a larger context?',
            header: 'Explorations',
            headerStyles: 'mt-md-5 mb-3',
            nodeStyles: 'mb-5'
          })
        ],
        [new ImageNode({url:'images/gitmerge-explorations2018.jpg'})],
        [
          new TextNode({
            text:
              'This year I zoomed out and thought about the meaning of git lines. The lines and nodes represent milestones when building a project. So I created gridded git line squares that could be visually built and rearranged. Each square is made of many git lines in the same way that a project is also comprised of the different paths. In some applications of the brand, grouping squares into tetris-like shapes also enhanced the idea of building. The different shapes also show how many very different projects can all be built with git as the foundation.',
            header: 'Brand Guide',
            headerStyles: 'mt-5 mb-3',
          }),
          new TextNode({
            text: ' '
          })
        ],
        [new ImageNode({url:'images/gitmerge-brand2018.jpg'})],
        [new ImageNode({url:'images/gitmerge-site2018.jpg'})],
        [
          new TextNode({
            text:
              'Git Merge 2018 took place in Barcelona at Convent Dels Àngels at the MACBA. This historical building was once a church and is now preserved and part of their museum of contemporary art. I flew to Barcelona to meet with vendors, plan directional signage, lighting, and discuss any restrictions the venue had on branding the space. ',
            header: 'Site Visit',
            headerStyles: 'mt-5 mb-3',
          }),
          new TextNode({
            text: '  '
          })
        ],
        [new ImageNode({url:'images/gitmerge-venue.jpg'})],
        [
          new TextNode({
            text: '  ',
            header: 'Things I am thinking about',
            headerStyles: 'mt-5'
          })
        ],
        [
          new TextNode({
            text:
              '- How people can navigate the space? Are there points of confusion in the user journey? \n - Branding vs directional signage (Directional is priority but then you build from that. What spaces are lacking visual cues and breaking the experience of being at the conference?'
          }),
          new TextNode({
            text:
              '- Make sure you are communicating what you are imagining, especially to vendors! Making visual mock ups and providing reference images are the best way to communicate your ideas. It made working asynchronously across different time zones and language barriers on this project easier.'
          }),
          new TextNode({
            text:
              '- What is the attendee experience day of? eg) schedule of events, identifying staff members for questions'
          })
        ],
        [
          new ImageNode({
            url:'images/gitmerge-photos.jpg',
            header: 'The final outcome',
            columns: 2,
            headerStyles: 'mt-5 mb-3',
        })]
      ]
    },
    building_the_future: {
      title: 'Building the Future',
      tags: ['web', 'UX', 'UI', 'front end development', 'campaign'],
      thumbnail: 'images/btf-site.gif',
      doubleWidth: true,
      rows: [
        [
          new TextNode({
            text:
              'This campaign highlights developers in the open source community. Their projects are building the future by creating things that help people around them and around the world. Everyone has the ability to build the future; GitHub makes it easy for people to share ideas and work together to make it happen. \n\n See it live: https://github.com/buildingthefuture \n\n I was responsible for branding, designing, and coding the website for the campaign. I also oversaw the production of the on-site gallery, the physical manifestation of the campaign, at Universe our flagship conference.',
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3'
          }),
          new ImageNode({url:'images/btf-websizes.jpg', columns: 2})
        ],
        [
          new TextNode({
            text:
              'For GitHub\'s 10 year anniversary in April 2018 we launched a campaign that celebrated all the community\'s milestones over the past 10 years. Following the momentum of that campaign, the next chapter — a pivot and look towards the next 10 years. In this phase we want to empower the community to think about what they will build and how their work can impact the world around them.',
            header: 'Background',
            headerStyles: 'mt-5 mb-3',
          }),
          new TextNode({
            text:
              'GitHub created a video series documenting open source contributors who are "building the future" To highlight this series we wanted to create a website containing all the campaign videos and information in one place.',
            header: 'The Campaign',
            headerStyles: 'mt-md-5 mb-3',
          }),
          new TextNode({
            text:
              '- I had to design in parallel to the creation of the videos, produced by our contractors. So, I had no photos or videos when designing the brand definition. \n - Working simultaneously on all parts of the project: visual design, front-end development, photo treatment, and environmental print pieces.',
            header: 'Challenges',
            headerStyles: 'mt-md-5 mb-3',
            nodeStyles: 'mb-5',
          })
        ],
        [
          new TextNode({
            text: 'Inspirations for the site included the Techies Project and Bonobos #EvolveTheDefinition campaign. When it came to the physical on-site experience, I looked for inspiration in museum design. In early explorations I sketched out low fidelity layouts and landed on 2 that put emphasis on the people and their videos. I tested out different photo treatments to make the visuals consistent and recognizable.',
            header: 'Research & Explorations',
            headerStyles: 'mb-3'
          }),
          new TextNode({
            text: '',
            header: ' ',
            headerStyles: 'mb-3'
          }),
        ],
        [
          new ImageNode({url:'images/btf-research.jpg'}),
          new ImageNode({url:'images/btf-sketch.jpg'})
        ],
        [
          new TextNode({
            text: ' ',
            header: 'Wireframes',
            headerStyles: 'mt-5 mb-3'
          })
        ],
        [new ImageNode({url:'images/btf-wireframes.jpg'})],
        [
          new TextNode({
            text: 'As I shared above, a challenge I faced was having to work on many different parts of the design simultaneously. This led to some indecision during the process including selecting a typeface. Tech can often come off as technical and cold but this campaign focuses on the people behind the code so we wanted to inject humanization through type choices. Ideally I should have approved the brand definition before creating high fidelity mocks but we make mistakes so we can learn from them.',
            header: 'Mockups',
            headerStyles: 'mt-5 mb-3'
          }),
          new TextNode({
            text: '',
            header: ' ',
            headerStyles: 'mb-3'
          }),
        ],
        [
          new ImageNode({url:'images/btf-typeexplorations.png', columns: 2})
        ],
        [new ImageNode({url:'images/btf-whitemockup.jpg'})],
        [
          new TextNode({
            text: 'After taking a step back and resetting, I defined the brand. I committed to decisions and received approval which helped everyone get on the same page. The change to a dark background strengthened the tie to coding by visually imitating terminal and code editors. A combination of script and tall bold type added the bit of humanization we were looking for while remaining developer focused.',
            header: 'Brand Definition',
            headerStyles: 'mt-5 mb-3'
          }),
          new TextNode({
            text: ' ',
            headerStyles: 'mt-5 mb-3'
          })
        ],
        [new ImageNode({url:'images/btf-branddefinition.png'})],
        [
          new TextNode({
            text: ' ',
            header: 'Final Mockup',
            headerStyles: 'mt-5 mb-3'
          })
        ],
        [new ImageNode({url:'images/btf-mockupdark.jpg'})],
        [
          new TextNode({
            text: 'While building the site I realized the modal I designed would create complicated custom styling that didn’t align well with the design systems we had in place. Originally I had wanted to utilize the modals to encourage visitors to remain on the main page and highlight all the bios. Ultimately I chose to move away from the modals since the final plan was to release a video each week with social media support.',
            header: 'Build',
            headerStyles: 'mt-5 mb-3'
          }),
          new TextNode({
            text: ' ',
            headerStyles: 'mt-5 mb-3'
          })
        ],
        [
          new ImageNode({url:'images/btf-site1.png'}),
          new ImageNode({url:'images/btf-featureflag.png'})
        ],
        [
          new ImageNode({url:'images/btf-jamica.png'}),
          new ImageNode({url:'images/btf-julius.png'}),
        ],
        [
          new TextNode({
            text: 'visit https://github.com/buildingthefuture',
            header: 'Final Site',
            headerStyles: 'mt-5'
          })
        ],
        [new ImageNode({url:'images/btf-fullsite.png'})]
      ]
    },
    jelly_belly: {
      title: 'Jelly Belly',
      tags: ['branding', 'illustration', 'packaging', 'print'],
      thumbnail: 'images/jelly-bag.jpg',
      rows: [
        [
          new TextNode({
            text:
              "This project is the beginning of a rebrand for Jelly Belly, the makers of gourmet jelly beans. After researching Jelly Belly's history, I learned that jelly beans were actually made popular by President Ronald Reagan during his time in office. Since then Jelly Belly has kept their brand identity the same so I wanted to bring new life to the brand and make it more relevant to today. As the generation of Ronald Reagan ages, I wanted to focus to a new and younger audience. Here I have created a new logo, mascot, flavor guide, and packaging concept. The project will later extend to show character animations and a larger packaging system.",
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3'

          }),
          new ImageNode({url:'images/jelly-all.jpg', columns: 2})
        ],
        [
          new ImageNode({url:'images/jelly-flavorbag.jpg'}),
          new ImageNode({url:'images/jelly-cards.jpg'}),
        ],
        [
          new ImageNode({url:'images/jelly-bag.jpg'}),
          new ImageNode({url:'images/jelly-flavordetails.jpg', columns: 2})
        ],
        [
          new ImageNode({url:'images/jelly-bagdance.gif'}),
          new ImageNode({url:'images/jelly-bags.jpg'}),
        ]
      ]
    },
    constellation_tokyo: {
      title: 'Constellation Tokyo',
      tags: ['branding', 'environmental design', 'event design'],
      thumbnail: 'images/tokyo-thumb.jpg',
      doubleWidth: true,
      rows: [
        [
          new TextNode({
            text:
              "GitHub's flagship conference, Universe is hosted in San Francisco every year. Here we announce products, host workshops, and meet with customers to listen to their needs and answer their questions. It's a great experience to come together as a community and it's the type of event that we wanted to make sure more of our customers could have access to. We started with GitHub Satellite as a European touch point and now Constellation Tokyo was our opportunity to better connect with our Asian Pacific audience.",
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3'
          }),
          new ImageNode({url:'images/tokyo-redbrand.png', columns: 2})
        ],
        [
          new TextNode({
            text:
              "Working within the Universe logo family I explored logos that used Mona's silhouette with a more customized mark to represent Japan. This allowed for a system that we could hopefully expand year to year, as the location changed.",
            header: 'Logo',
            headerStyles: 'mt-5 mb-3',
          }),
          new TextNode({
            text: ' '
          })
        ],
        [
          new ImageNode({url:'images/tokyo-logoexploration1.png'}),
          new ImageNode({url:'images/tokyo-logoexploration2.png'}),
        ],
        [
          new TextNode({
            text:
              'In researching Japanese history and culture I found inspiration for color and pattern in their textiles and art. Japanese printmaking, ink-wash paintings, and indigo dye led to the colors of deep blue, gold, ivory, and red. Sakiori weaving, a Japanese textile looming method, inspired the overlapping blocks, constellation pattern, lines, and stitches of the design.',
            header: 'Color & Pattern',
            headerStyles: 'mt-5 mb-3',
          }),
          new TextNode({
            text: ' '
          })
        ],
        [
          new ImageNode({url:'images/tokyo-tokyoblue.png'}),
          new ImageNode({url:'images/tokyo-tokyoivory.png'}),
          new ImageNode({url:'images/tokyo-tokyored.png'}),
        ],
        [
          new TextNode({
            text: ' ',
            header: 'Final Brand',
            headerStyles: 'mt-5 mb-3',
          })
        ],
        [new ImageNode({url:'images/tokyo-tokyobrand.png'})],
        [
          new VideoNode(
            'https://www.youtube.com/embed/8jN2K1SnPJ4',
            'constelation-tokyo'
          )
        ],
        [new ImageNode({url:'images/tokyo-social.jpg'})],
        [new ImageNode({url:'images/tokyo-redbrand.png'})],
        [
          new ImageNode({url:'images/tokyo-schedule1.png'}),
          new ImageNode({url:'images/tokyo-schedule2.png'}),
          new ImageNode({url:'images/tokyo-schedule3.png'}),
        ],
        [
          new ImageNode({url:'images/tokyo-talk1.png'}),
          new ImageNode({url:'images/tokyo-talk2.png'}),
        ],
        [new ImageNode({url:'images/tokyo-speaker1.png'})],
        [new ImageNode({url:'images/tokyo-speaker2.png'})],
        [new ImageNode({url:'images/tokyo-bluebrand.png'})],
      ]
    },
    net_neutrality: {
      title: 'Net Neutrality',
      tags: ['motion graphics',],
      thumbnail: 'images/net-neutrality_save.jpg',
      rows: [
        [
          new TextNode({
            text:
              "Back in July of 2018 GitHub joined millions of people to stand up for Net Neutrality. In the days leading up to the vote GitHub put up a banner on the site, made this blog post, and shared on twitter to support the open internet. Our team of 3 designers at the time banded together to push out these last minute assets within a few hours. Net Neutrality has been through its ups and downs and California continues to fight with its state net neutrality bill.",
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3'
          }),
          new ImageNode({url:'images/net-neutralityads.gif', columns: 2})
        ],
        [
          new TextNode({
            text: ' ',
            header: 'Storyboard and Reference',
            headerStyles: 'mt-5 mb-3'
          })],
        [
          new ImageNode({url:'images/net-neutralityplan.png', columns: 2}),
          new ImageNode({url:'images/net-reference.gif'}),
          new ImageNode({url:'images/net-reference1.gif'}),
        ],
        [
          new TextNode({
            text: ' ',
            header: 'Process' ,
            headerStyles: 'mt-5 mb-3',
          })],
        [
          new ImageNode({url:'images/net-img-1.jpg'}),
          new ImageNode({url:'images/net-img-2.jpg'}),
        ],
        [
          new ImageNode({url:'images/net-img-4.jpg'}),
          new ImageNode({url:'images/net-img-5.jpg'}),
        ],
        [new ImageNode({url:'images/net-neutralitypopup.gif'})],
        [new ImageNode({url:'images/net-neutralityads.gif'})],
      ]
    },
    constellation_roadshow: {
      title: 'Constellation Roadshow',
      tags: ['branding', 'event design', 'environmental design', 'web'],
      thumbnail: 'images/constellation-thumb.png',
      rows: [
        [
          new TextNode({
            text:
              'With the success of Constellation Tokyo, GitHub Constellation evolved into a roadshow event visiting communities all around the world. Jumping from the more site specific branding of Constellation Tokyo, I wanted to keep the lock up and give it a brand that could work for all the future stops on this roadshow. The biggest challenge of this project was designing a system that would allow each location to have distinct contrast from one another on site and through digital communications while also branding them cohesively to allow assets to be reused from location to location. \n\n Working with contractors Andrew and Kyle I passed on the brand kit and they brought http://githubconstellation.com/ to life.',
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3 mb-md-5'
          }),
          new ImageNode({url:'images/constellation-roadshow.png', columns: 2})
        ],
        [
          new ImageNode({url:'images/constellation-assets.png'})],
        [
          new TextNode({
            text: ' ',
            header: 'Digital Identity',
            headerStyles: 'mt-5 mb-3',
          })],
        [new ImageNode({url:'images/constellation-city-brand.jpg'})],
        [
          new TextNode({ text: ' ' }),
          new ImageNode({url:'images/constellation-toronto.jpg', columns: 2})
        ],
        [
          new ImageNode({url:'images/constellation-boston.png'}),
          new ImageNode({url:'images/constellation-chicago.jpg'}),
          new ImageNode({url:'images/constellation-seattle.png'})
        ],
        [
          new ImageNode({url:'images/constellation-london.png'}),
          new ImageNode({url:'images/constellation-dc.png'}),
          new TextNode({ text: '  ' })
        ],
        [
          new TextNode({
            text: '',
            header: 'Site Design',
            headerStyles: 'mt-5 mb-3',
          })],
        [new ImageNode({url:'images/constellation-site18.png'})]
      ]
    },
    github_holiday_card: {
      title: 'GitHub Holiday Card 2017',
      tags: ['illustration', 'print'],
      thumbnail: 'images/holiday-thumb.gif',
      rows: [
        [
          new TextNode({
            text:
              "We sent out some holiday cards to customers this past December. We printed post cards and sent them through good ole snail mail. Couldn't pick between the two versions so we used both. One we printed and another as a .gif for an E-card version. Super fun to work in a more illustrative textured style!",
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3 mb-md-5'
          }),
          new ImageNode({url:'images/holiday-v2.gif', columns: 2}),
        ],
        [
          new TextNode({
            text: ' ',
            header: 'Mood boards and Explorations',
            headerStyles: 'mt-5 mb-3',
          })
        ],
        [new ImageNode({url:'images/holiday-moodboard.jpg'})],
        [new ImageNode({url:'images/holiday-process.png'})],
        [
          new TextNode({
            text: ' ',
            header: 'Final',
            headerStyles: 'mt-5 mb-3',
          })
        ],
        [
          new ImageNode({url:'images/holiday-v1.png'}),
          new ImageNode({url:'images/holiday-v2.gif'}),
        ]
      ]
    },
    github_intern_recruitment: {
      title: 'GitHub Intern Recruitment',
      tags: ['illustration'],
      thumbnail: 'images/recruitment-thumb.jpg',
      rows: [
        [
          new TextNode({
            text:
              'GitHub hosts internships for college students every summer. Interns are invited to stay in San Francisco to work from GitHub HQ, so I created this San Francisco inspired illustration to use in our intern recruitment materials. \n https://internships.github.com/',
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3'
          }),
          new ImageNode({url:'images/recruitment-intern.png', columns: 2}),
        ],
        [
          new ImageNode({url:'images/recruitment-banner.jpg'}),
          new ImageNode({url:'images/recruitment-banner2.jpg'}),
        ],
        [new ImageNode({url:'images/recruitment-twittercard.png'})]
      ]
    },
    recsports_small_group: {
      title: 'RecSports Small Group Training',
      tags: ['pattern design', 'print', 'motion graphics', 'campaign'],
      thumbnail: 'images/findfit-thumbnail.jpg',
      rows: [
        [
          new TextNode({
            text:
              'The marketing team for Recreational Sports at the University of Florida is comprised of designers, videographers, photographers, and media specialists. I work in-house where we service many different departments within RecSports like clients making sure to boost visibility and spread awareness of several campaigns or events. This was a 4 page booklet I designed for Small Group Training. It includes the different formats offered for that semester as well as the rates and calendar of all the classes being offered. For the campaign we printed and distributed the 4 pager at all our facilities and ran the campaign through our website and social media channels. I also animated the campaign for our digital outlets that play throughout the day on several screens throughout the fitness facilities.',
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3 mb-md-5'
          }),
          new ImageNode({url:'images/findfit-double.jpg', columns: 2}),
        ],
        [new ImageNode({url:'images/findfit-multiple.jpg'})],
        [
          new ImageNode({url:'images/findfit-booklet.gif'}),
          new ImageNode({url:'images/findfit-sides.jpg'}),
        ],
        [
          new VideoNode(
            'https://player.vimeo.com/video/155912657',
            'recsports'
          ),
          new ImageNode({url:'images/findfit-social.jpg'})
        ],
        [new ImageNode({url:'images/findfit-tvs.jpg'})]
      ]
    },
    that_one_spot: {
      title: 'That One Spot',
      tags: ['branding', 'illustration', 'packaging', 'print'],
      thumbnail: 'images/spot-takeout.jpg',
      rows: [
        [
          new TextNode({
            text:
              'That One Spot is a rebrand I did for a client running a family owned burger restaurant located in Ocoee, FL. They are known for their well crafted and customizable burgers with a variety of meat options but also provide a variety of salads and sides. While their ingredients are fresh and local, they aim to be a fast casual spot for everyone to grab a bite. Keeping their brand in mind I was hired to rebrand the restaurant to more closely reflect their voice today and as they look to grow.',
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3 mb-md-5'
          }),
          new ImageNode({url:'images/spot-all2.jpg', columns: 2})
        ],
        [
          new ImageNode({url:'images/spot-bigmenu.jpg'}),
          new ImageNode({url:'images/spot_mat.jpg'}),
          new ImageNode({url:'images/spot-businesscards.jpg'}),
        ],
        [
          new ImageNode({url:'images/spot-takeout1.jpg'}),
          new ImageNode({url:'images/spot-takeout2.jpg'}),
        ],
        [new ImageNode({url:'images/spot_menus.jpg'})],
        [new ImageNode({url:'images/spot-all.jpg'})],
      ]
    },
    relient_k: {
      title: 'Relient K Band Tour',
      tags: ['branding', 'illustration'],
      thumbnail: 'images/relientk-digitalad.gif',
      rows: [
        [
          new TextNode({
            text:
              'Relient K - Only Fools Know Everything was a retrospective tour campaign I created for a student project. For this retrospective tour I wanted to capture the essence of growing up and making mistakes but having fun doing it which is how the band has characterized themselves through their music over the years. The idea is that because you were a fool you messed up and it has made you who you are today. <br><br>The tour is accompanied by a book release in which the band writes on their journey and process of writing their songs as well as a special edition CD release that includes a lyric booklet of all the songs on the album. Fans and new listeners will notice that each song is accompanied by illustrations relating to lyrics within the songs. These illustrations comprise the identity of the tour itself shown through posters, VIP passes, book and album art. ',
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3 mb-md-5'

          }),
          new ImageNode({url:'images/relientk-all.jpg', columns: 2}),
        ],
        [new ImageNode({url:'images/relientk-posters.jpg'})],
        [
          new ImageNode({url:'images/relientk-lyricbook.jpg'}),
          new ImageNode({url:'images/relientk-trio.jpg'}),
        ],
        [
          new ImageNode({url:'images/relientk-cd.jpg'}),
          new ImageNode({url:'images/relientk-pass.jpg'}),
          new ImageNode({url:'images/relientk-book.jpg'}),
        ],
        [new ImageNode({url:'images/relientk-all2.jpg'})],
      ]
    },
    primal_screen: {
      title: 'Primal Screen',
      tags: ['motion graphics', 'illustration'],
      thumbnail: 'images/nickjr-dressup.png',
      rows: [
        [
          new TextNode({
            text:
              'Primal Screen is an award winning design studio based in Atlanta, Georgia. That provide a full gamut of design service including animation, motion graphics, live action, audio, music composition, and interactive development.\n\n While I was working at Primal, I was able to work on a variety of projects for clients like:\n - PBS kids \n - Sesame Workshop \n- Adult Swim \n- Nick Jr',
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3'
          }),
          new ImageNode({url:'images/Never_Give_Up.jpg', columns: 2})
        ],
        [
          new TextNode({
            text:
              "Project: Daniel Tiger's Neighborhood app \n\n My contributions: User Interface, User Experience, Information Architecture, Prototyping \n\n Background: Daniel Tiger is an animated family-oriented television series based on the Neighborhood of Make Believe from Mister Roger's Neighborhood. The show is aimed to teach children emotional intelligence and human respect. The show has produced numerous clips of their lessons and wanted a way for parents to access those videos in an app. I worked on designing the screens and interface of the app then later animated and created a prototype. One of biggest challenges we faced was accessibility. The audience was aimed for all parents of varying financial situations we had to keep in mind how videos and content could be loaded and still mobile without eating too much data. Unfortunately, I left Primal Screen before finishing this project.  ",
            header: 'Client: PBS Kids',
            headerStyles: 'mt-5 mb-3',
            nodeStyles: 'mb-md-5 mr-md-4'
          }),
          new TextNode({
            text:
              'Project: Breath, Think, Do E-book \n\n My contributions: Illustrator \n\n Background: Breathe, Think, Do is a campaign by Sesame Street that teaches children to deal with emotions like anger and frustration. Primal Screen previously created the Breath, Think, Do app for Sesame Workshop and asked this app to be translated into a story and illustrated for an E-book. I was responsible for transposing all the imagery from the app to a more textured and painterly style for the E-book. ',
            header: 'Client: Sesame Workshop',
            headerStyles: 'mt-5 mb-3',
            nodeStyles: 'mb-md-5'
          })
        ],
        [
          new TextNode({
            text:
              "Project: Squidbillies Bumper \n My contributions: Character design \n Background: \n\n Primal Screen has a long standing relationship with Cartoon Network also based in Atlanta. For this project we worked to create a season premier bumper for Adult Swim's show Squidbillies, an adult animated comedy about anthropomorphic hillbilly mud squids. The idea was to create a Godzilla inspired bumper with the main characters of the show destroying the city and causing chaos. I helped turn them from giant squids to giant gross monsters.",
            header: 'Client: Adult Swim',
            headerStyles: 'mt-5 mt-md-0 mb-3',
            nodeStyles: 'mr-md-3'
          }),
          new VideoNode(
            'https://www.youtube.com/embed/W5r4UJZBM9c',
            'squidbillies',
            2
          )
        ],
        [new ImageNode({url:'images/squidbillies-design.jpg'})],
        [
          new TextNode({
            text:
              'Project: Bubble Guppies Kideo \n\n My contributions: Storyboard, stage hand on set, asset design, typography, title card design and motion graphics \n\n Background: \n Nickelodeon has been a long time client of Primal Screen. This bumper was one of several videos we created to help them to promote a variety of their Nick Jr. shows including Bubble Guppies, Shimmer and Shine, Team Umizoomi, Blaze and the Monster Machine, and Paw Patrol. For this video we made a mini music video using a song from the show Bubble Guppies. While planning for the video I created all the animated assets and type and helped storyboard the shots we would need on set. On set I assisted the art director and worked to help direct the kids. In post-production I animated the title card of the video.',
            header: 'Client: Nickelodeon',
            headerStyles: 'mt-5 mt-md-0 mb-3',
            nodeStyles: 'mr-md-3'
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
            header: 'Client: Nickelodeon',
            headerStyles: 'mt-5 mt-md-0 mb-3',
            nodeStyles: 'mr-md-3'
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
    haulbox_startup: {
      title: 'Haulbox Startup',
      tags: ['branding', 'icon design', 'mobile app', 'web'],
      thumbnail: 'images/haulboxthum.png',
      rows: [
        [
          new TextNode({
            text:
              "Haulbox is a Startup Company that originated in Gainesville, FL. As their lead graphic designer, I collaborated with the founders to ideate and create their entire visual branding system from the ground up. From designing the logo to creating the icons for the user interface of the app and site I wanted to reflect the company's convenient, friendly, and easy service. During this experience I worked with entrepreneurs and programmers directly in an open studio layout at the startup incubator Starterspace. I was later promoted to work with other startups within Starterspace as a creative director and designer.",
            header: 'TLDR',
            headerStyles: 'mb-3',
            nodeStyles:'mr-md-3'
          }),
          new ImageNode({url:'images/haulboxicons.png', columns: 2}),
        ],
        [new ImageNode({url:'images/haulboxweb.png'})],
        [
          new ImageNode({url:'images/haulboxdemo.png'}),
          new ImageNode({url:'images/haulboxapp.png'}),
        ]
      ]
    }
  };
}

export default Data;
