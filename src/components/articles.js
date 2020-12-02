export const articles = [
    {
        "id": "cosmic-taxi",
        "jumbotronFeature" : true,
        "jumbotronData": {
            "id": "cosmic-taxi",
            "jumbotronText" : "a game made in under 72 hours" 
        },
        "blogFeature" : true,
        "blogData" : {
            "excerptData" : {
                "title" : "Cosmic Taxi",
                "type" : "Project",
                "date" : "October 5th, 2020",
                "excerptText": "A game made with friends in under 72 hours for Ludum Dare 47, for the theme of 'stuck in a loop'.",
                "image" : "cosmic-taxi.jpg"
            },
            "body" : { __html: 
                "<h4>Controls</h4> Use the left and right arrow keys or A and D to switch orbits. Press the right control key or Q to toggle the passenger monitor. Press escape to access the menu."
            },
            "iframeData" : {
                "src" : "https://itch.io/embed-upload/2916835?color=ffffff",
                "width" : "1100",
                "height" : "750",
                "title" : "cosmic-taxi-embed",
                "href" : "https://imaginaryaround.itch.io/cosmic-taxi"
            }
        }
    },
    {
        "id": "ray-tracer",
        "jumbotronFeature" : true,
        "jumbotronData": {
            "id": "ray-tracer",
            "jumbotronText": "a simple ray tracer"
        },
        "blogFeature": true,
        "blogData" : {
            "excerptData" : {
                "title": "Ray Tracer",
                "type" : "Project",
                "excerptText": "A simple ray tracer written in Java as an assignment for an introductory graphics course.",
                "image" : "ray-tracer.png"
            }
        }
    },
    {
        "id": "404",
        "blogData": {
            "excerptData": {
                "title": "Not Found",
                "type" : "Article",
                "image" : "ray-tracer.png"
            },
            "body": {
                __html: "<p>hello</p>"
            }
        }
    }
];