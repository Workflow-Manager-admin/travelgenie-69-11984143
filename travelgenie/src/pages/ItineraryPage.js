import React, { useState } from "react";

// PUBLIC_INTERFACE
function ItineraryPage() {
  /**
   * Renders the Itinerary Page with form fields for 'From', 'To', 'Start Date', and 'End Date',
   * and a 'Generate Itinerary' button. Manages input state and provides a clear, structured UI.
   */
  const [form, setForm] = useState({
    from: "",
    to: "",
    startDate: "",
    endDate: "",
  });

  // Handles input field updates
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In future: trigger itinerary generation here
  };

  return (
    <div>
      <div className="title" style={{ fontSize: "2rem", marginBottom: 10, color: "#1E90FF" }}>
        Plan Your Trip
      </div>
      <div className="description" style={{ maxWidth: 600, marginBottom: 22 }}>
        Enter your trip details to generate a personalized itinerary.
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(30,144,255,0.08)",
          padding: 28,
          marginBottom: 32,
          maxWidth: 440,
          color: "#1A1A1A"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <label htmlFor="from">
              From<span style={{ color: "#1E90FF" }}>*</span>:
              <input
                id="from"
                required
                type="text"
                name="from"
                value={form.from}
                onChange={handleChange}
                className="input"
                placeholder="e.g., Mumbai"
                style={{
                  padding: "7px 10px",
                  width: "100%",
                  border: "1px solid #B3D5FF",
                  borderRadius: 4,
                  fontSize: "1rem",
                  marginTop: 4
                }}
                autoComplete="off"
              />
            </label>
          </div>
          <div>
            <label htmlFor="to">
              To<span style={{ color: "#1E90FF" }}>*</span>:
              <input
                id="to"
                required
                type="text"
                name="to"
                value={form.to}
                onChange={handleChange}
                className="input"
                placeholder="e.g., Goa"
                style={{
                  padding: "7px 10px",
                  width: "100%",
                  border: "1px solid #B3D5FF",
                  borderRadius: 4,
                  fontSize: "1rem",
                  marginTop: 4
                }}
                autoComplete="off"
              />
            </label>
          </div>
          <div>
            <label htmlFor="startDate">
              Start Date<span style={{ color: "#1E90FF" }}>*</span>:
              <input
                id="startDate"
                required
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="input"
                style={{
                  padding: "7px 10px",
                  width: "100%",
                  border: "1px solid #B3D5FF",
                  borderRadius: 4,
                  fontSize: "1rem",
                  marginTop: 4
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="endDate">
              End Date<span style={{ color: "#1E90FF" }}>*</span>:
              <input
                id="endDate"
                required
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                className="input"
                style={{
                  padding: "7px 10px",
                  width: "100%",
                  border: "1px solid #B3D5FF",
                  borderRadius: 4,
                  fontSize: "1rem",
                  marginTop: 4
                }}
              />
            </label>
          </div>
          <button
            className="btn btn-large"
            type="submit"
            style={{
              background: "#1E90FF",
              color: "#fff",
              minWidth: 160,
              marginTop: 13,
              fontSize: "1.12rem",
              fontWeight: 600
            }}
          >
            Generate Itinerary
          </button>
        </div>
      </form>
    </div>
  );
}

export default ItineraryPage;
