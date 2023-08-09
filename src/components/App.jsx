import { Component } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round(
      (100 / this.countTotalFeedback()) * this.state.good
    );

    return positiveFeedbackPercentage ? positiveFeedbackPercentage : 0;
  };

  getOptions = () => Object.keys(this.state);

  onLeaveFeedback = (key) => {
    this.setState((prevState) => ({ [key]: prevState[key] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={this.getOptions()}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
