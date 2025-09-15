import styles from './Card.module.css'

export const Card = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.zdj} />
      <div className={styles.cardInfo}>
        <p className={styles.producent}>{product.producent}</p>
        <h3 className={styles.nazwa}>{product.nazwa}</h3>
        <p className={styles.opis}>{product.opis}</p>
        <div className={styles.cenalbl}>
          <p>Cena:</p>
          <p className={styles.cena}>{product.cena} zł</p>
        </div>
      </div>
    </div>
  )
}
