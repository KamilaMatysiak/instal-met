import { NavLink } from 'react-router'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <img
          src="./instalmetLogo.svg"
          alt="Instal-Met. Sprzedaż artykułów przemysłowych i mechanicznych"
        />
      </NavLink>
      <div>
        <NavLink
          to="/o-nas"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          O NAS
        </NavLink>
        <NavLink
          to="/kontakt"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          KONTAKT
        </NavLink>
      </div>
    </nav>
  )
}
