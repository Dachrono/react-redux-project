import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rocketsSlice';
import '../styles/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets.length]);

  return (
    <div className="rockets__container">
      {rockets.map((rocket) => (
        <div className="rockets__card" key={rocket.id}>
          <img src={rocket.flickr_images?.[0]} width="180px" alt={rocket.rocket_name} />
          <div>
            <h4>{rocket.rocket_name}</h4>
            <p>{rocket.description}</p>
            <button className="rockets__reserveBtn" type="button">
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
