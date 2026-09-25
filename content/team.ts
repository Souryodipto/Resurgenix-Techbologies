export interface TeamMember {
  id: string;
  name: string;
  role: string;
  companyTagline?: string;
  bio: string;
  focus: string;
  initials: string;
  gradient: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "souryodipto-debnath",
    name: "Souryodipto Debnath",
    role: "Founder & CEO",
    companyTagline: "Founder & CEO at Resurgenix Technologies",
    bio: "Driving the vision behind AI-powered infrastructure intelligence and leading product strategy.",
    focus: "AI Infrastructure Vision & Product Strategy",
    initials: "SD",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    id: "anushka-mukherjee",
    name: "Anushka Mukherjee",
    role: "Creative Technologist",
    companyTagline: "Creative Technologist at Resurgenix Technologies",
    bio: "Shaping the future of intelligent infrastructure through AI and product innovation.",
    focus: "Creative Technology & Product Innovation",
    initials: "AM",
    gradient: "from-indigo-600 to-violet-600",
  },
  {
    id: "ayush-kumar-das",
    name: "Ayush Kumar Das",
    role: "Backend Developer",
    companyTagline: "Backend Developer at Resurgenix Technologies",
    bio: "Building highly optimized real-time event engines and scalable backend infrastructure.",
    focus: "Real-Time Event Engines & Scalable Infrastructure",
    initials: "AD",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "mayank-bhardwaj",
    name: "Mayank Bhardwaj",
    role: "Business Developer",
    companyTagline: "Business Developer at Resurgenix Technologies",
    bio: "Leading enterprise partnerships, strategic operations, and business development across markets.",
    focus: "Enterprise Partnerships & Strategic Operations",
    initials: "MB",
    gradient: "from-cyan-600 to-teal-600",
  },
];
