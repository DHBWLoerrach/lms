import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';

const QuestionRadioButtons = function(props) {
  const { choices, disabled } = props;
  return choices.map((choice, index) => (
    <FormControlLabel
      key={index}
      value={choice}
      control={<Radio />}
      label={choice}
      disabled={disabled}
    />
  ));
};

export default class Question extends Component {
  state = { userChoice: null, answered: false, correct: false };

  render() {
    const { question } = this.props;
    const { userChoice, answered, correct } = this.state;

    let buttonOrResult = (
      <Button
        disabled={userChoice === null}
        variant="outlined"
        onClick={() =>
          this.setState({
            correct: userChoice === question.answer,
            answered: true
          })
        }
      >
        Antwort überprüfen
      </Button>
    );

    if (answered) {
      buttonOrResult = correct ? <h1>Stimmt!</h1> : <h1>Falsch!</h1>;
    }

    return (
      <Card>
        <CardContent>
          <Typography variant="h6" component="h3">
            {question.text}
          </Typography>
        </CardContent>
        <CardActions>
          <RadioGroup
            aria-label="Antwort"
            name="antwort"
            onChange={e =>
              this.setState({ userChoice: e.target.value })
            }
          >
            <QuestionRadioButtons
              choices={question.choices}
              disabled={answered === true}
            />
          </RadioGroup>
        </CardActions>
        <CardActions>{buttonOrResult}</CardActions>
      </Card>
    );
  }
}
