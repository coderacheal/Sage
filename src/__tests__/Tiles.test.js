import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import store from '../redux/store';
import Tiles from '../components/Tiles';

describe('CountryDetails', () => {
  it('should render the component', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Tiles />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
