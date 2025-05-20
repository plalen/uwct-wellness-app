import React, { useState } from 'react';

const DEFAULT_SCORE = 6;

const CATEGORIES = [
  { name: 'Mental & Emotional Health', key: 'mental' },
  { name: 'Resilience, Attitude & Outlook', key: 'resilience' },
  { name: 'Learning', key: 'learning' },
  { name: 'Agency & Voice', key: 'agency' },
  { name: 'Physical Health', key: 'physical' },
  { name: 'Recreation & Exercise', key: 'recreation' },
  { name: 'Time Use', key: 'time' },
  { name: 'Responsibility & Nature', key: 'responsibility' },
  { name: 'Contribution', key: 'contribution' },
  { name: 'Sense of Belonging', key: 'belonging' },
  { name: 'Relationships', key: 'relationships' },
  { name: 'Sense of Fun', key: 'fun' },
];

function App() {
  const [scores, setScores] = useState(
    Object.fromEntries(CATEGORIES.map((cat) => [cat.key, DEFAULT_SCORE]))
  );
  const [grade, setGrade] = useState('');
  const [name, setName] = useState('');
  const [reflection, setReflection] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!grade) {
      alert("Please select your grade.");
      return;
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name,
      grade,
      reflection,
      ...scores,
    };

    try {
      await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
    } catch (err) {
      console.error('Submission failed:', err);
      alert('Failed to submit. Please try again later.');
    }
  };

  if (submitted) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Thank you for your submission!</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Wellness Wheel Assessment</h1>

      <div style={{ marginBottom: 10 }}>
        <label>
          Name (optional): <br />
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>
          Grade (required): <br />
          <input
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </label>
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>
          Reflection (optional): <br />
          <textarea
            rows={3}
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
          />
        </label>
      </div>

      {CATEGORIES.map((cat) => (
        <div key={cat.key} style={{ marginBottom: 20 }}>
          <label>{cat.name}: {scores[cat.key]}</label>
          <input
            type="range"
            min={1}
            max={10}
            value={scores[cat.key]}
            onChange={(e) =>
              setScores({ ...scores, [cat.key]: parseInt(e.target.value) })
            }
          />
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
