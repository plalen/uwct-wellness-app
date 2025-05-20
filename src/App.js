import React, { useState } from "react";

const categories = [
  "Recreation & Exercise",
  "Responsibility & Connection to Nature",
  "Healthy Body",
  "Balanced Mind",
  "Good Heart",
  "Mission & Values",
  "Mental & Emotional Health",
  "Relationships (Platonic & Romantic)",
  "Learning",
  "Physical Health (Sleep & Nutrition)",
  "Sense of Fun",
  "Caring (Self & Others)",
  "Sense of Belonging (Past & Present)",
  "Contribution (Action & Service)",
  "Resilience, Attitude & Outlook",
  "Agency & Voice",
  "Time Use (Balance)"
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
    await fetch("https://script.google.com/macros/s/AKfycbygn5AberHNrhZOJxbdXZS6jO8Aybfi2jnZGdD0bd0GZb_Xj6GiGObkxbaCE1LaTu0A/exec/exec", {
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
    <div className="category">
  <h2>6/10</h2>
  <ul>
    <li>I can bounce back when things are difficult.</li>
    <li>I have a general sense that today and tomorrow will be better than yesterday.</li>
    <li>I am grateful for who I am and what I have.</li>
    <li>I am aware of my attitude and know that it can impact the way I view and interact with the world.</li>
  </ul>
  <p><strong>Score: 6/10</strong></p>
</div>
    <div className="category">
  <h2>6/10</h2>
  <ul>
    <li>I am making academic progress and growing in my abilities.</li>
    <li>I am achieving in line with my expectations.</li>
    <li>I am curious to learn.</li>
  </ul>
  <p><strong>Score: 6/10</strong></p>
</div>
    <div className="category">
  <h2>6/10</h2>
  <ul>
    <li>I have a say in decisions that impact me.</li>
    <li>I have a voice that is listened to and the ability to affect my own life.</li>
  </ul>
  <p><strong>Score: 6/10</strong></p>
</div>
    <div className="category">
  <h2>6/10</h2>
  <ul>
    <li>I make nutritional choices that support my physical and mental wellbeing.</li>
    <li>I get enough sleep so that I generally feel well rested in the morning.</li>
  </ul>
  <p><strong>Score: 6/10</strong></p>
</div>
    <div className="category">
  <h2>6/10</h2>
  <ul>
    <li>I exercise several times per week.</li>
    <li>I feel physically strong and flexible.</li>
    <li>My level of energy is consistently good.</li>
  </ul>
  <p><strong>Score: 6/10</strong></p>
</div>
    <div className="category">
  <h2>6/10</h2>
  <ul>
    <li>I am able to balance my time across work, rest and play.</li>
    <li>I balance my face-to-face interactions with my digital interactions.</li>
  </ul>
  <p><strong>Score: 6/10</strong></p>
</div>
    <div className="category">
  <h2>6/10</h2>
  <ul>
    <li>I make decisions that are sustainable/good for the planet whenever possible.</li>
    <li>I spend time connecting to and being immersed in nature several times per week.</li>
  </ul>
  <p><strong>Score: 6/10</strong></p>
</div>
    <div className="category">
  <h2>6/10</h2>
  <ul>
    <li>I make small decisions and take small actions every day to positively affect the people around me.</li>
    <li>I actively contribute to my community to make it a better place (home, school, etc.)</li>
  </ul>
  <p><strong>Score: 6/10</strong></p>
</div>
    <div className="category">
  <h2>6/10</h2>
  <ul>
    <li>I am connected to where I come from (country, language, culture, religion, etc.)</li>
    <li>I am connected to family and friends that do not live near me.</li>
    <li>I have found a supportive 'tribe' at UWCT (or in Phuket).</li>
    <li>I feel I belong here at UWCT.</li>
  </ul>
  <p><strong>Score: 6/10</strong></p>
</div>
<div className="category">
  <h2>6/10</h2>
  <ul>
    <li>The relationships I choose to be in, support my wellbeing.</li>
    <li>I have a few strong relationships with platonic (non-romantic) friends.</li>
  </ul>
  <p><strong>Score: 6/10</strong></p>
</div>
    <div className="category">
  <h2>6/10</h2>
  <ul>
    <li>I have fun and joy in my life.</li>
    <li>I create or express myself in ways that make me happy.</li>
  </ul>
  <p><strong>Score: 6/10</strong></p>
</div>
      </div>

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
    </div>
  );
}

export default App;
