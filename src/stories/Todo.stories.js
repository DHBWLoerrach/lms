import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Todo from '../components/Todo';

export const todo = {
  id: '1',
  text: 'Mehr zu Variablen lesen',
  state: 'TODO_INBOX'
};

export const actions = {
  onDoneTodo: action('onDoneTodo')
};

storiesOf('Todo', module)
  .addDecorator(story => (
    <div style={{ padding: '3rem' }}>{story()}</div>
  ))
  .add('default', () => <Todo todo={todo} {...actions} />)
  .add('archiviert', () => (
    <Todo todo={{ ...todo, state: 'TODO_DONE' }} {...actions} />
  ));
