import './navbar.css';
import imdbLogo from '../../assets/IMDB_Logo_2016.svg.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="custom-nav">
            <div className="nav-items p-1">
                <div className="raper d-flex">
                    <Link to="/"><img src={imdbLogo} className="brand-logo" alt="imdb-logo" /></Link>
                    <div className="menu-items d-flex align-items-center ms-3">
                        <i className="bi bi-list text-white me-1" data-bs-toggle="dropdown" aria-expanded="false"></i>
                        <p className="bootstrap-p">Menu</p>
                        <ul className="dropdown-menu dropdown-menu-dark mt-2">
                            <li><Link to="/popular" className="dropdown-item" >IMDb Top 250</Link></li>
                            <li><Link className="dropdown-item" to="/">Top Searched</Link></li>
                            <li><Link to="/" className="dropdown-item" href="/">Top Grossing</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="input-box d-flex align-items-center">
                    <label className="all-label">ALL</label>
                    <input className="custom-input" type="text" placeholder="Search IMDb" />
                    <i className="bi bi-search search-icon"></i>
                </div>
                <div className="wrapper-class">
                    <div className="d-flex align-items-center">
                        <div className="imdb-pro text-white me-2">
                            <p>IMDb<span>Pro</span></p>
                        </div>
                        <hr className="vertical-hr me-2" />
                        <div className="watchlist d-flex text-white me-2">
                            <i className="bi bi-bookmark-plus-fill me-1"></i>
                            <p className="bootstrap-p">Watchlist</p>
                        </div>
                    </div>
                </div>
                <div className="sign-in text-white">
                    <p className="bootstrap-p">Sign In</p>
                </div>
                <div className="language">
                    <div className="d-flex text-white">
                        <p className="bootstrap-p">EN</p>
                        <i className="bi bi-caret-down-fill"></i>
                    </div>
                </div>
                <div className="use-app-btn">
                    <button type="button" className="btn btn-sm btn-warning">Use app</button>
                </div>
            </div>
        </div>
    );
}
export default Navbar;