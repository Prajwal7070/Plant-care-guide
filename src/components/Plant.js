import React from 'react';

const PlantSection = () => {
  return (
    <main className="plant container">
      <div className="plant-content">
        <h1>Welcome to</h1>
        <h2>Plant Care</h2>
        <p>
          Caring for plants can be very rewarding.<br/>
          This website teaches you make tips on<br/> 
          how to grow up healthy plants. 
        </p>
      </div>
      <div className="hero-image">
        <img src="https://thumbs.dreamstime.com/b/kids-planting-trees-green-park-kids-planting-trees-green-park-boys-girl-gardening-161463925.jpg" alt="plant" className="responsive-image" />
      </div>
    </main>
  );
};

export default PlantSection;
