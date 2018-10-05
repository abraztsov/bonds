import React from 'react';
import { mount } from 'enzyme';
import 'jest-dom/extend-expect';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';

import { store } from '../store.js';
import BondCardContainer, { BondCard } from '../components/BondCard';

const BOND = {
  name: 'NII CAPITAL',
  price: '7.625 21',
  currency: 'usd',
  id: 'US6173418413',
  text: 'NII CAPITAL CORP, Telecommunications, NR, til 2016.02.02'
};

describe('<BondCard />', () => {
  it('renders Loader while fetching bonds', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BondCardContainer />
      </Provider>
    );
    expect(wrapper.find('Loader')).toHaveLength(1);
  });
  it('renders Chart component', () => {
    const wrapper = mount(<BondCard bond={BOND} />);
    expect(wrapper.find('Chart')).toHaveLength(1);
  });
  it('renders SelectList component', () => {
    const wrapper = mount(<BondCard bond={BOND} />);
    expect(wrapper.find('SelectList')).toHaveLength(1);
  });
  it('renders passed props', () => {
    const { getByText } = render(<BondCard bond={BOND} />);
    expect(getByText(BOND.id)).toBeInTheDocument();
  });
});
