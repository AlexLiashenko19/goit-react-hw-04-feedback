import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackBtn } from './FeedbackBtn/FeedbackBtn';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    this.setState(prevState => {
      return {
        [event]: prevState[event] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      this.countTotalFeedback() &&
      Math.round((100 / this.countTotalFeedback()) * this.state.good)
    );
  };

  render() {
    const totalAvg = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackBtn
            options={Object.keys(this.state)}
            OnLeaveFeedback={this.handleClick}
          />
        </Section>
        {totalAvg ? (
          <Section title="Statistick">
            <Statistics
              {...this.state}
              total={totalAvg}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
