import React from 'react';

import PropTypes from 'prop-types';

import styles from '../Statistic/Statistics.module.css';

const Notification = ({ message }) => (
  <h3 className={styles.statisticTitle}>{message}</h3>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
