// import React, { useState, useEffect } from "react";
// import {
//   BarChart3,
//   DollarSign,
//   Globe,
//   Lock,
//   TrendingUp,
//   Users,
//   ArrowRight,
//   Check,
//   Star,
// } from "lucide-react";

// const LandingPage = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#0f1420] to-[#0a0e1a] text-gray-200 font-sans overflow-x-hidden">
//       {/* Animated Background */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
//         <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//         <div
//           className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
//           style={{ animationDelay: "2s" }}
//         ></div>
//         <div
//           className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
//           style={{ animationDelay: "4s" }}
//         ></div>
//       </div>
//       {/* 
//       <nav
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//           scrolled
//             ? "bg-[#0a0e1a]/95 backdrop-blur-xl shadow-lg shadow-blue-500/5"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               TradeMaster
//             </div>
//             <div className="hidden md:flex space-x-10">
//               {["Home", "Services", "About", "Contact"].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="text-gray-300 hover:text-white transition-all duration-300 relative group"
//                 >
//                   {item}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
//                 </a>
//               ))}
//             </div>
//             <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </nav> */}

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="min-h-screen flex items-center justify-center pt-20 relative"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
//             <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               🚀 Trusted by 100,000+ Traders Worldwide
//             </span>
//           </div>

//           <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
//             <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
//               Master Forex & Crypto
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Trading
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-400 leading-relaxed">
//             Expert strategies, real-time insights, and institutional-grade
//             trading solutions for your financial success.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
//               Start Trading Now
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
//               Watch Demo
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
//             {[
//               { value: "$2.5B+", label: "Trading Volume" },
//               { value: "150+", label: "Countries" },
//               { value: "99.9%", label: "Uptime" },
//             ].map((stat, i) => (
//               <div key={i} className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-500 mt-1">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="py-32 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//                 Our Services
//               </span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Professional trading tools designed to give you an edge in the
//               market
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: TrendingUp,
//                 title: "Forex Trading",
//                 desc: "Access global currency markets with institutional-grade spreads and up to 1:500 leverage.",
//                 features: [
//                   "50+ Currency Pairs",
//                   "0.0 Pip Spreads",
//                   "Lightning Fast Execution",
//                 ],
//               },
//               {
//                 icon: DollarSign,
//                 title: "Crypto Trading",
//                 desc: "Trade 200+ cryptocurrencies with advanced charting and military-grade security.",
//                 features: [
//                   "200+ Crypto Assets",
//                   "Cold Wallet Storage",
//                   "24/7 Support",
//                 ],
//               },
//               {
//                 icon: BarChart3,
//                 title: "Market Analysis",
//                 desc: "AI-powered insights, real-time data feeds, and expert forecasts at your fingertips.",
//                 features: [
//                   "AI Predictions",
//                   "Live Market Data",
//                   "Expert Insights",
//                 ],
//               },
//             ].map((service, index) => (
//               <div
//                 key={service.title}
//                 className="group relative bg-gradient-to-br from-[#1a1f2e] to-[#0f1420] p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500"></div>

//                 <div className="relative z-10">
//                   <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                     <service.icon className="w-8 h-8 text-white" />
//                   </div>

//                   <h3 className="text-2xl font-bold mb-4 text-white">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-400 mb-6 leading-relaxed">
//                     {service.desc}
//                   </p>

//                   <div className="space-y-3">
//                     {service.features.map((feature, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center gap-2 text-sm text-gray-300"
//                       >
//                         <Check className="w-4 h-4 text-green-400" />
//                         {feature}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-32 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//                 Why Choose TradeMaster?
//               </h2>
//               <p className="text-gray-400 mb-6 text-lg leading-relaxed">
//                 With over a decade of experience in forex and crypto markets, we
//                 provide reliable trading solutions tailored to your needs. Our
//                 platform combines cutting-edge technology with expert market
//                 knowledge.
//               </p>
//               <p className="text-gray-400 mb-8 text-lg leading-relaxed">
//                 Join thousands of successful traders who trust TradeMaster for
//                 security, speed, and success in every trade.
//               </p>

//               <div className="flex items-center gap-4 mb-8">
//                 <div className="flex -space-x-2">
//                   {[1, 2, 3, 4].map((i) => (
//                     <div
//                       key={i}
//                       className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-[#0a0e1a]"
//                     ></div>
//                   ))}
//                 </div>
//                 <div>
//                   <div className="flex gap-1 mb-1">
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <Star
//                         key={i}
//                         className="w-4 h-4 fill-yellow-400 text-yellow-400"
//                       />
//                     ))}
//                   </div>
//                   <div className="text-sm text-gray-400">
//                     4.9/5 from 12,000+ reviews
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 {
//                   icon: Globe,
//                   title: "Global Access",
//                   desc: "Trade from anywhere",
//                 },
//                 {
//                   icon: Lock,
//                   title: "Bank-Level Security",
//                   desc: "Your funds are safe",
//                 },
//                 {
//                   icon: Users,
//                   title: "Expert Team",
//                   desc: "24/7 dedicated support",
//                 },
//                 {
//                   icon: TrendingUp,
//                   title: "Proven Results",
//                   desc: "Track record of success",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.title}
//                   className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1420] p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
//                 >
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                     <item.icon className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <h4 className="font-bold text-white mb-1">{item.title}</h4>
//                   <p className="text-sm text-gray-400">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-32 relative">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-5xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//               Ready to Start Trading?
//             </span>
//           </h2>
//           <p className="text-xl text-gray-400 mb-12">
//             Get in touch with our team and start your trading journey today
//           </p>

//           <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1420] p-10 rounded-3xl border border-white/10 shadow-2xl">
//             <div className="space-y-6">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-4 bg-[#0a0e1a] rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full p-4 bg-[#0a0e1a] rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-500"
//               />
//               <textarea
//                 placeholder="Your Message"
//                 rows={5}
//                 className="w-full p-4 bg-[#0a0e1a] rounded-xl border border-white/10 focus:outline-none focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-500 resize-none"
//               ></textarea>
//               <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#0a0e1a]/50 backdrop-blur-xl py-8 text-center border-t border-white/5">
//         <p className="text-gray-500">
//           &copy; 2026 TradeMaster. All rights reserved.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;
