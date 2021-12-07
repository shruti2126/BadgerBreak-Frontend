// https://jestjs.io/docs/snapshot-testing#snapshot-testing-with-jest
// components/__tests__/Hello.tsx
import React from 'react';
import renderer from 'react-test-renderer';
import ReplyCard from '../ReplyCard';

const mockReply = {
    Text: "Test Reply",
    Author: "Test Reply Author",
    PostId: 8,
    Date: new Date(2021, 23, 7),
    Likes: 3,
}

const mockAuthor = "Test Post Author"

it('renders correctly with defaults', () => {
  const component = renderer
    .create(<ReplyCard reply={mockReply} author={mockAuthor}/>)
    .toJSON();
  expect(component).toMatchSnapshot();
});