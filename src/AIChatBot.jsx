import { useState, useRef, useEffect } from "react";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const SYSTEM_PROMPT = `You are EcoBot 🌱, the friendly AI assistant for EcoEarn — a recycling rewards app built for Gen Z.

You know everything about:
- How EcoEarn works: users drop off waste (plastic, electronic, general) at nearby bins, earn EcoPoints, and redeem them for real rewards like planting trees, gift cards, and eco-products
- Finding nearby bins: the app shows a live map of available and full bins within 1000m of the user
- EcoPoints system: points are earned per drop-off, tracked in the wallet, and spent in the rewards shop
- Badges: users earn badges like "Emerald Recycler" based on their recycling activity
- Sustainability Score: a score out of 100 that reflects the user's overall eco impact
- CO2 saved and Trees planted: real environmental stats tracked per user
- Waste management: what can be recycled, how to sort plastic vs electronic vs general waste, why recycling matters
- Environmental impact: how recycling reduces landfill, saves energy, reduces carbon emissions

Personality:
- Friendly, encouraging, and Gen Z friendly
- Short and clear responses — no long essays
- Use eco emojis naturally (🌱 ♻️ 🌍 💚)
- Always motivate the user to recycle more
- If asked something outside EcoEarn or environment, gently redirect back to your purpose`;

// ── Call Groq (text only) ──────────────────────────────────────
const callGroq = async (messages) => {
  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 512,
        temperature: 0.7,
      }),
    },
  );
  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message || "Groq error");
  return data.choices[0].message.content;
};

// ── Call Gemini (text + image) ─────────────────────────────────
const callGemini = async (text, base64Image, mimeType) => {
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `${SYSTEM_PROMPT}\n\nUser Question: ${text || "What is this? Can it be recycled?"}`,
        },
        {
          inline_data: {
            mime_type: mimeType,
            data: base64Image,
          },
        },
      ],
    },
  ];

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents,
        generationConfig: { maxOutputTokens: 512, temperature: 0.7 },
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Gemini Error Details:", data);
    throw new Error(data.error?.message || "Gemini error");
  }

  return (
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "I'm stumped! Try another photo? ♻️"
  );
};

// ── Convert file to base64 ─────────────────────────────────────
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

// ── Icons ──────────────────────────────────────────────────────
const BotIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
    <rect
      x="4"
      y="8"
      width="18"
      height="14"
      rx="4"
      stroke="#00ff88"
      strokeWidth="1.5"
      fill="rgba(0,255,136,0.1)"
    />
    <line
      x1="13"
      y1="4"
      x2="13"
      y2="8"
      stroke="#00ff88"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="13" cy="3.5" r="1.5" fill="#00ff88" />
    <circle cx="9.5" cy="14" r="1.8" fill="#00ff88" fillOpacity="0.9" />
    <circle cx="16.5" cy="14" r="1.8" fill="#00ff88" fillOpacity="0.9" />
    <path
      d="M9 18.5 Q13 21 17 18.5"
      stroke="#00ff88"
      strokeWidth="1.3"
      strokeLinecap="round"
      fill="none"
    />
    <rect
      x="1.5"
      y="12"
      width="2.5"
      height="5"
      rx="1"
      fill="#00ff88"
      fillOpacity="0.5"
    />
    <rect
      x="22"
      y="12"
      width="2.5"
      height="5"
      rx="1"
      fill="#00ff88"
      fillOpacity="0.5"
    />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M22 2L11 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ImageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M21 15L16 10L5 21"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// ── Typing Indicator ───────────────────────────────────────────
const TypingIndicator = () => (
  <div className="chat-message bot-message">
    <div className="message-avatar">
      <BotIcon size={14} />
    </div>
    <div className="typing-indicator">
      <span />
      <span />
      <span />
    </div>
  </div>
);

// ── Main AIChatBot Component ───────────────────────────────────
const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey! I'm EcoBot 🌱 Your guide to recycling smarter and earning more EcoPoints. Ask me anything!",
    },
  ]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Handle image selection
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Send message
  const sendMessage = async () => {
    if (!input.trim() && !imageFile) return;
    if (loading) return;

    const userText = input.trim();

    // ── Capture before clearing state ──
    const capturedImageFile = imageFile;
    const capturedImagePreview = imagePreview;

    setInput("");
    setLoading(true);

    const userMsg = {
      role: "user",
      content: userText,
      imagePreview: capturedImagePreview || null,
    };

    setMessages((prev) => [...prev, userMsg]);
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";

    try {
      let reply = "";

      if (capturedImagePreview && capturedImageFile) {
        // ── Use Gemini for image ──
        const base64 = await toBase64(capturedImageFile);
        const mime = capturedImageFile.type || "image/jpeg";
        reply = await callGemini(userText, base64, mime);
      } else {
        // ── Use Groq for text ──
        const newHistory = [...history, { role: "user", content: userText }];
        reply = await callGroq(newHistory);
        setHistory([...newHistory, { role: "assistant", content: reply }]);
      }

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Oops! Something went wrong 🌿 Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Floating Bubble ── */}
      <div className="chatbot-bubble" onClick={() => setIsOpen((o) => !o)}>
        <div className="bubble-avatar">
          <BotIcon size={28} />
        </div>
        {!isOpen && <div className="bubble-ping" />}
      </div>

      {/* ── Chat Window ── */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-header-avatar">
                <BotIcon size={18} />
              </div>
              <div>
                <p className="chatbot-header-name">EcoBot</p>
                <p className="chatbot-header-status">
                  <span className="status-dot" />
                  Online • Powered by Groq + Gemini
                </p>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-message ${msg.role === "user" ? "user-message" : "bot-message"}`}
              >
                {msg.role === "assistant" && (
                  <div className="message-avatar">
                    <BotIcon size={14} />
                  </div>
                )}
                <div className="message-bubble">
                  {msg.imagePreview && (
                    <img
                      src={msg.imagePreview}
                      alt="uploaded"
                      className="message-image"
                    />
                  )}
                  {msg.content && <p>{msg.content}</p>}
                </div>
              </div>
            ))}
            {loading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Image preview bar */}
          {imagePreview && (
            <div className="image-preview-bar">
              <img
                src={imagePreview}
                alt="preview"
                className="image-preview-thumb"
              />
              <span className="image-preview-label">Image ready to send</span>
              <button className="image-preview-remove" onClick={removeImage}>
                <XIcon />
              </button>
            </div>
          )}

          {/* Input row */}
          <div className="chatbot-input-row">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageSelect}
              style={{ display: "none" }}
            />
            <button
              className="chatbot-img-btn"
              onClick={() => fileInputRef.current.click()}
              title="Send an image"
            >
              <ImageIcon />
            </button>
            <textarea
              className="chatbot-input"
              placeholder="Ask EcoBot anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button
              className="chatbot-send-btn"
              onClick={sendMessage}
              disabled={loading || (!input.trim() && !imageFile)}
            >
              <SendIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatBot;
