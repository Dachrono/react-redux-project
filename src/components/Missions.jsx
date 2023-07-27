import { useDispatch, useSelector } from 'react-redux';
import '../styles/Missions.css';
import { addReservedMission, removedMission } from '../redux/missionsSlice';

const Missions = () => {
  const Tigger = useDispatch();

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
      <th>
        {item.reserved
          ? (<span className="blue">Active Member</span>)
          : (<span className="gray">Not a member</span>)}
      </th>
      <th>
        {item.reserved
          ? (<button type="button" className="pinkbtn" onClick={() => { Tigger(removedMission(item.mission_id)); }}>Leave Mission</button>)
          : (<button type="button" className="graybtn" onClick={() => { Tigger(addReservedMission(item.mission_id)); }}>Join Mission</button>)}
      </th>
    </tr>
  ));

  return (
    <>
      <div className="test" />
      <div className="titles">
        <table>
          <thead>
            <tr className="tableHead">
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
