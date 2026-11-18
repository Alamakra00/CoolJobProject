import AdvJobs from './AdvBlock';
import SearchBlock from './SearchBlock';
import styles from './styles.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <SearchBlock />
      <AdvJobs />
    </div>
  );
}

export default Hero;
