const ConversionSection = () => {
  return (
    <div id="conversion" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 lg:py-20 flex items-center justify-center">
      <div className="mx-4 lg:mx-8 xl:mx-40 w-full">
        {/* Main Conversion Card */}
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-xl lg:rounded-3xl border border-gray-700/50 shadow-xl lg:shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="p-6 lg:p-8 xl:p-12 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                  Ready to Transform Your <span className="text-orange-500">Fleet Operations</span>?
                </h2>
                
                <p className="text-base lg:text-lg xl:text-xl text-gray-300 mb-6 lg:mb-8 xl:mb-12 leading-relaxed">
                  Join hundreds of organizations already using TTM Konnect to streamline their 
                  transportation management and boost efficiency.
                </p>

                {/* Features Grid */}
                <div className="space-y-6 lg:space-y-8 mb-6 lg:mb-8 xl:mb-12">
                  <div className="flex items-start space-x-3 lg:space-x-4 group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-500/20 rounded-lg lg:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <div className="w-4 h-4 lg:w-6 lg:h-6 bg-orange-500 rounded-md lg:rounded-lg"></div>
                    </div>
                    <div>
                      <h3 className="text-white text-base lg:text-lg font-semibold mb-1 lg:mb-2">Fleet Management</h3>
                      <p className="text-gray-400 text-sm lg:text-base">Complete visibility and control over your entire fleet operations</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 lg:space-x-4 group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-500/20 rounded-lg lg:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <div className="w-4 h-4 lg:w-6 lg:h-6 bg-blue-500 rounded-md lg:rounded-lg"></div>
                    </div>
                    <div>
                      <h3 className="text-white text-base lg:text-lg font-semibold mb-1 lg:mb-2">Route Optimization</h3>
                      <p className="text-gray-400 text-sm lg:text-base">AI-powered routing to reduce costs and improve delivery times</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 lg:space-x-4 group">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-500/20 rounded-lg lg:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <div className="w-4 h-4 lg:w-6 lg:h-6 bg-green-500 rounded-md lg:rounded-lg"></div>
                    </div>
                    <div>
                      <h3 className="text-white text-base lg:text-lg font-semibold mb-1 lg:mb-2">Team Collaboration</h3>
                      <p className="text-gray-400 text-sm lg:text-base">Seamless coordination between drivers, dispatchers, and management</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="space-y-4 lg:space-y-6">
                <button className="w-full bg-orange-500 text-white py-3 lg:py-4 px-6 lg:px-8 rounded-lg lg:rounded-xl font-semibold text-base lg:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
                  Get Started Today →
                </button>
                
                <div className="text-center">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6 text-gray-400 text-xs lg:text-sm">
                    <span className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Free consultation</span>
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>No setup fees</span>
                    <span className="hidden sm:inline">•</span>
                    <span>24/7 support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Section */}
            <div className="bg-gradient-to-br from-orange-500/10 to-blue-500/10 border-b lg:border-b-0 lg:border-l border-gray-700/50 relative overflow-hidden order-1 lg:order-2">
              
              {/* Animated Background Elements */}
              <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px lg:50px 50px'
                }}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-12 h-12 lg:w-20 lg:h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-10 h-10 lg:w-16 lg:h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 lg:w-24 lg:h-24 bg-green-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
              </div>

              {/* Dashboard Preview */}
              <div className="relative z-10 h-full flex items-center justify-center p-4 lg:p-6 xl:p-8">
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-gray-700/50 p-4 lg:p-6 w-full max-w-sm lg:max-w-md">
                  
                  {/* Mini Dashboard */}
                  <div className="space-y-3 lg:space-y-4">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-2 lg:gap-3">
                      <div className="bg-gray-900/50 rounded-lg p-2 lg:p-3 text-center">
                        <div className="text-white font-bold text-base lg:text-lg">98%</div>
                        <div className="text-gray-400 text-xs">Efficiency</div>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-2 lg:p-3 text-center">
                        <div className="text-white font-bold text-base lg:text-lg">12.3%</div>
                        <div className="text-gray-400 text-xs">Fuel Saved</div>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-2 lg:p-3 text-center">
                        <div className="text-white font-bold text-base lg:text-lg">24/7</div>
                        <div className="text-gray-400 text-xs">Support</div>
                      </div>
                    </div>

                    {/* Live Activity */}
                    <div className="bg-gray-900/50 rounded-lg p-3 lg:p-4">
                      <div className="flex items-center justify-between mb-2 lg:mb-3">
                        <span className="text-white text-sm font-semibold">Live Activity</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 text-xs">Active</span>
                        </div>
                      </div>
                      
                      {/* Activity Bars */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-xs">Route Optimization</span>
                          <div className="w-12 lg:w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 rounded-full animate-pulse" style={{width: '85%'}}></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-xs">Fleet Tracking</span>
                          <div className="w-12 lg:w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{width: '92%'}}></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-xs">Driver Safety</span>
                          <div className="w-12 lg:w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full animate-pulse" style={{width: '78%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Mini */}
                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 lg:py-3 rounded-lg font-semibold text-xs lg:text-sm hover:scale-105 transition-transform duration-300">
                      View Live Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center mt-8 lg:mt-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-gray-700/30 px-4 lg:px-6 xl:px-8 py-3 lg:py-4 w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 lg:gap-4 xl:gap-8 text-gray-400 text-xs lg:text-sm text-center">
              <span>🚀 Trusted by 500+ Fleets</span>
              <span className="hidden sm:inline">•</span>
              <span>⭐ 4.9/5 Rating</span>
              <span className="hidden sm:inline">•</span>
              <span>🛡️ Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionSection;