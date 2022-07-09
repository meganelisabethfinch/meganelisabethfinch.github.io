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
        text: "My portfolio",
        href: "#"
    },
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const aboutData = {
    heading: "About Me",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
    contacts: {
        email: "mef40@cantab.co.uk"
    }
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const blogData = [
    {
        id: "ray-tracer",
        display: true,
        card: {
            title: "Ray Tracer",
            img: "ray-tracer.png",
            text: "some text describing this project",
            date: new Date(2022, 7, 9),
            type: "Project"
        },
        post: {
            text: "lorem ipsum"
        }
    },
    { 
        id: "cosmic-taxi",
        display: true,
        card: {
            title: "Cosmic Taxi",
            img: "ray-tracer.png",
            text: "some more text",
            date: new Date(2022, 7, 9),
            type: "Project",
        },
        post: {
            text: "lorem ipsum cosmic taxi"
        }
    },
    {
        id: "triolingo",
        display: true,
        card: {
            title: "Hack Cambridge Atlas: Triolingo",
            img: "ray-tracer.png",
            text: "exciting stuff",
            date: new Date(2022, 7, 9),
            type: "Hackathon"
        },
        post: {
            text: "what fun"
        }
    },
    {
        id: "404",
        display: false,
        card: {
            title: "Not Found",
            img: "ray-tracer.png",
            text: "This post could not be found.",
            date: new Date(2022, 7, 9),
            type: "Post"
        },
        post: {
            text: "This post could not be found."
        }
    }
];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

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
    worktimeline,
    skills,
    services,
    homeData,
    contactConfig,
    socials,
    logotext,
};