import logo from "./logo.png";

function Navbar()
{
    return (
        <div className="navbar">
            <div className="flex logo">
                <a href="/">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className="flex search">
                <form action="/search">
                    <input type="search" placeholder="Enter movie title"/>
                </form>
            </div>
            <ul className="links">
                <li className="f"><a href="/login">Login</a></li>
                <li className="f"><a href="/Reg">Register</a></li>
            </ul>
        </div>
    );
}

export default Navbar