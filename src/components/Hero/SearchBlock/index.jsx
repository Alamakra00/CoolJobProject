import SearchBar from '../SearchBar/SearchBar';
import styles from './styles.module.css';
function SearchBlock() {
  return (
    <div className={styles.main}>
      <h1 className={styles.mainText}>Один клик и работа в кармане</h1>
      <SearchBar />
    </div>
  );
}

export default SearchBlock;
