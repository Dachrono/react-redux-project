import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getRockets } from '../redux/rocketsSlice';

const mockStore = configureStore([thunk]);

describe('getRockets', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [],
        isLoading: false,
        error: null,
      },
    });
  });

  it('should fetch rockets and update state on successful response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([
        {
          id: 'rocket1',
          rocket_name: 'Rocket 1',
          description: 'Rocket 1 Description',
          flickr_images: [],
          isReserved: false,
        },
        {
          id: 'rocket2',
          rocket_name: 'Rocket 2',
          description: 'Rocket 2 Description',
          flickr_images: [],
          isReserved: false,
        },
      ]),
    });

    await store.dispatch(getRockets());

    const actions = store.getActions();
    expect(actions[0].type).toEqual(getRockets.pending.type);
    expect(actions[1].type).toEqual(getRockets.fulfilled.type);
    expect(actions[1].payload).toEqual([
      {
        id: 'rocket1',
        rocket_name: 'Rocket 1',
        description: 'Rocket 1 Description',
        flickr_images: [],
        isReserved: false,
      },
      {
        id: 'rocket2',
        rocket_name: 'Rocket 2',
        description: 'Rocket 2 Description',
        flickr_images: [],
        isReserved: false,
      },
    ]);
  });

  it('should handle error on failed response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });

    await store.dispatch(getRockets());

    const actions = store.getActions();
    expect(actions[1].type).toEqual(getRockets.rejected.type);
    expect(actions[1].error.message).toEqual('Failed to fetch rockets');
  });
});
