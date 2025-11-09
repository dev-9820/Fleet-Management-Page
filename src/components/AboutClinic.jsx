import { MdOutlineArrowRight } from "react-icons/md";

const AboutCompany = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="mx-40 mt-40">
        <h2 className="text-5xl text-gray-900 font-extrabold mb-8">ABOUT TTM KONNECT</h2>
        <div className="grid bg-gray-900 rounded-2xl grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <p className="text-lg p-10 leading-relaxed mb-8">
              TTM Konnect is a U.S.-based transport technology company revolutionizing 
              fleet management through innovative ELD, telematics, and compliance solutions. 
              Our platform provides real-time visibility, automated reporting, and data-driven 
              operations that help fleets operate safely and efficiently.
            </p>

            <div className="grid grid-cols-2 gap-4 p-10 pt-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-gray-300">Fleets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">10K+</div>
                <div className="text-sm text-gray-300">Vehicles Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>

            {/* Get Demo Card */}
            <div className="bg-white/20 m-10 -mt-10 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 w-64 rounded-xl p-3 mt-8 cursor-pointer group">
              <div className="flex items-center">
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm leading-tight group-hover:text-orange-100 transition-colors duration-300">
                    Get Platform Demo
                  </p>
                </div>
                <div className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300">
                  <MdOutlineArrowRight className="bg-white rounded-full text-2xl p-1 text-gray-900 group-hover:bg-orange-100 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-end mr-8">
            <div className="w-full h-96 rounded-2xl backdrop-blur-sm">
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