import styles from './styles.module.css';
import linkedInIcon from '../../images/icons/footer_icons/linkedIn.svg';
import googleIcon from '../../images/icons/footer_icons/google.svg';
import twitterIcon from '../../images/icons/footer_icons/twitter.svg';
import facebookIcon from '../../images/icons/footer_icons/feFacebook0.svg';

const cities = [
  'Осака',
  'Коясан',
  'Токио',
  'Хаконэ',
  'Наэба',
  'Томаму',
  'Йокогама',
  'Нагоя',
  'Саппоро',
  'Кобе',
];

const socials = [
  { name: 'LinkedIn', icon: linkedInIcon, href: '#' },
  { name: 'Google', icon: googleIcon, href: '#' },
  { name: 'Twitter', icon: twitterIcon, href: '#' },
  { name: 'Facebook', icon: facebookIcon, href: '#' },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.title}>Популярные города</h3>

      <ul className={styles.cities}>
        {cities.map((city) => (
          <li key={city}>
            <a href="#" className={styles.city}>
              {city}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.bottom}>
        <p className={styles.logo}>Cooljob</p>

        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                className={styles.socialLink}
                aria-label={social.name}
              >
                <img src={social.icon} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
