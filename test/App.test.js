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
      setItem: function(key, value) {
        storage[key] = value.toString();
      }
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
  it('should show a welcome screen if local storage is empty', () => {
    // localStorage.clear()
    const component = mount(<App />);
    let welcomeText = component.find('.welcome-text')
    expect(welcomeText.exists()).toEqual(true)
  })
  it('should mount', () => {
    expect()
    const component = mount(<App />);
    console.log(component.debug());
  })
})
