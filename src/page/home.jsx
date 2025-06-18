import { useState, useEffect } from 'react'
import { Banner, LocationBanner } from '../components/Banner/Banner'
import { Offer } from '../components/Offer/Offer'

export const Home = () => {
  const [promocje, setPromocje] = useState([])
  useEffect(() => {
    fetch('public/promocje/promocje.json')
      .then((r) => {
        console.log(r)
        return r.json()
      })
      .then((data) => setPromocje(data.promocje))
  }, [])

  function actual() {
    return promocje.filter(
      (obj) =>
        Date.parse(obj.data_do) >= Date.now() &&
        Date.now() >= Date.parse(obj.data_od)
    )
  }

  return (
    <>
      {promocje.length > 0 && <Banner promocje={actual()} />}
      <Offer />
      <LocationBanner />
    </>
  )
}
