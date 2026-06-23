function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <h3>{player.name}</h3>

      <p>Age Group: {player.ageGroup}</p>

      <p>Booked Sessions: {player.bookedSessions}</p>

      <p>Used Sessions: {player.usedSessions}</p>
    </div>
  );
}

export default PlayerCard;