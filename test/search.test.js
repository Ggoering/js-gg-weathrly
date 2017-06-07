import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/components/Search/search.js'

describe('SEARCH COMPONENT', () => {
  const component = mount(<Search handleSubmit={() => true} getData={() => true}/>);
  const suggestions = ['Boulder, CO', 'Dallas TX', 'Denver, CO', 'Spokane Valley, WA', 'Seattle, WA', 'Pullman, WA'];

  it('search input should have a placeholder', () => {
    expect(component.find('.search-bar').prop('placeholder')).toEqual('City, State (or zipcode)');
  });

  it('should render button', () => {
    expect(component.find('.submit-button').prop('type')).toEqual('submit')
  });

  it('state should update as keys are typed into the search input', () => {
        const input = component.find('.search-bar');
        const inputValue = 'Seattle, WA';
        const onChange = { target: { value: inputValue } };

        expect(component.state('input')).toEqual('');

        input.simulate('change', onChange);

        expect(component.state('input')).toEqual('Seattle, WA');
  });

  it('search button should execute a function when clicked, and then reset input to empty string', () => {

    const mockFunction = jest.fn();
    const component2 = mount(<Search handleSubmit={mockFunction} getData={() => true}/>);
    const button = component2.find('.submit-button');

    const input2 = component2.find('.search-bar');
    const inputValue2 = 'Seattle, WA';
    const onChange2 = { target: { value: inputValue2 } };

    input2.simulate('change', onChange2);

    button.simulate('click');
    button.simulate('click');

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(component2.state('input')).toEqual('');
  });

  it('should display a list of suggestions as keys are pressed', () => {
    const component3 = mount(<Search handleSubmit={() => true} getData={() => true}/>);
    const button = component3.find('.submit-button');

    const input3 = component3.find('.search-bar');
    const inputValue3 = 'S';
    const onChange3 = { target: { value: inputValue3 } };

    input3.simulate('change', onChange3);

    expect(component3.contains(<datalist id="cities">
          <option value="Sandy, UT" />
          <option value="Salem, OR" />
          <option value="Salem, MA" />
          <option value="Santee, CA" />
          <option value="Salina, KS" />
          <option value="Sparks, NV" />
          <option value="Sumter, SC" />
          <option value="Skokie, IL" />
          <option value="Smyrna, GA" />
          <option value="Smyrna, TN" />
        </datalist>
)).toEqual(true)
  });

});
