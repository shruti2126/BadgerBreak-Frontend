// https://jestjs.io/docs/snapshot-testing#snapshot-testing-with-jest
// components/__tests__/Hello.tsx
import React from 'react';
import renderer from 'react-test-renderer';

import QuizCard from '../QuizCard';

it('renders correctly with defaults', () => {
  const component = renderer
    .create(<QuizCard/>)
    .toJSON();
  expect(component).toMatchSnapshot();
});