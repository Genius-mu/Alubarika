import {
  ArrowRight,
  BarChart3,
  Check,
  DollarSign,
  Globe,
  Lock,
  Star,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const Home = () => {
  return (
    <>
      <section id="home" className="min-h-screen pt-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-y-3 lg:px-8 relative z-10">
          {/* <div className="inline-block px-4 py-2 bg-green-500/10 rounded-full border border-green-500/10 shadow-[0_2px_5px_#015f26b1_inset,0_-2px_5px_#000_inset] shadow-[0_2px_5px_#015f26b1_inset,0_-2px_3px_#222_inset] w-fit"> */}
          <div className="inline-block px-4 py-2 border-green-600/30 bg-green-600/10 rounded-full border text-green-500 shadow-xl w-fit">
            <span className="text-[13px] sm:text-sm w-fit pl-4 relative font-semibold">
              <span className="w-2 h-2 left-0 bottom-1 rounded-2xl absolute bg-yellow-500"></span>{" "}
              Trusted by 10,000+ Traders Worldwide
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-2xl md:text-4xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-900 bg-clip-text text-transparent text-shadow-2xs">
              Master{" "}
              <span className="bg-gradient-to-b from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Forex & Crypto
              </span>{" "}
              Trading
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[13px] sm:text-xl font-mono md:text-[15px] max-w-[600px] text-white/90 leading-relaxed"
          >
            Expert strategies, real-time insights, and institutional-grade
            trading solutions for your financial success.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button className="group bg-gradient-to-r from-green-600 to-green-900 text-white px-10 sm:py-4 py-3 w-full sm:w-fit rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-600/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Start Trading Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 sm:py-4 py-3 w-full sm:w-fit rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 w-full mx-auto">
            {[
              { value: "$2.5B+", label: "Trading Volume" },
              { value: "150+", label: "Countries" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center w-full py-3 hover:-translate-y-2 rounded-2xl border border-white/5 hover:border-white/10 transition-all ease-in-out duration-300 flex justify-center items-center flex-col bg-[#070b16] card"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-green-500 to-green-900 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-15 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 flex flex-col gap-y-2">
            <h2 className="text-2xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-white via-white to-gray-700 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-[15px] text-white/90 max-w-2xl mx-auto">
              Professional trading tools designed to give you an edge in the
              market
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Forex Trading",
                desc: "Access global currency markets with institutional-grade spreads and up to 1:500 leverage.",
                features: [
                  "50+ Currency Pairs",
                  "0.0 Pip Spreads",
                  "Lightning Fast Execution",
                ],
              },
              {
                icon: DollarSign,
                title: "Crypto Trading",
                desc: "Trade 200+ cryptocurrencies with advanced charting and military-grade security.",
                features: [
                  "200+ Crypto Assets",
                  "Cold Wallet Storage",
                  "24/7 Support",
                ],
              },
              {
                icon: BarChart3,
                title: "Market Analysis",
                desc: "AI-powered insights, real-time data feeds, and expert forecasts at your fingertips.",
                features: [
                  "AI Predictions",
                  "Live Market Data",
                  "Expert Insights",
                ],
              },
              {
                icon: BarChart3,
                title: "Market Analysis",
                desc: "AI-powered insights, real-time data feeds, and expert forecasts at your fingertips.",
                features: [
                  "AI Predictions",
                  "Live Market Data",
                  "Expert Insights",
                ],
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-gradient-to-br from-[#1a1f2e] via-[#0f1420] to-[#090b14] p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl card hover:shadow-green-500/10 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-green-500/5 group-hover:to-green-500/5 rounded-2xl transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <Check className="w-4 h-4 text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-16 items-center">
            <div className="flex flex-col gap-y-3">
              <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
              <p className="text-white/90 text-[12px] sm:text-[15px] leading-relaxed">
                With over a decade of experience in forex and crypto markets, we
                provide reliable trading solutions tailored to your needs. Our
                platform combines cutting-edge technology with expert market
                knowledge.
              </p>
              <p className="text-white/90 text-[12px] sm:text-[15px] leading-relaxed">
                Join thousands of successful traders who trust TradeMaster for
                security, speed, and success in every trade.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-2">
                  {[
                    { icon: User },
                    { icon: User },
                    { icon: User },
                    { icon: User },
                  ].map((us, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-b from-green-500 to-green-900 border-2 border-[#0a0e1a] flex justify-center items-center"
                    >
                      <us.icon className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="text-[13px] text-gray-400">
                    4.9/5 from 1,200+ reviews
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Globe,
                  title: "Global Access",
                  desc: "Trade from anywhere",
                },
                {
                  icon: Lock,
                  title: "Bank-Level Security",
                  desc: "Your funds are safe",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  desc: "24/7 dedicated support",
                },
                {
                  icon: TrendingUp,
                  title: "Proven Results",
                  desc: "Track record of success",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1420] p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
