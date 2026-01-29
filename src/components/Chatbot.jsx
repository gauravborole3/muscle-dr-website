import { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./chatbot.css";

/* ---------------- INTENTS ---------------- */

const BOT_INTENTS = [
  {
    intent: "back pain",
    keywords: ["back pain", "lower back", "spine pain", "backache"],
    response:
      "Back pain is common and often caused by poor posture, muscle strain, or prolonged sitting. Gentle stretching and posture correction can help. If pain persists, consulting a physiotherapist is recommended."
  },
  {
    intent: "neck pain",
    keywords: ["neck pain", "neck stiffness", "cervical pain"],
    response:
      "Neck pain is often related to posture, long screen time, or muscle stiffness. Avoid sudden movements and maintain proper ergonomics."
  },
  {
    intent: "knee pain",
    keywords: ["knee pain", "knee injury", "joint pain"],
    response:
      "Knee pain may occur due to overuse, injury, or muscle imbalance. Avoid high-impact activity and seek professional assessment."
  },
  {
    intent: "posture issues",
    keywords: ["posture", "sitting posture", "office posture", "bad posture"],
    response:
      "Poor posture can lead to neck and back pain over time. Maintaining an upright sitting position and taking regular breaks can help. A physiotherapist can assess and correct posture issues effectively."
  },
  {
    intent: "appointment",
    keywords: ["appointment", "book", "consult", "visit", "schedule"],
    response:
      "You can book a consultation through our Contact page. Would you like me to take you there?"
  },
    {
    intent: "greetings",
    keywords: ["hello", "hi", "hey", "greetings"],
    response:
      "Hello! I'm here to help with general physiotherapy guidance and clinic information. How can I assist you today?"
  },

];

/* ---------------- HELPERS ---------------- */

const normalize = (text) =>
  text.toLowerCase().replace(/[^a-z\s]/g, "");

/* ---------------- COMPONENT ---------------- */

const Chatbot = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I’m the Muscle Dr Assistant. I can help with general physiotherapy guidance and clinic information."
    }
  ]);
  const [input, setInput] = useState("");

  /* ---------------- SEND MESSAGE ---------------- */

  const sendMessage = (customText) => {
    const userText = customText || input;
    if (!userText.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");

    const normalizedText = normalize(userText);

    let matchedIntent = null;

    for (const intent of BOT_INTENTS) {
      for (const keyword of intent.keywords) {
        if (normalizedText.includes(normalize(keyword))) {
          matchedIntent = intent;
          break;
        }
      }
      if (matchedIntent) break;
    }

    /* ---- Appointment special case ---- */
    if (matchedIntent?.intent === "appointment") {
  setTimeout(() => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text:
          "You can book a consultation through our Contact page or directly connect with us on WhatsApp. Please choose an option below."
      },
      {
        sender: "bot",
        action: "appointment-options"
      }
    ]);
  }, 600);
  return;
}


    /* ---- Normal reply ---- */
    const botReply = matchedIntent
      ? matchedIntent.response
      : "I can help with general physiotherapy topics like back pain, neck pain, posture issues, or booking an appointment. For personalized care, please consult a physiotherapist.";

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 600);
  };

  /* ---------------- UI ---------------- */

  return (
    <>
      {/* Floating Button */}
      <div className="chatbot-fab" onClick={() => setOpen(true)}>
        <FaComments />
        <span>Chat with Physio</span>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <div className="chatbot-avatar">👨‍⚕️</div>
              <div>
                <h4>Muscle Dr Assistant</h4>
                <span>Online • Physiotherapy Help</span>
              </div>
            </div>
            <FaTimes className="close-icon" onClick={() => setOpen(false)} />
          </div>

          <div className="chatbot-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.sender}`}>
                {msg.text}

                {msg.action === "appointment-options" && (
                  <div className="chat-action-buttons">
                    <button
                      className="chat-redirect-btn"
                      onClick={() => navigate("/contact")}
                    >
                      Go to Contact Page
                    </button>

                    <a
                      href={`https://wa.me/916266228811?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="chat-whatsapp-btn"
                    >
                      WhatsApp Us
                    </a>
                     <a
                    href={`tel:+916266228811`}
                    className="chat-call-btn"
                    >
                    Call Now
                  </a>
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* Intent Buttons */}
          <div className="chatbot-quick-actions">
            <button onClick={() => sendMessage("back pain")}>Back Pain</button>
            <button onClick={() => sendMessage("neck pain")}>Neck Pain</button>
            <button onClick={() => sendMessage("knee pain")}>Knee Pain</button>
            <button onClick={() => sendMessage("posture issues")}>
              Posture Issues
            </button>
            <button onClick={() => sendMessage("book appointment")}>
              Book Appointment
            </button>
          </div>

          {/* Input */}
          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={() => sendMessage()}>Send</button>
          </div>

          <div className="chatbot-disclaimer">
            ⚠️ Educational use only. Not a substitute for medical advice.
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
