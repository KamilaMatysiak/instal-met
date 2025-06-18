import { useEffect, useState } from 'react'
import styles from './Banner.module.css'
import { Button } from '../Button/Button'

export const Banner = ({ promocje }) => {
  const [obj, setObj] = useState(promocje[0])
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  function changeImg() {
    const newIndex =
      currentImgIndex + 1 >= promocje.length ? 0 : currentImgIndex + 1
    setCurrentImgIndex(newIndex)
    setObj(promocje[newIndex])
    console.log(promocje[newIndex])
  }

  useEffect(() => {
    if (promocje.length > 1) {
      const intervalID = setInterval(() => changeImg(), 15000)

      return () => {
        clearInterval(intervalID)
      }
    }
  }, [obj])

  return (
    <div className={styles.banner}>
      <div className={styles.bannerBox}>
        <div className={styles.bannerText}>
          <h1>{obj.tytul}</h1>
          <p>{obj.tresc}</p>
          {obj.pokazDate && (
            <p className={styles.smallText}>
              Oferta ważna od {obj.data_od} do {obj.data_do}
            </p>
          )}
          <div className={styles.dots}>
            {promocje.length > 1 &&
              promocje.map(
                (p, i) =>
                  p && (
                    <div
                      key={i}
                      onClick={() => {
                        setObj(promocje[i])
                        setCurrentImgIndex(i)
                      }}
                      className={
                        i == currentImgIndex
                          ? `${styles.galleryDot} ${styles.actual}`
                          : `${styles.galleryDot}`
                      }
                    />
                  )
              )}
          </div>
        </div>
        <div className={styles.img}>
          <img src={obj.zdj} />
          <div className={`${styles.orange} ${styles.orangeTop}`}></div>
          <div className={`${styles.orange} ${styles.orangeBottom}`}></div>
        </div>
      </div>
    </div>
  )
}

export const LocationBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerBox}>
        <div className={styles.img}>
          <img src="./instal-met.jpg" />
          <div className={`${styles.orange} ${styles.orangeTop}`}></div>
          <div className={`${styles.orange} ${styles.orangeBottom}`}></div>
        </div>
        <div className={`${styles.bannerText} ${styles.localBanner}`}>
          <h1>Gdzie nas znaleźć?</h1>
          <div>
            <p style={{ marginBottom: 0 }}>ul. Szkolna 3A</p>
            <p className={styles.smallText}>Nowe Miasto Nad Wartą</p>
          </div>
          <Button link="https://www.google.com/maps/dir//Instal-Met,+Szkolna,+Nowe+Miasto+nad+Wartą/@52.0877288,17.364837,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47051e2f62a26e99:0xc1cb89f82476a97!2m2!1d17.406122!2d52.087736?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoASAFQAw%3D%3D">
            Sprawdź dojazd
          </Button>
        </div>
      </div>
    </div>
  )
}
