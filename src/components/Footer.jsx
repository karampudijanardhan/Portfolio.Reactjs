
import React from "react";
import {
  Heart,
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Technical Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-10">

          {/* Developer Information */}
          <div>
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("home");
              }}
              className="inline-block text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-5"
            >
              Karampudi Janardhan
            </a>

            <p className="text-gray-400 leading-7 mb-6 max-w-sm">
              Full Stack Web Developer passionate about building
              responsive, user-friendly websites and web applications
              using modern web technologies.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/karampudijanardhan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/karampudijanardhan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:janardhankarampudi@gmail.com"
                aria-label="Send Email"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-blue-400 hover:translate-x-1 transition-all duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Get In Touch
            </h3>

            <p className="text-gray-400 leading-7 mb-5">
              Have a project in mind or looking for a developer?
              Feel free to get in touch.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:janardhankarampudi@gmail.com"
                className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail
                  size={19}
                  className="mt-1 flex-shrink-0"
                />
                <span className="break-all">
                  janardhankarampudi@gmail.com
                </span>
              </a>

              <a
                href="tel:+919121971848"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Phone size={19} className="flex-shrink-0" />
                <span>+91 9121971848</span>
              </a>
            </div>

            <a
              href="mailto:janardhankarampudi@gmail.com"
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Karampudi Janardhan. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm flex items-center gap-2">
            Built with
            <Heart
              size={16}
              className="text-red-500 fill-red-500"
            />
            <span>using React & Tailwind CSS</span>
          </p>

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            aria-label="Back to top"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            Back to top
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;