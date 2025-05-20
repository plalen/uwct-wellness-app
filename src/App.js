import React, { useState } from "react";

const categories = [
  "Mental & Emotional Health"
];

function App() {
  const [ratings, setRatings] = useState(Array(categories.length).fill(6));
  const [grade, setGrade] = useState("");
  const [name, setName] = useState("");
  const [reflections, setReflections] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSliderChange = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const handleSubmit = async () => {
    const payload = {
      name,
      grade,
      ratings,
      reflections,
      timestamp: new Date().toISOString()
    };
    await fetch("https://script.google.com/macros/s/AKfycbygn5AberHNrhZOJxbdXZS6jO8Aybfi2jnZGdD0bd0GZb_Xj6GiGObkxbaCE1LaTu0A/exec", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: "40px", textAlign: "center", fontFamily: "Segoe UI, sans-serif" }}>
        <img src="/uwct-logo.png" alt="UWCT Logo" style={{ maxWidth: "200px", marginBottom: "30px" }} />
        <h2>Thank you!</h2>
        <p>Your wellness check-in has been submitted.</p>
      </div>
    );
  }

  return (
    <div style={{
      padding: "30px",
      maxWidth: "700px",
      margin: "auto",
      fontFamily: "'Segoe UI', sans-serif",
      background: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <div style={{ textAlign: "center" }}>
        <img src="/uwct-logo.png" alt="UWCT Logo" style={{ maxWidth: "200px", marginBottom: "20px" }} />
        <h1 style={{ color: "#005f73" }}>UWCT Wellness Wheel</h1>
      </div>

      <section>
        <h2>Category Descriptions</h2>
        <div className="category">
          <h2>Mental & Emotional Health</h2>
          <ul>
            <li>I am aware of my thoughts and feelings and am able to manage them.</li>
            <li>I have trusted adults I can talk to.</li>
            <li>I am aware when I feel stress and know positive choices I can make to help me feel more balanced.</li>
            <li>I feel able to concentrate and focus in a range of different situations.</li>
          </ul>
          <p><strong>Score: 6/10</strong></p>
        </div>
      </section>

      <section>
        <h2>Self Check-In</h2>
        {categories.map((category, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <label>{category}: <strong>{ratings[index]}</strong></label>
            <input
              type="range"
              min="1"
              max="10"
              value={ratings[index]}
              onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>
        ))}

        <div>
          <label>Grade Level (required):</label>
          <input
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            style={{ width: "100%", padding: "8px", margin: "8px 0", borderRadius: "6px", border: "1px solid #ccc" }}
            required
          />
        </div>
        <div>
          <label>Name (optional):</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px", marginBottom: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </div>
        <div>
          <label>Reflections (optional):</label>
          <textarea
            value={reflections}
            onChange={(e) => setReflections(e.target.value)}
            style={{ width: "100%", height: "80px", padding: "8px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px" }}
          />
        </div>
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#005f73",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            width: "100%"
          }}
        >
          Submit
        </button>
      </section>
    </div>
  );
}

export default App;
