// https://jestjs.io/docs/snapshot-testing#snapshot-testing-with-jest
// components/__tests__/Hello.tsx
import React from 'react';
import renderer from 'react-test-renderer';

import QuizCard from '../QuizCard';

const mockQuiz =  {
  title: "Fragility of Happiness Scale",
  description: "How happy are you... really?",
  questions: [
    "Something might happen at any time and we could"
    + "easily lose our happiness",
    "Happiness is fragile",
    "it is likely that our happiness could be reduced to unhappiness"
    + "with a simple accident",
    "There is only a thin line between happiness and unhappiness"
  ],
  minPerQuestion: 1,
  maxPerQuestion: 7,
  answerLegend:  ["Strongly disagree",
          "Somewhat disagree",
          "A little disagree",
          "Neither Agree or Disagree",
          "A little agree",
          "Somewhat agree",
          "Strongly agree"]
}

it('renders correctly with defaults', () => {
  const component = renderer
    .create(<QuizCard quiz={mockQuiz}/>)
    .toJSON();
  expect(component).toMatchSnapshot();
});