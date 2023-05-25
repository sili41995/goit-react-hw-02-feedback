import PropTypes from 'prop-types';
import { Component } from 'react';

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

  render() {
    return (
      <div>
        <div>
          <p>Please leave feedback</p>
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
        </div>
        <div>
          <p>Statistics</p>
          <ul>
            <li>
              Good: <span>{this.state.good}</span>
            </li>
            <li>
              Neutral: <span>{this.state.neutral}</span>
            </li>
            <li>
              Bad: <span>{this.state.bad}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FeedbackForm;
