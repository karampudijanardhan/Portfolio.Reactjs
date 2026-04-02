import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Janardhan
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 mb-6">
              Front-End Developer & UI/UX Designer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Passionate Front-End Developer skilled in HTML, CSS, JavaScript, Tailwind CSS, and React.js. Experienced in building responsive UIs and integrating RESTful APIs. Focused on creating clean, user-friendly designs with strong performance. Eager to contribute to impactful projects and grow within a dynamic, team-driven development environment.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 font-medium"
              >
                <Mail size={20} />
                Get In Touch
              </button>
              <a
  href="/janardhan_karampudi_Resume.pdf"
  download
  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center gap-2 font-medium"
>
  <Download size={20} />
  Download Resume
</a>

            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/karampudijanardhan" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/karampudijanardhan/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="janardhankarampudi@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/jana.jpg"
                alt="Professional headshot"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl p-5"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-200 to-teal-200 rounded-2xl -z-10 opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl -z-10 opacity-50"></div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;