// Portfolio Configuration
// Update these values to customize your portfolio

const PORTFOLIO_CONFIG = {
    // Personal Information
    name: "Botshelo Seitshiro",
    title: "Full-Stack Software Engineer",
    subtitle: "Software Developer & IT Specialist",
    description: "Passionate about technology and innovation. Experienced in developing solutions that drive business growth and enhance user experiences.",
    
    // About Section
    about: {
        paragraph1: "I am a passionate Full-Stack Software Engineer with a strong foundation in modern web development, mobile application development, and emerging technologies. My journey in software engineering began with a deep curiosity for creating innovative solutions that solve real-world problems and enhance user experiences.",
        paragraph2: "With expertise in both frontend and backend technologies, I specialize in building scalable web applications using ASP.NET Core, React, and modern JavaScript frameworks. My experience extends to mobile development with Android Studio and Java, as well as IoT systems using Python and Cisco technologies. I'm committed to writing clean, maintainable code and following industry best practices for software development.",
        stats: {
            experience: "3+",
            projects: "20+",
            technologies: "15+"
        }
    },
    
    // Education
    education: [
        {
            degree: "Bachelor of Information Technology",
            specialization: "Computer Software Engineering",
            period: "2023 – 2025 (Final Year)",
            institution: "Nelson Mandela University - Gqeberha, EC",
            description: "I am currently pursuing a Bachelor of Information Technology at Nelson Mandela University, where I am developing expertise in software development, networking, cybersecurity, and database management. My studies have provided me with a strong foundation in programming languages, system analysis, and IT infrastructure, enabling me to build secure and efficient digital solutions."
        }
    ],
    
    // Certificates
    certificates: [
        {
            name: "Introduction to Cybersecurity",
            issuer: "Cisco",
            date: "Issued Apr 2023"
        },
        {
            name: "Introduction to IoT and Digital Transformation",
            issuer: "Cisco",
            date: "Issued Apr 2023"
        },
        {
            name: "FNB App Academy 2025",
            issuer: "FNB",
            date: "Issued Jul 2025"
        }
    ],
    
    // Contact Information
    contact: {
        email: "botshelo.seitshiro@email.com",
        phone: "+27 XX XXX XXXX",
        location: "Johannesburg, South Africa",
        social: {
            linkedin: "https://linkedin.com/in/yourprofile",
            github: "https://github.com/yourusername"
        }
    },
    
    // Experience Timeline
    experience: [
        {
            title: "FYS BUDDY",
            company: "2025",
            period: "2025",
            description: "As FYS (First-Year Success) Buddy, I played a crucial role in assisting first-year students in adapting to university life. My responsibilities included providing academic guidance, helping students navigate university resources, and offering mentorship on time management and study strategies."
        }
    ],
    
    // Projects
    projects: [
        {
            name: "IT Project Management Web Application",
            description: "Built for the WDV202 Semester 2 course. Implemented role-based authentication for Administrators, Project Managers, Systems Analysts, and Web Developers. Features included task creation, assignment, and visibility control based on user roles.",
            technologies: ["ASP.NET Core", "React", "MSSQL"],
            github: "https://github.com/yourusername/project-management",
            live: "https://your-project-management.com",
            icon: "fas fa-project-diagram"
        },
        {
            name: "Android Learning Management System (LMS)",
            description: "Built an Android app for admins, instructors, and students. Admin: manage modules and users. Instructor: create and assign tasks. Student: view tasks, update completion status. Used SQLite for offline data storage.",
            technologies: ["Java", "SQLite", "Android"],
            github: "https://github.com/yourusername/android-lms",
            live: "https://your-android-lms.com",
            icon: "fas fa-mobile-alt"
        },
        {
            name: "IoT Access Control & Office Automation System",
            description: "Developed a TCP server for controlling IoT devices. Designed a Packet Tracer simulation with double-door access control, office lighting/automation, and emergency exit solutions.",
            technologies: ["Python", "Cisco Packet Tracer", "IoT"],
            github: "https://github.com/yourusername/iot-system",
            live: "https://your-iot-system.com",
            icon: "fas fa-network-wired"
        }
    ],
    
    // Skills
    skills: {
        "Programming Languages": [
            { name: "C#", icon: "fas fa-hashtag" },
            { name: "Python", icon: "fab fa-python" },
            { name: "Java", icon: "fab fa-java" },
            { name: "JavaScript", icon: "fab fa-js-square" },
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" }
        ],
        "Frameworks & Libraries": [
            { name: "React", icon: "fab fa-react" },
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: ".NET Framework", icon: "fab fa-microsoft" },
            { name: "React-Bootstrap", icon: "fab fa-bootstrap" },
            { name: "Android SDK", icon: "fab fa-android" }
        ],
        "Tools & Technologies": [
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "GitHub", icon: "fab fa-github" },
            { name: "Visual Studio", icon: "fas fa-code" },
            { name: "Android Studio", icon: "fab fa-android" },
            { name: "Cisco Packet Tracer", icon: "fas fa-network-wired" },
            { name: "SQL", icon: "fas fa-database" }
        ]
    },
    
    // Theme Colors
    colors: {
        primary: "#2563eb",
        secondary: "#1d4ed8",
        accent: "#667eea",
        text: "#1f2937",
        lightText: "#6b7280",
        background: "#f8fafc"
    },
    
    // SEO
    seo: {
        title: "Botshelo Seitshiro - Information Technology Professional",
        description: "Professional portfolio of Botshelo Seitshiro, an Information Technology professional specializing in software development and IT solutions.",
        keywords: "Botshelo Seitshiro, IT Professional, Software Developer, Portfolio, Information Technology",
        author: "Botshelo Seitshiro"
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
} else {
    window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
