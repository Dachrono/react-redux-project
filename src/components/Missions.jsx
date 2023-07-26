import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import '../styles/Missions.css';
import { fetchdata } from '../redux/slices';

const Missions = () => {
  const Tigger = useDispatch();

  useEffect(() => { Tigger(fetchdata()); }, []);

  return (
    <>
      <div className="test" />
      <div className="titles">
        <table>
          <thead>
            <tr>
              <th>Missions</th>
              <th>Description</th>
              <th>Status</th>
              <th> </th>
            </tr>
          </thead>
          {}
        </table>
      </div>
    </>
  );
};

export default Missions;
