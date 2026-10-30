
import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "VOV Foods",
      subtitle: "Freelance Business Website",
      description:
        "Developed a business website for VOV Foods to showcase food products and provide customers with a user-friendly browsing experience. Focused on responsive design, product presentation, and intuitive navigation to support the business's online presence.",
      image: "/vovfoods_playstore_icon_512.png",
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
        "Web Development",
      ],
      githubUrl: "https://github.com/karampudijanardhan/Vov-foods",
      liveUrl: "https://vovfoods.in",
      featured: true,
    },
    {
      title: "HelloHarvest Pure Powders",
      subtitle: "Freelance Business Website",
      description:
        "Developed a responsive business website for HelloHarvest Pure Powders to present products through a clean layout and user-friendly navigation. Focused on responsive UI, product presentation, and a consistent browsing experience across desktop and mobile devices.",
      image: "/white logo.png",
      technologies: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
        "Business Website",
      ],
      githubUrl: "https://github.com/karampudijanardhan/helloharvest.git",
      liveUrl: "https://helloharvestpurepowder.com",
      featured: true,
    },
    {
      title: "Amazon Clone",
      subtitle: "Frontend Development Project",
      description:
        "Built a responsive Amazon-inspired e-commerce interface using React, JavaScript, and Tailwind CSS. The project focuses on product presentation, reusable components, and a modern shopping interface.",
      image:
        "https://sm.pcmag.com/pcmag_me/photo/p/photoshop-/photoshop-image-of-items-you-can-get-with-amazon-prime_jb9r.jpg",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST APIs",
      ],
      githubUrl: "https://github.com/karampudijanardhan",
      liveUrl: "https://amazon-in-react.vercel.app/",
      featured: false,
    },
    {
      title: "Animation Web Page",
      subtitle: "Frontend Development Project",
      description:
        "Created a responsive web page using HTML, CSS, and JavaScript, focusing on page layout, visual styling, and interactive animations.",
      image: "/background.png",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl:
        "https://github.com/karampudijanardhan/animated-web-page",
      liveUrl: "https://silly-youtiao-4b592f.netlify.app/",
      featured: false,
    },
    {
      title: "Calculator",
      subtitle: "JavaScript Project",
      description:
        "Built a functional calculator that performs basic arithmetic operations with a clean interface, responsive layout, and interactive display.",
      image:
        "https://cdn.britannica.com/54/166054-004-8C47FACD.jpg",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/karampudijanardhan/calculator",
      liveUrl: "https://tocreatecalculator.netlify.app/",
      featured: false,
    },
    {
      title: "Anti-Clock",
      subtitle: "Frontend Development Project",
      description:
        "Created a styled web page using HTML, CSS, and JavaScript, focusing on visual presentation, responsive layout, and interactive elements.",
      image:
        "https://the-next-decor.com/cdn/shop/products/CPP09091c.jpg?v=1660817984",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/karampudijanardhan/clock",
      liveUrl: "https://polite-griffin-d5a938.netlify.app/",
      featured: false,
    },
    {
      title: "To Do List",
      subtitle: "JavaScript Project",
      description:
        "Built a to-do list application focused on task organization, interactive functionality, and a responsive user interface using frontend technologies.",
      image:
        "https://i.ytimg.com/vi/G0jO8kUrg-I/maxresdefault.jpg",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/karampudijanardhan/To-Do-List",
      liveUrl: "https://luxury-pixie-ecad2c.netlify.app/",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  const ProjectCard = ({ project, featured = false }) => (
    <article
      className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden
      hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
        featured ? "h-full" : ""
      }`}
    >
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
            featured ? "h-64" : "h-48"
          }`}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        {featured && (
          <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md">
            Freelance Project
          </span>
        )}
      </div>

      <div className={featured ? "p-6 md:p-7" : "p-5"}>
        <p className="text-sm font-medium text-blue-600 mb-2">
          {project.subtitle}
        </p>

        <h3
          className={`font-bold text-gray-900 mb-3 ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-gray-600 leading-relaxed mb-5 ${
            featured ? "" : "text-sm"
          }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1.5 rounded-lg text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-gray-100">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-950 font-medium text-sm transition-colors"
          >
            <Github size={18} />
            Source Code
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live website`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            <ExternalLink size={18} />
            Live Website
          </a>
        </div>
      </div>
    </article>
  );

  return (
    <section
      id="projects"
      className="py-20 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
  

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Projects & Freelance Work
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore my freelance business websites and development
            projects, showcasing my experience in building responsive,
            user-friendly web applications with modern technologies.
          </p>
        </div>

        {/* Featured Freelance Projects */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Featured Freelance Projects
              </h3>

              <p className="text-gray-600 mt-2">
                Business websites developed through freelance work.
              </p>
            </div>

            <span className="text-sm font-medium text-blue-600">
              {featuredProjects.length} Featured Projects
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                featured
              />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Other Projects
            </h3>

            <p className="text-gray-600 mt-2">
              More projects demonstrating my frontend development
              and JavaScript skills.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/karampudijanardhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
          >
            View More Projects on GitHub
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
