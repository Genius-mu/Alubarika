import React from "react";

const ArrowRight = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const Check = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const Shield = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const Award = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="8" r="7" strokeWidth={2} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"
    />
  </svg>
);

const Users = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const Target = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeWidth={2} />
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const Globe = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Lightbulb = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const Heart = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const Clock = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Star = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Info = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] pt-27 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-y-4 lg:px-8 relative z-10">
          <div className="inline-block px-4 py-2 border-green-600/30 bg-green-600/10 rounded-full border text-green-500 shadow-xl w-fit">
            <span className="text-sm w-fit pl-4 relative font-semibold">
              <span className="w-2 h-2 left-0 bottom-1 rounded-2xl absolute bg-yellow-500"></span>{" "}
              About Alubarika
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            <span className="bg-gradient-to-b from-white via-white to-gray-900 bg-clip-text text-transparent">
              Empowering Traders{" "}
              <span className="bg-gradient-to-b from-green-300 via-green-400 to-green-600 bg-clip-text text-transparent">
                Since 2015
              </span>
            </span>
          </h1>

          <p className="text-[13px] sm:text-[15px] max-w-[700px] text-white/80 leading-relaxed">
            We're more than just a trading platform. We're a community of
            passionate traders, innovative technologists, and financial experts
            dedicated to democratizing access to global markets.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-16 items-center">
            <div className="flex flex-col gap-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-white via-white to-gray-700 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <p className="text-white/90 text-[15px] leading-relaxed">
                I'm Alubarika, a passionate forex and cryptocurrency trader with
                years of experience navigating the dynamic world of financial
                markets. My journey began with a deep curiosity about market
                trends and a commitment to mastering the art of trading.
              </p>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Over the years, I've developed proven strategies in both forex
                and crypto markets, learning to read patterns, manage risk, and
                capitalize on opportunities. Through dedication and continuous
                learning, I've built a track record of successful trades across
                major currency pairs and leading cryptocurrencies.
              </p>
              <p className="text-white/90 text-[15px] leading-relaxed">
                Today, I share my expertise through trading signals, market
                analysis, and personalized guidance to help others navigate
                these markets with confidence. Whether you're interested in
                forex trading, crypto investing, or both, I'm here to provide
                the insights and support you need to succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { value: "2015", label: "Founded" },
                { value: "100K+", label: "Active Traders" },
                { value: "150+", label: "Countries" },
                { value: "$2.5B+", label: "Monthly Volume" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="card text-center py-8 hover:-translate-y-2 rounded-2xl border border-white/5 hover:border-white/10 transition-all ease-in-out duration-300 flex justify-center items-center flex-col bg-[#070b16]"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-green-500 to-green-900 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-white/60 mt-1 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1a1f2e] via-[#0f1420] to-[#090b14] p-10 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-900 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">My Mission</h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                To help aspiring traders navigate the forex and crypto markets
                with confidence through proven strategies, clear guidance, and
                honest insights. I'm committed to sharing my knowledge and
                experience to empower others to make informed trading decisions
                and achieve their financial goals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f2e] via-[#0f1420] to-[#090b14] p-10 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-900 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">My Vision</h3>
              <p className="text-white/90 text-[15px] leading-relaxed">
                To build a community of successful traders who benefit from my
                expertise in both forex and cryptocurrency markets. I envision
                creating a space where traders can learn, grow, and profit
                together through transparent analysis, real-time signals, and
                continuous market education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 flex flex-col gap-y-2">
            <h2 className="text-2xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-white via-white to-gray-700 bg-clip-text text-transparent">
                My Core Values
              </span>
            </h2>
            <p className="text-[15px] text-white/90 max-w-2xl mx-auto">
              The principles that guide my trading and mentorship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Integrity",
                desc: "I provide honest market analysis and realistic expectations. No false promises, just genuine insights based on real trading experience.",
              },
              {
                icon: Heart,
                title: "Dedication",
                desc: "Committed to helping you succeed. I'm passionate about sharing knowledge and supporting traders at every stage of their journey.",
              },
              {
                icon: TrendingUp,
                title: "Continuous Learning",
                desc: "Markets evolve, and so do I. I stay updated with the latest trends, strategies, and tools in forex and crypto trading.",
              },
              {
                icon: Globe,
                title: "Transparency",
                desc: "Clear communication about wins, losses, and strategies. I share real results and honest insights from my trading experience.",
              },
              {
                icon: Users,
                title: "Community",
                desc: "Building a supportive network where traders learn from each other, share experiences, and grow together.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "Striving for precision in every trade and analysis. I deliver quality signals and actionable insights you can trust.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1420] p-8 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-green-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-green-400" />
                </div>
                <h4 className="font-bold text-white mb-3 text-xl">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 flex flex-col gap-y-2">
            <h2 className="text-2xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-white via-white to-gray-700 bg-clip-text text-transparent">
                My Trading Journey
              </span>
            </h2>
            <p className="text-[15px] text-white/90 max-w-2xl mx-auto">
              Key milestones that shaped my trading career
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                year: "2018",
                title: "Started Trading Journey",
                desc: "Began learning forex trading fundamentals, studying market analysis and developing my first trading strategies.",
              },
              {
                year: "2019",
                title: "First Consistent Profits",
                desc: "Achieved consistent profitability in forex trading after months of practice, discipline, and continuous learning.",
              },
              {
                year: "2020",
                title: "Entered Crypto Markets",
                desc: "Expanded into cryptocurrency trading, applying technical analysis skills to Bitcoin, Ethereum, and altcoins.",
              },
              {
                year: "2021",
                title: "Developed Trading System",
                desc: "Created my own proven trading system combining technical indicators, price action, and risk management.",
              },
              {
                year: "2023",
                title: "Started Sharing Signals",
                desc: "Began providing trading signals and market analysis to help other traders benefit from my experience.",
              },
              {
                year: "2025",
                title: "Building Community",
                desc: "Launched this platform to share knowledge, provide mentorship, and build a community of successful traders.",
              },
            ].map((milestone, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  {i < 5 && (
                    <div className="w-0.5 h-full bg-white/10 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1420] p-6 rounded-2xl border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
                    <div className="text-green-400 font-bold mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-gray-400">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0f1420] p-12 rounded-3xl border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-b from-white via-white to-gray-700 bg-clip-text text-transparent">
                  Trusted by Fellow Traders
                </span>
              </h2>
              <p className="text-[15px] text-white/90">
                Real results from traders who follow my signals and strategies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-white mb-1">4.8/5</div>
                <div className="text-sm text-gray-400">Community Rating</div>
                <div className="text-xs text-gray-500 mt-1">
                  From 500+ traders
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-b from-green-500 to-green-900 bg-clip-text text-transparent mb-2">
                  75%+
                </div>
                <div className="text-sm text-gray-400">Win Rate</div>
                <div className="text-xs text-gray-500 mt-1">
                  Average signal accuracy
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-b from-green-500 to-green-900 bg-clip-text text-transparent mb-2">
                  Daily
                </div>
                <div className="text-sm text-gray-400">Market Updates</div>
                <div className="text-xs text-gray-500 mt-1">
                  Analysis & signals
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-b from-white via-white to-gray-700 bg-clip-text text-transparent">
              Ready to Start Trading?
            </span>
          </h2>
          <p className="text-[15px] text-white/90 mb-10 max-w-2xl mx-auto">
            Join my community of traders and get access to daily signals, market
            analysis, and personalized guidance. Let's navigate the markets
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-green-600 to-green-900 text-white px-10 py-4 rounded-xl w-full sm:w-fit font-semibold hover:shadow-2xl hover:shadow-green-600/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Get Trading Signals
              <ArrowRight />
            </button>
            <button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-4 rounded-xl w-full sm:w-fit font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
              Contact Me
            </button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Daily Signals
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Market Analysis
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Direct Support
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
