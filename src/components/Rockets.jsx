import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, bookingRocket, cancelBooking } from '../redux/rocketsSlice';
import '../styles/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets.length]);

  const handleBooking = (rocketId, reserved) => {
    if (reserved) {
      dispatch(cancelBooking(rocketId));
    } else {
      dispatch(bookingRocket(rocketId));
    }
  };

  return (
    <div className="rockets__container">
      {rockets.map((rocket) => (
        <div className="rockets__card" key={rocket.id}>
          <img
            className="rockets__card__img"
            src={rocket.flickr_images?.[0]}
            alt={rocket.rocket_name}
          />
          <div>
            <h2 className="rockets__card__title">{rocket.rocket_name}</h2>
            <p>
              {rocket.isReserved && <span className="rockets__card__badge">Reserved</span>}
              {rocket.description}
            </p>
            {!rocket.isReserved && (
              <button
                className="rockets__reserveBtn"
                type="button"
                onClick={() => handleBooking(rocket.id, rocket.isReserved)}
              >
                Book now!
              </button>
            )}

            {rocket.isReserved && (
              <button
                className="rockets__cancelBtn"
                type="button"
                onClick={() => handleBooking(rocket.id, rocket.isReserved)}
              >
                Cancel Booking
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
