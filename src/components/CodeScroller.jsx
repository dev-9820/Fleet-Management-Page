const CodeScroller = () => {

  return (
    <div className="relative flex flex-col items-center justify-center space-y-4 -mt-8 mb-16">

      {/* Animated Scroll Indicator */}
      <div className="flex flex-col items-center mt-2 space-y-2">
        <span className="text-white/40 text-xs font-light tracking-widest uppercase">

        </span>
        
        {/* Animated Dots */}
        <div className="flex flex-col items-center space-y-1">
          <div className="w-1 h-1 bg-white/30 rounded-full animate-bounce" 
               style={{ animationDelay: '0.1s' }}></div>
          <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce" 
               style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-1 bg-white/50 rounded-full animate-bounce" 
               style={{ animationDelay: '0.3s' }}></div>
        </div>

        {/* Pulse Ring */}
        <div className="relative">
          <div className="w-6 h-6 border-2 border-white/30 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-white/50 rounded-full transform -translate-y-0.5 animate-scrollDown">
              <style jsx>{`
                @keyframes scrollDown {
                  0%, 100% { transform: translateY(-2px); }
                  50% { transform: translateY(2px); }
                }
                .animate-scrollDown {
                  animation: scrollDown 2s ease-in-out infinite;
                }
              `}</style>
            </div>
          </div>
          <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default CodeScroller;