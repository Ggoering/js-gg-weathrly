import React from 'react';
import { shallow, mount } from 'enzyme';
import scrubTestData from './ScrubTestData.js';
import dummyData from '../dummyData.js';
import Container from '../lib/components/Container/Container.js';


describe('Container in hour view', () => {
  const scrubbedData = scrubTestData(dummyData);
  let tabView = 'Hourly View'
  const component = mount(<Container
    className="container"
    weeklyData={scrubbedData.tenDay}
    hourData={scrubbedData.sevenHour}
    tabView={tabView}
    handleViewChange={() => { tabView ='Weekly View' }}
  />);

  it.skip('should render a  container', () => {
    expect(component.find('.container').exists())
    .toEqual(true);
  });

  it('should make 7 hour cards on load', () => {
    expect(component.find('.hour-card').length).toEqual(7)
  });

  it('should not render Day cards initially', () => {
    expect(component.find('.day-card').length).toEqual(0)
  });

  it('clicking the tab view buttons changes tabView', () => {
    component.find('a').last().simulate('click');
    expect(tabView).toEqual('Weekly View');
  });
});

describe('Container in weekly view', () => {
  const scrubbedData = scrubTestData(dummyData);
  let tabView = 'Weekly View'
  const component = mount(<Container
    className="container"
    weeklyData={scrubbedData.tenDay}
    hourData={scrubbedData.sevenHour}
    tabView={tabView}
    handleViewChange={() => { tabView ='Hourly View' }}
  />);

  it.skip('should render a  container', () => {
    expect(component.find('.container').exists())
    .toEqual(true);
  });

  it('should make 10 day cards on load', () => {
    expect(component.find('.day-card').length).toEqual(10)
  });

  it('should not render hour cards initially', () => {
    expect(component.find('.hour-card').length).toEqual(0)
  });

  it('clicking the tab view buttons changes tabView', () => {
    component.find('a').last().simulate('click');
    expect(tabView).toEqual('Hourly View');
  });
})
