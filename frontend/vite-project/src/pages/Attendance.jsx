import { useEffect, useState } from "react";
import api from "../services/api";

function Attendance() {
  const [players, setPlayers] = useState([]);
  const [sessions, setSessions] = useState([]);

  const fetchPlayers = async () => {
    try {
      const res = await api.get("/players");
      setPlayers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSessions = async () => {
    try {
      const res = await api.get("/sessions");
      setSessions(res.data);
    } catch (error) {
      console.error(error);
    }
  };


   useEffect(() => {
    fetchPlayers();
    fetchSessions();
  }, []);

const [selectedSession, setSelectedSession] = useState("");

const [attendanceData, setAttendanceData] = useState({});
const saveAttendance = async () => {
  try {
    for (const player of players) {
  await api.post("/attendance/mark", {
    playerId: player._id,
    sessionId: selectedSession,
    status: attendanceData[player._id] || "Regular",
    markedBy: ["6a363ec284e9625d34c4c278", "6a363ec284e9625d34c4c279"]
  });
}

    alert("Attendance Saved Successfully");
  } catch (error) {
  console.error(error);

  alert(
    error.response?.data?.message ||
    "Error Saving Attendance"
  );
}
};

  return (
    <div className="attendance-page">
      <h1>Attendance</h1>

      <h2>Session</h2>
<div className="session-selector">
<select
  value={selectedSession}
  onChange={(e) => setSelectedSession(e.target.value)}
>
  <option value="">Select Session</option>

  {sessions.map((session) => (
    <option key={session._id} value={session._id}>
      {session.sessionType} - {session.ageGroup}
    </option>
  ))}
</select>
</div>
      <hr />

      <h2>Players</h2>
<div className="attendance-grid">
{players.map((player) => (
  <div
  key={player._id}
  className="attendance-card"
>
  <h3>{player.name}</h3>

  <p>{player.ageGroup}</p>

  <select
    value={attendanceData[player._id] || "Regular"}
    onChange={(e) =>
      setAttendanceData({
        ...attendanceData,
        [player._id]: e.target.value,
      })
    }
  >
    <option value="Regular">Regular</option>
    <option value="Complimentary">Complimentary</option>
    <option value="Absent">Absent</option>
  </select>
</div>
))}
</div>
<button className ="save-btn" onClick={saveAttendance}>
  Save Attendance
</button>
    </div>
  );
}

export default Attendance;