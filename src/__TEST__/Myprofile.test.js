import { render, screen } from '@testing-library/react'
import store from '../redux/store'
import { Provider } from 'react-redux';
import { addReservedMission, removedMission } from '../redux/missionsSlice';
import { fetchdata } from '../redux/missionsSlice';
import { bookingRocket, getRockets } from '../redux/rocketsSlice';
import Myprofile from '../components/Myprofile';

describe('Test my profile', () => { 
    test('test load component in DOM', async () => {
        await store.dispatch(fetchdata());
        await store.dispatch(getRockets());
        const profile= render ( <Provider store={store}><Myprofile/></Provider> );
        expect(profile).toMatchSnapshot(); 
    })

    test('test mission reserved', async () => {
        await store.dispatch(fetchdata());
        await store.dispatch(getRockets());
        await store.dispatch(addReservedMission('EE86F74'))
        const profile = render ( <Provider store={store}><Myprofile/></Provider> );
        const items = document.querySelectorAll('.mission')
        expect(items).toHaveLength(1);
    })

    test('test rocket reserved', async () => {
        await store.dispatch(fetchdata());
        await store.dispatch(getRockets());
        await store.dispatch(bookingRocket(1))
        const profile = render ( <Provider store={store}><Myprofile/></Provider> );
        const items = document.querySelectorAll('.rockets__card')
        expect(items).toHaveLength(1);
    })
 })