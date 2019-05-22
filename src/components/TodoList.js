import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';

import Todo from './Todo';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(8, 1)
  }
}));

export default function TodoList({ loading, todos, onDoneTodo }) {
  const events = {
    onDoneTodo
  };

  const classes = useStyles();

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <List className={classes.root}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </List>
    );
  }

  if (todos.length === 0) {
    return (
      <Paper className={classes.empty}>
        <CheckIcon color="action" style={{ fontSize: '108px' }} />
        <Typography variant="h5" component="h3">
          Es gibt gerade keine Todos
        </Typography>
        <Typography component="p">
          Zeit für etwas anderes… 😎
        </Typography>
      </Paper>
    );
  }

  return (
    <List>
      {todos.map(todo => (
        <div>
          <Todo key={todo.id} todo={todo} {...events} />
          <Divider
            light={true}
            style={{ backgroundColor: '#f0f9fb' }}
          />
        </div>
      ))}
    </List>
  );
}
