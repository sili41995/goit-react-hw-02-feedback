import { Component } from 'react';

class FeedbackForm extends Component {
  addFeedback = () => {
    console.log(1);
    console.log(this);
  };

  render() {
    return (
      <div>
        <div>
          <p>Please leave feedback</p>
          <ul>
            <li>
              <button type='button' onClick={this.addFeedback}>
                Goog
              </button>
            </li>
            <li>
              <button type='button' onClick={this.addFeedback}>
                Neutral
              </button>
            </li>
            <li>
              <button type='button' onClick={this.addFeedback}>
                Bad
              </button>
            </li>
          </ul>
        </div>
        <div>
          <p>Statistics</p>
          <ul>
            <li>
              Good: <span>0</span>
            </li>
            <li>
              Neutral: <span>0</span>
            </li>
            <li>
              Bad: <span>0</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FeedbackForm;
