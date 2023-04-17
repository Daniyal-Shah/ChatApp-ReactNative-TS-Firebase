import React from 'react';
import {render} from 'react-native-testing-library';
import ChatFooter from '../app/Components/Chat/ChatFooter';

describe('Message Component', () => {
  it('displays the passed-in message props', () => {
    const setMessageMock = jest.fn();
    const handleMessageMock = jest.fn();

    const {getByTestId} = render(
      <ChatFooter
        message="Testing Message"
        testID="testChatFooter"
        setMessage={setMessageMock}
        handleMessage={handleMessageMock}
      />,
    );

    expect(getByTestId('testChatFooter').props.value).toEqual(
      'Testing Message',
    );
  });
});
