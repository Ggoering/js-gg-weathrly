import React from 'react';
import { shallow, mount, to, be, equal} from 'enzyme';

import DayCard from '../lib/components/DayCard/DayCard';

describe('DayCard', () => {
  // move to App.test.js
  // window.localStorage = {
  //   getItem() {}
  // }

  const weeklyData = {
    dayName: 'Monday',
    high: 100,
    low: 2,
    condition: 'hot'
  }
  const component = shallow(<DayCard
            key='1'
            high={weeklyData.high}
            low={weeklyData.low}
            dayName={weeklyData.dayName}
            condition={weeklyData.condition}
            />);



  it('should render a  dailyforecast card', () => {
    expect(component.exists()).toEqual(true)
  });

  it('it should have a day name', () => {
    expect(component.find('p').first().text())
    .toEqual('Monday')
  });

  it('it should have a high', () => {
    expect(component.find('.day-card-hi').text())
    .toEqual('Hi: 100 ℉')
  });

  it('it should have a low', () => {
    expect(component.find('p').last().text())
    .toEqual('Lo: 2 ℉')
  });
})
