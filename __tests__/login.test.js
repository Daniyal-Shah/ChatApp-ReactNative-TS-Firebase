// Hello.spec.js
import React from 'react';
import {render} from 'react-native-testing-library';
import Message from '../app/Components/Chat/Message';

describe('Hello', () => {
  it('renders the correct message', () => {
    const {queryByText} = render(<Message />);
    expect(queryByText('Hello, world!')).toBeNull();
  });
});
