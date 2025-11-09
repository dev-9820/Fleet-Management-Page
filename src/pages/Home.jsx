import { useState } from "react";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServiceSection";
import AboutCompany from "../components/AboutClinic";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import CodeScroller from "../components/CodeScroller";
import DashboardPreview from "../components/DashboardPreview";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoArrowDown, IoCall } from "react-icons/io5";
import { MdOutlineArrowRight } from "react-icons/md";
import icon from '../assets/icon.png'
import { ArrowBigDown } from "lucide-react";
import { FiArrowDown } from "react-icons/fi";
import { TfiMouse } from "react-icons/tfi";

export default function Home() {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <div className="mx-4 md:mx-8 lg:mx-40 px-4 pt-2 lg:pt-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[94px] text-white text-center font-bold mb-6 lg:mb-10">
          TTM KONNECT
        </h1>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          
          {/* Left Content */}
          <div className="lg:w-1/3 h-auto lg:h-[530px] flex flex-col justify-between text-white order-2 lg:order-1">
            <div className="mb-6  lg:mb-0">
              <div className="border mx-auto lg:mx-0 border-white/20 w-fit py-2 px-4 rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer text-sm lg:text-base">
                Smart Fleet Management
              </div>

              <p className="text-base sm:text-lg lg:text-xl lg:text-[17px] my-6 lg:mb-8 leading-relaxed max-w-md">
                Real-time visibility, automated reporting, and data-driven operations 
                through connected hardware, mobile apps, and advanced analytics. 
                Transform your fleet management with TTM Konnect.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 font-semibold text-sm lg:text-base">
                  Get Demo
                </button>
                <button className="px-6 py-3 border border-white/30 text-white rounded-full hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/5 font-semibold text-sm lg:text-base">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Mobile spacing */}
            <div className="lg:hidden h-8"></div>
          </div>

          {/* Middle Content - Animated Dashboard Preview */}
          <div className="lg:w-1/3 flex flex-col justify-center items-center order-1 lg:order-2">
            <div className="mb-8 lg:mb-20 flex items-center justify-center backdrop-blur-sm rounded-2xl w-full">
              <div className="text-center w-full max-w-md lg:max-w-none">
                <DashboardPreview />
              </div>
            </div>
            
            <div className="text-white/30 text-center font-extralight  lg:-mt-12 w-full">
              <CodeScroller/>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/3 h-auto lg:h-[530px] items-end flex flex-col justify-between text-white order-3">
            {/* Contact Section */}
            <div className="flex items-center justify-end w-full mb-6 lg:mb-0">
              <div className="border border-white/20 mr-2 w-fit py-2 px-4 rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer text-sm lg:text-base">
                ELD Compliance
              </div>
              <div className="border border-white/20 w-fit p-2 text-xl rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer hover:text-blue-400">
                <IoCall />
              </div>
            </div>

            {/* About Company Card */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 w-full lg:w-64 rounded-xl p-4 cursor-pointer group mt-8 lg:mt-0">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 lg:h-16 lg:w-16 min-w-12 lg:min-w-16 rounded-lg overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-gray-700 flex items-center justify-center">
                  <img 
                    src={icon} 
                    alt="TTM4U" 
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-base lg:text-lg leading-tight group-hover:text-orange-100 transition-colors duration-300">
                    TTM4U
                  </p>
                </div>
                
                <div className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300">
                  <MdOutlineArrowRight className="bg-white rounded-full text-xl lg:text-2xl p-1 text-gray-900 group-hover:bg-orange-100 transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="services">
        <ServicesSection/>
      </section>
      
      <section id="about">
        <AboutCompany/>
      </section>

      <section id="team">
        <TeamSection/>
      </section>

      <Footer/>
    </div>
  );
}