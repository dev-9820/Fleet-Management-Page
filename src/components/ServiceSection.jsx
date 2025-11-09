import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdOutlineArrowRight } from "react-icons/md";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: 1,
      title: "ELD Compliance",
      number: "01",
      description: "Full compliance with FMCSA ELD mandates. Our electronic logging devices automatically record driving time and hours of service for simplified compliance management.",
      features: [
        "FMCSA certified electronic logging",
        "Automatic hours of service tracking",
        "Real-time compliance alerts",
        "Simplified DOT inspections"
      ],
      note: "Ensure full regulatory compliance with our certified ELD solutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      badge:"Predictive maintenance"
    },
    {
      id: 2,
      title: "Fleet Telematics",
      number: "02",
      description: "Advanced GPS tracking and vehicle monitoring. Get real-time insights into vehicle location, speed, fuel consumption, and maintenance needs.",
      features: [
        "Real-time GPS tracking",
        "Fuel monitoring and optimization",
        "Maintenance scheduling",
        "Geofencing and route optimization"
      ],
      image: "https://tiimg.tistatic.com/fp/1/008/556/easy-to-use-fast-working-gps-tracking-system-660.jpg",
      badge:"Sub-second updates"
    },
    {
      id: 3,
      title: "Driver Safety",
      number: "03",
      description: "Comprehensive driver safety monitoring with AI-powered analytics. Reduce accidents and improve driver behavior with real-time coaching.",
      features: [
        "AI-powered dashcam integration",
        "Driver behavior scoring",
        "Collision avoidance alerts",
        "Safety performance reporting"
      ],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop",
      badge:"DOT compliance"
      
    },
    {
      id: 4,
      title: "Asset Tracking",
      number: "04",
      description: "Complete visibility into your assets with advanced IoT sensors. Monitor trailers, containers, and equipment in real-time.",
      features: [
        "Real-time asset location",
        "Temperature monitoring",
        "Door open/close sensors",
        "Theft prevention alerts"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      badge: "AI-Featured"
    },
    {
      id: 5,
      title: "Analytics & Reporting",
      number: "05",
      description: "Transform raw data into actionable insights with our advanced analytics platform. Make data-driven decisions to optimize operations.",
      features: [
        "Customizable dashboards",
        "Automated compliance reports",
        "Performance analytics",
        "Cost optimization insights"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      badge:"Predictive insights"
    },
    {
      id: 6,
      title: "Mobile Applications",
      number: "06",
      description: "Comprehensive mobile apps for drivers and fleet managers. Stay connected and manage operations from anywhere.",
      features: [
        "Driver ELD mobile app",
        "Fleet manager dashboard",
        "Real-time alerts and notifications",
        "Document management"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      badge:"Driver Workflows"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="mx-40">
        {/* Header Section */}
        <div className="flex flex-row mt-20 mb-6">
          <h2 className="w-1/2 text-5xl font-extrabold text-gray-900 mb-6">FLEET SOLUTIONS</h2>
          
          <div className="w-1/2">
            <p className="text-md text-gray-700 leading-relaxed">
              Comprehensive fleet management solutions designed to optimize your operations, 
              ensure compliance, and drive efficiency through cutting-edge technology and 
              real-time data analytics.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="">
          {/* Left Column - Accordion */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-500 ${
                  activeIndex === index 
                    ? 'border-orange-400 shadow-2xl shadow-orange-100 bg-gradient-to-br from-gray-800 to-gray-900' 
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex grid-col-2 items-center gap-4">
                    <div>
                      <span className={`text-2xl font-bold ${
                        activeIndex === index ? 'text-white' : 'text-gray-900'
                      }`}>
                        {service.number}
                      </span>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${
                        activeIndex === index ? 'text-white' : 'text-gray-900'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    {service.badge ? 
                    (<>
                      <div className="flex text-md font-light -translate-y-2">
                      <p>{service.badge}</p>
                      </div>
                    </>) 
                    : 
                    (<>
                    </>)}
                  </div>
                  {activeIndex === index ? (
                    <FiChevronUp className="text-orange-500 text-xl" />
                  ) : (
                    <FiChevronDown className="text-gray-400 text-xl" />
                  )}
                </button>

                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    activeIndex === index ? 'max-h-[1000px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
                  }`}
                >
                  <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Text */}
                    <div>
                      <p className="text-white mb-4 leading-relaxed">{service.description}</p>

                      {service.features && (
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="items-center gap-2 text-white">
                              <span className="text-orange-400 mr-2 mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}

                      {service.note && (
                        <p className="text-sm text-gray-300 italic">{service.note}</p>
                      )}

                      {/* Get Demo Card */}
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 w-64 rounded-xl p-3 mt-8 cursor-pointer group">
                        <div className="flex items-center">
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium text-sm leading-tight group-hover:text-orange-100 transition-colors duration-300">
                              Request Demo
                            </p>
                          </div>
                          <div className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300">
                            <MdOutlineArrowRight className="bg-white rounded-full text-2xl p-1 text-gray-900 group-hover:bg-orange-100 transition-colors duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="flex justify-center">
                      <div className="rounded-2xl overflow-hidden w-full max-w-md aspect-video bg-gray-100">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;