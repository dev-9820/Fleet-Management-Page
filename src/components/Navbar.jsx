import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Solutions", id: "services" },
    { name: "About", id: "about" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (linkId) => {
    const section = document.getElementById(linkId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "top-0 lg:top-5 lg:mx-40 bg-gray-800/60 lg:rounded-3xl" 
          : " lg:mx-40"
      }`}>
        <div className={`flex justify-between items-center p-4 lg:p-5 backdrop-blur-lg transition-all duration-500 ${
          isScrolled 
            ? "lg:rounded-3xl shadow-md bg-gray-800/60" 
            : ""
        }`}>
          {/* Logo */}
          <h1 
            className="text-xl lg:text-2xl font-bold text-white cursor-pointer transition-all duration-300"
            onClick={() => navigate("/")}
          >
            TTM<span className="text-orange-500">KONNECT</span>
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-white uppercase hover:text-orange-400 transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden lg:block px-6 uppercase py-2 bg-orange-500 text-white rounded-full hover:scale-105 transition-all duration-300 shadow-md hover:shadow-orange-500/25 font-semibold text-sm"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
          >
            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-lg transition-all duration-300 lg:hidden ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
          {/* Mobile Navigation Links */}
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-white text-2xl font-medium uppercase hover:text-orange-400 transition-colors duration-300 py-4"
            >
              {link.name}
            </button>
          ))}
          
          {/* Mobile CTA Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="px-8 py-4 bg-orange-500 text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 font-semibold text-lg mt-8"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}