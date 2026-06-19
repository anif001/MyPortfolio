import { 
  FaJava, FaPython, FaJs, FaReact, FaHtml5, FaCss3, 
  FaGitAlt, FaGithub, FaDatabase, FaServer, 
  FaCube, FaCompass, FaLaptopCode, FaNetworkWired 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiSpring, SiSpringsecurity, SiHibernate, 
  SiPostgresql, SiMysql, SiPostman, SiApachemaven, 
  SiVercel, SiRender, SiTailwindcss 
} from 'react-icons/si';

export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, brandColor: "#ED8B00" },
      { name: "Python", icon: FaPython, brandColor: "#3776AB" },
      { name: "JavaScript", icon: FaJs, brandColor: "#F7DF1E" },
      { name: "SQL", icon: FaDatabase, brandColor: "#0064a5" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Frameworks",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, brandColor: "#6DB33F" },
      { name: "Spring MVC", icon: SiSpring, brandColor: "#6DB33F" },
      { name: "Spring Security", icon: SiSpringsecurity, brandColor: "#6DB33F" },
      { name: "Hibernate", icon: SiHibernate, brandColor: "#59666C" },
      { name: "REST APIs", icon: FaServer, brandColor: "#F97316" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: FaReact, brandColor: "#61DAFB" },
      { name: "HTML5", icon: FaHtml5, brandColor: "#E34F26" },
      { name: "CSS3", icon: FaCss3, brandColor: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, brandColor: "#06B6D4" }
    ]
  },
  {
    id: "database",
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, brandColor: "#4169E1" },
      { name: "MySQL", icon: SiMysql, brandColor: "#00758F" }
    ]
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: FaGitAlt, brandColor: "#F05032" },
      { name: "GitHub", icon: FaGithub, brandColor: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, brandColor: "#FF6C37" },
      { name: "Maven", icon: SiApachemaven, brandColor: "#C71A36" },
      { name: "Vercel", icon: SiVercel, brandColor: "#FFFFFF" },
      { name: "Render", icon: SiRender, brandColor: "#46E3B7" }
    ]
  },
  {
    id: "concepts",
    title: "Core Concepts",
    skills: [
      { name: "OOP", icon: FaCube, brandColor: "#F59E0B" },
      { name: "SOLID Principles", icon: FaCompass, brandColor: "#EA580C" },
      { name: "DBMS", icon: FaDatabase, brandColor: "#10B981" },
      { name: "Operating Systems", icon: FaLaptopCode, brandColor: "#3B82F6" },
      { name: "Computer Networks", icon: FaNetworkWired, brandColor: "#6366F1" }
    ]
  }
];
