import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  TODO_DONE: {
    color: '#aaa'
  }
}));

export default function Todo({
  todo: { id, text, state },
  onDoneTodo
}) {
  const classes = useStyles();
  return (
    <ListItem className={classes.root} role={undefined} dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={state === 'TODO_DONE'}
          onChange={() => onDoneTodo(id)}
        />
      </ListItemIcon>
      <ListItemText className={classes[state]} primary={text} />
    </ListItem>
  );
}
