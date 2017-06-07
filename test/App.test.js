import React, { Component } from 'react';
import scrubTestData from './ScrubTestData.js';
import dummyData from '../dummyData.js';
import { shallow, mount } from 'enzyme';
import App from '../lib/components/App/App.js';

describe('App Component', () => {
  const storageMock = () => {
  const storage = {};
    return {
      lastLocation: '80204',

      clear() {
        return this.lastLocation = '';
      },
      getItem(key) {
        // return key in storage ? storage[key] : null;
        return this.lastLocation
      },
      setItem: function(key, value) {
        storage[key] = value.toString();
      }
    };
  };

   window.localStorage = storageMock();

   const component = mount(<App />);

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
  it('should show an error if the location does not exist', () => {
    component.instance().handleSubmit('error')
    console.log(component.debug())

  })
})
