import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav className = "navbar">
            <h1> WFC Football Club</h1>
            <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/players">Players</Link>
                <Link to="/sessions">Sessions</Link>
                <Link to="/attendance">Attendance</Link>
            </div>
        </nav>
    );
}

export default Navbar;