import React from 'react';
import { Code, Palette, Database, Globe, Users,Lightbulb, Code2Icon } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      technologies: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3"]
    },
    {
      category: "Backend", 
      icon: <Database className="w-6 h-6" />,
      technologies: ["MongoDB","MYSQL/SQL","Basic Node.js", "REST APIs"]
    },
    {
      category: "Tools & Others",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["Git/GitHub", "VS Code","Vercel", "Figma(Basic)","Chrome DevTools"]
    }
  ];

  const experiences = [
    {
      icon: <Code2Icon className="w-6 h-6" />,
      title: " Front-End Development",
      description: "Created responsive websites using HTML, CSS, Tailwind CSS, and React Built portfolio and project pages with good layout and mobile responsiveness.Applied component-based design and reusable UI logic in React"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Developed creative solutions for complex technical challenges, improving application performance by 40%."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Used APIs to fetch and display dynamic data (e.g., basic use of REST APIs).Managed basic form submissions and data interactions in React."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Computer Science and Data Science student skilled in front-end development, passionate about building responsive web interfaces and enhancing user experiences using modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <p className="text-gray-600 mb-4">
              I'm a third-year Computer Science and Data Science student with a strong interest in web development,
               especially in crafting responsive and user-friendly interfaces. My journey began with a curiosity about how websites are built, which quickly turned into hands-on experience using HTML, CSS, Tailwind CSS, and React.
            </p>
            <p className="text-gray-600 mb-6">
             Over time, I've developed a solid understanding of front-end technologies and a working knowledge of integrating APIs and backend logic.
              I enjoy translating ideas into clean, maintainable code and building projects that solve real-world problems.
            </p>
            
            
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Experiences</h3>
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {experience.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{experience.title}</h4>
                    <p className="text-gray-600">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{skill.category}</h4>
                </div>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
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