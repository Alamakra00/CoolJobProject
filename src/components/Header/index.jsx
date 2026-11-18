import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftside}>
        <h1>Blowjob</h1>
        <div className={styles.leftSideText}>
          <p>Поиск работы</p>
          <p>Поиск стартапов</p>
        </div>
      </div>
      <div className={styles.rightside}>
        <button className={styles.secButtonStyle}>Регистрация</button>
        <button className={styles.firstButtonStyle}>Вход</button>
      </div>
    </header>
  );
}
export default Header;
