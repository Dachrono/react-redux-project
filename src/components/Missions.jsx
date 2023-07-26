import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import '../styles/Missions.css';
import { fetchdata } from '../redux/slices';

const Missions = () => {
  const Tigger = useDispatch();

  useEffect(() => {
    Tigger(fetchdata());
  });

  const { info, isLoading, error } = useSelector((state) => state.missions);

  if (isLoading === true) {
    return <div className="loading">Loading...</div>;
  }

  if (error !== undefined) {
    return <div className="error">{error}</div>;
  }

  const infoMap = info.map((item) => (
    <tr key={item.mission_id}>
      <th>{item.mission_name}</th>
      <th>{item.description}</th>
      <th>membership</th>
      <th>
        <button type="button">status</button>
      </th>
    </tr>
  ));

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
          <tbody>{infoMap}</tbody>
        </table>
      </div>
    </>
  );
};

export default Missions;
