import React from 'react';

const MagazineCard = ({ magazine }) => {
  return (
    <div className="magazine-card">
      <h2>{magazine.title}</h2>
      <img src={magazine.image} alt={magazine.title} />
      <p>{magazine.description}</p>
    </div>
  );
};

export default MagazineCard;