import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const Telegram = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsApp = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ChevronLeft = ({ className }) => (
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
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [emailSaved, setEmailSaved] = useState(false);
  const [showChatList, setShowChatList] = useState(true);
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

  const formik = useFormik({
    initialValues: {
      message: "",
      chatName: conversations[selectedChat].name,
    },
    validationSchema: Yup.object({
      message: Yup.string()
        .trim()
        .required("Message cannot be empty")
        .max(1000, "Message is too long"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const now = new Date();
        const time = now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });

        const newMessage = {
          id: chatMessages.length + 1,
          sender: "me",
          text: values.message.trim(),
          time: time,
        };

        setChatMessages([...chatMessages, newMessage]);

        const response = await fetch("https://formspree.io/f/xaqqyrzg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail || "Not provided",
            message: values.message.trim(),
            chatName: conversations[selectedChat].name,
            timestamp: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          console.log("Message sent successfully!");
          resetForm();
        } else {
          console.error("Failed to send message");
        }
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formik.handleSubmit();
    }
  };

  const handleChatSelect = (index) => {
    setSelectedChat(index);
    setShowChatList(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="min-h-screen pt-16 sm:pt-20 pb-6 sm:pb-10 relative bg-gradient-to-b from-[#0a0e1a] to-[#0f1420]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-block px-3 sm:px-4 py-2 border-green-600/30 bg-green-600/10 rounded-full border text-green-500 shadow-xl w-fit mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm w-fit pl-3 sm:pl-4 relative font-semibold">
              <span className="w-2 h-2 left-0 bottom-1 rounded-2xl absolute bg-yellow-500"></span>{" "}
              Direct Communication Available
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            <span className="bg-gradient-to-b from-white via-white to-gray-900 bg-clip-text text-transparent">
              Messages
            </span>
          </h1>
        </motion.div>

        {/* Messages Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-4 sm:gap-6 h-[calc(100vh-180px)] sm:h-[calc(100vh-220px)] md:h-[calc(100vh-280px)]"
        >
          {/* Conversations List */}
          <motion.div
            variants={itemVariants}
            className={`${
              showChatList ? "block" : "hidden"
            } lg:block lg:col-span-1 bg-gradient-to-br from-[#1a1f2e] to-[#0f1420] rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden flex flex-col`}
          >
            {/* Search */}
            <div className="p-3 sm:p-4 border-b border-white/10">
              <div className="relative">
                <Search className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-[#0a0e1a] rounded-lg sm:rounded-xl border border-white/10 focus:outline-none focus:border-green-500/50 transition-all duration-300 text-white placeholder-gray-500 text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Conversation Items */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv, index) => (
                <motion.div
                  key={conv.id}
                  variants={itemVariants}
                  onClick={() => handleChatSelect(index)}
                  className={`p-3 sm:p-4 border-b border-white/5 cursor-pointer transition-all duration-300 ${
                    selectedChat === index
                      ? "bg-green-500/10 border-l-4 border-l-green-500"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm sm:text-base">
                        {conv.avatar}
                      </div>
                      {conv.online && (
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-[#0f1420]"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-white text-xs sm:text-sm truncate">
                          {conv.name}
                        </h4>
                        <span className="text-[10px] sm:text-xs text-gray-500 flex-shrink-0 ml-2">
                          {conv.time}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-xs sm:text-sm text-gray-400 truncate">
                          {conv.lastMessage}
                        </p>
                        {conv.unread > 0 && (
                          <span className="ml-2 bg-green-500 text-white text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center flex-shrink-0">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chat Area */}
          <motion.div
            variants={itemVariants}
            className={`${
              !showChatList ? "block" : "hidden"
            } lg:block lg:col-span-2 bg-gradient-to-br from-[#1a1f2e] to-[#0f1420] rounded-xl sm:rounded-2xl border border-white/10 overflow-x-hidden flex flex-col`}
          >
            {/* Email Input Section */}
            <div className="p-3 sm:p-4 border-b border-white/10 bg-[#0a0e1a]/50">
              <div className="flex items-center gap-2 sm:gap-3">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                <div className="flex-1">
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => {
                      setUserEmail(e.target.value);
                      setEmailSaved(false);
                    }}
                    onBlur={() => {
                      if (userEmail) setEmailSaved(true);
                    }}
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 py-1.5 sm:py-2 bg-[#0a0e1a] rounded-lg border border-white/10 focus:outline-none focus:border-green-500/50 transition-all duration-300 text-white placeholder-gray-500 text-xs sm:text-sm"
                  />
                </div>
                {emailSaved && userEmail && (
                  <span className="text-[10px] sm:text-xs text-green-400 flex-shrink-0">
                    ✓ Saved
                  </span>
                )}
              </div>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1.5 sm:mt-2 ml-6 sm:ml-8">
                Your email will be included with your messages
              </p>
            </div>

            {/* Chat Header */}
            <div className="p-3 sm:p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => setShowChatList(true)}
                  className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-900 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                    {conversations[selectedChat].avatar}
                  </div>
                  {conversations[selectedChat].online && (
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-[#0f1420]"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    {conversations[selectedChat].name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    {conversations[selectedChat].online
                      ? "Active now"
                      : "Offline"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </button>
                <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
                  <Video className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </button>
                <button className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 rounded-lg sm:rounded-xl items-center justify-center transition-all duration-300 hover:scale-105">
                  <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 min-h-0">
              {chatMessages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] md:max-w-[70%] ${
                      msg.sender === "me"
                        ? "bg-gradient-to-br from-green-500 to-green-900"
                        : "bg-[#0a0e1a]"
                    } rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3`}
                  >
                    <p className="text-white text-xs sm:text-sm leading-relaxed">
                      {msg.text}
                    </p>
                    <span className="text-[10px] sm:text-xs text-gray-400 mt-1 block">
                      {msg.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-3 sm:p-4 border-t border-white/10 sticky bottom-0 bg-[#0f1420]">
              <div className="flex items-end gap-1.5 sm:gap-2">
                <button
                  type="button"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 flex-shrink-0"
                >
                  <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </button>
                <div className="flex-1 overflow-hidden bg-[#0a0e1a] rounded-lg sm:rounded-xl border border-white/10 focus-within:border-green-500/50 transition-all duration-300">
                  <textarea
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    rows={1}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent focus:outline-none text-white placeholder-gray-500 text-xs sm:text-sm resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 hover:bg-white/10 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 flex-shrink-0"
                >
                  <Smile className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                </button>
                <button
                  type="button"
                  onClick={() => formik.handleSubmit()}
                  disabled={
                    !formik.values.message.trim() || formik.isSubmitting
                  }
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
            </div>
          </motion.div>
        </motion.div>
        <div className="w-full h-fit my-3 flex justify-center items-center">
          <div className="w-fit h-fit p-2 rounded-2xl bg-blend-saturation backdrop-blur-3xl flex justify-center items-center gap-x-5 bg-white/10">
            <Link
              to="https://web.telegram.org/k/#@alubarika_0"
              target="_blank"
              alt="Telegram Channel"
              className="bg-white rounded-full hover:scale-120 transition duration-300 ease-in-out"
            >
              <Telegram className="w-9 h-9 text-blue-500" />
            </Link>
            <Link
              to="https://x.com/alubarika_001"
              target="_blank"
              alt="X Page"
              className="bg-green-500 p-2 rounded-full hover:scale-120 transition duration-300 ease-in-out"
            >
              <X className="w-5 h-5 text-white" />
            </Link>
            <Link
              to="https://wa.me/2349136921151"
              target="_blank"
              alt="Whatsapp Page"
              className="bg-green-500 p-2 rounded-full hover:scale-120 transition duration-300 ease-in-out"
            >
              <WhatsApp className="w-5 h-5 text-white" />
            </Link>
            <Link
              to="https://www.instagram.com/alubarika775/"
              target="_blank"
              alt="Instagram Page"
              className="bg-gradient-to-b from-red-500 to-red-900 p-2 rounded-full hover:scale-120 transition duration-300 ease-in-out"
            >
              <Instagram className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
