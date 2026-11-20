import styles from './styles.module.css';
import locationIcon from '../../../images/icons/Локация.png';
import sonyLogo from '../../../images/Sony.svg';
import facebookLogo from '../../../images/Group 2.svg';
import cocaColaLogo from '../../../images/Group.svg';

const companies = {
  sony: { name: 'Sony', logo: sonyLogo },
  facebook: { name: 'Facebook', logo: facebookLogo },
  cocaCola: { name: 'CocaCola', logo: cocaColaLogo },
};

const jobs = [
  {
    id: 1,
    category: 'Финансы',
    color: '#5b7ff0',
    title: 'Менеджер по управлению финансами в крупной компании',
    location: 'Осака, Япония',
    company: companies.sony,
    date: '3 дня назад',
  },
  {
    id: 2,
    category: 'Продажи',
    color: '#e95be6',
    title: 'Специалист по продажам',
    location: 'Коясан, Япония',
    company: companies.facebook,
    date: '7 дней назад',
  },
  {
    id: 3,
    category: 'Служба поддержки',
    color: '#6bd25b',
    title: 'Оператор колл центра',
    location: 'Томаму, Япония',
    company: companies.cocaCola,
    date: '1 день назад',
  },
  {
    id: 4,
    category: 'Мультимедиа',
    color: '#f0904e',
    title: 'Системный администратор',
    location: 'Токио, Япония',
    company: companies.sony,
    date: '3 дня назад',
  },
  {
    id: 5,
    category: 'Дизайн',
    color: '#e64a3e',
    title: 'Дизайнер интерьера в профессиональную студию в центре города',
    location: 'Йокогама, Япония',
    company: companies.facebook,
    date: '7 дней назад',
  },
  {
    id: 6,
    category: 'Грузоперевозки',
    color: '#2f2f2f',
    title: 'Водитель на дальние дистанции',
    location: 'Кобе, Япония',
    company: companies.cocaCola,
    date: '1 день назад',
  },
];

function NewJobsBlock() {
  return (
    <section className={styles.main}>
      <h2 className={styles.title}>Новые вакансии</h2>
      <p className={styles.subtitle}>Найди работу своей мечты прямо сейчас</p>

      <ul className={styles.grid}>
        {jobs.map((job) => (
          <li key={job.id} className={styles.card}>
            <p className={styles.category}>
              <span
                className={styles.dot}
                style={{ backgroundColor: job.color }}
              />
              {job.category}
            </p>

            <h3 className={styles.jobTitle}>{job.title}</h3>

            <p className={styles.location}>
              <img src={locationIcon} alt="" className={styles.locationIcon} />
              {job.location}
            </p>

            <p className={styles.company}>
              <img
                src={job.company.logo}
                alt={job.company.name}
                className={styles.logo}
              />
              {job.company.name}, {job.date}
            </p>
          </li>
        ))}
      </ul>

      <button type="button" className={styles.button}>
        Все вакансии
      </button>
    </section>
  );
}

export default NewJobsBlock;
