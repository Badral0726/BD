import logo from "./logo.png";
import { useState } from "react";

function Navbar()
{
    const [ID,setID] = useState("");
    const [data, setData] = useState([]);

    const fetchData = async () =>
    {   
        try {
            if (ID.trim() === "") {
              // If ID is empty or contains only whitespace, clear the data
              setData([]);
              return;
            }
      
            const link = "http://localhost:5000/search/" + ID;
            const response = await fetch(link);
            const result = await response.json();
            if (result && result.length > 0) 
            {
                const updatedData = result.map(item => ({
                ...item,
                Local_URL: `/movies/${item.id}`,
                fullImageUrl: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                rDate: item.release_date.substring(0,4),

            }));
            setData(updatedData)
            }
          } 
        catch (error) 
        {
            console.log(error);
        }
    }

    return (
        <div className="navbar">
            <div className="flex logo">
                <a href="/">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <div className="flex search">
                <form action="" onChange={(e) => {e.preventDefault(); fetchData();}}>
                    <input type="search" placeholder="Enter movie title" onChange={(e)=> setID(e.target.value)}/>
                </form>
                    {data.length > 0 && (<div className="result-movie">
                        {data.map(item =>(
                            <a className="perMovie" href={item.Local_URL}>
                                <div className="imgDisplay">
                                    <img src={item.fullImageUrl}></img>
                                </div>
                                <div className="nameDisplay">
                                    <h4>{item.title}</h4>
                                </div>
                            </a>
                        ))}
                    </div>
                    )}
            </div>
            <ul className="links">
                <li className="f"><a href="/login">Login</a></li>
                <li className="f"><a href="/Reg">Register</a></li>
            </ul>
        </div>
    );
}

export default Navbar