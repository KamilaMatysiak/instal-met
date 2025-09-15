import { useState, useEffect } from 'react'
import { CATEGORIES } from '../constants/categories'
import other from '../assets/other.svg'
import { Menu } from '../components/Menu/Menu'
import { useParams } from 'react-router'
import { Card } from '../components/Card/Card'

const inne = {
  text: 'Inne',
  path: 'inne',
  img: other,
}
const allCategories = [...CATEGORIES, inne]

export const OfferPage = () => {
  const { kategoria } = useParams()
  const currentCat = allCategories.find((c) => c.path === kategoria)

  const [produkty, setProdukty] = useState([])
  useEffect(() => {
    fetch('public/produkty.json')
      .then((r) => {
        return r.json()
      })
      .then((data) => setProdukty(data.produkty))
  }, [])

  const filteredrodukty = produkty.filter((p) => p.kategoria === kategoria)

  return (
    <div className="page page--offer ">
      <Menu categories={allCategories} />
      <div style={{ width: '100%' }}>
        <h1 className="offer-header">
          <img src={currentCat.img} /> {currentCat.text}
        </h1>
        <div>
          {filteredrodukty &&
            filteredrodukty.map((prod) => <Card product={prod} />)}
        </div>
      </div>
    </div>
  )
}
