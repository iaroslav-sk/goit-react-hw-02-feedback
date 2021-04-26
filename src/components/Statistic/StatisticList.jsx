import React from 'react';

import PropTypes from 'prop-types';

import styles from '../Statistic/Statistics.module.css';

const StatisticList = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <>
    <ul className={styles.list}>
      <li className={styles.item}>Good: {good}</li>
      <li className={styles.item}>Neutral: {neutral}</li>
      <li className={styles.item}>Bad: {bad}</li>
      <li className={styles.item}>Total: {countTotalFeedback()}</li>
      <li className={styles.item}>
        Positiv feedback: {countPositiveFeedbackPercentage()}%
      </li>
    </ul>
  </>
);

StatisticList.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default StatisticList;
