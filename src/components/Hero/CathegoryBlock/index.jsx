import styles from './styles.module.css';
import finance from '../../../images/cardsIcons/Finance.svg';
import logistics from '../../../images/cardsIcons/Car.svg';
import design from '../../../images/cardsIcons/Design.svg';
import restaurant from '../../../images/cardsIcons/Restorant.svg';
import medicine from '../../../images/cardsIcons/Med.svg';
import multimedia from '../../../images/cardsIcons/Video.svg';
import support from '../../../images/cardsIcons/Massege.svg';
import management from '../../../images/cardsIcons/Store.svg';
import sales from '../../../images/cardsIcons/Cart.svg';
import arrow from '../../../images/cardsIcons/Arrow.svg';

function CathBlock() {
  const boxes = [
    {
      image: finance,
      text: 'Финансы',
    },
    {
      image: logistics,
      text: 'Грузоперевозки',
    },
    {
      image: design,
      text: 'Дизайн',
    },
    {
      image: restaurant,
      text: 'Ресторанный бизнес',
    },
    {
      image: medicine,
      text: 'Медицина',
    },
    {
      image: multimedia,
      text: 'Мультимедиа',
    },
    {
      image: support,
      text: 'Служба поддержки',
    },
    {
      image: management,
      text: 'Менеджмент',
    },
    {
      image: sales,
      text: 'Продажи',
    },
  ];

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Работа по категориям</h2>

      <ul className={styles.gridBox}>
        {boxes.map((el) => (
          <li key={el.text}>
            <div className={styles.box}>
              <img src={el.image} alt="" />
              <p>{el.text}</p>
            </div>
          </li>
        ))}
        <li>
          <div className={styles.emptyBox}>
            <img src={arrow} alt="" />
            <p>Больше категорий</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CathBlock;
