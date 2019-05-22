import React from 'react';
import { storiesOf } from '@storybook/react';

import Question from '../components/Question';

export const question = {
  text: 'Lokale Variablen werden deklariert mit…',
  choices: ['var', 'let', 'const'],
  answer: 'let'
};

storiesOf('Question', module)
  .addDecorator(story => (
    <div style={{ padding: '3rem' }}>{story()}</div>
  ))
  .add('default', () => <Question question={question} />);
