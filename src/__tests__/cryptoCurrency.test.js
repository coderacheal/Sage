import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import CryptoDetails from '../components/cryptoDetails';
import store from '../redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('Crypto Details', () => {
  test('render each crypto romponent', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <CryptoDetails />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

