export default function Apropos() {
  return (
    <>
      <section className="section" id="equipe">
        <div className="container">
          <h1 style={{ textAlign: "center" }}>A propos</h1>
          <h2>L’équipe</h2>
          <div className="avatar-flexbox">
            <div className="avatar">
              <img srcSet="/images/avatar_1.png 2x"></img>
              <h3>
                Clément <br></br>YZIQUEL
              </h3>
              <p>Chef de projet</p>
            </div>
            <div className="avatar">
              <img srcSet="/images/avatar_2.png 2x"></img>
              <h3>
                Benoit <br></br> LORCY
              </h3>
              <p>Webmaster</p>
            </div>
            <div className="avatar">
              <img srcSet="/images/avatar_3.png 2x"></img>
              <h3>
                Audrey <br></br>BOURHIS
              </h3>
              <p>Rédactrice</p>
            </div>
            <div className="avatar">
              <img srcSet="/images/avatar_4.png 2x"></img>
              <h3>
                Mathieu <br></br>LE CALONNEC
              </h3>
              <p>Designer</p>
            </div>
            <div className="avatar">
              <img srcSet="/images/avatar_5.png 2x"></img>
              <h3>
                Auriane <br></br>BLANCEY
              </h3>
              <p>Enquêtrice</p>
            </div>
            <div className="avatar">
              <img srcSet="/images/avatar_6.png 2x"></img>
              <h3>
                Thomas <br></br>CARPENTIER
              </h3>
              <p>Enquêteur</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="who">
        <div className="container">
          <h2>Qui sommes nous ?</h2>
          <p>
            Nous sommes un groupe de six étudiants en école d’ingénieur à l’ISEN de Brest. Nous avons créé ce site à la
            suite d’un travail de controverse réalisé au cours de notre troisième année. Cela entre dans le cadre de
            notre Formation Humaine Economique et Sociale (FHES). Nous avons choisi de travailler sur la controverse
            qu’engendre la relocalisation des entreprises pharmaceutiques sur le territoire français. Nous avons tâché,
            tout au long de ce projet, de répondre à la question : “ Dans quelles mesures la délocalisation de la
            production pharmaceutique est-elle soutenable ? “ Ce site internet retranscrit de façon ludique et imagée
            notre travail.
          </p>
        </div>
      </section>
      <section className="section" id="sources">
        <div className="container">
          <h2>Nos sources</h2>
          <ul className="sources">
            <li>
              <a href="https://www.novethic.fr/actualite/gouvernance-dentreprise/entreprises-controversees/isr-rse/apres-le-couac-sur-les-vaccins-sanofi-va-relocaliser-une-partie-de-sa-production-en-france-148678.html">
                https://www.novethic.fr/actualite/gouvernance-dentreprise/entreprises-controversees/isr-rse/apres-le-couac-sur-les-vaccins-sanofi-va-relocaliser-une-partie-de-sa-production-en-france-148678.html
              </a>
            </li>
            <li>
              <a href="https://www.sudouest.fr/2020/09/15/delocalisation-hausse-de-la-demande-prix-quelles-sont-les-principales-causes-de-penuries-de-medicaments-7848718-4696.php?nic">
                https://www.sudouest.fr/2020/09/15/delocalisation-hausse-de-la-demande-prix-quelles-sont-les-principales-causes-de-penuries-de-medicaments-7848718-4696.php?nic
              </a>
            </li>
            <li>
              <a
                href="
https://app.brief.me/article/2020-04-18-10403-la-delocalisation-de-la-fabrication-des-medicaments"
              >
                https://app.brief.me/article/2020-04-18-10403-la-delocalisation-de-la-fabrication-des-medicaments
              </a>
            </li>
            <li>
              <a
                href="
https://www.institutmolinari.org/2020/04/13/pas-de-relocalisations-sans-allegements-fiscaux-et-reglementaires/"
              >
                https://www.institutmolinari.org/2020/04/13/pas-de-relocalisations-sans-allegements-fiscaux-et-reglementaires/
              </a>
            </li>
            <li>
              <a href="https://www.quechoisir.org/action-ufc-que-choisir-penuries-de-medicaments-devant-la-responsabilite-criante-des-laboratoires-les-pouvoirs-publics-doivent-sortir-de-leur-complaisance-n84943/">
                https://www.quechoisir.org/action-ufc-que-choisir-penuries-de-medicaments-devant-la-responsabilite-criante-des-laboratoires-les-pouvoirs-publics-doivent-sortir-de-leur-complaisance-n84943/
              </a>
            </li>
            <li>
              <a href="https://www.acadpharm.org/dos_public/2018_06_20_AnP_RAPPORT_INDISPONIBILITE_MED_VF1.pdf ">
                https://www.acadpharm.org/dos_public/2018_06_20_AnP_RAPPORT_INDISPONIBILITE_MED_VF1.pdf{" "}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
