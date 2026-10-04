import { useState } from "react";
import "./App.css";

const crops = [
  { name: "Rice", icon: "🌾", season: "Kharif", water: "High", soil: "Clay / Loamy", duration: "90-150 days" },
  { name: "Wheat", icon: "🌾", season: "Rabi", water: "Medium", soil: "Loamy", duration: "120-150 days" },
  { name: "Maize", icon: "🌽", season: "Kharif / Rabi", water: "Medium", soil: "Well-drained Loamy", duration: "80-120 days" },
  { name: "Cotton", icon: "🌿", season: "Kharif", water: "Medium", soil: "Black Soil", duration: "150-180 days" },
  { name: "Groundnut", icon: "🥜", season: "Kharif / Rabi", water: "Medium", soil: "Sandy Loam", duration: "100-130 days" },
  { name: "Chilli", icon: "🌶️", season: "Kharif / Rabi", water: "Medium", soil: "Well-drained Loamy", duration: "120-180 days" },
  { name: "Tomato", icon: "🍅", season: "Year-round", water: "Medium", soil: "Sandy Loam", duration: "90-120 days" },
  { name: "Potato", icon: "🥔", season: "Rabi", water: "Medium", soil: "Sandy Loam", duration: "90-120 days" },
  { name: "Sugarcane", icon: "🎋", season: "Year-round", water: "Very High", soil: "Deep Loamy", duration: "10-18 months" },
  { name: "Onion", icon: "🧅", season: "Rabi / Kharif", water: "Medium", soil: "Well-drained Loamy", duration: "100-150 days" },

  { name: "Banana", icon: "🍌", season: "Year-round", water: "High", soil: "Deep Loamy", duration: "10-15 months" },
  { name: "Mango", icon: "🥭", season: "Year-round", water: "Medium", soil: "Deep Well-drained", duration: "3-5 years" },
  { name: "Soybean", icon: "🫘", season: "Kharif", water: "Medium", soil: "Loamy", duration: "90-120 days" },
  { name: "Barley", icon: "🌾", season: "Rabi", water: "Low", soil: "Loamy", duration: "110-130 days" },
  { name: "Millet", icon: "🌾", season: "Kharif", water: "Low", soil: "Sandy Loam", duration: "70-100 days" },
  { name: "Bajra", icon: "🌾", season: "Kharif", water: "Low", soil: "Sandy Loam", duration: "75-100 days" },
  { name: "Jowar", icon: "🌾", season: "Kharif / Rabi", water: "Low", soil: "Black / Loamy", duration: "100-130 days" },
  { name: "Ragi", icon: "🌾", season: "Kharif", water: "Low", soil: "Red Loamy", duration: "100-120 days" },
  { name: "Pigeon Pea", icon: "🫘", season: "Kharif", water: "Low", soil: "Loamy", duration: "150-180 days" },
  { name: "Chickpea", icon: "🫘", season: "Rabi", water: "Low", soil: "Sandy Loam", duration: "100-120 days" },

  { name: "Black Gram", icon: "🫘", season: "Kharif / Rabi", water: "Low", soil: "Loamy", duration: "70-90 days" },
  { name: "Green Gram", icon: "🫘", season: "Kharif / Rabi", water: "Low", soil: "Sandy Loam", duration: "60-90 days" },
  { name: "Lentil", icon: "🫘", season: "Rabi", water: "Low", soil: "Loamy", duration: "100-120 days" },
  { name: "Peas", icon: "🫛", season: "Rabi", water: "Medium", soil: "Loamy", duration: "60-90 days" },
  { name: "Mustard", icon: "🌼", season: "Rabi", water: "Low", soil: "Loamy", duration: "110-140 days" },
  { name: "Sunflower", icon: "🌻", season: "Kharif / Rabi", water: "Medium", soil: "Loamy", duration: "90-120 days" },
  { name: "Sesame", icon: "🌱", season: "Kharif", water: "Low", soil: "Sandy Loam", duration: "80-100 days" },
  { name: "Castor", icon: "🌿", season: "Kharif", water: "Low", soil: "Sandy Loam", duration: "150-180 days" },
  { name: "Tobacco", icon: "🌿", season: "Rabi", water: "Medium", soil: "Sandy Loam", duration: "90-120 days" },
  { name: "Turmeric", icon: "🟡", season: "Kharif", water: "Medium", soil: "Loamy", duration: "7-9 months" },

  { name: "Ginger", icon: "🫚", season: "Kharif", water: "Medium", soil: "Rich Loamy", duration: "8-10 months" },
  { name: "Garlic", icon: "🧄", season: "Rabi", water: "Medium", soil: "Loamy", duration: "120-150 days" },
  { name: "Cabbage", icon: "🥬", season: "Rabi", water: "Medium", soil: "Loamy", duration: "90-120 days" },
  { name: "Cauliflower", icon: "🥦", season: "Rabi", water: "Medium", soil: "Loamy", duration: "90-120 days" },
  { name: "Brinjal", icon: "🍆", season: "Year-round", water: "Medium", soil: "Sandy Loam", duration: "120-180 days" },
  { name: "Carrot", icon: "🥕", season: "Rabi", water: "Medium", soil: "Sandy Loam", duration: "70-100 days" },
  { name: "Radish", icon: "🥕", season: "Rabi", water: "Medium", soil: "Sandy Loam", duration: "40-60 days" },
  { name: "Okra", icon: "🌱", season: "Kharif / Summer", water: "Medium", soil: "Loamy", duration: "60-90 days" },
  { name: "Pumpkin", icon: "🎃", season: "Kharif / Summer", water: "Medium", soil: "Sandy Loam", duration: "90-120 days" },
  { name: "Watermelon", icon: "🍉", season: "Summer", water: "Medium", soil: "Sandy Loam", duration: "80-100 days" },

  { name: "Muskmelon", icon: "🍈", season: "Summer", water: "Medium", soil: "Sandy Loam", duration: "70-100 days" },
  { name: "Papaya", icon: "🍈", season: "Year-round", water: "Medium", soil: "Well-drained Loamy", duration: "9-12 months" },
  { name: "Guava", icon: "🍐", season: "Year-round", water: "Medium", soil: "Loamy", duration: "2-3 years" },
  { name: "Pomegranate", icon: "🍎", season: "Year-round", water: "Low", soil: "Sandy Loam", duration: "2-3 years" },
  { name: "Grapes", icon: "🍇", season: "Year-round", water: "Medium", soil: "Sandy Loam", duration: "2-3 years" },
  { name: "Coconut", icon: "🥥", season: "Year-round", water: "High", soil: "Sandy Loam", duration: "5-7 years" },
  { name: "Cashew", icon: "🌰", season: "Year-round", water: "Low", soil: "Sandy Loam", duration: "3-5 years" },
  { name: "Tea", icon: "🍃", season: "Year-round", water: "High", soil: "Acidic Loamy", duration: "3-5 years" },
  { name: "Coffee", icon: "☕", season: "Year-round", water: "Medium", soil: "Rich Loamy", duration: "3-4 years" },
  { name: "Black Pepper", icon: "🌿", season: "Year-round", water: "High", soil: "Rich Loamy", duration: "3 years" },

  { name: "Pineapple", icon: "🍍", season: "Year-round", water: "Medium", soil: "Sandy Loam", duration: "15-24 months" }
];

function App() {
  const [page, setPage] = useState("home");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAssistant = async () => {
    const question = message.trim();

    if (!question) {
      setResponse("Please enter your farming question.");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: question,
          message: question,
          question: question
        })
      });

      const text = await res.text();

      let data = {};

      try {
        data = JSON.parse(text);
      } catch {
        data = { response: text };
      }

      if (!res.ok) {
        throw new Error(
          data.message ||
          data.error ||
          `Backend error: ${res.status}`
        );
      }

      const answer =
        data.reply ||
        data.response ||
        data.answer ||
        data.message ||
        data.data?.reply ||
        data.data?.response ||
        data.data?.answer;

      setResponse(
        answer ||
        "The backend responded, but no answer was returned."
      );

    } catch (error) {
      console.error("Assistant error:", error);

      setResponse(
        "Unable to connect to SmartCrop AI backend. " +
        "Please make sure the backend is running on port 5000."
      );
    } finally {
      setLoading(false);
    }
  };

  const suggestedQuestion = (question) => {
    setMessage(question);
    setPage("ai");
  };

  return (
    <div className="app">

      <header className="navbar">

        <h2>🌱 SmartCrop AI</h2>

        <nav>

          <button onClick={() => setPage("home")}>
            Home
          </button>

          <button onClick={() => setPage("crops")}>
            Crop Guide
          </button>

          <button onClick={() => setPage("ai")}>
            AI Assistant
          </button>

          <button onClick={() => setPage("about")}>
            About
          </button>

        </nav>

        <span>© 2026 SmartCrop AI 🌱</span>

      </header>

      {page === "home" && (
        <main>

          <section className="hero">

            <div className="hero-content">

              <p className="tagline">
                🌱 SMART FARMING WITH AI
              </p>

              <h1>
                Grow Smarter.
                <br />
                Harvest Better.
              </h1>

              <p>
                SmartCrop AI helps farmers make better
                decisions about crops, soil and farming.
              </p>

              <button
                className="primary-button"
                onClick={() => setPage("ai")}
              >
                🤖 Ask AI Assistant
              </button>

            </div>

            <div className="hero-right">

              <div className="plant-icon">
                🌱
              </div>

              <h2>Smart Farming</h2>

              <p>
                Technology for better agriculture.
              </p>

            </div>

          </section>

          <section className="features">

            <div
              className="feature-card"
              onClick={() => setPage("ai")}
            >

              <div className="feature-icon">
                🤖
              </div>

              <h3>AI Assistant</h3>

              <p>
                Get farming guidance using AI.
              </p>

            </div>

            <div
              className="feature-card"
              onClick={() => setPage("crops")}
            >

              <div className="feature-icon">
                🌾
              </div>

              <h3>Crop Guide</h3>

              <p>
                Explore information about 50 crops.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                ☁️
              </div>

              <h3>Weather</h3>

              <p>
                Get useful weather information.
              </p>

            </div>

            <div className="feature-card">

              <div className="feature-icon">
                📊
              </div>

              <h3>Smart Insights</h3>

              <p>
                Make better farming decisions.
              </p>

            </div>

          </section>

        </main>
      )}

      {page === "crops" && (
        <main className="page">

          <h1>🌾 Crop Guide</h1>

          <p>
            Learn about important crops and their
            growing conditions.
          </p>

          <h3>
            🌱 Showing {crops.length} crops
          </h3>

          <div className="crop-grid">

            {crops.map((crop, index) => (

              <div
                className="card"
                key={index}
              >

                <div className="crop-icon">
                  {crop.icon}
                </div>

                <h2>
                  {crop.name}
                </h2>

                <p>
                  <strong>Season:</strong>{" "}
                  {crop.season}
                </p>

                <p>
                  <strong>Water:</strong>{" "}
                  {crop.water}
                </p>

                <p>
                  <strong>Soil:</strong>{" "}
                  {crop.soil}
                </p>

                <p>
                  <strong>Duration:</strong>{" "}
                  {crop.duration}
                </p>

              </div>

            ))}

          </div>

        </main>
      )}

      {page === "ai" && (
        <main className="page">

          <div className="ai-box">

            <div className="ai-icon">
              🤖
            </div>

            <h1>
              SmartCrop AI Assistant
            </h1>

            <p>
              Ask questions about crops, soil and farming.
            </p>

            <div className="assistant-input">

              <input
                type="text"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                placeholder="Ask your farming question..."
                onKeyDown={(e) => {

                  if (e.key === "Enter") {
                    askAssistant();
                  }

                }}
              />

              <button
                onClick={askAssistant}
                disabled={loading}
              >
                {loading
                  ? "Thinking..."
                  : "Send"}
              </button>

            </div>

            <div className="suggestions">

              <button
                onClick={() =>
                  suggestedQuestion(
                    "Which crop needs less water?"
                  )
                }
              >
                💧 Less water crop
              </button>

              <button
                onClick={() =>
                  suggestedQuestion(
                    "What soil is suitable for rice?"
                  )
                }
              >
                🌾 Rice soil
              </button>

              <button
                onClick={() =>
                  suggestedQuestion(
                    "When should I grow wheat?"
                  )
                }
              >
                🌾 Wheat season
              </button>

              <button
                onClick={() =>
                  suggestedQuestion(
                    "What fertilizer is good for maize?"
                  )
                }
              >
                🌽 Maize fertilizer
              </button>

            </div>

            {response && (

              <div className="assistant-response">

                <h3>
                  🌱 SmartCrop AI
                </h3>

                <div className="response-text">
                  {response}
                </div>

              </div>

            )}

          </div>

        </main>
      )}

      {page === "about" && (
        <main className="page">

          <div className="about-box">

            <h1>
              About SmartCrop AI
            </h1>

            <p>
              SmartCrop AI is an agriculture platform
              designed to help farmers make smarter
              farming decisions using artificial
              intelligence.
            </p>

            <p>
              The platform provides information about
              crops, soil, farming conditions and
              AI-powered farming guidance.
            </p>

            <h2>
              🌱 Our Goal
            </h2>

            <p>
              Our goal is to make useful farming
              technology simple and accessible to farmers.
            </p>

            <h2>
              🌾 Crop Guide
            </h2>

            <p>
              SmartCrop AI currently provides information
              about 50 different crops.
            </p>

          </div>

        </main>
      )}

      <footer>

        <p>
          © 2026 SmartCrop AI 🌱
        </p>

      </footer>

    </div>
  );
}

export default App;