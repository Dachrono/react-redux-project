import React from 'react';
import { useSelector } from 'react-redux';

function Myprofile() {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.isReserved);
  return (
    <>
      <div>
        <h2>My Rockets</h2>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>
              <div className="rockets__card" key={rocket.id}>
                <img
                  className="rockets__card__img"
                  src={rocket.flickr_images?.[0]}
                  alt={rocket.rocket_name}
                />
                <div>
                  <h2 className="rockets__card__title">{rocket.rocket_name}</h2>
                  <p>{rocket.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Myprofile;
