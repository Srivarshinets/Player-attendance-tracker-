import { useEffect, useState } from "react";
import axios from "axios";

function Sessions() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sessions")
      .then((res) => {
        setSessions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
  <div className="sessions-page">
    <h1>Sessions</h1>

    <div className="sessions-grid">
      {sessions.map((session) => (
        <div
          key={session._id}
          className="session-card"
        >
          <h3>
            {session.sessionType === "Morning"
              ? " Morning"
              : " Evening"}
          </h3>

          <p>
            <strong>Age Group:</strong>{" "}
            {session.ageGroup}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {new Date(
              session.date
            ).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  </div>
);
}

export default Sessions;