import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Amazon Clone",
      description: "A responsive Amazon-inspired e-commerce UI built using React, Tailwind CSS, and React Router. It includes product listings, category pages, and a modern shopping interface. Designed to showcase front-end development skills with reusable components, responsive design, and clean layout structure. Deployed using Vercel for fast, live access.",
      image: "https://sm.pcmag.com/pcmag_me/photo/p/photoshop-/photoshop-image-of-items-you-can-get-with-amazon-prime_jb9r.jpg",
      technologies: ["React","JavaScript","HTML","CSS","RestAPI"],
      githubUrl: "https://github.com/karampudijanardhan",
      liveUrl: "https://amazon-in-react.vercel.app/",
      featured: true
    },
   
    {
      title: "Animation Web Page",
      description: "A simple and responsive web page built using HTML, CSS, and JavaScript. This project focuses on basic layout structure, styling, and interactivity, showcasing foundational front-end development skills. Deployed using Netlify for live access and fast performance.",
      image: "background.png",
      technologies: ["JavaScript","HTML","CSS"],
      githubUrl: "https://github.com/karampudijanardhan/animated-web-page",
      liveUrl: "https://silly-youtiao-4b592f.netlify.app/",
      featured: false
    },
    {
      title: "Calculator",
      description: "A functional calculator web app built using HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, multiplication, and division. The app features a clean UI, responsive design, and real-time display updates. Deployed on Netlify for easy access and sharing.",
      image: "https://cdn.britannica.com/54/166054-004-8C47FACD.jpg",
      technologies: ["JavaScript","HTML","CSS"],
      githubUrl: "https://github.com/karampudijanardhan/calculator",
      liveUrl: "https://tocreatecalculator.netlify.app/",
      featured: false
    },
    {
      title: " Anti-Clock",
      description: "A stylish and responsive landing page built using HTML, CSS, and JavaScript. This project highlights front-end layout skills with smooth design, modern fonts, and interactive elements. Ideal for showcasing UI design ability and static web page structuring.",
      image: "https://the-next-decor.com/cdn/shop/products/CPP09091c.jpg?v=1660817984",
      technologies: ["JavaScript","HTML","CSS"],
      githubUrl: "https://github.com/karampudijanardhan/clock",
      liveUrl: "https://polite-griffin-d5a938.netlify.app/",
      featured: false
    },
    {
      title: "To Do List",
      description: "A visually appealing portfolio website designed using HTML, CSS, and JavaScript. It showcases personal information, skills, and projects in a clean, responsive layout. This project demonstrates your front-end design ability, content structuring, and use of modern web styling",
      image: "https://i.ytimg.com/vi/G0jO8kUrg-I/maxresdefault.jpg",
      technologies: ["JavaScript","HTML","CSS"],
      githubUrl: "https://github.com/karampudijanardhan/To-Do-List",
      liveUrl: "https://luxury-pixie-ecad2c.netlify.app/",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating proficiency in modern web technologies 
            and problem-solving skills.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 bg-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-2 p-1 rounded-full text-sm text-[20px] hover:text-black">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/karampudijanardhan"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
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