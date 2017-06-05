import React from 'react';
import { shallow, mount, to, be, equal} from 'enzyme';

import DayCard from '../lib/components/DayCard/DayCard';

describe('DayCard', () => {
  // move to App.test.js
  // window.localStorage = {
  //   getItem() {}
  // }


  const weeklyData = [{
    dayName: 'Fucksday',
    high: 100,
    low: 2,
    condition: 'Fuckin hot'
  },
  {
    dayName: 'Fucksday',
    high: 100,
    low: 2,
    condition: 'Fuckin hot'
  },
  {
    dayName: 'Fucksday',
    high: 100,
    low: 2,
    condition: 'Fuckin hot'
  },
  {
    dayName: 'Fucksday',
    high: 100,
    low: 2,
    condition: 'Fuckin hot'
  }];
  const component = shallow(<DayCard weeklyData = { weeklyData } />);

  var container = component.find('.container')
  it('should render a  dailyforecast card', () => {

    expect(container.exists()).toEqual(true)
  });

  it('it should render 4 cards with class day-card', () => {
    const component = shallow(<DayCard weeklyData = { weeklyData } />);

    // expect(component.find('.day-card').length).toEqual(4);
    expect(component.find('.day-card')).toHaveLength(4);
  })

  it('it should render 4 cards with class day-card', () => {
    const component2 = shallow(<DayCard weeklyData = { weeklyData } />);

    console.log(component2.debug());

    // expect(component.find('.day-card').length).toEqual(4);
    // expect(component.find('.day-card')).toHaveLength(4);
  })
})
