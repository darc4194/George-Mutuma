import { 
  Code2, 
  Globe, 
  Database, 
  Layout, 
  Smartphone, 
  Cpu, 
  Layers, 
  Zap,
  Palette,
  Search,
  ShoppingCart,
  Home,
  Dumbbell,
  Car,
  Building2,
  Briefcase,
  Shield,
  Scale
} from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
  category: 'E-commerce' | 'Real Estate' | 'Fitness' | 'Agency' | 'Automotive' | 'Portfolio';
  icon: any;
}

export const projects: Project[] = [
  {
    title: "Protego",
    description: "A secure and professional digital platform focused on protection and security services.",
    url: "https://protego.kitkitgo.com/",
    image: "https://s0.wp.com/mshots/v1/https://protego.kitkitgo.com/?w=1280",
    tags: ["React", "Security", "Web Design"],
    category: "Agency",
    icon: Shield
  },
  {
    title: "Autocure",
    description: "Premium automotive care and maintenance portal for modern vehicle owners.",
    url: "https://kitpapa.net/autocure/",
    image: "https://s0.wp.com/mshots/v1/https://kitpapa.net/autocure/?w=1280",
    tags: ["WordPress", "Automotive", "Service"],
    category: "Automotive",
    icon: Car
  },
  {
    title: "iLaw",
    description: "Legal services platform providing digital solutions for modern law practices and clients.",
    url: "https://kitpapa.net/ilaw/",
    image: "https://s0.wp.com/mshots/v1/https://kitpapa.net/ilaw/?w=1280",
    tags: ["Legal", "Professional", "Web"],
    category: "Agency",
    icon: Scale
  },
  {
    title: "Xein Auto",
    description: "Leading automotive parts and services marketplace in Kenya with a focus on quality.",
    url: "https://xeinauto.co.ke/",
    image: "https://s0.wp.com/mshots/v1/https://xeinauto.co.ke/?w=1280",
    tags: ["E-commerce", "Automotive", "Retail"],
    category: "Automotive",
    icon: Car
  },
  {
    title: "Cytech Digitals",
    description: "Full-service digital agency providing innovative tech solutions and marketing.",
    url: "https://cytechdigitals.com/",
    image: "https://s0.wp.com/mshots/v1/https://cytechdigitals.com/?w=1280",
    tags: ["Agency", "Digital", "Marketing"],
    category: "Agency",
    icon: Cpu
  },
  {
    title: "The Shoe Company",
    description: "Premium footwear retail platform with advanced filtering and inventory management.",
    url: "https://theshoecompanyke.com",
    image: "https://s0.wp.com/mshots/v1/https://theshoecompanyke.com?w=1280",
    tags: ["React", "JavaScript", "E-commerce"],
    category: "E-commerce",
    icon: ShoppingCart
  },
  {
    title: "Kiama Homes",
    description: "Modern real estate listing platform featuring high-quality property showcases and lead generation.",
    url: "https://kiamahomes.com",
    image: "https://s0.wp.com/mshots/v1/https://kiamahomes.com?w=1280",
    tags: ["WordPress", "Real Estate", "SEO"],
    category: "Real Estate",
    icon: Home
  },
  {
    title: "Autumn Agency",
    description: "Professional web design and digital marketing agency portfolio showcasing creative solutions.",
    url: "https://autumn-agency.vercel.app",
    image: "https://s0.wp.com/mshots/v1/https://autumn-agency.vercel.app?w=1280",
    tags: ["React", "Motion", "Agency"],
    category: "Agency",
    icon: Briefcase
  }
];

export const technologies = [
  { name: "React", icon: Code2, color: "text-blue-400" },
  { name: "JavaScript", icon: Cpu, color: "text-yellow-400" },
  { name: "WordPress", icon: Globe, color: "text-blue-600" },
  { name: "Python", icon: Database, color: "text-blue-500" },
  { name: "SQL", icon: Database, color: "text-orange-500" },
  { name: "Tailwind", icon: Palette, color: "text-cyan-400" },
  { name: "Node.js", icon: Zap, color: "text-green-500" },
  { name: "TypeScript", icon: Code2, color: "text-blue-700" }
];
