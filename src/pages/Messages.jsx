import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

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
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "them",
      text: "Hey! Thanks for joining my trading community. How can I help you today?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "me",
      text: "Hi Alubarika! I'd like to know more about your forex signals.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "them",
      text: "Great! I provide daily forex signals with clear entry points, stop loss, and take profit levels. Each signal includes my personal analysis and risk management strategy.",
      time: "10:33 AM",
    },
    {
      id: 4,
      sender: "me",
      text: "That sounds perfect! What's your average win rate?",
      time: "10:34 AM",
    },
    {
      id: 5,
      sender: "them",
      text: "My signals maintain a 75%+ win rate. I'm very transparent about my results - both wins and losses. You'll get real-time updates on all trades.",
      time: "10:35 AM",
    },
    {
      id: 6,
      sender: "them",
      text: "I also offer personalized guidance and market education. Would you like to join the VIP group for premium signals?",
      time: "10:36 AM",
    },
  ]);

  const conversations = [
    {
      id: 1,
      name: "Alubarika",
      avatar: "A",
      lastMessage: "I'll send the next signal in 30 minutes",
      time: "2m ago",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "VIP Signals Group",
      avatar: "V",
      lastMessage: "BTC/USDT signal just posted!",
      time: "1h ago",
      unread: 5,
      online: true,
    },
    {
      id: 3,
      name: "Trading Alerts",
      avatar: "T",
      lastMessage: "New signal: EUR/USD Buy setup",
      time: "3h ago",
      unread: 3,
      online: true,
    },
    {
      id: 4,
      name: "Market Updates",
      avatar: "M",
      lastMessage: "Daily market analysis is ready",
      time: "5h ago",
      unread: 0,
      online: true,
    },
    {
      id: 5,
      name: "Community Chat",
      avatar: "C",
      lastMessage: "Great discussion on risk management!",
      time: "1d ago",
      unread: 0,
      online: false,
    },
  ];

  // Formik setup
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string()
        .trim()
        .required("Message cannot be empty")
        .max(1000, "Message is too long"),
    }),
    onSubmit: (values, { resetForm }) => {
      // Get current time
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      // Create new message object
      const newMessage = {
        id: chatMessages.length + 1,
        sender: "me",
        text: values.message.trim(),
        time: time,
      };

      // Add message to chat
      setChatMessages([...chatMessages, newMessage]);

      // Send email (this will open the user's email client)
      const subject = `Message from Chat - ${conversations[selectedChat].name}`;
      const body = encodeURIComponent(values.message);
      window.location.href = `mailto:toyyibadegbite9@gmail.com?subject=${subject}&body=${body}`;

      // Reset form
      resetForm();
    },
  });

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formik.handleSubmit();
    }
  };

  return (
    <section className="min-h-screen pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-4 py-2 border-green-600/30 bg-green-600/10 rounded-full border text-green-500 shadow-xl w-fit mb-4">
            <span className="text-sm w-fit pl-4 relative font-semibold">
              <span className="w-2 h-2 left-0 bottom-1 rounded-2xl absolute bg-yellow-500"></span>{" "}
              Direct Communication Available
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

            {/* Message Input Form */}
            <form
              onSubmit={formik.handleSubmit}
              className="p-4 border-t border-white/10"
            >
              <div className="flex items-end gap-2">
                <button
                  type="button"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 flex-shrink-0"
                >
                  <Paperclip className="w-5 h-5 text-gray-400" />
                </button>
                <div className="flex-1 overflow-hidden bg-[#0a0e1a] rounded-xl border border-white/10 focus-within:border-green-500/50 transition-all duration-300">
                  <textarea
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    rows={1}
                    className="w-full px-4 py-3 bg-transparent focus:outline-none text-white placeholder-gray-500 text-sm resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 flex-shrink-0"
                >
                  <Smile className="w-5 h-5 text-gray-400" />
                </button>
                <button
                  type="submit"
                  disabled={!formik.values.message.trim()}
                  className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-900 hover:shadow-lg hover:shadow-green-500/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
              {formik.touched.message && formik.errors.message && (
                <p className="text-xs text-red-400 mt-2 ml-12">
                  {formik.errors.message}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-2 ml-12">
                Press Enter to send, Shift + Enter for new line
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
