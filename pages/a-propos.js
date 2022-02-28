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
        <div className="container apropos">
          <h2>Qui sommes nous ?</h2>
          <p>Nous sommes un groupe de six étudiants en école d’ingénieur à l’ISEN de Brest.</p>{" "}
          <p>
            Nous avons créé ce site à la suite d’un travail de controverse réalisé au cours de notre troisième année.
            Cela entre dans le cadre de notre Formation Humaine Economique et Sociale (FHES).
          </p>{" "}
          <p>
            Nous avons choisi de travailler sur la controverse qu’engendre la relocalisation des entreprises
            pharmaceutiques sur le territoire français. Nous avons tâché, tout au long de ce projet, de répondre à la
            question : “ Dans quelles mesures la délocalisation de la production pharmaceutique est-elle soutenable ?
          </p>{" "}
          <p>Ce site internet retranscrit de façon ludique et imagée notre travail.</p>{" "}
          <p>
            Si ce sujet de controverse vous a intéressé, jetez un coup d’oeil à notre rapport :{" "}
            <a href="https://cdn.fbsbx.com/v/t59.2708-21/271809006_670121164003395_4610183971420817930_n.pdf/Controverse-relocalisation-production-pharmaceutique.pdf?_nc_cat=104&ccb=1-5&_nc_sid=0cab14&_nc_ohc=Yv0lJeknizgAX9t1E1h&_nc_ht=cdn.fbsbx.com&oh=03_AVKLtNie6Eolsn1pLDh31f2VO98jyhRtQTEL6fZp68fOcg&oe=621E7627&dl=1">
              lien de téléchargement
            </a>
          </p>
        </div>
      </section>
      <section className="section" id="sources">
        <div className="container">
          <h2>Nos sources</h2>
          <ul className="sources">
            <li>
              <a href="https://www.novethic.fr/actualite/gouvernance-dentreprise/entreprises-controversees/isr-rse/apres-le-couac-sur-les-vaccins-sanofi-va-relocaliser-une-partie-de-sa-production-en-france-148678.html">
                Fabre, M., 2020, “Sanofi et l’État s’associent pour relocaliser une partie de la production de
                médicaments et vaccins en France”
              </a>
            </li>
            <li>
              <a href="https://www.sudouest.fr/2020/09/15/delocalisation-hausse-de-la-demande-prix-quelles-sont-les-principales-causes-de-penuries-de-medicaments-7848718-4696.php?nic">
                T., A., 2020, “Délocalisation, hausse de la demande, prix : quelles sont les principales causes de
                pénuries de médicaments ?”
              </a>
            </li>
            <li>
              <a
                href="
https://app.brief.me/article/2020-04-18-10403-la-delocalisation-de-la-fabrication-des-medicaments"
              >
                Brief.me, 2020, “La délocalisation de la fabrication des médicaments”
              </a>
            </li>
            <li>
              <a
                href="
https://www.institutmolinari.org/2020/04/13/pas-de-relocalisations-sans-allegements-fiscaux-et-reglementaires/"
              >
                Marques, N., 2020, “Pas de relocalisations sans allègements fiscaux et réglementaires”
              </a>
            </li>
            <li>
              <a href="https://www.quechoisir.org/action-ufc-que-choisir-penuries-de-medicaments-devant-la-responsabilite-criante-des-laboratoires-les-pouvoirs-publics-doivent-sortir-de-leur-complaisance-n84943/">
                Quechoisir, 2020, “Pénuries de médicaments : Devant la responsabilité criante des laboratoires, les
                pouvoirs publics doivent sortir de leur complaisance”
              </a>
            </li>
            <li>
              <a href="https://www.acadpharm.org/dos_public/2018_06_20_AnP_RAPPORT_INDISPONIBILITE_MED_VF1.pdf ">
                Conseil de l’Académie nationale de Pharmacie, 2018, “Indisponibilité des médicaments”
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
