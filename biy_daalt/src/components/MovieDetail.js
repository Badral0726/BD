import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "./navbar"
import Footer from "./footer"
import "../APP3.css"

const MovieDisplay = () => {
  const { ID } = useParams();
  const [data, setData] = useState([]);
  const [genreMapping, setGenreMapping] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/movies/${ID}`);
        const genre = await fetch("http://localhost:5000/genre");
        const result = await response.json();
        const genreResult = await genre.json();

        const genreMap = {};
        genreResult.forEach(genre => {
          genreMap[genre.id] = genre.name;
        });

        setGenreMapping(genreMap);

        if (result && result.length > 0) 
        {
          const updatedData = result.map(item => ({
            ...item,
            Local_URL: `/movies/${item.id}`,
            fullImageUrl: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            fullBackUrl: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
            rDate: item.release_date.substring(0,4),
            rating: item.vote_average.toFixed(1),
            poop: item.popularity.toFixed(0),
            genreNames: item.genre_ids.map(id => genreMap[id]+" "),
          }));
          setData(updatedData)
        } 
      }catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <Navbar/>
            <div className="dark-overlay"></div>
            {data.map(item=>(
              <div className='body' style={{ backgroundImage: `url(${item.fullBackUrl})`}}>
                <div className='MoviePoster'>
                  <div className='PosterContainer'>
                    <img src={item.fullImageUrl}></img>
                  </div>
                </div>
                <div className='MovieDetails'>
                  <h1 style={{color:"white"}}>{item.title}</h1>
                  <h3 style={{color:"white"}}>{item.rDate}</h3>
                  <h3 style={{color:"white"}}>Language: {item.original_language}</h3>
                  <h3 style={{color:"white"}}>Popularity: {item.poop} (Popularity on IMDB)</h3>
                  <h3 style={{color:"white"}}>Rating: {item.rating}/10 (Rating on IMDB)</h3>
                  <h3 style={{color:"white"}}>Description: </h3>
                  <h3 style={{color:"white"}}>{item.overview}</h3>
                </div>
              </div>
            ))}
        <Footer/>
    </div>

  );
};

export default MovieDisplay;
