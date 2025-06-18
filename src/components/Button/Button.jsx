import styles from './Button.module.css'

export const Button = ({ children, link }) => {
  return (
    <a href={link} target="_blank" className={styles.button}>
      {children}
    </a>
  )
}
