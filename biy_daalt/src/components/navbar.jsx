function navbar()
{
    return (
        <div className="navbar">
            <div className="logo">
                <a href="/">
                    <img src="biy_daalt\public\index.html" alt="home" />
                </a>
            </div>
            <div className="search">
                <form action="/search">
                    <input type="text" placeholder="Enter movie name"/>
                </form>
            </div>
            <ul>
                <li><a href="/login">Login</a></li>
                <li><a href="/Reg">Register</a></li>
            </ul>
        </div>
    );
}

export default navbar