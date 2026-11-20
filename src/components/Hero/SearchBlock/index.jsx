import SearchBar from '../SearchBar/SearchBar';
import styles from './styles.module.css';
import rectangle from '../../../images/designElement/Rectangle 12.svg';
function SearchBlock() {
  return (
    <div className={styles.main}>
      <div className={styles.infoBlock}>
        <h1 className={styles.mainText}>Один клик и работа в кармане</h1>
        <SearchBar />
      </div>
      <img className={styles.decor} src={rectangle} alt="" aria-hidden="true" />
    </div>
  );
}

export default SearchBlock;
