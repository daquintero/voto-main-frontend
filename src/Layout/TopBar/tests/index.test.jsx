// Test for the general NavBar Component
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import TopBar from '../components';

describe('<TopBar />', () => {
  it('TopBar renders correctly without crashing', () => {
    const tree = renderer
      .create(<TopBar />)
      .toJSON();
    expect(tree)
      .toMatchSnapshot();
  });

  it('TopBar Navbar Toggler expands and changes state', () => {
    const topbar = mount(<TopBar />);
    const expand = topbar.find('.mr-2 .navbar-toggler');
    expand.simulate('click');
    expect(topbar.state('collapsed')).toBe(false);
  });
});
