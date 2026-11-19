import profile from './profile.jpg';

export const dummyResumeData = [
  {
    id: "resume-1",
    title: "Aarav's Resume",
    template: "modern",
    personal_info: {
      full_name: "Aarav Sharma",
      profession: "Senior Full Stack Developer",
      email: "aarav.sharma@example.com",
      phone: "+91 98765 43210",
      location: "Bengaluru, India",
      website: "https://aaravsharma.dev",
      linkedin: "://linkedin.com",
      github: "://github.com",
      proffessional_summery:
        "Results-driven Full Stack Developer with 6+ years of experience building scalable web applications using React, Node.js, and cloud infrastructure. Proven track record of improving system performance by 40% and leading cross-functional agile teams."
    },
    experience: [
      {
        id: "exp-1",
        position: "Senior Software Engineer",
        company: "TechNova Solutions",
        location: "Bengaluru, India",
        startDate: "2023-03",
        endDate: "Present",
        current: true,
        highlights: [
          "Architected and launched a microservices-based e-commerce platform serving over 500k monthly active users.",
          "Reduced API response times by 45% through Redis caching and database query optimization.",
          "Mentored a team of 5 junior developers and instituted automated CI/CD pipelines using GitHub Actions."
        ]
      },
      {
        id: "exp-2",
        position: "Full Stack Developer",
        company: "CloudScale Labs",
        location: "Pune, India",
        startDate: "2020-06",
        endDate: "2023-02",
        current: false,
        highlights: [
          "Developed responsive front-end interfaces using React, TypeScript, and Tailwind CSS.",
          "Integrated third-party payment gateways (Razorpay, Stripe) processing $2M+ in annual transactions.",
          "Collaborated with UI/UX designers to improve user onboarding conversion rates by 18%."
        ]
      }
    ],
    education: [
      {
        id: "edu-1",
        degree: "B.Tech in Computer Science & Engineering",
        institution: "National Institute of Technology (NIT), Karnataka",
        location: "Surathkal, India",
        startDate: "2016-08",
        endDate: "2020-05",
        gpa: "8.9 / 10.0"
      }
    ],
    skills: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
      },
      {
        category: "DevOps & Tools",
        items: ["Docker", "AWS (EC2, S3)", "Git", "CI/CD", "Linux"]
      }
    ],
    projects: [
      {
        id: "proj-1",
        name: "DevFlow Task Manager",
        link: "https://://github.com/devflow",
        technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
        description:
          "A real-time collaborative kanban board built for remote engineering teams with live cursor tracking and Slack notifications."
      },
      {
        id: "proj-2",
        name: "AI Resume Parser",
        link: "https://://github.com/resume-parser",
        technologies: ["Python", "FastAPI", "React", "OpenAI API"],
        description:
          "Automated tool that extracts structured JSON data from PDF resumes with 94% accuracy."
      }
    ],
    certifications: [
      {
        id: "cert-1",
        name: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services",
        date: "2024-01"
      }
    ],
    languages: [
      { language: "English", proficiency: "Fluent" },
      { language: "Hindi", proficiency: "Native" }
    ]
  },

  {
    id: "resume-2",
    title: "Meera's Resume",
    template: "minimal",
    personal_info: {
      full_name: "Meera Nair",
      profession: "Product Designer (UI/UX)",
      email: "meera.nair@example.com",
      phone: "+91 91234 56789",
      location: "Kochi, India",
      website: "https://meeranair.design",
      linkedin: "://linkedin.com",
      github: "",
      proffessional_summery:
        "Empathetic Product Designer with 4 years of experience crafting user-centered mobile and web applications. Skilled in design systems, user research, and interactive prototyping to bridge user needs with business goals."
    },
    experience: [
      {
        id: "exp-201",
        position: "Product Designer",
        company: "FinEdge Digital",
        location: "Remote",
        startDate: "2022-07",
        endDate: "Present",
        current: true,
        highlights: [
          "Led the end-to-end redesign of a personal finance mobile app, boosting daily active engagement by 32%.",
          "Created and maintained a multi-brand Figma design system with 120+ reusable components.",
          "Conducted 30+ user interviews and usability testing sessions to validate new investment features."
        ]
      },
      {
        id: "exp-202",
        position: "Junior UI/UX Designer",
        company: "PixelCraft Studio",
        location: "Kochi, India",
        startDate: "2021-01",
        endDate: "2022-06",
        current: false,
        highlights: [
          "Designed wireframes, user flows, and high-fidelity mockups for 12+ SaaS and e-commerce clients.",
          "Worked closely with front-end developers to ensure pixel-perfect implementation and WCAG accessibility compliance."
        ]
      }
    ],
    education: [
      {
        id: "edu-201",
        degree: "B.Des in Interaction Design",
        institution: "National Institute of Design (NID)",
        location: "Ahmedabad, India",
        startDate: "2017-07",
        endDate: "2020-12",
        gpa: "8.5 / 10.0"
      }
    ],
    skills: [
      {
        category: "Design",
        items: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "User Research"]
      },
      {
        category: "Tools",
        items: ["Figma", "Adobe XD", "Framer", "Miro", "Notion", "Webflow"]
      }
    ],
    projects: [
      {
        id: "proj-201",
        name: "EcoTrack — Carbon Footprint App",
        link: "https://meeranair.design",
        technologies: ["Figma", "Framer", "User Testing"],
        description:
          "Case study and interactive prototype for a habit-tracking app that helps commuters reduce their daily carbon emissions."
      }
    ],
    certifications: [
      {
        id: "cert-201",
        name: "Google UX Design Professional Certificate",
        issuer: "Coursera",
        date: "2021-08"
      }
    ],
    languages: [
      { language: "English", proficiency: "Fluent" },
      { language: "Malayalam", proficiency: "Native" }
    ]
  }
];

// Default single object export for quick form initialization
export const defaultResumeState = dummyResumeData[0];
