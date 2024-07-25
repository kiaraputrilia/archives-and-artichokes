
function openMultipleWindows(id) {
    var urls;

    // Define different content for each id
    if (id === 'three') {
        urls = [
            {
                url: 'https://desireinabowlofrice.s3.us-east-2.amazonaws.com/what-if-you-could-go-for-a-walk-through-a-website.pdf?embedded=true#toolbar=0&navpanes=0&scrollbar=0',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=250,left=470,width=900,height=690'
            },
            {
                url: '',
                features: 'top=150,left=350,width=300,height=250',
                content: `
                    <html>
                    <head>
                    <title>Introduction</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>What if you could go for a walk through a website? 
                    <br>2024</h3>
                    <p>A small-scale exploration of internet geography. A collection of data sets that traces the circularity and repetition of information
                    and knowledge through hyperlinks in Wikipedia. The book features fold-outs and is bound through two rubber bands and a paperclip.</p>
                    </body>
                    </html>`
            }
        ];

    } else if (id === 'five') {
        urls = [
            {
                url: '',
                features: 'toolbar=no,scrollbars=no,resizable=yes,top=0,left=0,width=2000,height=2000',
                content: `
                    <html>
                    <head>
                    <title>(page intentionally left blank)</title>
                    <style>
                        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
                        video { width: 100%; height: 100%; object-fit: cover; }
                    </style>
                    </head>
                    <body>
                 
                    </body>
                    </html>`
            },

            {
                url: '',
                features: 'toolbar=no,scrollbars=no,resizable=yes,top=0,left=0,width=450,height=290',
                content: `
                    <html>
                    <head>
                    <title>Opening</title>
                    <style>
                        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
                        video { width: 100%; height: 100%; object-fit: cover; }
                    </style>
                    </head>
                    <body>
                    <video autoplay muted controls>
                        <source src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/opening.mov" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    </body>
                    </html>`
            },

            {
                url: '',
                features: 'toolbar=no,scrollbars=no,resizable=yes,top=0,left=1500,width=450,height=290',
                content: `
                    <html>
                    <head>
                    <title>Closing</title>
                    <style>
                        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
                        video { width: 100%; height: 100%; object-fit: cover; }
                    </style>
                    </head>
                    <body>
                    <video autoplay muted controls>
                        <source src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/closing.mov" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    </body>
                    </html>`
            },
    
            {
                url: '',
                features: 'toolbar=no,scrollbars=no,resizable=yes,top=370,left=0,width=450,height=290',
                content: `
                    <html>
                    <head>
                    <title>Intro Video</title>
                    <style>
                        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
                        video { width: 100%; height: 100%; object-fit: cover; }
                    </style>
                    </head>
                    <body>
                    <video autoplay muted controls>
                        <source src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/intro.mov" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    </body>
                    </html>`
            },
    
            {
                url: '',
                features: 'toolbar=no,scrollbars=no,resizable=yes,top=370,left=450,width=450,height=290',
                content: `
                    <html>
                    <head>
                    <title>1st Essay Video</title>
                    <style>
                        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
                        video { width: 100%; height: 100%; object-fit: cover; }
                    </style>
                    </head>
                    <body>
                    <video autoplay muted controls>
                        <source src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/1st+essay.mov" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    </body>
                    </html>`
            },
    
            {
                url: '',
                features: 'toolbar=no,scrollbars=no,resizable=yes,top=370,left=900,width=450,height=290',
                content: `
                    <html>
                    <head>
                    <title>2nd Essay Video</title>
                    <style>
                        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
                        video { width: 100%; height: 100%; object-fit: cover; }
                    </style>
                    </head>
                    <body>
                    <video autoplay muted controls>
                        <source src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/2nd+essay.mov" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    </body>
                    </html>`
            },

            {
                url: '',
                features: 'toolbar=no,scrollbars=no,resizable=yes,top=370,left=1350,width=450,height=290',
                content: `
                    <html>
                    <head>
                    <title>3rd Essay Video</title>
                    <style>
                        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
                        video { width: 100%; height: 100%; object-fit: cover; }
                    </style>
                    </head>
                    <body>
                    <video autoplay muted controls>
                        <source src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/3rd+essay.mov" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    </body>
                    </html>`
            },

            {
                url: '',
                features: 'toolbar=no,scrollbars=no,resizable=yes,top=740,left=0,width=450,height=290',
                content: `
                    <html>
                    <head>
                    <title>4th Essay Video</title>
                    <style>
                        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
                        video { width: 100%; height: 100%; object-fit: cover; }
                    </style>
                    </head>
                    <body>
                    <video autoplay muted controls>
                        <source src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/4th+essay.mov" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    </body>
                    </html>`
            },

            {
                url: '',
                features: 'toolbar=no,scrollbars=no,resizable=yes,top=740,left=450,width=450,height=290',
                content: `
                    <html>
                    <head>
                    <title>5th Essay Video</title>
                    <style>
                        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
                        video { width: 100%; height: 100%; object-fit: cover; }
                    </style>
                    </head>
                    <body>
                    <video autoplay muted controls>
                        <source src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/5th+essay.mov" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    </body>
                    </html>`
            },

            {
                url: '',
                features: 'toolbar=no,scrollbars=no,resizable=yes,top=740,left=900,width=450,height=290',
                content: `
                    <html>
                    <head>
                    <title>6th Video</title>
                    <style>
                        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
                        video { width: 100%; height: 100%; object-fit: cover; }
                    </style>
                    </head>
                    <body>
                    <video autoplay muted controls>
                        <source src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/6th+essay.mov" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    </body>
                    </html>`
            },

            {
                url: '',
                features: 'toolbar=no,scrollbars=no,resizable=yes,top=740,left=1350,width=450,height=290',
                content: `
                    <html>
                    <head>
                    <title>References</title>
                    <style>
                        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; }
                        video { width: 100%; height: 100%; object-fit: cover; }
                    </style>
                    </head>
                    <body>
                    <video autoplay muted controls>
                        <source src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/references.mov" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    </body>
                    </html>`
            }
        ];
    
        function openMultipleWindows(id) {
            urls.forEach(function(item) {
                var newWindow = window.open("", "_blank", item.features);
                newWindow.document.open();
                newWindow.document.write(item.content);
                newWindow.document.close();
            });
        }
    
        document.getElementById('five').onclick = function() {
            openMultipleWindows('five');
        };
    
    
    

    } else if (id === 'six') {
        urls = [
            {
                url: '',
            features: 'toolbar=no,scrollbars=no,resizable=yes,top=0,left=0,width=600,height=850',
            content: `
                <html>
                <head>
                <title>My "business card"</title>
                <style>
                body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background-color: black; }
                video { width: 100%; height: 100%; object-fit: cover; }
            </style>
                </head>
                <body>
                    <video src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/Archives+and+Artichokes+Animation.mp4" loop autoplay muted></video>
                </body>
                </html>`
            },

            {
                url: '',
                features: 'left=470,width=850,height=300',
                content: `
                    <html>
                    <head>
                    <title>About Me</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>I am a mélange of ambition, vacillation, wide-ranging interests and drive. In 2018, I moved to Providence from Indonesia, not knowing what to study—I just wanted to study something…anything. In 2019, I realized I’m a person that likes a challenge, so I moved to New York City to attend Parsons School of Design. I realized saying ‘I don’t know’ is one of the most humbling and gratifying methods of learning. In 2020, I realized I liked to speak in new forms. I learned to be fluid. In 2021, I realized I’ve been cosplaying as an artist, working as a graphic designer. In 2022, I realized I was porous, soaking up others’ passions, that enriched my own practice. I love learning with a beginner’s mind. I found freedom in not having all the answers, particularly when asked, 'What about design do you like?' In 2023, I realized I loved reading/hoarding research papers, essays, footnotes, and breaking free from old associations to make new ones. I realized I love working within the intersection of the culinary arts and design. In 2024, I’ve embraced curiosity as a practice. I like connecting knowledge. Now, when prompted about my passion for design, I now respond with a borrowed quote: 'To define is to limit.'
                    </h3>
                    </body>
                    </html>`
            },

            {
                url: '',
            features: 'toolbar=no,scrollbars=no,resizable=yes,top=500,left=700,width=600,height=350',
            content: `
                <html>
                <head>
                <title>My "business card"</title>
                <style>
                body { margin: 0; }
                img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/info.png">
                </body>
                </html>`
            },
        ];

    } else if (id === 'nine') {
        urls = [
      
            {
                url: 'https://desireinabowlofrice.s3.us-east-2.amazonaws.com/when+is+a+selfie+no+longer+a+selfie.pdf?embedded=true#toolbar=0&navpanes=0&scrollbar=0',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=250,left=100,width=900,height=690'
            },
            {
                url: '',
                features: 'top=150,left=150,width=350,height=300',
                content: `
                    <html>
                    <head>
                    <title>printed matter</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>When is a selfie no longer a selfie? 
                    <br>2023</h3>
                    <p>The first part of a <a href="https://kiaraputrilia.github.io/your-reflection/index.html"> two-series documentation of surveillance</a>. Intially, the content followed a generative ruleset, wherein I would
                    take a picture of myself in every reflective surface intended for surveillance. However, throughout the process of
                    content-gathering, I started to question the line between ownership and the many categorizations of surveillance. The layout of the book is informed through print.are.na, and is bound together using cable zip ties.</p>
                    </body>
                    </html>`
            },
        
            {
                url: 'https://desireinabowlofrice.s3.us-east-2.amazonaws.com/To+Build+a+Home.pdf?embedded=true#toolbar=0&navpanes=0&scrollbar=0',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=900,height=690'
            },
            {
                url: '',
                features: 'top=450,left=1400,width=350,height=300',
                content: `
                    <html>
                    <head>
                    <title>printed matter</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>To Build a Home
                    <br>2022</h3>
                    <p>This zine contextualizes the meaning of three different themes that represent home. This sense of multiplicity includes written memoirs and photographs of sites that provide peace for me—the water, witnessing the sunset, and driving. The images featured resemble some of my favorite memories from 2017-2021. The clear film throughout the pages becomes a tool of reduction and addition, highlighting certain elements and key features. There lie moments of obscurity, duality, and movement.</p>
                    </body>
                    </html>`
            }
        
        ];

    } else if (id === 'twelve') {
        urls = [
            {
                url: 'https://desireinabowlofrice.s3.us-east-2.amazonaws.com/In+Praise+of+Hands+Scans.pdf?embedded=true#toolbar=0&navpanes=0&scrollbar=0',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=450,width=1000,height=900'
            },
            {
                url: '',
                features: 'top=900,left=1150,width=650,height=150',
                content: `
                    <html>
                    <head>
                    <title>observing the tenderness & intimacy of hand gestures</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>In Praise of Hands, 2024</h3>
                    <p>In Praise of Hands is a coptic stitch bound book that features cropped images of hands sourced from well-known paintings and sculptures. It’s an invitation to re-examine gestural expressions and intentions when they are isolated from their original context. They are organized through three categories—In Conversation, Yearning, and In Solitude, and are accompanied by poignant essays and poems. The book cover is made from laser-cut wood that mimics two hands in prayer, and acts as decorative book-end.</p>
                    </body>
                    </html>`
            },

            {
                url: 'https://desireinabowlofrice.s3.us-east-2.amazonaws.com/Cover_1.gif',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=250,left=80,width=800,height=590'
            }

        ];

    } else if (id === 'thirteen') {
        urls = [
            {
                url: 'https://desireinabowlofrice.s3.us-east-2.amazonaws.com/CrossingBorders-3.gif',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=0,width=900,height=900'
            },

            {
                url: 'https://desireinabowlofrice.s3.us-east-2.amazonaws.com/CrossingBorders-2.gif',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=900,width=900,height=900'
            },

            {
                url: '',
                features: 'top=450,left=765,width=250,height=260',
                content: `
                    <html>
                    <head>
                    <titlecuriosity as a practice</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>Crossing Borders<br>2020</h3>
                    <p>An installation that delves into the progression of the film scene in Indonesia from its very birth to its current state through a distilled approach—one that as ambiguous and requires the audience to research upon more.  This is depicted through thick metal wires that were welded together and a projection of scanned linocut prints.</p>
                    </body>
                    </html>`
            }

        ];

    } else if (id === 'twentyTwo') {
        urls = [
            {
                url: 'https://desireinabowlofrice.s3.us-east-2.amazonaws.com/NEVERMIND-2023.gif',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=2000,height=2000'
            },

            {
                url: '',
                features: 'top=100,left=445,width=900,height=150',
                content: `
                    <html>
                    <head>
                    <title>speaking in new forms</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>NEVERMIND, 2023</h3>
                    <p>A “monument” to stuttered words. My interest in projects related to speech dysfluency stems from my younger brothers, who live with this challenge. I’ve created several projects inspired by the word “NEVERMIND,” which my brothers often use when they give up on speaking. For this particular piece, I chose a format reminiscent of a bookmark, symbolizing our parents’ belief that reading aloud can improve speech. When the paper is pulled from its envelope, the words “NEVERMIND” and “WHAT?” appear, alluding to the abrupt endings of many conversations.</p>
                    </body>
                    </html>`
            }

        ];

    } else if (id === 'twentyFour') {
        urls = [
            {
                url: 'https://kiaraputrilia.github.io/Memories-of-a-Dish/',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=270,left=470,width=1000,height=1000'
            },

            {
                url: '',
                features: 'top=200,left=850,width=450,height=250',
                content: `
                    <html>
                    <head>
                    <title>expanding archival systems</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>MEMORIES OF A DISH<br>2024</h3>
                    <p>A riso-printed, 4.5 × 7”, do-si-do spiral bound comparative cookbook featuring menus interpreted through Dutch and Indonesian cooking traditions. The book features bookmarks to indicate which menu is vegetable/chicken/fish/beef-based. The recipes are written in Dutch and Bahasa Indonesia, and features an English translation beneath each line of text.</p>
                    </body>
                    </html>`
            }, 

            {
                url: '',
                features: 'top=300, left=100, width=450, height=600',
                content: `
                <html>
                <head>
                <title>Memories of a Dish</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/Memories-of-a-Dish.JPG">
                </body>
                </html>`
               
              

            }

        ];

    } else if (id === 'thirty') {
        urls = [

            {
                url: '',
                features: 'top=0, left=70, width=550, height=500',
                content: `
                <html>
                <head>
                <title>Metaphor for Heavenly Paradise</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/Spread-Mockup--38-39.png">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=0, left=620, width=550, height=500',
                content: `
                <html>
                <head>
                <title>Metaphor for Heavenly Paradise</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/Spread-Mockup--44-45.png">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=0, left=1170, width=550, height=500',
                content: `
                <html>
                <head>
                <title>Metaphor for Heavenly Paradise</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/Spread-Mockup--62-63.png">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=500, left=70, width=550, height=500',
                content: `
                <html>
                <head>
                <title>Metaphor for Heavenly Paradise</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/Spread-Mockup--80-81.png">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=500, left=620, width=550, height=500',
                content: `
                <html>
                <head>
                <title>Metaphor for Heavenly Paradise</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/Spread-Mockup-1--96-97.png">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=500, left=1170, width=550, height=500',
                content: `
                <html>
                <head>
                <title>Metaphor for Heavenly Paradise</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/Spread-Mockup-2--96-97.png">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=400,left=680,width=450,height=200',
                content: `
                    <html>
                    <head>
                    <title>spiritual fulfillment</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>METAPHOR FOR HEAVENLY PARADISE<br>2021</h3>
                    <p>The Metaphor for Heavenly Paradise is a 116-paged book that informs the philosophy and history of gardening in Islam. Its content lives within various-sized column grids and a tight margin within a 15 x 5.5” layout. The textures and transparencies of paper (in- cluding vellum) accentuate the process of learning informally and allow moments of reflection.</p>
                    </body>
                    </html>`
            }

        ];

    } else if (id === 'thirtyOne') {
        urls = [

            {
                url: '',
                features: 'top=0, left=70, width=250, height=500',
                content: `
                <html>
                <head>
                <title>Kita Berkisah</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/ss.jpeg">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=0, left=620, width=250, height=500',
                content: `
                <html>
                <head>
                <title>Kita Berkisah</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/ss2.jpeg">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=0, left=800, width=250, height=500',
                content: `
                <html>
                <head>
                <title>Kita Berkisah</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/ss3.jpeg">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=500, left=450, width=250, height=500',
                content: `
                <html>
                <head>
                <title>Kita Berkisah</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/ss4.jpeg">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=500, left=620, width=250, height=500',
                content: `
                <html>
                <head>
                <title>Kita Berkisah</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/ss5.jpeg">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=500, left=1170, width=450, height=450',
                content: `
                <html>
                <head>
                <title>Kita Berkisah</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/ss6.jpeg">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=100, left=70, width=250, height=500',
                content: `
                <html>
                <head>
                <title>Kita Berkisah</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/ss7.jpeg">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=350, left=500, width=250, height=500',
                content: `
                <html>
                <head>
                <title>Kita Berkisah</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/ss8.jpeg">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=0, left=150, width=450, height=450',
                content: `
                <html>
                <head>
                <title>Kita Berkisah</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/visual.gif">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=0, left=1500, width=450, height=450',
                content: `
                <html>
                <head>
                <title>Kita Berkisah</title>
                <style>
                    body { margin: 0; }
                    img { width: 100%; height: 100%; object-fit: contain; }
                </style>
                </head>
                <body>
                <img src="https://desireinabowlofrice.s3.us-east-2.amazonaws.com/visual2.gif">
                </body>
                </html>`
               
            },

            {
                url: '',
                features: 'top=400,left=680,width=550,height=300',
                content: `
                    <html>
                    <head>
                    <title>community-building</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>Kita Berkisah<br>2020-2021<br>Lead Graphic Designer</h3>
                    <p>Kita Berkisah is a mental health initiative that aims to build a supportive environment where individuals are able to express themselves and empower each other in the process of healing and personal growth. Through events, workshops, support groups, and e-counseling services we connect people with caregivers and like-minded individuals to gain a better understanding of mental health in Indonesia and the issues we face today. Kita Berkisah’s visual voice applies flat and simple imagery to be perceived as a safe, inclusive, and expressive brand.</p>
                    </body>
                    </html>`
            }

        ];

    

    } else if (id === 'fortyOne') {
        urls = [
            {
                url: 'https://desireinabowlofrice.s3.us-east-2.amazonaws.com/Bespoke+Deliberation.mp4',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=200,width=930,height=500'
            },

            {
                url: '',
                features: 'top=450,left=250,width=350,height=300',
                content: `
                    <html>
                    <head>
                    <title>motion graphics</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>Bespoke Deliberation
                    <br>2021</h3>
                    <p>Commissioned to create Bespoke Deliberation’s logo identity and animation for their podcast opening sequence. The animation is consisted of over 300 illustrated frames that are in accordance with their theme song and introduction. The combination of stop motion and moments of fluidity invokes the mission of their podcast, which is to be a learning atmosphere where everything is a work in progress. The varying weights in the logotype’s block-like appearance emphasize their jazz-like opening tunes. The overall abstract narrative of the animation represents the relationship between the communicator and receiver of information and data whilst also expressing flexibility and playfulness. It hopes to achieve the sense of welcoming varying opinions.</p>
                    </body>
                    </html>`
            },
        
            {
                url: 'https://desireinabowlofrice.s3.us-east-2.amazonaws.com/Project3_Devocion.mp4',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=600,left=800,width=930,height=500'
            }

        ];

    } else if (id === 'fortyEight') {
        urls = [
            {
                url: '',
                features: 'top=450,left=250,width=350,height=300',
                content: `
                    <html>
                    <head>
                      <title>My current dilemma</title>
                      <style>
                        body { font-family: Arial Narrow, sans-serif; }
                        h2 { margin-bottom: 10px; }
                        p { margin-bottom: 20px; }
                        form { display: flex; flex-direction: column; }
                        .checkbox-container { display: flex; align-items: center; margin-bottom: 10px; }
                        label { margin-left: 5px; }
                        input[type="submit"] { margin-top: 20px; }
                      </style>
                    </head>
                    <body>
                      <h3>My current dilemma..which will probably not matter in 3 months</h3>
                      <p>hm hm hm</p>
                      <form id="checkboxForm" onsubmit="return confirmSubmission()">
                        <div class="checkbox-container">
                          <input type="checkbox" id="subject1" name="subject1" value="Should I stay in NYC?">
                          <label for="subject1">Should Kiara stay in NYC?</label>
                        </div>
                        <div class="checkbox-container">
                          <input type="checkbox" id="subject2" name="subject2" value="Should I go back to Jakarta for a while?">
                          <label for="subject2">Should Kiara go back home to Jakarta for a while?</label>
                        </div>
                        <input type="submit" value="Submit">
                      </form>
                      <script>
                        function confirmSubmission() {
                          return confirm('Are you sure?');
                        }
                      </script>
                    </body>
                    </html>`
            }
        ];
        

    } else if (id === 'fiftyOne') {
        urls = [
            {
                url: 'https://desireinabowlofrice.s3.us-east-2.amazonaws.com/1.gif',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=200,width=900,height=500'
            },

            {
                url: '',
                features: 'top=450,left=250,width=250,height=300',
                content: `
                    <html>
                    <head>
                    <title>...branding...</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>Nirmala Berries
                    <br>2020<br>Graphic Designer</h3>
                    <p>Originated from Indonesia, Nirmala Berries sources their products from local communities in a vast mountainous area. The identity is based on the idea of the community of famers inclusion, the soil, the environment. I created Nirmala’s brand guidelines and a series of illustrations which represent these ideas into their packaging.</p>
                    </body>
                    </html>`
            },
        
            {
                url: 'https://desireinabowlofrice.s3.us-east-2.amazonaws.com/through-the-wire.gif',
                features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=1000,width=800,height=800'
            }, 

            {
                url: '',
                features: 'top=450,left=750,width=300,height=500',
                content: `
                    <html>
                    <head>
                    <title>...branding...</title>
                    <style>
                        body { font-family: Arial Narrow, sans-serif; font-size: 16px; color: #333; }
                    </style>
                    </head>
                    <body>
                    <h3>Through the Wire
                    <br>2022</h3>
                    <p>
                    An experimental letterhead that shows a generative component within its identity. It draws on the concept of the telephone game (also known as transmission chain experiments) and the nature of how the news circulate. The process included scanning these printed letterheads eighteen times to reflect how information permeates in non/digital platforms. The levels of clarity is a play around obscurity—its slow ineligibility is the act of questioning the source of information.
                    This project pulls in data from the patron saint of Instagram humor, @sainthoax, where they comment on politics through contemporary culture. The curved edges of the paper allude to Instagram’s logo; the text box acts as a compressed container and pays homage to the “character count limit.” Moreover, several captions and content from Saint Hoax’s output can be seen within the text box to act as a “template,” which is slowly obliterated throughout the many scans.</body>
                    </html>`
            },

        ];
    }


else if (id === 'fiftyTwo') {
    urls = [
        {
            url: 'https://archivesandartichokes.com/draft.html',
            features: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=200,width=900,height=500'
        }
    ];
}

    // Open each URL in a new window/tab
    urls.forEach(function(item) {
        var newWindow = window.open(item.url, '_blank', item.features);
        if (item.content) {
            newWindow.document.write(item.content);
        }
    });
}

let simulatedScrollY = 1000; // Start with maximum blur

        // Hide the overlay message after 5 seconds or when the user interacts with the page
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('overlay').classList.add('hidden');
            }, 5000);
        });

        window.addEventListener('wheel', function(event) {
            simulatedScrollY += event.deltaY;

            // Ensure simulatedScrollY is within a certain range
            if (simulatedScrollY < 0) simulatedScrollY = 0;
            if (simulatedScrollY > 1000) simulatedScrollY = 1000;

            var labels = document.querySelectorAll('.label:not(.no-blur)');

            labels.forEach(function(label) {
                label.style.filter = `blur(${Math.min(simulatedScrollY / 10, 10)}px)`;
            });

            // Hide the overlay when user interacts
            document.getElementById('overlay').classList.add('hidden');
        });