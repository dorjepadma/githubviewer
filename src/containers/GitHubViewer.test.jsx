import React from 'react';
import { shallow } from 'enzyme';
import GitHubViewer from './GitHubViewer';

describe('GitHubViewer', () => {
  it('handles change by updating the username state', () => {
    const wrapper = shallow(<GitHubViewer />);

    wrapper.instance().handleChange({
      target: {
        value: 'myusername'
      }
    });

    expect(wrapper.state('username')).toEqual('myusername');

  });
});
