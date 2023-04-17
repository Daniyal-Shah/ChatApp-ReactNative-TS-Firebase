import React from 'react';
import {shallow} from 'enzyme';
// import toJson from 'enzyme-to-json';
import AvailableUser from '../app/Components/User/AvailableUser';
import {View} from 'react-native';

const allUsers = [
  {id: 1, name: 'Daphne'},
  {id: 2, name: 'Margret'},
];

describe('Members Component', () => {
  it('should render without issues', () => {
    const component = shallow(
      <View>
        {allUsers.map(item => (
          <AvailableUser
            name={item.name}
            onPress={() => {}}
            key={item.name + item.id}
          />
        ))}
      </View>,
    );

    expect(component.length).toBe(1);
  });
});
