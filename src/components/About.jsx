import React from 'react';

import {
  Code,
  Server,
  Database,
  Code2,
  Code2Icon,
  ShieldCheck,
  Wrench,
  Globe,
  Layers,
  Lightbulb
} from "lucide-react";

const About = () => {

const skills = [
  {
    category: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "JSX",
      "Tailwind CSS",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "React Hooks",
      "Component-Based Architecture"
    ]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "CRUD Operations",
      "Middleware",
      "Routing",
      "Request & Response Handling",
      "Environment Variables",
      "API Integration",
      "Error Handling"
    ]
  },
  {
    category: "Database Management",
    icon: <Database className="w-6 h-6" />,
    technologies: [
      "MongoDB",
      "Mongoose",
      "Database Design",
      "CRUD Queries",
      "Schema Design",
      "Data Validation",
      "Database Integration"
    ]
  },
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    technologies: [
      "JavaScript",
      "Python",
      "Java (Basic, if applicable)",
      "SQL (Basic, if applicable)"
    ]
  },
  {
    category: "Authentication & Security",
    icon: <ShieldCheck className="w-6 h-6" />,
    technologies: [
      "JWT Authentication",
      "User Login & Registration",
      "Password Hashing",
      "Role-Based Access",
      "Environment Variables",
      "CORS"
    ]
  },
  {
    category: "Development Tools",
    icon: <Wrench className="w-6 h-6" />,
    technologies: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Chrome DevTools",
      "npm",
      "Vite",
      "Figma (Basic, if applicable)"
    ]
  },
  {
    category: "Deployment & Hosting",
    icon: <Globe className="w-6 h-6" />,
    technologies: [
      "Vercel",
      "Render",
      "Netlify",
      "Environment Configuration",
      "Production Builds",
      "Website Deployment",
      "Domain Configuration"
    ]
  },
  {
    category: "Software Development",
    icon: <Layers className="w-6 h-6" />,
    technologies: [
      "Reusable Components",
      "Responsive UI Development",
      "Debugging",
      "Problem Solving",
      "Code Organization",
      "Version Control",
      "Performance Optimization",
      "Mobile-First Design"
    ]
  }
];
const experiences = [
  {
    icon: <Code2Icon className="w-6 h-6" />,
    title: "Frontend Development",
    description:
      "Built responsive, user-friendly web interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS. Developed reusable components and optimized layouts for desktop, tablet, and mobile devices."
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Full Stack Development",
    description:
      "Worked on business website projects involving frontend development, backend functionality, database integration, and deployment. Used Node.js, Express.js, MongoDB, and REST APIs according to project requirements."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Problem Solving & UI/UX",
    description:
      "Focused on creating intuitive user experiences, maintaining clean code, and building practical web solutions. Applied responsive design principles and integrated APIs to support application functionality."
  }
];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Passionate Full Stack Web Developer with hands-on project
    experience in building responsive, user-friendly web applications
    using modern technologies. Focused on clean code, performance,
    and creating meaningful digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <p className="text-gray-600 mb-4">
               My journey into web development began with a curiosity about
      how websites work and how technology can solve real-world
      problems. That curiosity grew into a passion for building
      responsive and engaging digital experiences using HTML, CSS,
      JavaScript, React.js, and Tailwind CSS.
            </p>
            <p className="text-gray-600 mb-6">
I completed my B.Tech in Computer Science and Data Science
      at Sri Venkateswara College of Engineering & Technology
      in April 2026. Through hands-on freelance and independent
      projects, I have worked on business websites such as VOV Foods
      and HelloHarvest Pure Powders, developing practical skills
      in frontend development, responsive UI design, and website
      deployment.

            </p>
            
            <p className="text-gray-600 mb-6">
      My technical interests include React.js, JavaScript, Node.js,
      Express.js, MongoDB, and REST API integration. I enjoy turning
      ideas into functional web applications, writing maintainable
      code, and continuously improving my problem-solving skills.
      I am eager to contribute to real-world projects, collaborate
      with development teams, and grow as a Full Stack Developer.
    </p>

          </div>
<div>
  <h3 className="text-2xl font-bold text-gray-900 mb-6">
    Key Experiences
  </h3>

  <div className="space-y-6">
    {experiences.map((experience, index) => (
      <div
        key={index}
        className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
      >
        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          {experience.icon}
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            {experience.title}
          </h4>

          <p className="text-gray-600 leading-relaxed">
            {experience.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
<div className="py-12">
  <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">
    Technical Skills
  </h3>

  <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
    Technologies, tools, and development skills I use to build responsive,
    modern, and user-friendly web applications.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {skills.map((skill, index) => (
      <div
        key={skill.category}
        className="group bg-white border border-gray-200 rounded-2xl p-6
                   hover:border-blue-300 hover:shadow-xl
                   hover:-translate-y-1 transition-all duration-300"
      >
        {/* Category heading */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl
                       flex items-center justify-center text-blue-600
                       group-hover:bg-blue-600 group-hover:text-white
                       transition-colors duration-300"
          >
            {skill.icon}
          </div>

          <h4 className="text-lg font-bold text-gray-900">
            {skill.category}
          </h4>
        </div>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center bg-gray-100
                         text-gray-700 px-3 py-1.5 rounded-lg
                         text-sm font-medium
                         hover:bg-blue-50 hover:text-blue-700
                         transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default About;