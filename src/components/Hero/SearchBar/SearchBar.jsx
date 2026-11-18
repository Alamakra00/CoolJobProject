import styles from './styles.module.css';
import searchIcon from '../../../images/icons/Поиск.svg';
import locationIcon from '../../../images/icons/Локация.png';

function SearchBar() {
  return (
    <form className={styles.searchBar} onSubmit={(e) => e.preventDefault()}>
      <label className={styles.field}>
        <img src={searchIcon} alt="" className={styles.icon} />
        <input
          type="text"
          className={styles.input}
          placeholder="Должность или компания"
        />
      </label>

      <span className={styles.divider} />

      <label className={styles.field}>
        <img src={locationIcon} alt="" className={styles.icon} />
        <input
          type="text"
          className={styles.input}
          placeholder="Город, Страна"
        />
      </label>

      <button type="submit" className={styles.button}>
        Поиск
      </button>
    </form>
  );
}

export default SearchBar;
