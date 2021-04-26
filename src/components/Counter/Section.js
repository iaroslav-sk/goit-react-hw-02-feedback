import React from 'react';
import styles from '../Statistic/Statistics.module.css';
import FeedbackOptions from '../Statistic/FeedbackOptions.jsx';
import StatisticList from '../Statistic/StatisticList.jsx';
import Notification from '../Statistic/Notification.jsx';

class Section extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good /
        (this.state.neutral + this.state.bad + this.state.good)) *
      100
    ).toFixed(0);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{this.titule}</h1>
        <FeedbackOptions
          actualStatistic={this.state}
          handleGood={this.handleGood}
          handleBad={this.handleBad}
          handleNeutral={this.handleNeutral}
        />
        {this.countTotalFeedback() !== 0 ? (
          <StatisticList
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default Section;
