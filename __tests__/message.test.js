import React from 'react';
import {render} from 'react-native-testing-library';
import Message from '../app/Components/Chat/Message';

describe('Message Component', () => {
  it('displays the passed-in message props', () => {
    const {queryByText} = render(
      <Message isMine={true} message={'Test message'} time="10:20 PM" />,
    );

    expect(queryByText('Test message')).not.toBeNull();
    expect(queryByText('10:20 PM')).not.toBeNull();
  });
});
