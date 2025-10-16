import profileImage from "../assets/images/profile.jpg";

export const profileData = {
  position: "Intern ReactJS",
  name: "Thi-The GIAP",
  university: "Hanoi University of Science & Technology",
  school: "School of Electrical & Electronic Engineering",
  phone: "+84-395318514",
  email: "giapthe2002@gmail.com",
  portfolio: "https://mochergt.id.vn/",
  image: profileImage,
};

export const educationData = {
  degree: "Bachelor",
  institute: "Electronics and Telecommunications Engineering",
  cpa: "3.19/4.0",
  year: "2025",
};

export const projectsData = [
  {
    name: "TeamTracker",
    duration: "Apr. 2025 - Aug. 2025",
    link: "https://github.com/Giapthe2002/TeamTracker-FE",
    description:
      "A task management web application to streamline team collaboration and monitor project progress.",
    keyFeatures: [
      "Create, edit, update, and delete tasks, assign tasks to one or multiple members.",
      "Monitor task progress with dashboards, charts, and progress bars.",
      "Track deadlines, overdue tasks, and team workloads to ensure overall project efficiency.",
    ],
    technicalImplementation: [
      "Frontend: React.js with TailwindCSS for UI design, responsive layout.",
      "Backend: Node.js + Express.js for RESTful APIs.",
      "Database: MongoDB (Mongoose ORM) for user and task management.",
    ],
  },
  {
    name: "ZConcert",
    duration: "Jun. 2024 - Aug. 2024",
    link: "https://github.com/Giapthe2002/zconcert2024-fe",
    description:
      "Developed a web platform to provide event information, and enable online ticket sales.",
    keyFeatures: [
      "Artist introduction pages with detailed profiles and event information.",
      "Online ticket purchase system with seat/price details.",
      "Email confirmation sent automatically after successful booking.",
      "Ticket purchase records stored securely in Google Sheets for management.",
    ],
    technicalImplementation: [
      "Frontend: TypeScript, SCSS, reusable UI components, form validation, API integration.",
      "Backend (teammate): TypeScript, Google Sheets (data storage), Gmail (confirmation emails).",
    ],
  },
];

export const skillsData = [
  {
    category: "Programming",
    details: "HTML, CSS, JavaScript, TypeScript",
  },
  {
    category: "Frontend Development",
    details: "React, React Native (Android), Next.js, Tailwind CSS, Bootstrap",
  },
  {
    category: "Backend & Databases",
    details: "Node.js + Express.js, MySQL, SQL Server, MongoDB",
  },
  {
    category: "Developer Tools",
    details: "Visual Studio, VS Code, WebStorm, Postman, GitHub, Figma",
  },
  {
    category: "UI/UX Design",
    details:
      "Understanding of design principles, user flows, wireframe, and responsive layout using Figma",
  },
  {
    category: "Other Skills",
    details: "RESTful API integration, Authentication (JWT)",
  },
];

export const academicExperience = [
  {
    lab: "BKAI Research Lab",
    position: "Frontend Developer Trainee",
    date: "Dec. 2023 – Feb. 2025",
    details: [
      "Participated in frontend development training sessions",
      "Worked with technologies like HTML, CSS, JavaScript",
      "Studied interface design for web and mobile applications using Figma",
    ],
  },
];

export const extracurriculars = [
  {
    title: "Media",
    description: "Producing media publications for the Student volunteer group",
  },
  {
    title: "Student Volunteer",
    description: "Electronics & Telecommunications",
  },
];
