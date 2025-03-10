import { Link } from "react-router-dom"
import logo from "../logo.png"

export default function Nav() {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/people">People</Link></li>
                    <li><Link to="/locations">Locations</Link></li>
                </ul>
            </nav>
        </div>
    )
}