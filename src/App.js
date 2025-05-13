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
    await fetch("https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbygn5AberHNrhZOJxbdXZS6jO8Aybfi2jnZGdD0bd0GZb_Xj6GiGObkxbaCE1LaTu0A/exec/exec", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    alert("Submission received. Thank you!");
  };

  return (
    <div style={{ padding: "20px", maxWidth: 600, margin: "auto" }}>
      <h1>UWCT Wellness Wheel</h1>
      {categories.map((category, index) => (
        <div key={index}>
          <label>{category}: {ratings[index]}</label>
          <input
            type="range"
            min="1"
            max="10"
            value={ratings[index]}
            onChange={(e) => handleSliderChange(index, parseInt(e.target.value))}
          />
        </div>
      ))}
      <div>
        <label>Grade Level (required):</label>
        <input value={grade} onChange={(e) => setGrade(e.target.value)} required />
      </div>
      <div>
        <label>Name (optional):</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Reflections (optional):</label>
        <textarea value={reflections} onChange={(e) => setReflections(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
