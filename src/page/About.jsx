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

        <p style={{ marginBottom: 8 }}>
          Instal-Met to firma z ponad 30-letnim doświadczeniem w branży
          instalacyjnej i budowlanej. Działamy na terenie Nowego Miasta nad
          Wartą i okolic, oferując klientom sprawdzone materiały i akcesoria do
          instalacji wodno-kanalizacyjnych, grzewczych i sanitarnych – a także
          okazjonalnie świadcząc usługi montażowe, takie jak instalacja
          grzejników czy drobne prace techniczne.
        </p>
        <p style={{ marginBottom: 32 }}>
          W naszej ofercie znajdziesz szeroki wybór produktów: od systemów
          grzewczych, rur, zaworów i armatury, po narzędzia, akcesoria
          łazienkowe i materiały wykończeniowe. Dbamy o to, by nasze towary były
          solidne, nowoczesne i dostępne w konkurencyjnych cenach.
        </p>

        <h3>Dlaczego Instal-Met?</h3>
        <div className="line" style={{ width: 200, height: 2 }}>
          <div className="line-green"></div>
          <div className="line-orange"></div>
        </div>
        <ul style={{ marginLeft: 24 }}>
          <li>
            <b>Ponad 30 lat doświadczenia</b> - znamy potrzeby naszych klientów
            i branży.
          </li>
          <li>
            <b>Indywidualne podejście</b> – zawsze doradzimy i pomożemy w
            wyborze najlepszego rozwiązania.
          </li>
          <li>
            <b>Szeroki asortyment</b> – od podstawowych komponentów po
            specjalistyczne produkty instalacyjne.
          </li>
          <li>
            <b>Usługi dodatkowe</b> – oferujemy również montaż grzejników i
            drobne prace instalacyjne.
          </li>
        </ul>
        <p style={{ marginTop: 32 }}>
          Działamy lokalnie, ale myślimy szeroko – naszą siłą są dobre relacje,
          uczciwe podejście i pasja do tego, co robimy. Jeśli szukasz
          sprawdzonych materiałów remontowych i fachowej porady –{' '}
          <strong>zapraszamy do Instal-Met.</strong>
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
