import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { compose } from 'recompose';

import { store } from '../store.js';
import withBondOnMount from '../components/hocs/withBondOnMount';

import BondCard from '../components/BondCard';
const Extended = compose(withBondOnMount)(BondCard);

describe('withBondOnMount', () => {
  it('fetch and renders bond id', done => {
    const wrapper = mount(
      <Provider store={store}>
        <Extended />
      </Provider>
    );
    setTimeout(() => {
      wrapper.update();
      const props = wrapper.find('BondCard').props();
      expect(typeof props.bond.id).toEqual('string');
      done();
    });
  });
});
