import styles from './Menu.module.css'
import { NavLink } from 'react-router'

export const Menu = ({ categories }) => {
  return (
    <div className={styles.menu}>
      {categories.map((c) => (
        <NavLink
          to={`/oferta/${c.path}`}
          className={({ isActive }) => (isActive ? `${styles.active}` : '')}
        >
          <img src={c.img} />
          <h2>{c.text}</h2>
        </NavLink>
      ))}
    </div>
  )
}
