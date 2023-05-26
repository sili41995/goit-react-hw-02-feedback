import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Notification from 'components/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';

class FeedbackForm extends Component {
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

  addGoodFeedback = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  addNeutralFeedback = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  addBadFeedback = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
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
    return posF ? posF.toFixed() : 0;
  };

  render() {
    const { neutral, bad, good } = this.state;
    return (
      <div>
        <Section title='Please leave feedback'>
          <ul>
            <li>
              <button type='button' onClick={this.addGoodFeedback}>
                Goog
              </button>
            </li>
            <li>
              <button type='button' onClick={this.addNeutralFeedback}>
                Neutral
              </button>
            </li>
            <li>
              <button type='button' onClick={this.addBadFeedback}>
                Bad
              </button>
            </li>
          </ul>
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
      </div>
    );
  }
}

export default FeedbackForm;
