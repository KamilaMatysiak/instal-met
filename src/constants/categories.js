import agd from '../assets/agd.svg'
import garden from '../assets/garden.svg'
import heater from '../assets/heater.svg'
import tools from '../assets/tools.svg'
import shoppingCart from '../assets/shoppingCart.svg'
import rtv from '../assets/rtv.svg'

export const CATEGORIES = [
  {
    text: 'Artykuły budowlane',
    path: 'artykuly-budowlane',
    img: shoppingCart,
  },
  {
    text: 'Narzędzia',
    path: 'narzedzia',
    img: tools,
  },
  {
    text: 'Artykuły ogrodnicze',
    path: 'artykuly-ogrodnicze',
    img: garden,
  },
  {
    text: 'Sprzęty RTV',
    path: 'rtv',
    img: rtv,
  },
  {
    text: 'Sprzęty AGD',
    path: 'agd',
    img: agd,
  },
  {
    text: 'Kotły',
    path: 'grzewcze',
    img: heater,
  },
]
