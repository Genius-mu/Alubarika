import {
  ArrowRight,
  BarChart3,
  Check,
  DollarSign,
  TrendingUp,
} from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <>
      <section id="home" className="min-h-screen pt-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-y-3 lg:px-8 relative z-10">
          {/* <div className="inline-block px-4 py-2 bg-green-500/10 rounded-full border border-green-500/10 shadow-[0_2px_5px_#015f26b1_inset,0_-2px_5px_#000_inset] shadow-[0_2px_5px_#015f26b1_inset,0_-2px_3px_#222_inset] w-fit"> */}
          <div className="inline-block px-4 py-2 border-green-600/30 bg-green-600/10 rounded-full border text-green-500 shadow-xl w-fit">
            <span className="text-sm w-fit pl-4 relative font-semibold">
              <span className="w-2 h-2 left-0 bottom-1 rounded-2xl absolute bg-yellow-500"></span> Trusted by 100,000+ Traders Worldwide
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="bg-gradient-to-b from-white via-white to-gray-900 bg-clip-text text-transparent text-shadow-2xs">
              Master{" "}
              <span className="bg-gradient-to-b from-orange-300 via-orange-400 to-orange-600 bg-clip-text text-transparent">
                Forex & Crypto
              </span>{" "}
              Trading
            </span>
          </h1>

          <p className="text-xl font-mono md:text-[15px] max-w-[600px] text-white/90 leading-relaxed">
            Expert strategies, real-time insights, and institutional-grade
            trading solutions for your financial success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button className="group bg-gradient-to-r from-green-600 to-green-900 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-green-600/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Start Trading Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-5 mt-20 w-full mx-auto">
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

      <section id="services" className="py-32 relative">
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
                className="group relative bg-gradient-to-br from-[#1a1f2e] via-[#0f1420] to-[#090b14] p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl card hover:shadow-blue-500/10 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500"></div>

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
    </>
  );
};

export default Home;
