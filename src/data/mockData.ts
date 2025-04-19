
// Mock users
export const users = [
  {
    id: "u1",
    name: "Alex Johnson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    location: "New York, NY",
    rating: 4.9,
    bio: "Software developer with 5 years of experience. Passionate about teaching coding and learning languages.",
    skillsOffered: ["JavaScript", "React", "Web Development"],
    skillsWanted: ["Spanish", "Photography", "Guitar"],
  },
  {
    id: "u2",
    name: "Samantha Lee",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    location: "San Francisco, CA",
    rating: 4.8,
    bio: "Yoga instructor and amateur photographer. Looking to expand my technical skills.",
    skillsOffered: ["Yoga", "Meditation", "Photography"],
    skillsWanted: ["Python", "Graphic Design", "Social Media Marketing"],
  },
  {
    id: "u3",
    name: "Michael Torres",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    location: "Chicago, IL",
    rating: 4.7,
    bio: "Professional chef and cooking instructor. Interested in learning digital skills.",
    skillsOffered: ["Cooking", "Baking", "Nutrition"],
    skillsWanted: ["Digital Marketing", "Video Editing", "Website Development"],
  },
  {
    id: "u4",
    name: "Emily Parker",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    location: "Austin, TX",
    rating: 4.9,
    bio: "Digital marketer with a passion for music. Teaching marketing skills and seeking music lessons.",
    skillsOffered: ["Digital Marketing", "Content Creation", "SEO"],
    skillsWanted: ["Piano", "Guitar", "Music Theory"],
  },
  {
    id: "u5",
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    location: "Boston, MA",
    rating: 4.6,
    bio: "Physics professor by day, amateur painter by night. Looking to exchange knowledge.",
    skillsOffered: ["Physics", "Mathematics", "Academic Writing"],
    skillsWanted: ["Painting", "Drawing", "Art History"],
  },
  {
    id: "u6",
    name: "Sarah Williams",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    location: "Seattle, WA",
    rating: 4.8,
    bio: "Graphic designer with 7 years of experience. Seeking to learn new languages while teaching design.",
    skillsOffered: ["Graphic Design", "UI/UX", "Adobe Creative Suite"],
    skillsWanted: ["French", "Japanese", "Public Speaking"],
  }
];

// Mock skills
export const skills = [
  {
    id: "s1",
    title: "JavaScript Fundamentals",
    category: "Programming",
    description: "Learn the basics of JavaScript programming including variables, functions, objects, and asynchronous programming.",
    teacherId: "u1",
    isVirtual: true,
    isInPerson: false,
  },
  {
    id: "s2",
    title: "React for Beginners",
    category: "Web Development",
    description: "Introduction to React.js library. Learn how to build interactive UIs with components, state, and props.",
    teacherId: "u1",
    isVirtual: true,
    isInPerson: true,
  },
  {
    id: "s3",
    title: "Yoga for Stress Relief",
    category: "Fitness",
    description: "Gentle yoga practices designed to reduce stress and anxiety. Suitable for all levels.",
    teacherId: "u2",
    isVirtual: true,
    isInPerson: true,
  },
  {
    id: "s4",
    title: "Basics of Digital Photography",
    category: "Photography",
    description: "Learn camera settings, composition techniques, and basic editing to take your photography to the next level.",
    teacherId: "u2",
    isVirtual: true,
    isInPerson: true,
  },
  {
    id: "s5",
    title: "Italian Cooking Fundamentals",
    category: "Cooking",
    description: "Learn to make authentic Italian dishes from scratch, including pasta, sauces, and traditional recipes.",
    teacherId: "u3",
    isVirtual: true,
    isInPerson: true,
  },
  {
    id: "s6",
    title: "Baking Artisan Bread",
    category: "Cooking",
    description: "Master the art of baking delicious, crusty artisan bread at home with simple techniques and ingredients.",
    teacherId: "u3",
    isVirtual: true,
    isInPerson: false,
  },
  {
    id: "s7",
    title: "Digital Marketing Strategy",
    category: "Marketing",
    description: "Develop effective digital marketing strategies, understand audience targeting, and measure campaign success.",
    teacherId: "u4",
    isVirtual: true,
    isInPerson: false,
  },
  {
    id: "s8",
    title: "Content Creation for Social Media",
    category: "Marketing",
    description: "Learn to create engaging content for various social media platforms that drives engagement and conversions.",
    teacherId: "u4",
    isVirtual: true,
    isInPerson: false,
  },
  {
    id: "s9",
    title: "Physics Tutoring",
    category: "Education",
    description: "Personalized physics tutoring for high school and college students. From mechanics to electromagnetism.",
    teacherId: "u5",
    isVirtual: true,
    isInPerson: true,
  },
  {
    id: "s10",
    title: "UI/UX Design Fundamentals",
    category: "Design",
    description: "Introduction to user interface and user experience design principles, tools, and methodologies.",
    teacherId: "u6",
    isVirtual: true,
    isInPerson: false,
  },
  {
    id: "s11",
    title: "Adobe Photoshop Essentials",
    category: "Design",
    description: "Learn the core tools and techniques of Adobe Photoshop for photo editing, graphic design, and digital art.",
    teacherId: "u6",
    isVirtual: true,
    isInPerson: true,
  },
  {
    id: "s12",
    title: "Watercolor Painting Basics",
    category: "Art",
    description: "Introduction to watercolor painting techniques, color theory, and composition for beginners.",
    teacherId: "u5",
    isVirtual: false,
    isInPerson: true,
  }
];

// Mock bookings
export const bookings = [
  {
    id: "b1",
    skillId: "s1",
    teacherId: "u1",
    studentId: "u3",
    date: "2023-06-15",
    timeSlot: "14:00-15:30",
    isVirtual: true,
    status: "confirmed",
  },
  {
    id: "b2",
    skillId: "s5",
    teacherId: "u3",
    studentId: "u1",
    date: "2023-06-18",
    timeSlot: "18:00-19:30",
    isVirtual: false,
    status: "confirmed",
  },
  {
    id: "b3",
    skillId: "s3",
    teacherId: "u2",
    studentId: "u4",
    date: "2023-06-20",
    timeSlot: "10:00-11:00",
    isVirtual: true,
    status: "pending",
  }
];

// Helper function to get teacher info for a skill
export const getTeacherForSkill = (skillId: string) => {
  const skill = skills.find(s => s.id === skillId);
  if (!skill) return null;
  
  const teacher = users.find(u => u.id === skill.teacherId);
  if (!teacher) return null;
  
  return {
    id: teacher.id,
    name: teacher.name,
    avatar: teacher.avatar,
    rating: teacher.rating,
  };
};

// Helper function to get skills with teacher info
export const getSkillsWithTeachers = () => {
  return skills.map(skill => {
    const teacher = users.find(u => u.id === skill.teacherId);
    
    return {
      ...skill,
      teacher: {
        id: teacher?.id || "",
        name: teacher?.name || "",
        avatar: teacher?.avatar || "",
        rating: teacher?.rating || 0,
      }
    };
  });
};

// Categories for skill filtering
export const categories = [
  "All Categories",
  "Programming",
  "Web Development",
  "Fitness",
  "Photography",
  "Cooking",
  "Marketing",
  "Education",
  "Design",
  "Art",
];
