import { MdOutlineArrowRight } from "react-icons/md";

const AboutCompany = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 lg:py-20">
      <div className="mx-4 lg:mx-8 xl:mx-40 mt-8 lg:mt-20 xl:mt-40">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 font-extrabold mb-6 lg:mb-8">
          ABOUT TTM KONNECT
        </h2>
        
        {/* Main Content Card */}
        <div className="bg-gray-900 rounded-xl lg:rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center overflow-hidden">
          
          {/* Left Column - Text Content */}
          <div className="text-white p-6 lg:p-10 order-2 lg:order-1">
            <p className="text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
              TTM Konnect is a U.S.-based transport technology company revolutionizing 
              fleet management through innovative ELD, telematics, and compliance solutions. 
              Our platform provides real-time visibility, automated reporting, and data-driven 
              operations that help fleets operate safely and efficiently.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-orange-500">500+</div>
                <div className="text-xs lg:text-sm text-gray-300">Fleets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-orange-500">10K+</div>
                <div className="text-xs lg:text-sm text-gray-300">Vehicles Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-orange-500">99.9%</div>
                <div className="text-xs lg:text-sm text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-xs lg:text-sm text-gray-300">Support</div>
              </div>
            </div>

            {/* Get Demo Card */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl lg:hover:shadow-2xl hover:shadow-orange-500/20 w-full lg:w-64 rounded-xl p-3 cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm leading-tight group-hover:text-orange-100 transition-colors duration-300">
                    Get Platform Demo
                  </p>
                </div>
                <div className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300">
                  <MdOutlineArrowRight className="bg-white rounded-full text-xl lg:text-2xl p-1 text-gray-900 group-hover:bg-orange-100 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Video */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 p-4 lg:p-0 lg:pr-8">
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-xl lg:rounded-2xl overflow-hidden">
              {/* Fallback image in case video doesn't load */}
              
              
              
              <video 
                src="https://www.pexels.com/download/video/8782924/" 
                playsInline
                muted 
                autoPlay
                loop
                className="w-full h-full object-cover rounded-2xl" 
              />
              
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AboutCompany;