import React from 'react';
import { shallow, mount } from 'enzyme';

import DayCard from '../lib/components/DayCard/DayCard';

describe('DayCard', () => {
  it('should render a  dailyforecast card', () => {
    const weeklyData = [{
      dayName: 'Fucksday',
      high: 100,
      low: 2,
      condition: 'Fuckin hot'
    }];
    const component = mount(<DayCard weeklyData = { weeklyData } />);

    console.log(component.debug())
    console.log(weeklyData)

    expect(component.find('.day-card-container').exists()).to.be(true)



    // const date = component.find('.daily-date').children();
    // expect(date).toEqual('Friday');
  });
})
