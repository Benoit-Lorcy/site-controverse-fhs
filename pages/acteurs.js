export default function Acteurs() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Acteurs</h1>
          <h2>Présentation des acteurs</h2>
          <div className="card-container-acteur">
            <a class="card-acteur" href="#!">
              <div class="front" style={{ backgroundImage: "-webkit-image-set( url('/images/Frame_1.jpg') 2x)" }}>
                <h3>Pharmacies et hopitaux</h3>
              </div>
              <div class="back">
                <div>
                  <p>
                    Les pharmacies et hopitaux sont les plus touchés. Les pénuries de médicaments entraînent du travail
                    supplémentaire. En cas de rupture sur un mécament préscrit ils doivent trouver une substitution. Ces
                    alternatives sont souvent plus anciennes et leur mode d’administration est différent. Parfois il
                    n’existe tout simplement pas de moyen de substitution.
                  </p>
                </div>
              </div>
            </a>
            <a class="card-acteur" href="#!">
              <div class="front" style={{ backgroundImage: "-webkit-image-set( url('/images/Frame_2.jpg') 2x)" }}>
                <h3>Etat Français</h3>
              </div>
              <div class="back">
                <div>
                  <p>
                    Depuis la crise du COVID-19 et la prise de conscience de notre dépendance, des mesures sont prises
                    pour encourager les relocalisations. Cependant, la fiscalité française reste toujours l’une des plus
                    importantes au monde. L’industrie pharmaceutique étant très polluante, des compromis vont également
                    devoir être adoptés vis à vis de l’environnement.
                  </p>
                </div>
              </div>
            </a>
            <a class="card-acteur" href="#!">
              <div class="front" style={{ backgroundImage: "-webkit-image-set( url('/images/Frame_3.jpg') 2x)" }}>
                <h3>Groupes pharmaceutiques</h3>
              </div>
              <div class="back">
                <div>
                  <p>
                    Les groupes tels que Sanofi ou Rhodia sont deux géants de l’industrie pharmaceutique. En tant
                    qu’acteurs privés, ils sont à la recherche de profits. Les choix consenti par ces entreprises vont
                    ainsi être orientés par des intérêts économiques au détriment de la santé publique. Le marché très
                    concurrentiel les poussent également à innover toujours plus et ce de plus en plus vite. Ils doivent
                    alors économiser de l’argent dans d’autres secteurs tels que la production ou la distribution.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Carte Mentale</h2>
          <iframe
            src="https://embed.kumu.io/02857227bfe29cf35ed5ebd3a2417642"
            width="940"
            height="600"
            frameborder="0"
          ></iframe>
        </div>
      </section>
    </>
  );
}
