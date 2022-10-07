const logotext = "Megan Elisabeth Finch";
const meta = {
    title: "Megan Elisabeth Finch",
    description: "I'm John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const homeData = {
    static: "Hi, I'm Megan.",
    animated: [
        "I write code.",
        "I make music.",
        "I have fun."
    ],
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum tur adipiscing elit. Sed at nisl euismod urna bibendum",
    callToAction: {
        text: "Learn more.",
        href: "/about"
    },
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const aboutData = {
    heading: "About Me",
    body: {
        md: "about.md"
    },
    contacts: {
        email: "mef40@cantab.co.uk"
    }
};

const blogData = [
    {
        id: "structure-from-motion",
        display: true,
        card: {
            title: "Inferring Structure from Motion",
            img: "structure-from-motion-thumb.png",
            text: "Third year dissertation project for the University of Cambridge.",
            date: new Date(2022, 6, 9),
            type: "Dissertation"
        },
        body: {
            images: [],
            md: "structure-from-motion.md"
        }
    },
    {
        id: "genetic-music",
        display: false,
        card: {
            title: "Genetic Music Generation in Java",
            img: "ray-tracer.png",
            text: "computer music experiment project",
            date: new Date(2022, 6, 9),
            type: "Project",
        },
        body: {
            images: [],
            md: "genetic-music.md"
        }
    },
    {
        id: "ray-tracer",
        display: false,
        card: {
            title: "Ray Tracer",
            img: "ray-tracer.png",
            text: "some text describing this project",
            date: new Date(2022, 7, 9),
            type: "Project"
        },
        body: {
            images: [],
            md: "ray-tracer.md"
        }
    },
    { 
        id: "cosmic-taxi",
        display: false,
        card: {
            title: "Cosmic Taxi",
            img: "cosmic-taxi.png",
            text: "some more text",
            date: new Date(2022, 6, 9),
            type: "Project",
        },
        body: {
            images: [],
            md: "ray-tracer.md"
        }
    },
    {
        id: "triolingo",
        display: true,
        card: {
            title: "Triolingo",
            img: "triolingo.png",
            text: "A foreign language chatbot, built in 24 hours for the Hack Cambridge Atlas hackathon.",
            date: new Date(2022, 6, 9),
            type: "Hackathon"
        },
        body: {
            images: [],
            md: "triolingo.md"
        }
    }
];

const socials = {
    github: "https://github.com/meganelisabethfinch",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/megan-finch/",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    twitch: "https://twitch.com",
};

export {
    meta,
    aboutData,
    blogData,
    homeData,
    socials,
    logotext,
};