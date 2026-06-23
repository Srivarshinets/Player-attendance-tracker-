import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [players, setPlayers] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [attendance, setAttendance] = useState([]);


  const fetchData = async () => {
    try {
      const playersRes = await api.get("/players");
      const sessionsRes = await api.get("/sessions");
      const attendanceRes = await api.get("/attendance");

      setPlayers(playersRes.data);
      setSessions(sessionsRes.data);
      setAttendance(attendanceRes.data);
    } catch (error) {
      console.error(error);
    }
  };

   useEffect(() => {
    fetchData();
  }, []);

  return (
    <>

      <div className="dashboard">
        <div className="welcome-section">
      <h1>Hello Coach!</h1>
    </div>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Players</h3>
            <h2>{players.length}</h2>
          </div>

          <div className="card">
            <h3>Total Sessions</h3>
            <h2>{sessions.length}</h2>
          </div>

          <div className="card">
            <h3>Attendance Records</h3>
            <h2>{attendance.length}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;