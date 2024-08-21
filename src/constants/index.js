import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    valethi,
    oytie,
    codsoft,
    chatapp,
    jobit,
    movie,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Oytie Pvt Ltd (Internship)",
        icon: oytie,
        iconBg: "#000000",
        date: "Dec 2023 - Jan 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Codsoft (Internship)",
        icon: codsoft,
        iconBg: "#ffffff",
        date: "Dec 2023 - Jan 2024",
        points: [
            "Developed and built a Personal portfolio showcasing my skills and projects using HTML, CSS, and JavaScript, resulting in increased visibility and credibility for my work.",
            "Created a dynamic Calculator application using JavaScript, providing users with a convenient tool for quick calculations.",
            "Designed and implemented a visually appealing Landing page using HTML and CSS, effectively capturing the attention of website visitors and promoting user engagement.",
        ],
    },
    {
        title: "Valethi Technologies",
        company_name: "(Internship)",
        icon: valethi,
        iconBg: "#ffffff",
        date: "March 2020 - June 2020",
        points: [
            "Commmunicating with the foreign clients.",
            "Resolving their issues related to the products.",
            "Writing an effective mail to resolve their problems.",
            "Getting feedbacks from the clients.",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Shreyas proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Shreyas does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Shreyas optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Chat Application",
        description:
            "Implemented user authentication and secure login/logout functionality Enabled users to switch accounts to chat seamlessly Integrated image sharing feature for enhanced communication experience",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "sockets",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "pink-text-gradient",
            },
        ],
        image: chatapp,
        source_code_link: "https://github.com/Shreyask24/Chat-Application",
    },
    {
        name: "Video Calling Application",
        description:
            "Established seamless user connection using socket.io Implemented unique ID generation for sending to other users Enabled users to join video calls through the generated ID. User's are able to diconnect the calls",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "sockets",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/Shreyask24/Video-chat-app",
    },
    {
        name: "Menu Management API",
        description:
            "This project is a Node.js backend server for managing a menu with categories, subcategories, and items. The API allows you to create, retrieve, update, and delete categories, subcategories, and items.",
        tags: [
            {
                name: "nodejs",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "expressjs",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "blue-text-gradient",
            },
        ],
        image: movie,
        source_code_link: "https://github.com/Shreyask24/Menu-Management-API",
    },
];

export { services, technologies, experiences, testimonials, projects };