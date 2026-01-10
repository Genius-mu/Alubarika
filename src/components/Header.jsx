// import {
//   Bell,
//   Home,
//   Info,
//   MessageCircle,
//   ServerIcon,
//   Settings,
// } from "lucide-react";
// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <header className="w-full flex flex-col justify-center items-center h-[5em] bg-black/30 z-50 sticky top-0 backdrop-blur-3xl backdrop-saturate-200 shadow-xl">
//         <hr className="absolute bottom-0 left-0 right-0 border-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//         <div className="w-[90%] h-full flex justify-between items-center">
//           <Link to="/" className="text-xl font-bold text-white">
//             alubarika
//           </Link>
//           <nav className="flex justify-center items-center gap-1">
//             <Link
//               to="/"
//               className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
//             >
//               <Home className="w-5 h-5"/>
//             </Link>
//             <Link
//               to="/"
//               className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
//             >
//               <Settings className="w-5 h-5" />
//             </Link>
//             <Link
//               to="/"
//               className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
//             >
//               <Info className="w-5 h-5" />
//             </Link>
//             <Link
//               to="/"
//               className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
//             >
//               <MessageCircle className="w-5 h-5" />
//             </Link>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React from "react";
import { Home, Info, MessageCircle, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <style>{`
        .liquidGlass-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15), transparent 50%),
                      radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.08), transparent 50%),
                      radial-gradient(circle at 100% 50%, rgba(255, 255, 255, 0.08), transparent 50%);
          filter: blur(30px);
          opacity: 0.6;
          pointer-events: none;
        }

        .liquidGlass-tint {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .liquidGlass-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), transparent 40%);
          transform: rotate(30deg);
          pointer-events: none;
        }
      `}</style>

      <header className="w-full flex flex-col justify-center items-center h-[5em] bg-black/50 z-50 sticky top-0 backdrop-blur-xl backdrop-saturate-300 shadow-xl relative overflow-hidden">
        {/* Liquid Glass Effects */}
        <div className="liquidGlass-effect"></div>
        <div className="liquidGlass-tint"></div>
        <div className="liquidGlass-shine"></div>

        {/* Bottom gradient line */}
        <hr className="absolute bottom-0 left-0 right-0 border-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />

        <div className="w-[90%] h-full flex justify-between items-center relative z-10">
          <Link to="/" className="text-xl font-bold text-white">
            alubarika
          </Link>
          <nav className="flex justify-center items-center gap-1">
            <Link
              to="/"
              className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
            >
              <Home className="w-5 h-5" />
              <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Home
              </span>
            </Link>
            <Link
              to="/"
              className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
            >
              <Settings className="w-5 h-5" />
              <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Settings
              </span>
            </Link>
            <Link
              to="/"
              className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
            >
              <Info className="w-5 h-5" />
              <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Info
              </span>
            </Link>
            <Link
              to="/"
              className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Messages
              </span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
