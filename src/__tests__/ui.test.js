import React from 'react';
import { shallow } from 'enzyme';
import { SelectList } from '../components/ui/SelectList';

describe('<Select />', () => {
  it('change value by passed props', () => {
    const wrapper = shallow(<SelectList state={{ value: 'foo' }} />);
    expect(wrapper.find('select').props().value).toEqual('foo');
    wrapper.setProps({ state: { value: 'bar' } });
    expect(wrapper.find('select').props().value).toEqual('bar');
  });
});
