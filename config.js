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
        paragraph2: "With expertise in both frontend and backend technologies, I specialize in building scalable web applications using ASP.NET Core, React, and modern JavaScript frameworks. My experience extends to mobile development with Android Studio and Java. I'm committed to writing clean, maintainable code and following industry best practices for software development.",
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
            specialization: "Software Engineering",
            period: "2023 – 2025 | Completed Cum Laude | Overall Average: 77,48%",
            institution: "Nelson Mandela University - Gqeberha, EC",
            description: "Completed a comprehensive IT degree focused on software development, networking, cybersecurity, and databases. Gained hands-on experience through practical labs and projects, developing secure applications and designing databases. Strengthened skills in programming, system analysis, and building efficient digital solutions."
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
            name: "React.js",
            issuer: "Udemy",
            date: "Issued Dec 2025",
            url: "ude.my/UC-95a56a74-98f6-4391-87f7-f92bc8a0fb8a"
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
        }
    ],
    
    // Skills
    skills: {
        "Programming Languages": [
            { name: "C#", icon: "fas fa-hashtag" },
            { name: "Python", icon: "fab fa-python" },
            { name: "Java", icon: "fab fa-java" },
            { name: "JavaScript", icon: "fab fa-js-square" },
            { name: "SQL", icon: "fas fa-database" }
        ],
        "Frameworks & Libraries": [
            { name: "React", icon: "fab fa-react" },
            { name: "ASP.NET Web APIs", icon: "fab fa-microsoft" },
            { name: ".NET Framework", icon: "fab fa-microsoft" },
            { name: "React-Bootstrap", icon: "fab fa-bootstrap" },
            { name: "Android SDK", icon: "fab fa-android" }
        ],
        "Tools & Technologies": [
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "GitHub", icon: "fab fa-github" },
            { name: "Visual Studio", icon: "fas fa-code" },
            { name: "Android Studio", icon: "fab fa-android" },
            { name: "Microsoft SQL", icon: "fas fa-database" }
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
