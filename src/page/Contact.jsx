import React from 'react'

export const Contact = () => {
  return (
    <div className="page">
      <div className="text">
        <h1>Kontakt</h1>
        <div className="line">
          <div className="line-green"></div>
          <div className="line-orange"></div>
        </div>
        <h2>INSTAL-MET Sprzedaż Art. Przemysłowych i Mechanicznych</h2>
        <small>Piotr Kurzawa</small>

        <p className="sectionText">
          ul. Szkolna 3A
          <br />
          63-040 Nowe Miasto nad Wartą
        </p>

        <p className="sectionText">
          <small>tel. stacjonarny: </small>
          <b>061 287 44 55</b>
        </p>
        <p>
          <small>tel. komórkowy: </small>
          <b>513 153 353</b>
        </p>

        <p className="sectionText">
          <small>email: </small>{' '}
          <a href="mailto:instalmet@post.pl">
            <b>instalmet@post.pl</b>
          </a>
        </p>

        <p className="sectionText">
          <small>REGON: </small>
          <b>630498110</b>
        </p>
        <p>
          <small>NIP: </small>
          <b>786-000-89-09</b>
        </p>

        <p className="sectionText">
          <small>Godziny otwarcia: </small>
        </p>
        <p>
          Pon - pt: <b>8:00 - 17:00</b>
        </p>
        <p>
          Sobota: <b>8:00 - 13:00</b>
        </p>

        <p className="sectionText">
          <small>Konto bankowe:</small>
        </p>
        <p>
          BANK PEKAO S.A. Oddział Środa Wlkp.
          <br />
          <strong>58 1020 4160 0000 2102 0006 4030</strong>
        </p>
      </div>
      <div>
        <div className="map">
          <iframe
            width="500"
            height="400"
            src="https://www.openstreetmap.org/export/embed.html?bbox=17.40392625331879%2C52.0869380126444%2C17.40829557180405%2C52.08843613199833&amp;layer=mapnik&amp;marker=52.087687902656384%2C17.40610957145691"
          ></iframe>
          <div className="orange orangeTop"></div>
          <div className="orange orangeBottom"></div>
        </div>

        <br />
        <small>
          <a href="https://www.openstreetmap.org/?mlat=52.087688&amp;mlon=17.406110#map=19/52.087687/17.406111">
            Wyświetl większą mapę
          </a>
        </small>
      </div>
    </div>
  )
}
