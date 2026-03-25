import { 
  Code2, 
  Video, 
  Camera, 
  Globe, 
  Cpu, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Github, 
  Mail, 
  Phone,
  Youtube,
  GraduationCap,
  Sparkles,
  Layers,
  Palette,
  Trophy,
  Award,
  Heart
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "MD. Hridoy Mridha",
  location: "Dhaka, Bangladesh",
  education: "North South University (CSE)",
  title: "CSE Student | Content Creator | Video Editor",
  profileImage: "https://drive.google.com/thumbnail?id=1BsjWBi0PII4cKOA0yOqzGFA1NDEa-WMx&sz=w1000",
  aboutImage: "https://drive.google.com/thumbnail?id=1v4QVX0TdwXmcRAtJXwRAYHfgr7SAn9Ku&sz=w1000",
  bio: "As a CSE student at North South University, I focus on AI, Machine Learning, and software engineering. My true passion is cinematic content creation—I mainly produce vlogs about my university journey, alongside funny and educational videos that bridge the gap between technology and storytelling.",
  github: "https://github.com/MdHridoyMridha",
  linkedin: "https://www.linkedin.com/in/md-hridoy-mridha-66b914230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  youtube: "https://youtube.com/@hridoy_mridha?si=RFjp1FdnJFe6-3ks"
};

export const SKILLS = [
  {
    category: "Programming",
    icon: Code2,
    items: ["C", "C++", "Java", "Python", "SQL", "Basic Machine Learning"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    category: "Web Development",
    icon: Globe,
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap", "React (Learning)"],
    color: "from-purple-500 to-pink-400"
  },
  {
    category: "Creative Media",
    icon: Video,
    items: ["Professional Video Editing", "Content Creation", "Storyteller", "Cinematic Shooting", "Photography"],
    color: "from-orange-500 to-yellow-400"
  }
];

export const PROJECTS = [
  {
    title: "Car Rental Web App",
    description: "A full-stack car rental platform with real-time availability and booking management.",
    tech: ["React", "Supabase", "Tailwind CSS"],
    image: "https://drive.google.com/thumbnail?id=15ELgQp-kfcf1mNXz-24FUoQp1sjqAsLP&sz=w1000",
    link: "https://car-rental-app-eight-gules.vercel.app/",
    github: "https://github.com/MdHridoyMridha/carRentalApp.git"
  },
  {
    title: "Personal Portfolio",
    description: "A premium, ultra-modern portfolio website showcasing multi-disciplinary skills.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: "https://picsum.photos/seed/portfolio/800/600",
    link: "#"
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "A classic interactive Tic-Tac-Toe game with a clean UI and smooth gameplay.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "https://picsum.photos/seed/tictactoe/800/600",
    link: "#",
    github: "https://github.com/MdHridoyMridha/Tic-Tac-Toe-game.git"
  },
  {
    title: "Sharido",
    description: "A comprehensive e-commerce web application featuring product management and secure transactions.",
    tech: ["PHP", "SQL", "JavaScript"],
    image: "https://drive.google.com/thumbnail?id=1-yMjZS35AurmnhLaL38OwHe9E8z7olkv&sz=w1000",
    link: "#",
    github: "https://github.com/MdHridoyMridha/sharido.git"
  }
];

export const CREATIVE_WORK = [
  {
    type: "video",
    title: "Cinematography",
    thumbnail: "https://drive.google.com/thumbnail?id=1BLRX05vn9sbuw_dFLYYcmUvNWjXpCjn2&sz=w1000",
    link: "https://drive.google.com/file/d/1BLRX05vn9sbuw_dFLYYcmUvNWjXpCjn2/view?usp=drivesdk",
    category: "Cinematography"
  },
  {
    type: "video",
    title: "Storytelling",
    thumbnail: "https://drive.google.com/thumbnail?id=14QD4eSWSt7xhqN6qLZcLOpeP7fcF-ORB&sz=w1000",
    link: "https://drive.google.com/file/d/14QD4eSWSt7xhqN6qLZcLOpeP7fcF-ORB/view?usp=drivesdk",
    category: "Storytelling"
  },
  {
    type: "video",
    title: "Funny Content",
    thumbnail: "https://drive.google.com/thumbnail?id=1F5ajn-XwOmKxWuDUcPxeV3jtghHUumR5&sz=w1000",
    link: "https://drive.google.com/file/d/1F5ajn-XwOmKxWuDUcPxeV3jtghHUumR5/view?usp=drivesdk",
    category: "Entertainment"
  },
  {
    type: "video",
    title: "Educational Content",
    thumbnail: "https://drive.google.com/thumbnail?id=1odxnDCDENlUA7eXXb9chyAKavXH2a1LD&sz=w1000",
    link: "https://drive.google.com/file/d/1odxnDCDENlUA7eXXb9chyAKavXH2a1LD/view?usp=drivesdk",
    category: "Education"
  },
  {
    type: "video",
    title: "Personal Vlog",
    thumbnail: "https://drive.google.com/thumbnail?id=126eRTeeypprqPc6gy1Cq4rXvsWc0-Ya5&sz=w1000",
    link: "https://drive.google.com/file/d/126eRTeeypprqPc6gy1Cq4rXvsWc0-Ya5/view?usp=drivesdk",
    category: "Vlog"
  },
  {
    type: "photo",
    title: "Cinematic Portrait",
    thumbnail: "https://drive.google.com/thumbnail?id=14QMR8Lgsnd5XmuFw0MVgiQ9JDWZBcAsu&sz=w1000",
    link: "https://drive.google.com/file/d/14QMR8Lgsnd5XmuFw0MVgiQ9JDWZBcAsu/view?usp=drivesdk",
    category: "Photography"
  },
  {
    type: "photo",
    title: "Urban Perspective",
    thumbnail: "https://drive.google.com/thumbnail?id=18ymHI7EG01lLJB_8gnoOEqNn_Kggkt_-&sz=w1000",
    link: "https://drive.google.com/file/d/18ymHI7EG01lLJB_8gnoOEqNn_Kggkt_-/view?usp=drivesdk",
    category: "Photography"
  },
  {
    type: "photo",
    title: "Nature's Beauty",
    thumbnail: "https://drive.google.com/thumbnail?id=1SsLyN8X4Khl6H3F9rt50Mgj1hp5R_h9A&sz=w1000",
    link: "https://drive.google.com/file/d/1SsLyN8X4Khl6H3F9rt50Mgj1hp5R_h9A/view?usp=drivesdk",
    category: "Photography"
  },
  {
    type: "photo",
    title: "Creative Composition",
    thumbnail: "https://drive.google.com/thumbnail?id=1JhYNf4zBOv0Yv7mig332kll8BY6GYWT4&sz=w1000",
    link: "https://drive.google.com/file/d/1JhYNf4zBOv0Yv7mig332kll8BY6GYWT4/view?usp=drivesdk",
    category: "Photography"
  }
];

export const JOURNEY = [
  {
    year: "Present",
    title: "Member - CEC",
    description: "Active member of the Computer Engineering Club (CEC) at North South University, participating in tech workshops and community events.",
    icon: Cpu
  },
  {
    year: "Present",
    title: "CSE Student",
    description: "Studying Computer Science and Engineering at North South University, specializing in AI and Machine Learning while building full-stack expertise in modern Frontend and Backend technologies.",
    icon: GraduationCap
  },
  {
    year: "2025",
    title: "Chess Semi-finalist",
    description: "Semi-finalist at the Chess competition organized by NSU SEPS.",
    icon: Trophy
  },
  {
    year: "2025",
    title: "Promotional Member - NSU",
    description: "Promotional member for the First Quran Conference and Seerah Exhibition 2025 at North South University.",
    icon: Sparkles
  },
  {
    year: "2024",
    title: "Catwalk 2024 - 7km Marathon",
    description: "Participated in the 7km marathon celebrating the first International Day of the Arabian Leopard. Received a certificate from H.E. Essa Yousef Essa Al-Duhailan, Ambassador of Saudi Arabia to Dhaka.",
    icon: Award
  },
  {
    year: "2024",
    title: "ACM Student Chapter Volunteer",
    description: "Volunteered for the Data Science Learning Program 2024, assisting in program organization and student support.",
    icon: Sparkles
  },
  {
    year: "2023",
    title: "Creative Mastery",
    description: "Self-taught professional video editing and photography, building a personal brand through content creation.",
    icon: Palette
  },
  {
    year: "2022",
    title: "Tech Foundations",
    description: "Started journey with C/C++ and web fundamentals, discovering the passion for building digital tools.",
    icon: Layers
  }
];

export const HOBBIES = [
  { name: "Football", icon: "⚽" },
  { name: "Cricket", icon: "🏏" },
  { name: "Badminton", icon: "🏸" },
  { name: "Chess", icon: "♟️" },
  { name: "Travelling", icon: "✈️" }
];

export const SOCIAL_LINKS = [
  { name: "Facebook Page", icon: Facebook, url: "https://www.facebook.com/share/19b5zrmBQR/?mibextid=wwXIfr", color: "hover:text-blue-600" },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/1B7usP8dcf/?mibextid=wwXIfr", color: "hover:text-blue-600" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/the.hridoy_mridha?igsh=ZTBlaWFqc3BrcHl2&utm_source=qr", color: "hover:text-pink-600" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/md-hridoy-mridha-66b914230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", color: "hover:text-blue-700" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@hridoy_mridha?si=RFjp1FdnJFe6-3ks", color: "hover:text-red-600" },
  { name: "GitHub", icon: Github, url: "https://github.com/MdHridoyMridha", color: "hover:text-gray-900" }
];
