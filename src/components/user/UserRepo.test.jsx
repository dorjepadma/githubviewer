import React from 'react';
import { shallow } from 'enzyme';
import UserRepo from '../user/UserRepo.jsx';

describe('UserRepo', () => {
  it('matches a snapshot', () => {
    const repo = [
      { id:'1',
        name: 'dorjepadma',
        followers: '1',
        following: '1',
        url: 'https://api.github.com/users/dorjepadma',
        avatar_url: 'https://avatars0.githubusercontent.com/u/59029366?v=4',
        repos_url: 'https://api.github.com/users/dorjepadma/repos' }
    ];
    const wrapper = shallow(<UserRepo completeUser = {repo}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
