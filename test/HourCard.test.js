import React from 'react';
import { shallow, mount} from 'enzyme';
import HourCard from '../lib/components/HourCard/HourCard';

describe('HOURLY DISPLAY CARD', () => {

const hourlyData = {
  temp: '77',
  hour: '7:00 pm',
  condition: './grumpy.png'
}

  const component = shallow(<HourCard temp={hourlyData.temp} hour={hourlyData.hour} condition={hourlyData.condition}/>);
console.log(component.debug())
  const container = component.find('.hour-card')
  it('should render a  daily forecast card', () => {

    expect(container.exists()).toEqual(true)
  });

  it('it should render weather condition as an image', () => {
    expect(container.contains(<img className="center-item" src="./grumpy.png"/>)).toEqual(true);
  })

  it('it should render temperature', () => {
    expect(container.contains(<p className="second-item">Temperature: 77℉</p>)).toEqual(true);
  })

  it('it should render time', () => {
    expect(container.contains(<p className="first-item">Time: 7:00 pm</p>)).toEqual(true);
  })
})
