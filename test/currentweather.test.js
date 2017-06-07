import React from 'react';
import { shallow } from 'enzyme';
import scrubTestData from './ScrubTestData.js';
import dummyData from '../dummyData.js';
import CurrentWeather from '../lib/components/CurrentWeather/CurrentWeather';

describe('CURRENT WEATHER DISPLAY', () => {
  const scrubbedData = scrubTestData(dummyData);
  const component = shallow(<CurrentWeather
    className = "current-weather" weatherData={scrubbedData.currentWeather} />)

  it('should render current day forecast details', () => {

    expect(component.contains(<ul>
    <li className="current-location">
    San Francisco, CA
    </li>
    <img src="Assets/sunny.svg" />
    <li className="current-Date">
    6/6/2017
    </li>
    <li>
    64.9
     ℉
    </li>
    <li className="current-hi-low">
    Hi:
    67
    </li>
    <li className="current-hi-low">
    Lo:
    55
    </li>
    <li className="current-summary">
    Windy with a mix of clouds and sun. Slight chance of a rain shower. High 67F. Winds W at 20 to 30 mph.
    </li>
    </ul>
)).toEqual(true)
  });
});
