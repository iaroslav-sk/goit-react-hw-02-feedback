// Component //
import PropTypes from 'prop-types';
// style //
import styles from '../Statistic/Statistics.module.css';

const FeedbackOptions = ({ handleGood, handleBad, handleNeutral }) => (
  <>
    <h1 className={styles.title}>Please leave feedback</h1>
    <button type="button" className={styles.btn} onClick={() => handleGood()}>
      Good
    </button>
    <button
      type="button"
      className={styles.btn}
      onClick={() => handleNeutral()}
    >
      Neutral
    </button>
    <button type="button" className={styles.btn} onClick={() => handleBad()}>
      Bad
    </button>
    <h2 className={styles.statisticTitle}>Statistics</h2>
  </>
);

FeedbackOptions.propTypes = {
  handleGood: PropTypes.func.isRequired,
  handleBad: PropTypes.func.isRequired,
  handleNeutral: PropTypes.func.isRequired,
};

export default FeedbackOptions;
