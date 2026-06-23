import { useEffect, useState } from "react";
import axios from "axios";
import PlayerCard from "../components/Playercard";

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then((res) => {
        console.log(res.data);
        setPlayers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Players</h1>

      <div className="players-grid">
  {players.map((player) => (
    <PlayerCard
      key={player._id}
      player={player}
    />
  ))}
</div>
    </div>
  );
}

export default Players;