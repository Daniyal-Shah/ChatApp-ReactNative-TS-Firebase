import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import ChatFooter from '../app/Components/Chat/ChatFooter';

describe('Message Component', () => {
  it('displays the passed-in message props', () => {
    const handleMessageMock = jest.fn();
    const setMessageMock = jest.fn();

    const {getByTestId} = render(
      <ChatFooter
        message={'Initial Message'}
        testID="testChatFooter"
        setMessage={setMessageMock}
        handleMessage={handleMessageMock}
      />,
    );

    // use fireEvent change value TextInput
    fireEvent.changeText(getByTestId('testChatFooter'), 'changed text');

    expect(getByTestId('testChatFooter').props.value).toEqual(
      'Initial Message',
    );
  });
});
