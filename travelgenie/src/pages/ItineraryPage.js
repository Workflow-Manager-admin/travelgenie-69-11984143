import React, { useState } from "react";

// PUBLIC_INTERFACE
function ItineraryPage() {
  /**
   * Renders the Itinerary Page for creating AI-generated travel itineraries.
   * Contains input form and displays generated itinerary as cards/timeline.
   */
  const [form, setForm] = useState({
    destination: "",
    start: "",
    end: "",
    budget: "",
    preferences: "",
  });
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Mocked AI call
  async function handleSubmit(e) {
    e.preventDefault();
    setItinerary(null);
    setLoading(true);
    setError("");
    // Simulating AI call. Replace with real API as needed
    try {
      await new Promise((res) => setTimeout(res, 1200));
      // "Generate" itinerary 
      const dayCount =
        form.start && form.end
          ? Math.max(
              1,
              Math.ceil(
                (new Date(form.end) - new Date(form.start)) / (1000 * 3600 * 24)
              ) + 1
            )
          : 3;
      let demoPrefs = form.preferences
        ? `${form.preferences.charAt(0).toUpperCase()}${form.preferences.slice(
            1
          )}`
        : "Sightseeing, Local Cuisine, Culture";
      let plan = [];
      for (let i = 0; i < dayCount; i++) {
        plan.push({
          day: i + 1,
          summary: `Highlights of ${form.destination || "your destination"}`,
          activities: [
            `${demoPrefs} activity in the morning`,
            `Lunch at a recommended spot`,
            `Leisure time / Local tour in afternoon`,
            `Evening: Explore downtown`,
          ],
        });
      }
      setItinerary({
        destination: form.destination,
        start: form.start,
        end: form.end,
        days: plan,
      });
    } catch (err) {
      setError("Sorry, failed to generate itinerary. Please try again.");
    }
    setLoading(false);
  }

  return (
    <div>
      <div className="title" style={{ fontSize: '2rem', marginBottom: 10, color: "#1E90FF" }}>
        AI Itinerary Generator
      </div>
      <div className="description" style={{ maxWidth: 600, marginBottom: 22 }}>
        Enter trip info below for your custom day-by-day travel plan powered by AI.
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(30,144,255,0.08)",
          padding: 28,
          marginBottom: 32,
          maxWidth: 500,
          color: "#1A1A1A",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label>
              Destination<span style={{color:"#1E90FF"}}>*</span>:<br/>
              <input
                required
                autoFocus
                name="destination"
                value={form.destination}
                onChange={handleChange}
                className="input"
                style={{
                  padding: "7px 10px",
                  width: "100%",
                  border: "1px solid #B3D5FF",
                  borderRadius: 4,
                  fontSize: "1rem",
                  marginTop: 2,
                }}
                placeholder="e.g. Paris"
              />
            </label>
          </div>
          <div>
            <label>
              Start Date:<br/>
              <input
                type="date"
                name="start"
                value={form.start}
                onChange={handleChange}
                className="input"
                style={{
                  padding: "7px 10px",
                  border: "1px solid #B3D5FF",
                  borderRadius: 4,
                  fontSize: "1rem",
                  marginTop: 2,
                }}
              />
            </label>
            <span style={{ margin: "0 8px" }}>—</span>
            <label>
              End Date:
              <input
                type="date"
                name="end"
                value={form.end}
                onChange={handleChange}
                className="input"
                style={{
                  padding: "7px 10px",
                  border: "1px solid #B3D5FF",
                  borderRadius: 4,
                  fontSize: "1rem",
                  marginLeft: 4,
                  marginTop: 2,
                }}
              />
            </label>
          </div>
          <div>
            <label>
              Budget (USD):<br/>
              <input
                type="number"
                name="budget"
                value={form.budget}
                min={0}
                onChange={handleChange}
                className="input"
                style={{
                  padding: "7px 10px",
                  width: 180,
                  border: "1px solid #B3D5FF",
                  borderRadius: 4,
                  fontSize: "1rem",
                  marginTop: 2,
                }}
                placeholder="e.g. 1500"
              />
            </label>
          </div>
          <div>
            <label>
              Preferences:<br/>
              <input
                type="text"
                name="preferences"
                value={form.preferences}
                onChange={handleChange}
                className="input"
                style={{
                  padding: "7px 10px",
                  width: "100%",
                  border: "1px solid #B3D5FF",
                  borderRadius: 4,
                  fontSize: "1rem",
                  marginTop: 2,
                }}
                placeholder="e.g. beach, museums, hiking"
              />
            </label>
          </div>
          <button
            className="btn btn-large"
            type="submit"
            style={{
              background: "#1E90FF",
              color: "#fff",
              alignSelf: "start",
              minWidth: 120,
              marginTop: 8,
              fontSize: "1.08rem"
            }}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Itinerary"}
          </button>
        </div>
        {error && (
          <div style={{ color: "#e0383f", marginTop: 12, fontSize: "1rem" }}>
            {error}
          </div>
        )}
      </form>

      {itinerary && (
        <div>
          <div className="subtitle" style={{color:"#1E90FF", fontWeight: 600, marginBottom: 12, fontSize:"1.22rem"}}>
            Your AI-generated Trip to <span style={{color:"#FFB300"}}>{itinerary.destination}</span>
          </div>
          <div className="description" style={{marginBottom:24}}>
            {itinerary.start && itinerary.end ?
              <> {itinerary.days.length} days: <b>{itinerary.start}</b> to <b>{itinerary.end}</b></> :
              <>Plan Overview • <b>{itinerary.days.length} days</b></>
            }
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 22 }}>
            {itinerary.days.map((d, i) => (
              <div
                key={i}
                style={{
                  background: "#F6F9FF",
                  borderLeft: "5px solid #1E90FF",
                  borderRadius: 5,
                  boxShadow: "0 2px 6px rgba(30,144,255,0.04)",
                  padding: "18px 22px 14px 18px",
                  marginBottom: 2,
                  color: "#222"
                }}
              >
                <div style={{ fontSize: "1.08rem", color: "#1E90FF", fontWeight: 600 }}>
                  Day {d.day}
                </div>
                <div style={{ fontWeight: 500, marginBottom: 6 }}>{d.summary}</div>
                <ul style={{ paddingLeft: "22px", marginBottom: 2 }}>
                  {d.activities.map((act, j) => (
                    <li key={j} style={{ fontSize: "1.01rem" }}>{act}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ItineraryPage;
