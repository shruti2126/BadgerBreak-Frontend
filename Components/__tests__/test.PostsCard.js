// https://jestjs.io/docs/snapshot-testing#snapshot-testing-with-jest
// components/__tests__/Hello.tsx
import React from 'react';
import renderer from 'react-test-renderer';
import PostCard from '../PostsCard'

const mockPost = {
    _id: 3484,
    Title: "Test Title",
    Author: "Test Author",
    Date: new Date(2021, 23, 7),
    Likes: 5,
    NumReplis: 0,
}

it('renders correctly with defaults', () => {
  const component = renderer
    .create(<PostCard post={mockPost}/>)
    .toJSON();
  expect(component).toMatchSnapshot();
});
