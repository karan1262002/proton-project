import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MagazineCard from '../MagazineCard';

const HomePage = () => {
  const [magazine, setMagazine] = useState({});

  useEffect(() => {
    axios.get('https://bildzeitschrift.netlify.app/.netlify/functions/magOfTheDay')
      .then((response) => {
        setMagazine(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="home-page">
      <h1>{magazine.title}</h1>
      <img src={magazine.image} alt={magazine.title} />
      <p>{magazine.description}</p>
      <div className="magazine-cards">
        {magazine.magazines.map((magazine) => (
          <MagazineCard key={magazine.id} magazine={magazine} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;