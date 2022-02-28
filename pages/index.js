import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className="section hero">
        <div className="container hero">
          <h1 className="white">
            Dans quelles mesures la délocalisation de la production pharmaceutique {"\n"}
            est-elle soutenable ?
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Introduction et contexte</h2>
          <p style={{ textAlign: "justify" }}>
            Historiquement, en France, les médicaments ont toujours été produits sur place. Il faut néanmoins noter que
            cette industrie était dominée par les moyennes entreprises. Vers 1950, plusieurs laboratoires parisiens
            délocalisent leur production en province. À partir de 1970, le coût de la recherche croît exponentiellement
            et afin de perpétuer l’innovation scientifique, on observe un regroupement des organismes pharmaceutiques.
            Finalement, la France décide vers 1990, de favoriser l’innovation en attribuant des prix très forts aux
            nouveaux médicaments, et en baissant en contrepartie le prix des médicaments ayant été mis sur le marché
            depuis un certain temps. La production de ces médicaments, n’étant plus rentable pour les groupes
            pharmaceutiques, a alors été exportée en Asie. Cependant, en 2020, une question se pose : Est-ce une bonne
            stratégie de la part de la France et plus globalement de l’Union européenne, d’avoir une grande partie de sa
            production de médicaments produite à l’étranger ? Qu’en est-il du travail et du savoir-faire historique de
            la France ? Et finalement, cette délocalisation est-elle compatible avec un contexte de crise sanitaire ?{" "}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Écoutez notre Podcast</h2>
          <audio controls src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Comprendre la problématique</h2>
          <div className="flexbox">
            <div className="card">
              <div className="card-image">
                <img srcSet="/images/image-card4.png 2x"></img>
              </div>
              <h3>Historique</h3>
              <p>Quelle était la situation il y a plusieurs années et comment évolue-t-elle ?</p>
              <a className="card-button" href="/historique">
                En savoir plus
              </a>
            </div>
            <div className="card">
              <div className="card-image">
                <img srcSet="/images/image-card6.png 2x"></img>
              </div>
              <h3>Acteurs</h3>
              <p>Quelles sont les différentes entreprises et institutions impliquées ?</p>
              <a className="card-button" href="/acteurs">
                En savoir plus
              </a>
            </div>
            <div className="card">
              <div className="card-image">
                <img srcSet="/images/image-card5.png 2x"></img>
              </div>
              <h3>Enjeux</h3>
              <p>Quels sont les enjeux de ces délocalisations et leurs conséquences ?</p>
              <a className="card-button" href="/enjeux">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Comprendre la problématique</h2>
          <div className="flexbox">
            <div className="card">
              <div className="card-image">
                <img srcSet="/images/image-card1.png 2x"></img>
              </div>
              <h3>Tiphaine Elombo</h3>
              <p>Pharmacienne et ingénieure chimiste chez EUROAPI {"\n"}</p>
              <a className="card-button" href="/interviews#tiphaineElombo">
                En savoir plus
              </a>
            </div>
            <div className="card">
              <div className="card-image">
                <img srcSet="/images/image-card2.png 2x"></img>
              </div>
              <h3>Marylène Letourneur</h3>
              <p>Pharmacienne hospitalière, dans la ville de Saint-Brieuc {"\n"}</p>
              <a className="card-button" href="/interviews#maryleneLetourneur">
                En savoir plus
              </a>
            </div>
            <div className="card">
              <div className="card-image">
                <img srcSet="/images/image-card3.png 2x"></img>
              </div>
              <h3>Sébastien F.</h3>
              <p>Pharmacien adjoint de la pharmacie Blanchard Serarl, dans la ville de Brest</p>
              <a className="card-button" href="/interviews#sebastienF">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
