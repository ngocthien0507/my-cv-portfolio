export interface Profile {
  hero: {
    name: string
    role: string
    company: string
    location: string
    tagline: string
  }
  experience: Array<{
    company: string
    position: string
    duration: string
    location: string
    description: string
    responsibilities: string[]
    achievements: string[]
  }>
  skills: {
    categories: {
      [category: string]: Array<{
        name: string
        level: 'expert' | 'advanced' | 'intermediate' | 'basic'
        years?: number
      }>
    }
  }
  education: Array<{
    institution: string
    degree: string
    duration: string
    location?: string
    description?: string
  }>
  recommendations: Array<{
    name: string
    position: string
    company: string
    date: string
    quote: string
  }>
  contact: {
    email: string
    location: string
    social: {
      [platform: string]: string
    }
  }
}

export const profileData: Profile = {
  hero: {
    name: "Thien Nguyen Ngoc",
    role: "Senior Software Engineer",
    company: "Infina",
    location: "Go Vap District, Ho Chi Minh City, Vietnam",
    tagline: "Brewing Product Ideas into Reality"
  },
  experience: [
    {
      company: "Infina",
      position: "Senior Software Engineer",
      duration: "Jul 2022 – Present",
      location: "Ho Chi Minh City, Vietnam",
      description: "Infina is an innovative online investment platform reshaping the investment landscape in Vietnam.",
      responsibilities: [
        "Build and maintain mobile and web products for one of Vietnam's fastest-growing investment platforms.",
        "Apply advanced and modern technologies to optimize user experience.",
        "Contribute to the platform's growth through automation, scalability, and robust product architecture."
      ],
      achievements: [
        "Contributed to platform becoming one of Vietnam's standout investment platforms",
        "Implemented scalable solutions for rapid user growth"
      ]
    },
    {
      company: "Ant-Tech",
      position: "React Native Developer",
      duration: "Aug 2020 – Jul 2022",
      location: "Ho Chi Minh City, Vietnam",
      description: "Developed and optimized cross-platform mobile applications for multiple large-scale outsourcing projects.",
      responsibilities: [
        "Developed cross-platform mobile applications for international clients",
        "Optimized app performance and user experience",
        "Integrated complex third-party services and APIs"
      ],
      achievements: [
        "Redesigned and optimized Chefclub app (31M+ Facebook followers)",
        "Led Polymate SAS app to Top 177 Social Networking on App Store",
        "Built server communication protocols using GraphQL"
      ]
    },
    {
      company: "CoderSchool",
      position: "Mobile Application Developer",
      duration: "Jul 2019 – Oct 2019",
      location: "Ho Chi Minh City, Vietnam",
      description: "Developed React Native applications in a team of five.",
      responsibilities: [
        "Collaborative React Native development",
        "Problem solving and implementation challenges"
      ],
      achievements: [
        "Successfully solved MoMo's recommendation system challenge"
      ]
    },
    {
      company: "GSoft",
      position: "Intern",
      duration: "Sep 2019 – Dec 2019",
      location: "Vietnam",
      description: "Served as a .NET MVC Intern.",
      responsibilities: [
        ".NET MVC development",
        "Learning enterprise software patterns"
      ],
      achievements: []
    },
    {
      company: "Tagbizz",
      position: "Main Developer",
      duration: "2018 – 2019",
      location: "Vietnam",
      description: "A social network for travel enthusiasts.",
      responsibilities: [
        "Main developer responsible for new features and optimizations",
        "Built interactive map using Google SDK and API integrations"
      ],
      achievements: [
        "Improved cost efficiency by optimizing request patterns and reducing Google API usage"
      ]
    }
  ],
  skills: {
    categories: {
      "Mobile Development": [
        { name: "React Native", level: "expert", years: 5 },
        { name: "Mobile Architecture", level: "advanced", years: 4 },
        { name: "Server-side Rendering", level: "advanced", years: 3 },
        { name: "High-performance Animations", level: "advanced", years: 4 }
      ],
      "Frontend": [
        { name: "JavaScript", level: "expert", years: 5 },
        { name: "UI/UX Refinement", level: "advanced", years: 4 },
        { name: "React", level: "advanced", years: 4 }
      ],
      "Backend & APIs": [
        { name: "GraphQL", level: "advanced", years: 3 },
        { name: "Automation", level: "intermediate", years: 2 },
        { name: ".NET MVC", level: "intermediate", years: 1 }
      ],
      "Tools & Integration": [
        { name: "Analytics Integrations (Amplitude)", level: "advanced", years: 3 },
        { name: "OpenAI Products", level: "intermediate", years: 2 },
        { name: "In-app Purchases", level: "advanced", years: 3 },
        { name: "Payment Integrations", level: "advanced", years: 3 }
      ]
    }
  },
  education: [
    {
      institution: "Saigon University",
      degree: "Bachelor of Engineering, Software Engineering",
      duration: "2016 – 2020",
      location: "Ho Chi Minh City, Vietnam"
    },
    {
      institution: "CoderSchool (IT W21)",
      degree: "React Native Development",
      duration: "2019",
      location: "Ho Chi Minh City, Vietnam",
      description: "Intensive React Native bootcamp focusing on modern mobile development practices"
    }
  ],
  recommendations: [
    {
      name: "Thibault Court",
      position: "CEO",
      company: "Pharaday",
      date: "June 18, 2021",
      quote: "Very talented developer, great skills and fluid communication which are super helpful to build a great product."
    },
    {
      name: "Armel Satchivi",
      position: "Co-Founder & CEO",
      company: "Polymate",
      date: "June 17, 2021",
      quote: "After years of collaboration, Thien has shown agility, professionalism, and careful listening. Choosing him gave me every chance to succeed."
    }
  ],
  contact: {
    email: "contact@thiennguyen.dev",
    location: "Go Vap District, Ho Chi Minh City, Vietnam",
    social: {
      LinkedIn: "https://linkedin.com/in/thiennguyen-ngoc",
      GitHub: "https://github.com/thiennguyen"
    }
  }
}