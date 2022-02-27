export default function Historique() {
  return (
    <>
      <section className="section">
        <div className="container">
          <style>{`h1{ text-align:center }`}</style>
          <h1>Historique</h1>
          <div class="timeline">
            <ul>
              <li>
                <div class="content">
                  <h3>Rhodia ferme la dernière usine européenne de paracétamol</h3>
                  <p>
                    Le groupe Rhodia annonce la fermeture de sa dernière usine de production en France pour cause de
                    non-rentabilité. D’autres raisons telles que les normes environnementales très strictes en Europe ne
                    sont pas clairement évoquées, mais ont fait pencher la balance. Il s’agissait du dernier site de
                    production de poudre de paracétamol européen. Cette poudre est utilisée pour la fabrication des
                    médicaments antalgiques qui sont les plus vendus en France, mais également dans le monde.
                  </p>
                </div>
                <div class="time">
                  <h4>Mars 2008</h4>
                </div>
              </li>

              <li>
                <div class="content">
                  <div className="image">
                    <img srcSet="/images/pharmacie.jpg 2x"></img>
                  </div>
                  <h3>Première mise en garde de l’Académie Nationale de Pharmacie</h3>
                  <p>
                    L’Académie nationale de Pharmacie alerte les autorités sur les conséquences de ces délocalisations.
                    Elle estime que cela créé un risque de pénurie. De plus, les risques géopolitiques et naturels dans
                    certaines zones créent des insécurités sur l’approvisionnement de certains principes actifs. Un
                    autre problème souligné par l’organisation est l’influence sur la qualité des produits. Les sites de
                    production européens sont en moyenne inspectés 5 fois plus que les sites asiatiques où la plupart
                    des groupes délocalisent.
                  </p>
                </div>
                <div class="time">
                  <h4>Avril 2011</h4>
                </div>
              </li>

              <li>
                <div class="content">
                  <h3>Le plan "Healthy China 2030"</h3>
                  <p>
                    Ce plan d’investissement Chinois a pour objectif de développer le système de santé du pays. Il fait
                    face à une demande croissante de soins de qualité. Cela passe par un remboursement de plus en plus
                    de médicaments. Les négociations entre les laboratoire et le gouvernement chinois ont abouti à une
                    baisse de près de 61% du prix de certains médicaments. « Ce que nous perdons en prix nous le
                    récupérons en volume » affirme Sanofi. La croissance exponentielle du marché asiatique encourage
                    ainsi les laboratoires à maintenir leur production en Asie.
                  </p>
                </div>
                <div class="time">
                  <h4>Octobre 2016</h4>
                </div>
              </li>

              <li>
                <div class="content">
                  <h3>Nette augmentation des ruptures de stock</h3>
                  <p>
                    En dix ans, entre 2008 et 2018, le nombre de ruptures de stock de médicaments considérés comme
                    essentiels a été multiplié par 20. En parallèle, la production française de médicaments est en forte
                    baisse par rapport à tous ses voisins européens.
                  </p>
                </div>
                <div class="time">
                  <h4>Décembre 2018</h4>
                </div>
              </li>

              <li>
                <div class="content">
                  <h3>Crise du COVID-19 </h3>
                  <p>
                    Les fermetures des frontières et l’arrêt des transports de marchandises ont montré les limites de la
                    mondialisation. De nombreuses pénuries de médicaments ont touché le pays. Cela a provoqué une réelle
                    prise de conscience par le gouvernement et a marqué le début d’une politique encourageant les
                    relocalisations.
                  </p>
                </div>
                <div class="time">
                  <h4>2020 - 2021</h4>
                </div>
              </li>
              <div style={{ clear: "both" }}></div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
