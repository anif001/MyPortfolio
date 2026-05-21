import orderImg from '../assets/project-images/order-management.png';
import stegoImg from '../assets/project-images/steganography.png';

export const projects = [
  {
    id: 1,
    title: "Self-Healing Order Management System",
    description: "A highly resilient and fault-tolerant e-commerce order management backend that handles network and system glitches autonomously. It features custom retry mechanisms, idempotency safety nets, and transactional consistency.",
    image: orderImg,
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    features: [
      "Exponential backoff retry mechanism for failed third-party APIs",
      "Idempotency validation layer to prevent duplicate payment/order processing",
      "Robust global exception handler and transactional rollback architecture",
      "PostgreSQL persistence with optimized indexes for quick order retrieval"
    ],
    github: "https://github.com/shaik-anif/self-healing-order-system",
    demo: "#" // can be updated by user later
  },
  {
    id: 2,
    title: "Image Steganography Application",
    description: "A secure cryptographic tool that encodes encrypted text payloads inside PNG image carriers. Implements robust AES-256 encryption on the payload before embeds, rendering the text invisible to unauthorized users.",
    image: stegoImg,
    tech: ["Spring Boot", "React.js", "REST APIs", "AES-256"],
    features: [
      "AES-256 encryption with salt and custom initialization vectors (IV)",
      "Pixel-level carrier injection algorithm ensuring zero visual distortion",
      "Interactive drag-and-drop React dashboard for instant encoding/decoding",
      "Interactive Swagger API documentation for backend integration endpoints"
    ],
    github: "https://github/shaik-anif/image-steganography-app",
    demo: "#"
  }
];
