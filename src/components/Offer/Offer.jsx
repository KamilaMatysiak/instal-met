import agd from '../../assets/agd.svg'
import garden from '../../assets/garden.svg'
import heater from '../../assets/heater.svg'
import tools from '../../assets/tools.svg'
import shoppingCart from '../../assets/shoppingCart.svg'
import rtv from '../../assets/rtv.svg'
import styles from './Offer.module.css'

export const Offer = () => {
  const tiles = [
    { text: 'Artykuły \nbudowlane', img: shoppingCart },
    { text: 'Narzędzia', img: tools },
    { text: 'Artykuły \nogrodnicze', img: garden },
    { text: 'Sprzęty RTV', img: rtv },
    { text: 'Sprzęty AGD', img: agd },
    { text: 'Kotły', img: heater },
  ]
  return (
    <div className={styles.offer}>
      <h1>Nasza oferta</h1>
      <div>
        {tiles.map(
          (tile, i) =>
            tile && <OfferTile key={i} text={tile.text} img={tile.img} />
        )}
      </div>
      <p>I wiele więcej...</p>
    </div>
  )
}

export const OfferTile = ({ text, img }) => {
  return (
    <div className={styles.tile}>
      <img src={img} /> {text}
    </div>
  )
}
