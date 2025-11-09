import { Network } from "lucide-react";
import { useState, useEffect } from "react";
import { 
  FiTruck, 
  FiMapPin, 
  FiNavigation,
  FiClock,
  FiDroplet,
  FiZap,
  FiActivity,
  FiWifi
} from "react-icons/fi";
import { GiNetworkBars } from "react-icons/gi";

const FleetDashboard = () => {
  const [metrics, setMetrics] = useState({
    vehicles: 0,
    onTime: 0,
    fuelSaved: 0,
    efficiency: 0
  });

  const [truckPositions, setTruckPositions] = useState([
    { 
      id: 1,
      startX: 22, startY: 45,
      endX: 80, endY: 45,
      x: 22, y: 45,
      progress: 0,
      direction: "forward"
    }
  ]);

  // Animate metrics on mount
  useEffect(() => {
    const animateMetrics = () => {
      setMetrics(prev => ({
        vehicles: prev.vehicles >= 247 ? 247 : prev.vehicles + 7,
        onTime: prev.onTime >= 98.2 ? 98.2 : prev.onTime + 2.8,
        fuelSaved: prev.fuelSaved >= 40 ? 40 : prev.fuelSaved + 1,
        efficiency: prev.efficiency >= 94 ? 94 : prev.efficiency + 3
      }));
    };

    const interval = setInterval(animateMetrics, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTruckPositions(prev =>
        prev.map(truck => {
          let progress = truck.progress + (truck.direction === "forward" ? 0.005 : -0.005);

          // Flip direction at ends
          if (progress >= 1) progress = 1, truck.direction = "backward";
          if (progress <= 0) progress = 0, truck.direction = "forward";

          // Interpolate position
          const x = truck.startX + (truck.endX - truck.startX) * progress;
          const y = truck.startY + (truck.endY - truck.startY) * progress;

          return {
            ...truck,
            progress,
            direction: truck.direction,
            x,
            y: y + Math.sin(Date.now() / 500 + truck.id) * 0.3 // slight floating motion
          };
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* macOS Window Chrome */}
      <div className="bg-white rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl overflow-hidden border border-gray-200">
        
        {/* Window Title Bar */}
        <div className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-200 px-4 lg:px-5 py-3 lg:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex items-center gap-1 text-black">
            <GiNetworkBars className="text-base lg:text-lg" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 lg:p-6 space-y-3 lg:space-y-4">
          
          {/* Live Fleet Counter */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg lg:rounded-xl p-4 lg:p-5 border border-indigo-100">
            <div className="flex items-center gap-3">
              <div className="p-2 lg:p-3 bg-white rounded-lg lg:rounded-xl shadow-sm">
                <FiTruck className="text-xl lg:text-2xl text-indigo-600" />
              </div>
              <div>
                <div className="lg:text-lg font-bold text-indigo-600 font-mono">
                  25,000+ Fleet vehicles managed
                </div>
              </div>
            </div>
          </div>

          {/* Map Widget */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg lg:rounded-xl p-4 lg:p-6 border border-blue-100 relative overflow-hidden">
            
            {/* Map Grid Background */}
            <div className="absolute inset-0 opacity-90">
              <div
                className="
                  absolute inset-0
                  bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)]
                  bg-[size:8px_8px]
                  lg:bg-[size:10px_10px]
                "
              ></div>
            </div>

            {/* Route Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="routeLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M 10% 50% L 30% 40% L 50% 55% L 70% 45% L 90% 60%"
                stroke="url(#routeLine)"
                strokeWidth="2 lg:3"
                fill="none"
                strokeDasharray="8 4 lg:10 5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="12 lg:15"
                  to="0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>

            {/* Origin Marker */}
            <div className="absolute left-[15%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <div className="absolute -inset-1 lg:-inset-2 bg-blue-400 rounded-full opacity-30 animate-ping"></div>
                <div className="relative w-3 h-3 lg:w-4 lg:h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
            </div>

            {/* Destination Marker */}
            <div className="absolute right-[10%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <div className="absolute -inset-1 lg:-inset-2 bg-indigo-400 rounded-full opacity-30 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="relative w-3 h-3 lg:w-4 lg:h-4 bg-indigo-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
            </div>

            {/* Animated Trucks */}
            {truckPositions.map((truck) => (
              <div
                key={truck.id}
                className="absolute transition-all duration-100 ease-linear z-20"
                style={{
                  left: `${truck.x}%`,
                  top: `${truck.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 lg:-inset-2 bg-indigo-400 rounded-full blur-md opacity-40"></div>
                  <FiTruck className="relative text-lg lg:text-xl text-indigo-600 drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            
            {/* On Time Performance */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg lg:rounded-xl p-4 lg:p-5 border border-green-100">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-green-600 font-mono mb-1">
                  {metrics.onTime.toFixed(1)}%
                </div>
                <div className="text-xs lg:text-sm text-gray-600">On-Time Delivery Rate</div>
              </div>
              <div className="mt-2 lg:mt-3 bg-white rounded-full h-1.5 lg:h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-1000"
                  style={{ width: `90%` }}
                ></div>
              </div>
            </div>

            {/* Fuel Saved */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg lg:rounded-xl p-4 lg:p-5 border border-orange-100">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-orange-600 font-mono mb-1">
                  {metrics.fuelSaved}%
                </div>
                <div className="text-xs lg:text-sm text-gray-600">Fuel Saved</div>
              </div>
              <div className="mt-2 lg:mt-3 bg-white rounded-full h-1.5 lg:h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-orange-400 to-amber-500 rounded-full transition-all duration-1000"
                  style={{ width: `40%` }}
                ></div>
              </div>
            </div>

          </div>

          {/* Bottom Stats Row */}
          <div className="grid grid-cols-3 gap-2 lg:gap-3">
            
            <div className="bg-white rounded-lg lg:rounded-xl p-3 lg:p-4 border border-gray-200 text-center hover:shadow-md transition-shadow">
              <FiActivity className="text-xl lg:text-2xl text-purple-500 mx-auto mb-1 lg:mb-2" />
              <div className="text-lg lg:text-xl font-bold text-gray-800">{metrics.efficiency}%</div>
              <div className="text-xs text-gray-500">Efficiency</div>
            </div>

            <div className="bg-white rounded-lg lg:rounded-xl p-3 lg:p-4 border border-gray-200 text-center hover:shadow-md transition-shadow">
              <FiZap className="text-xl lg:text-2xl text-yellow-500 mx-auto mb-1 lg:mb-2" />
              <div className="text-lg lg:text-xl font-bold text-gray-800">2.5h</div>
              <div className="text-xs text-gray-500">Avg Time</div>
            </div>

            <div className="bg-white rounded-lg lg:rounded-xl p-3 lg:p-4 border border-gray-200 text-center hover:shadow-md transition-shadow">
              <FiMapPin className="text-xl lg:text-2xl text-blue-500 mx-auto mb-1 lg:mb-2" />
              <div className="text-lg lg:text-xl font-bold text-gray-800">8</div>
              <div className="text-xs text-gray-500">Active Routes</div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FleetDashboard;