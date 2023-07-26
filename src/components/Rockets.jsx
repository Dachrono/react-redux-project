import { useState, useEffect } from 'react';
import '../styles/Rockets.css';

const Rockets = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await fetch('https://api.spacexdata.com/v3/rockets');
      const data = await response.json();
      const rocketsMap = data.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images,
      }));
      setRockets(rocketsMap);
    };
    fetchRockets()
      .catch((error) => error.message);
  });

  return (
    <div className="rockets__container">
      {rockets.map((rocket) => (
        <div className="rockets__card" key={rocket.id}>
          <img
            src={rocket.flickr_images?.[0]}
            width="180px"
            alt={rocket.rocket_name}
          />
          <div>
            <h4>{rocket.rocket_name}</h4>
            <p>{rocket.description}</p>
            <button type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
