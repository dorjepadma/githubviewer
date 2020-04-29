import React from 'react';
import { shallow } from 'enzyme';
import User from './User';

describe('User', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<User name='dorjepadma'
      followers={1}
      following={1}
      profileUrl='https://api.github.com/users/dorjepadma'
      avatar_url='https://avatars0.githubusercontent.com/u/59029366?v=4' />);
    expect(wrapper).toMatchSnapshot();
  });
});
