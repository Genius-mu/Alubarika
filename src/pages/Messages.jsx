import React, { useState } from "react";

const Send = ({ className }) => (
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
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const Search = ({ className }) => (
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
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const User = ({ className }) => (
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
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const MoreVertical = ({ className }) => (
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
      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    />
  </svg>
);

const Paperclip = ({ className }) => (
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
      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
    />
  </svg>
);

const Smile = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"
    />
  </svg>
);

const Phone = ({ className }) => (
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
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const Video = ({ className }) => (
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
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Support Team",
      avatar: "S",
      lastMessage: "How can we help you today?",
      time: "2m ago",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Account Manager",
      avatar: "A",
      lastMessage: "Your account verification is complete",
      time: "1h ago",
      unread: 0,
      online: true,
    },
    {
      id: 3,
      name: "Trading Alerts",
      avatar: "T",
      lastMessage: "New signal: EUR/USD Buy opportunity",
      time: "3h ago",
      unread: 5,
      online: false,
    },
    {
      id: 4,
      name: "Community Manager",
      avatar: "C",
      lastMessage: "Welcome to our trading community!",
      time: "1d ago",
      unread: 0,
      online: false,
    },
    {
      id: 5,
      name: "Technical Support",
      avatar: "T",
      lastMessage: "Your issue has been resolved",
      time: "2d ago",
      unread: 0,
      online: true,
    },
  ];

  const chatMessages = [
    {
      id: 1,
      sender: "them",
      text: "Hello! Welcome to TradeMaster support. How can we assist you today?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Hi! I'm having trouble with my withdrawal request.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "them",
      text: "I'd be happy to help you with that. Can you provide your transaction ID?",
      time: "10:33 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "Sure, it's TXN-2025-001234",
      time: "10:34 AM",
    },
    {
      id: 5,
      sender: "them",
      text: "Thank you! Let me check that for you. One moment please.",
      time: "10:35 AM",
    },
    {
      id: 6,
      sender: "them",
      text: "I can see your withdrawal is being processed. It should arrive within 24-48 hours. Is there anything else I can help you with?",
      time: "10:36 AM",
    },
  ];

  return (
    <section className="min-h-screen pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-4 py-2 border-green-600/30 bg-green-600/10 rounded-full border text-green-500 shadow-xl w-fit mb-4">
            <span className="text-sm w-fit pl-4 relative font-semibold">
              <span className="w-2 h-2 left-0 bottom-1 rounded-2xl absolute bg-yellow-500"></span>{" "}
              Instant Support Available
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="bg-gradient-to-b from-white via-white to-gray-900 bg-clip-text text-transparent">
              Messages
            </span>
          </h1>
        </div>

        {/* Messages Container */}
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-10px)] md:h-[calc(100vh-280px)]">
          {/* Conversations List */}
          <div className="lg:col-span-1 bg-gradient-to-br from-[#1a1f2e] to-[#0f1420] rounded-2xl border border-white/10 overflow-hidden flex flex-col">
            {/* Search */}
            <div className="p-4 border-b border-white/10">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-3 bg-[#0a0e1a] rounded-xl border border-white/10 focus:outline-none focus:border-green-500/50 transition-all duration-300 text-white placeholder-gray-500 text-sm"
                />
              </div>
            </div>

            {/* Conversation Items */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv, index) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedChat(index)}
                  className={`p-4 border-b border-white/5 cursor-pointer transition-all duration-300 ${
                    selectedChat === index
                      ? "bg-green-500/10 border-l-4 border-l-green-500"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {conv.avatar}
                      </div>
                      {conv.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0f1420]"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-white text-sm truncate">
                          {conv.name}
                        </h4>
                        <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                          {conv.time}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400 truncate">
                          {conv.lastMessage}
                        </p>
                        {conv.unread > 0 && (
                          <span className="ml-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#1a1f2e] to-[#0f1420] rounded-2xl border border-white/10 overflow-hidden flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-900 rounded-full flex items-center justify-center text-white font-bold">
                    {conversations[selectedChat].avatar}
                  </div>
                  {conversations[selectedChat].online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0f1420]"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    {conversations[selectedChat].name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {conversations[selectedChat].online
                      ? "Active now"
                      : "Offline"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <Phone className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <Video className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] ${
                      msg.sender === "me"
                        ? "bg-gradient-to-br from-green-500 to-green-900"
                        : "bg-[#0a0e1a]"
                    } rounded-2xl px-4 py-3`}
                  >
                    <p className="text-white text-sm leading-relaxed">
                      {msg.text}
                    </p>
                    <span className="text-xs text-gray-400 mt-1 block">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-end gap-2">
                <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 flex-shrink-0">
                  <Paperclip className="w-5 h-5 text-gray-400" />
                </button>
                <div className="flex-1 bg-[#0a0e1a] rounded-xl border border-white/10 focus-within:border-green-500/50 transition-all duration-300">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    rows={1}
                    className="w-full px-4 py-3 bg-transparent focus:outline-none text-white placeholder-gray-500 text-sm resize-none"
                  />
                </div>
                <button className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 flex-shrink-0">
                  <Smile className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-900 hover:shadow-lg hover:shadow-green-500/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 flex-shrink-0">
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 ml-12">
                Press Enter to send, Shift + Enter for new line
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
