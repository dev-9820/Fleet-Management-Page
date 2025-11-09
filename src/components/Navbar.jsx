import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "top-5 mx-40 bg-gray-800/60 rounded-3xl" 
        : "mx-40"
    }`}>
      <div className={`flex justify-between items-center p-5 backdrop-blur-lg transition-all duration-500 ${
        isScrolled 
          ? "rounded-3xl shadow-md bg-gray-800/60" 
          : ""
      }`}>
        <h1 
          className="text-2xl font-bold text-white cursor-pointer transition-all duration-300"
          onClick={() => navigate("/")}
        >
          TTM<span className="text-orange-500">KONNECT</span>
        </h1>
        
        <div className="flex items-center space-x-6">
          {[
            { name: "Home", id: "home" },
            { name: "Solutions", id: "services" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => {
                const section = document.getElementById(link.id);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-white uppercase hover:text-orange-400 transition-colors duration-300 text-sm font-medium"
            >
              {link.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="px-6 uppercase py-2 bg-orange-500 text-white rounded-full hover:scale-105 transition-all duration-300 shadow-md hover:shadow-orange-500/25 font-semibold"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}