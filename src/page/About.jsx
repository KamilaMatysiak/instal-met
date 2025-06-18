import React from 'react'

export const About = () => {
  return (
    <div className="page">
      <div className="text">
        <h1>O NAS</h1>
        <div className="line" style={{ width: 120 }}>
          <div className="line-green"></div>
          <div className="line-orange"></div>
        </div>

        <p style={{ marginBottom: 32 }}>
          Instal-Met to firma z ponad 30-letnim doświadczeniem w branży
          instalacyjnej i budowlanej. Działamy na terenie Nowego Miasta nad
          Wartą i okolic, oferując kompleksowe usługi z zakresu instalacji
          wodno-kanalizacyjnych, grzewczych, sanitarnych oraz remontów wnętrz.
          Naszą misją jest dostarczanie nowoczesnych i niezawodnych rozwiązań –
          szybko, solidnie i zgodnie z oczekiwaniami klienta. Łączymy sprawdzone
          technologie z innowacyjnym podejściem, dbając o każdy detal
          realizacji.
        </p>

        <h3>Dlaczego Instal-Met?</h3>
        <div className="line" style={{ width: 200, height: 2 }}>
          <div className="line-green"></div>
          <div className="line-orange"></div>
        </div>
        <ul style={{ marginLeft: 24 }}>
          <li>
            <b>Doświadczenie i rzetelność</b> - Doświadczenie i rzetelność
          </li>
          <li>
            <b>Profesjonalna obsługa</b> – doradzamy, projektujemy, realizujemy.
          </li>
          <li>
            <b>Jakość i estetyka</b> – nasze realizacje są funkcjonalne i
            trwałe.
          </li>
          <li>
            <b>Zaufanie klientów</b> – wiele inwestycji wykonaliśmy z polecenia.
          </li>
        </ul>
        <p style={{ marginTop: 32 }}>
          Bez względu na to, czy planujesz generalny remont, czy potrzebujesz
          sprawdzonego fachowca do wykonania instalacji – jesteśmy tu, by pomóc.{' '}
          <strong>Instal-Met</strong> to partner, na którym możesz polegać.
        </p>
      </div>
      <div>
        <div className="map">
          <img width={508} height={406} src="./instal-met.jpg" />
          <div className="orange orangeTop"></div>
          <div className="orange orangeBottom"></div>
        </div>
      </div>
    </div>
  )
}
