import React from 'react';
import {shallow} from 'enzyme';
import {render, fireEvent} from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import CustomButton from '../app/Components/Custom/CustomButton';

describe('CustomButton Testing', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<CustomButton title="Testing Custom Button" />);
      expect(component).toMatchSnapshot();
    });

    it('Button renders correctly', () => {
      const tree = renderer
        .create(<CustomButton title="Testing Custom Button" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
