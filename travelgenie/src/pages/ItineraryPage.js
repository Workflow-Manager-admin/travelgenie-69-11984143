import React, { useState } from "react";

// PUBLIC_INTERFACE
function ItineraryPage() {
  /**
   * Renders the Itinerary Page for entering a starting location and destination.
   * Captures and reflects user input for the "From" and "To" fields.
   */
  const [form, setForm] = useState({
    from: "",
    to: "",
  });

  // Handles changes to input fields and updates component state accordingly
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Optionally handle form submit, though simply capturing and reflecting state is required here
  function handleSubmit(e) {
    e.preventDefault();
    // Optionally you may process or validate/forward data here
    // For now, do nothing more: state is already set
  }

  return (
    <div>
      <div className="title" style={{ fontSize: "2rem", marginBottom: 10, color: "#1E90FF" }}>
        Plan Your Trip
      </div>
      <div className="description" style={{ maxWidth: 600, marginBottom: 22 }}>
        Provide your departure and destination locations.
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
          color: "#1A1A1A",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <label>
              From<span style={{ color: "#1E90FF" }}>*</span>:
              <input
                required
                type="text"
                name="from"
                value={form.from}
                onChange={handleChange}
                className="input"
                placeholder="Enter starting location"
                style={{
                  padding: "7px 10px",
                  width: "100%",
                  border: "1px solid #B3D5FF",
                  borderRadius: 4,
                  fontSize: "1rem",
                  marginTop: 4,
                  marginBottom: 0,
                }}
              />
            </label>
          </div>
          <div>
            <label>
              To<span style={{ color: "#1E90FF" }}>*</span>:
              <input
                required
                type="text"
                name="to"
                value={form.to}
                onChange={handleChange}
                className="input"
                placeholder="Enter destination"
                style={{
                  padding: "7px 10px",
                  width: "100%",
                  border: "1px solid #B3D5FF",
                  borderRadius: 4,
                  fontSize: "1rem",
                  marginTop: 4,
                  marginBottom: 0,
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
              alignSelf: "start",
              minWidth: 120,
              marginTop: 8,
              fontSize: "1.08rem"
            }}
          >
            Submit
          </button>
        </div>
      </form>
      {/* Visual feedback below the form */}
      <div style={{ marginTop: 18, color: "#222", background: "#F6F8FF", padding: "18px 20px", borderRadius: 6, maxWidth: 410 }}>
        <div style={{ fontWeight: 600, color: "#1E90FF", marginBottom: 7 }}>Current Inputs:</div>
        <div><b>From:</b> {form.from || <span style={{ color: "#888" }}>—</span>}</div>
        <div><b>To:</b> {form.to || <span style={{ color: "#888" }}>—</span>}</div>
      </div>
    </div>
  );
}

export default ItineraryPage;
