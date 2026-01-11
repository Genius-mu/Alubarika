// import React from "react";
// import { Home, Info, MessageCircle, Settings } from "lucide-react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <style>{`
//         .liquidGlass-effect {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.15), transparent 50%),
//                       radial-gradient(circle at 0% 50%, rgba(255, 255, 255, 0.08), transparent 50%),
//                       radial-gradient(circle at 100% 50%, rgba(255, 255, 255, 0.08), transparent 50%);
//           filter: blur(30px);
//           opacity: 0.6;
//           pointer-events: none;
//         }

//         .liquidGlass-tint {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%);
//           mix-blend-mode: overlay;
//           pointer-events: none;
//         }

//         .liquidGlass-shine {
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           right: -50%;
//           bottom: -50%;
//           background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), transparent 40%);
//           transform: rotate(30deg);
//           pointer-events: none;
//         }
//       `}</style>

//       <header className="w-full flex flex-col justify-center items-center h-[5em] bg-black/50 z-50 sticky top-0 backdrop-blur-xl backdrop-saturate-300 shadow-xl relative overflow-hidden">
//         {/* Liquid Glass Effects */}
//         <div className="liquidGlass-effect"></div>
//         <div className="liquidGlass-tint"></div>
//         <div className="liquidGlass-shine"></div>

//         {/* Bottom gradient line */}
//         <hr className="absolute bottom-0 left-0 right-0 border-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />

//         <div className="w-[90%] h-full flex justify-between items-center relative z-10">
//           <Link to="/" className="text-xl font-bold text-white">
//             alubarika
//           </Link>
//           <nav className="flex justify-center items-center gap-1">
//             <Link
//               to="/"
//               className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
//             >
//               <Home className="w-4 h-4 sm:w-5 sm:h-5" />
//               <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//                 Home
//               </span>
//             </Link>
//             <Link
//               to="/service"
//               className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
//             >
//               <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
//               <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//                 Settings
//               </span>
//             </Link>
//             <Link
//               to="/info"
//               className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
//             >
//               <Info className="w-4 h-4 sm:w-5 sm:h-5" />
//               <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//                 Info
//               </span>
//             </Link>
//             <Link
//               to="/messages"
//               className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
//             >
//               <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//               <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
//                 Messages
//               </span>
//             </Link>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";

const Home = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const Settings = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Info = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MessageCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const Menu = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/service", icon: Settings, label: "Service" },
    { path: "/info", icon: Info, label: "Info" },
    { path: "/messages", icon: MessageCircle, label: "Messages" },
  ];

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

        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .slide-in {
          animation: slideIn 0.3s ease-out;
        }

        .fade-in {
          animation: fadeIn 0.3s ease-out;
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
          <a href="/" className="text-xl font-bold text-white">
            alubarika
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-white py-2 hover:px-5 px-4 group relative hover:bg-white/10 rounded-lg transition-all ease-in-out duration-300"
              >
                <item.icon className="w-5 h-5" />
                <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsSideMenuOpen(true)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isSideMenuOpen && (
        <div
          onClick={() => setIsSideMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] fade-in md:hidden"
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#1a1f2e] to-[#0f1420] border-r border-white/10 z-[70] transform transition-transform duration-300 md:hidden ${
          isSideMenuOpen ? "translate-x-0 slide-in" : "-translate-x-full"
        }`}
      >
        {/* Side Menu Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <span className="text-xl font-bold bg-gradient-to-r from-green-300 via-green-400 to-green-600 bg-clip-text text-transparent">
            alubarika
          </span>
          <button
            onClick={() => setIsSideMenuOpen(false)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Side Menu Navigation */}
        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={() => setIsSideMenuOpen(false)}
              className="flex items-center gap-4 text-white py-3 px-4 hover:bg-white/10 rounded-lg transition-all duration-300 group"
            >
              <item.icon className="w-5 h-5 text-green-400" />
              <span className="text-[15px]">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Side Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <p className="text-xs text-white/50 text-center">
            © 2026 alubarika
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;