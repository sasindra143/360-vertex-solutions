// components/Services/servicesData.js
import {
  Code,
  FileText,
  Briefcase,
  Mic,
  Layers,
  Palette,
} from "lucide-react";

const servicesData = [
  {
    title: "Website Development",
    icon: Code,
    lines: [
      "Business, portfolio & e-commerce websites",
      "Responsive, fast & SEO-optimized builds",
      "Focused on real business conversion",
    ],
    link: "/web-development",
    cta: "Explore Web Development",
    variant: "primary",
  },
  {
    title: "ATS Resume Building",
    icon: FileText,
    lines: [
      "ATS-optimized professional resumes",
      "Recruiter-focused keyword strategy",
      "Designed for real shortlisting",
    ],
    link: "/resume-building",
    cta: "Explore Resume Services",
  },
  {
    title: "Portfolio Creation",
    icon: Briefcase,
    lines: [
      "IT & creative professional portfolios",
      "Real project-based showcases",
      "Optimized for hiring managers",
    ],
    link: "/portfolio-creation",
    cta: "Explore Portfolio Creation",
  },
  {
    title: "Interview Preparation",
    icon: Mic,
    lines: [
      "Company-wise interview questions",
      "Technical + HR round preparation",
      "Based on actual hiring trends",
    ],
    link: "/interview-prep",
    cta: "Explore Interview Prep",
  },
  {
    title: "Project Development",
    icon: Layers,
    lines: [
      "Real-world CSE & IT projects",
      "Industry-aligned implementations",
      "Used for resumes & portfolios",
    ],
    link: "/project-development",
    cta: "Explore Projects",
  },
  {
    title: "Graphic Design & Branding",
    icon: Palette,
    lines: [
      "Logos, banners & thumbnails",
      "Brand-focused visual identity",
      "Designed for digital growth",
    ],
    link: "/graphic-design",
    cta: "Explore Branding",
  },
];

export default servicesData;
