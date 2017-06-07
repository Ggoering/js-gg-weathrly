import React, { Component } from 'react';
import scrubTestData from './ScrubTestData.js';
import dummyData from '../dummyData.js';
import { shallow, mount } from 'enzyme';
import App from '../lib/components/App/App.js';

describe('App Component', () => {
  const storageMock = () => {
    const storage = {};
    return {
      location: 'San Francisco, CA',

      clear() {
        return this.location = '';
      },
      getItem(key) {
        return key in storage ? storage[key] : null;
      },
      setItem: function (key, value) {
        storage[key] = value.toString();
      },
    };
  };

  window.localStorage = storageMock();

  // it('should have a welcome screen', () => {
  //   const storageMock1 = () => {
  //   const storage1 = {};
  //     return {
  //       lastLocation: '',
  //     };
  //   };
  //
  //
  //    window.localStorage = storageMock1();
  //
  //    expect(component.contains(<div>Welcome Bruh</div>))
  // })

  it('should mount', () => {
    expect();
    const component = mount(<App />);
    console.log(component.debug());
  });

  it('should show a welcome screen if local storage is empty', () => {
    // localStorage.clear()
    const component = mount(<App />);
    const welcomeText = component.find('.welcome-text');
    expect(welcomeText.exists()).toEqual(true);
  });

  it('it should display the location saved in local storage when it mounts', () => {

  });


  it('it should show an error screen if an invalid location is chosen', () => {

  });

  it('should make an API call when the search button is clicked', () => {

  });

  it('it should scrub the data to a shorted form from the API call', () => {

  });

  it('state should update after the API call', () => {

  });

});
