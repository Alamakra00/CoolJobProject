import AdvJobs from './AdvBlock';
import SearchBlock from './SearchBlock';
import styles from './styles.module.css';
import CathBlock from './CathegoryBlock';
import NewJobsBlock from './NewJobBlock';

function Hero() {
  return (
    <div className={styles.hero}>
      <SearchBlock />
      <AdvJobs />
      <CathBlock />
      <NewJobsBlock />
    </div>
  );
}

export default Hero;
