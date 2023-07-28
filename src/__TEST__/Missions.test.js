import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import '@testing-library/jest-dom';
import store from '../redux/store';
import { fetchdata } from '../redux/missionsSlice';

describe('Test missions component', () => {
  test('Test render DOM', async () => {
    await store.dispatch(fetchdata());
    const missions = render(<Provider store={store}><Missions /></Provider>);
    expect(missions).toMatchSnapshot();
  });

  test('Test click button function', async () => {
    await store.dispatch(fetchdata());
    render(<Provider store={store}><Missions /></Provider>);
    const buttons = document.querySelectorAll('.graybtn');
    fireEvent.click(buttons[0]);
    const newBut = screen.getByText('Leave Mission');
    expect(newBut).toBeInTheDocument();
  });
});
