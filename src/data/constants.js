import {
  dataDashboard,
  emailClient,
  nes,
  emart,
  swami1,
  meetupApp,
} from "../images";

export const Bio = {
  name: "Ashwini Pendkar",
  roles: ["Frontend Developer", "Full Stack Developer", "Backend Developer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/ashwinipendkar953",
  linkedin: "https://www.linkedin.com/in/ashwinipendkar953",
  resume: "https://drive.google.com/file/d/1mSPmJTL3XoIlUL2CN1o4P__CQP_3ROyl/view?usp=sharing",
};

export const experiences = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8nz_CkBsuug4mZpkNfXkPdrj_1b-m8PxshQ&s",
    role: "Software Development Intern",
    company: "neoG Camp",
    date: "Aug 2023 - Dec 2023",
    desc: "Managed and mentored a diverse group of 40+ students during my tenure at neoG Camp, focusing on imparting essential programming concepts including JavaScript and web development.Delivered engaging lectures, facilitated hands- on coding exercises, and provided personalized guidance to ensure each participant gained a solid grasp of software development fundamentals.",
    skills: ["JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Redux"],
  },
];

export const education = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-B0HAB5o8Rl6ILQJNwypfPC2dw6Pg3zs2A&s",
    collage: "neog camp",
    date: "Jan 2024 - Present",
    grade: null,
    degree: "Full stack (MERN) web development course",
  },
  {
    id: 1,
    img: swami1,
    collage: "Swami ramananada teerth marathwada university, Nanded",
    date: "Jul 2018 - Oct 2020",
    grade: 8.0,
    degree: "Msc, Computer Science",
  },
  {
    id: 2,
    img: nes,
    collage: "N.E.S science college Nanded",
    date: "Jul 2015 - May 2018",
    grade: 9.0,
    degree: "Bsc, Computer Science",
  },
];

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Material UI",
        image: "https://v4.material-ui.com/static/logo.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Redux-Tookit",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },

      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
];

export const projects = [
    {
    id: 1,
    title: "Weather App",
    // date: "Nov 2024 - Nov 2024",
    description:
      "A comprehensive weather dashboard application built with React (frontend) and Node.js (backend). This application allows users to track weather conditions for multiple cities, view detailed weather information, and manage tracked cities. Weather data is fetched from a weather API and updated hourly for accurate results.
,
    tags: [
      "React Js",
      "Express Js",
      "MongoDB",
      "Bootstrap",
      "Rechart",
      "Tailwind css"
    ],
    category: "web app",
    github:
      "https://github.com/ashwinipendkar953/weather-app",
    webapp: "https://weather-app-pi-puce-66.vercel.app/",
  },  {
    id: 2,
    title: "Data visualization dashboard",
    // date: "Aug 2024 - Aug 2024",
    description:
      "Built an interactive data visualization dashboard using the MERN stack, enabling users to analyze large datasets through intuitive charts and advanced filtering options. The dashboard supports filtering by date range, age, and gender, with dynamic bar and line charts to visualize engagement trends over time. Features include real-time data updates, zoom and pan functionalities on charts, and URL sharing with filters embedded for easy access. Authentication and efficient cookie management ensure secure and personalized user experiences.",
    image: dataDashboard,
    tags: [
      "React Js",
      "Express Js",
      "MongoDB",
      "Bootstrap",
      "Chart.js",
      "Google Cloud Console",
    ],
    category: "web app",
    github:
      "https://github.com/ashwinipendkar953/moonshot-data-visualization-dashboard",
    webapp: "https://moonshot-data-visualization-app.vercel.app/",
  },
  {
    id: 3,
    title: "Emart - Shopping App",
    // date: "Sep 2024 - Sep 2024",
    description:
      "Emart is an eCommerce platform offering products like electronics, fashion, and home decor. It includes an engaging home page, advanced filtering, sorting options, and a search bar. Users can manage carts, wishlists, and orders, enjoy secure logins, and utilize payment integration, along with an admin panel for product management.",
    image: emart,
    tags: [
      "React Js",
      "Node Js",
      "Express Js",
      "MongoDB",
      "Redux-toolkit",
      "CSS",
      "Bootstrap",
      "JWT",
      "Payment Gateway",
    ],
    category: "web app",
    github: "https://github.com/ashwinipendkar953/Emart",
    webapp: "https://emart-pearl.netlify.app/",
  },
  {
    id: 4,
    title: "Email Client",
    // date: "Aug 2024 - Aug 2024",
    description:
      "This email list app features a user-friendly interface for viewing and managing emails, allowing users to mark emails as favorites, distinguish between read and unread emails, and filter by favorites, read, and unread status, all while displaying emails in a master-slave view with detailed email content loaded on selection.",
    image: emailClient,
    tags: ["React Js", "Bootstrap", "Rest Api"],
    category: "web app",
    github: "https://github.com/ashwinipendkar953/moonshot-email-client-app",
    webapp: "https://arp-moonshot-email-client-app.netlify.app/",
  },
  {
    id: 5,
    title: "Meetup Clone",
    // date: "JUn 2024 - Aug 2024",
    description:
      "Developed a web application enabling users to browse, and participate in meetups with seamless navigation.Key features include participant management, and real-time updates. Integrated client-side routing with React Router DOM and built a consistent, maintainable UI using modern JavaScript",
    image: meetupApp,
    tags: ["React Js", "Express Js", "MongoDB", "Bootstrap"],
    category: "web app",
    github: "https://github.com/ashwinipendkar953/meetup-app",
    webapp: "https://arp-meetup.netlify.app/",
  },
];

export const TimeLineData = [{ year: 2023, text: "Started my journey" }];
