import React, { useState, useEffect } from 'react';

const Main = () => {
  const [data, setData] = useState([]);
  const [genreMapping, setGenreMapping] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/data');
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
            rDate: item.release_date.substring(0,4),
            rating: item.vote_average.toFixed(1),
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
    <div className='mainer'>
      <div className='submainer'>
        <div className='grid-container'>
        {data.map(item => (
          <a href={item.Local_URL} key={item._id} className='itemer'>
            <div className='image-container'>
              <img src={item.fullImageUrl} alt={item.title} className='imager'></img>
            </div>
            <div className='invinsible'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg' className='logoer' alt="imdb"></img>
              <h3 className='ratinger'>{item.rating}/10</h3>
              <h2 className='genrer'>{item.genreNames}</h2>
            </div>
            <h3 style={{color: "#ffffff"}} className='titler'>{item.title}</h3>
          </a>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
