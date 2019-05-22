import React from 'react';
import { storiesOf } from '@storybook/react';

import TodoList from '../components/TodoList';
import { todo, actions } from './Todo.stories';

export const defaultTodos = [
  { ...todo, id: '1', text: 'Todo 1' },
  { ...todo, id: '2', text: 'Todo 2' },
  { ...todo, id: '3', text: 'Todo 3' },
  { ...todo, id: '4', text: 'Todo 4' },
  { ...todo, id: '5', text: 'Todo 5' },
  { ...todo, id: '6', text: 'Todo 6' }
];

storiesOf('TodoList', module)
  .addDecorator(story => (
    <div style={{ padding: '3rem' }}>{story()}</div>
  ))
  .add('default', () => (
    <TodoList todos={defaultTodos} {...actions} />
  ))
  .add('wird geladen', () => (
    <TodoList loading todos={[]} {...actions} />
  ))
  .add('leere Liste', () => <TodoList todos={[]} {...actions} />);
