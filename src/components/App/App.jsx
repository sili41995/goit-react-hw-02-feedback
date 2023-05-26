import './App.styled.js';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import css from './App.styled.js';

const { Container } = css;

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    state: PropTypes.exact({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  addFeedback = (feedback) => {
    this.setState((prevState) => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return bad + neutral + good;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const posF = (100 / (bad + neutral + good)) * good;
    return posF ? Math.round(posF) : 0;
  };

  render() {
    const { neutral, bad, good } = this.state;
    return (
      <Container>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title='Statistics'>
          {!good && !neutral && !bad ? (
            <Notification message='There is no feedback' />
          ) : (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
