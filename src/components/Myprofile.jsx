import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/profile.css';

function Myprofile() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.missions.info);

  const reservedRockets = rockets.filter((rocket) => rocket.isReserved);
  const reservedMissions = missions.filter((item) => item.reserved);

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
        <h2>My missions</h2>
        {reservedMissions.map((item) => (
          <div className="mission" key={item.mission_id}>
            <h3>{item.mission_name}</h3>
            <p>{item.description}</p>
          </div>
        ))}

      </div>
    </>
  );
}

export default Myprofile;
