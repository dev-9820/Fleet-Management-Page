import { IoLogoWhatsapp, IoCall, IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative mx-4 lg:mx-40 py-8 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">
              TTM<span className="text-orange-500">KONNECT</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 lg:mb-6">
              Advanced fleet management solutions for modern transportation. 
              Real-time visibility, compliance, and efficiency through cutting-edge technology.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <Icon className="text-sm lg:text-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-white font-semibold text-base lg:text-lg mb-4 lg:mb-6">Quick Links</h4>
            <ul className="space-y-2 lg:space-y-3">
              {['Home', 'Solutions', 'About Us', 'Our Team', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-xs lg:text-sm block py-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="md:col-span-1 lg:col-span-1">
            <h4 className="text-white font-semibold text-base lg:text-lg mb-4 lg:mb-6">Our Solutions</h4>
            <ul className="space-y-2 lg:space-y-3">
              {[
                'ELD Compliance',
                'Fleet Telematics',
                'Driver Safety',
                'Asset Tracking',
                'Analytics & Reporting',
                'Mobile Applications'
              ].map((solution) => (
                <li key={solution}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-xs lg:text-sm block py-1">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold text-base lg:text-lg mb-4 lg:mb-6">Contact Info</h4>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IoLocationOutline className="text-white text-sm lg:text-lg" />
                </div>
                <span className="text-gray-300 text-xs lg:text-sm">U.S. Headquarters</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IoCall className="text-white text-sm lg:text-lg" />
                </div>
                <span className="text-gray-300 text-xs lg:text-sm">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <IoMailOutline className="text-white text-sm lg:text-lg" />
                </div>
                <span className="text-gray-300 text-xs lg:text-sm">sales@ttmkonnect.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl lg:rounded-2xl p-6 lg:p-8 mb-6 lg:mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
            <div className="flex-1 text-center lg:text-left">
              <h4 className="text-white font-semibold text-base lg:text-lg mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Subscribe for fleet management insights and product updates.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 w-full lg:w-64 text-sm"
              />
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 text-sm lg:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
            <p className="text-gray-300 text-xs lg:text-sm text-center lg:text-left order-2 lg:order-1">
              © 2025 TTM Konnect. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 order-1 lg:order-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-xs lg:text-sm whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-4 lg:left-20 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-10 right-8 lg:right-32 w-6 h-6 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-pulse hidden lg:block" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
};

export default Footer;