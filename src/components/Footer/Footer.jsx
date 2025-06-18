import styles from './Footer.module.css'
import facebook from '../../assets/facebook.svg'

export const Footer = () => {
  return (
    <footer>
      <div>
        <div className={styles.visitCard}>
          <div className={styles.card}>
            <img src="./instalmetLogo.svg" />
            <div>
              <h1>INSTAL-MET</h1>
              <p>
                Sprzedaż Artykułów <br />
                Przemysłowych i Mechanicznych
              </p>
            </div>
          </div>
          <a
            className={styles.facebook}
            href="https://www.facebook.com/profile.php?id=100064063835879&locale=pl_PL"
            target="_blank"
          >
            <img src={facebook} />
          </a>
        </div>
        <div className={styles.hours}>
          <h2>Godziny otwarcia</h2>
          <div>
            <p>Poniedziałek - Piątek</p>{' '}
            <p className={styles.hour}>8:00 - 17:00</p>
          </div>
          <div>
            <p>Sobota</p> <p className={styles.hour}>8:00 - 13:00</p>
          </div>
          <div>
            <p>Niedziela</p> <p className={styles.hour}>Nieczynne</p>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>Kontakt</h2>
          <p>
            ul. Szkolna 3A <br />
            63-040 Nowe Miasto nad Wartą
          </p>
          <p>
            tel. 061 287 44 55 <br />
            tel. 513 153 353
          </p>
          <a href="mailto:instalmet@post.pl">instalmet@post.pl</a>
        </div>
      </div>
      <p className={styles.copyright}>2025 &copy; Kamila Matysiak</p>
    </footer>
  )
}
