import { Section } from './Section/Section';
import { FeedbackBtn } from './FeedbackBtn/FeedbackBtn';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = event => {
    setFeedbackCounts(prevState => ({
      ...prevState,
      [event]: prevState[event] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackCounts;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return feedbackCounts.good !== 0
      ? Math.round((feedbackCounts.good / countTotalFeedback()) * 100)
      : 0;
  };

  const totalAvg = countTotalFeedback();
  const options = Object.keys(feedbackCounts);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackBtn options={options} OnLeaveFeedback={handleClick} />
      </Section>
      {totalAvg ? (
        <Section title="Statistick">
          <Statistics
            good={feedbackCounts.good}
            neutral={feedbackCounts.neutral}
            bad={feedbackCounts.bad}
            total={totalAvg}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
