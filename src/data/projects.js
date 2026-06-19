import ecommerceImg from '../assets/project-images/cart.png';
import stegoImg from '../assets/project-images/stegnography.png';
import portfolioImg from '../assets/project-images/portfolio.png';
import studentImg from '../assets/project-images/student.png';

export const projects = [
  {
  id: 1,
  title: "Full-Stack E-Commerce Platform (Ongoing)",
  description:
    "An ongoing full-stack e-commerce platform being developed to support product browsing, cart management, secure authentication, and order processing through scalable REST APIs.",
  image: ecommerceImg,
  tech: ["React.js", "Java", "Spring Boot", "PostgreSQL", "REST APIs"],
  github: "https://github.com/anif001/E-Commerce-Spring",
  demo: "#"
},
  {
    id: 2,
    title: "Image Steganography Application",
    description: "A secure cryptographic tool that encodes encrypted text payloads inside PNG image carriers. Implements robust AES-256 encryption on the payload before embeds, rendering the text invisible to unauthorized users.",
    image: stegoImg,
    tech: ["Spring Boot", "React.js", "REST APIs", "AES-256"],
    github: "https://github.com/anif001/Stegnography",
    demo: "#"
  },
{
    id: 3,
    title: "My Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, technical skills, certifications, and professional achievements with a modern responsive design.",
    image: portfolioImg,
    tech: ["React.js", "JavaScript", "CSS", "Responsive Design"],
    github: "https://github.com/anif001/MyPortfolio",
    demo: "#"
  },
   {
    id: 4,
    title: "Student Management System",
    description:
      "A web-based student management system for handling student records, academic information, and administrative operations efficiently.",
    image: studentImg,
    tech: ["Java", "Spring Boot", "PostgreSQL", "React.js"],
    github: "https://github.com/anif001/Student_Management_System",
    demo: "#"
  }
];
