import { CATEGORIES } from '../../constants/categories'
import styles from './Offer.module.css'

export const Offer = () => {
  return (
    <div className={styles.offer}>
      <h1>Nasza oferta</h1>
      <div>
        {CATEGORIES.map(
          (tile, i) =>
            tile && (
              <OfferTile
                key={i}
                text={tile.text}
                img={tile.img}
                path={tile.path}
              />
            )
        )}
      </div>
      <p>I wiele więcej...</p>
    </div>
  )
}

export const OfferTile = ({ text, img, path }) => {
  return (
    <a href={`#/oferta/${path}`} className={styles.tile}>
      <img src={img} alt={text} /> {text}
    </a>
  )
}
