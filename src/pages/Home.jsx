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
      <div className="mx-40 px-4 pt-2">
        <h1 className="text-5xl text-white lg:text-[94px] text-center font-bold mb-10">
          TTM KONNECT
        </h1>
        <div className="flex flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/3 h-[530px] flex flex-col justify-between text-white mb-12 lg:mb-0">
            <div className="border border-white/20 w-fit py-2 px-4 rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
              Smart Fleet Management
            </div>

            <p className="text-xl lg:text-[17px] mb-8 leading-relaxed max-w-md">
              Real-time visibility, automated reporting, and data-driven operations 
              through connected hardware, mobile apps, and advanced analytics. 
              Transform your fleet management with TTM Konnect.
            </p>

            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-orange-500 text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 font-semibold">
                Get Demo
              </button>
              <button className="px-6 py-3 border border-white/30 text-white rounded-full hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/5 font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Middle Content - Animated Dashboard Preview */}
          <div className="lg:w-1/3 flex flex-col justify-center items-center">
            <div className="mb-20 flex items-center justify-center backdrop-blur-sm  rounded-2xl">
              <div className="text-center">
                <DashboardPreview />
              </div>
            </div>
            
            <div className="text-white/30 text-center font-extralight -mt-12">
              <CodeScroller/>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/3 h-[530px] items-end flex flex-col justify-between text-white mb-12 lg:mb-0">
            {/* Contact Section */}
            <div className="flex items-center">
              <div className="border border-white/20 mr-2 w-fit py-2 px-4 rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                ELD Compliance
              </div>
              <div className="border border-white/20 w-fit p-2 text-xl rounded-full backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer hover:text-blue-400">
                <IoCall />
              </div>
            </div>

            {/* About Company Card */}
            <div className="bg-white/20 mb-7 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 w-64 rounded-xl p-4 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 min-w-16 rounded-lg overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-gray-700 flex items-center justify-center">
                  <img 
                    src={icon} 
                    alt="placeholder" 
                    className="h-full w-full object-cover"
                  />
                </div>

                
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-lg leading-tight group-hover:text-orange-100 transition-colors duration-300">
                    TTM4U
                  </p>
                </div>
                
                <div className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300">
                  <MdOutlineArrowRight className="bg-white rounded-full text-2xl p-1 text-gray-900 group-hover:bg-orange-100 transition-colors duration-300" />
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