import React, { useEffect, useState } from "react";

export default function Enjeux() {
  const [content, setContent] = useState("");

  let scrollBarWidth;
  if (typeof window !== "undefined") {
    scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  }

  useEffect(() => {
    if (content === "") {
      document.body.style.overflowY = "scroll";
      document.body.style.marginRight = "0px";
    } else {
      document.body.style.overflowY = "hidden";
      document.body.style.marginRight = scrollBarWidth + "px";
    }
  }, [content]);

  const fiscales = () => (
    <>
      <h2>Difficultés fiscales</h2>
      <p>
        La France impose des charges sociales en plus des impôts sur les sociétés et les productions. En ce qui concerne
        le domaine du médicament, les impôts de production représentent environ 8% du chiffre d’affaires. Par ailleurs,
        la France est le pays européen dans lequel l’excédent brut d’exploitation de l’industrie pharmaceutique est le
        plus faible avec à peine 9% du chiffre d’affaire contre 22% dans l’Union européenne en 2017. En conséquence, les
        groupes pharmaceutiques investissent moins et optent pour une délocalisation. La solution serait d’aller vers
        des simplifications globales. La fiscalité et la surréglementation française étouffent l’économie, en poussant
        les entreprises et les individus à s’exiler…
      </p>
      <p>
        Cette exigence fiscale et réglementaire pénalise toute la société et la France en pâtit notamment dans la lutte
        contre le coronavirus : l’État étant lui-même prisonnier de règles d’achat public inadaptées, il n’a pas réussi
        à se procurer directement les matériels de protections manquants (exemple : masques chirurgicaux). Cette
        sur-réglementation se retourne aussi contre notre pays lorsqu’il s’agit de déployer une politique massive de
        tests : jusqu’au 7 mars, la quasi-totalité des laboratoires privés de biologie médicale n’avait pas le droit de
        procéder à des tests de dépistage pour des raisons normatives.
      </p>
      <p>
        La réduction des impôts de production se fait attendre. En effet, ce sujet est débattu depuis des années.
        Pourtant, la lente agonie de l’économie française risque de s’accélérer drastiquement avec la pandémie et le
        confinement...
      </p>
    </>
  );

  const environnement = () => (
    <>
      <h2>Environnementaux</h2>
      <p className="quote">“Le développement durable, c’est aussi un des enjeux et une qualité de la relocalistion”</p>
      <p>
        Rapatrier la production de tout ou partie de nos médicaments en France et en Europe suppose également le retour
        d’une industrie polluante. Un sujet capital pour Thomas Triomphe, vice-président exécutif chez Sanofi, en charge
        des affaires industrielles globales.
      </p>
      <p>
        Pour lui, « il ne peut plus y avoir de politique industrielle durable sans intégrer des critères de
        développement durable ». Autrement dit, relocaliser une production polluante est une solution à court terme.{" "}
      </p>
      <p>
        Il s’agit ici de réaliser un pari sur l’avenir en repensant nos industries avec des contraintes de productions
        respectueuses de l’environnement et de notre santé. Une autre question soulevée sera également l’arbitrage entre
        les productions relocalisées et celles maintenues à l’étranger.
      </p>
      <p>
        Dans notre interview avec Mme Letourneur, pharmacienne hospitalière en charge du groupement d’achat de
        médicaments, elle nous explique la chose suivante :
      </p>
      <audio controls src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <p>
        En effet, tout rapatrier couterait beaucoup trop d’argent... Certains estiment qu’il faudra miser sur des
        produits innovants comme ceux issus de la bio production avec les biomédicaments. C’est un enjeu majeur et
        indispensable pour garantir un meilleur accès pour les patients aux innovations de demain. Cela nous permettrait
        également de renforcer notre indépendance sanitaire .
      </p>
      <audio controls src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </>
  );

  const sante = () => (
    <>
      <h2>Santé publique</h2>
      <p>
        Prenons l’exemple de la crise sanitaire que nous traversons actuellement : l’industrie pharmaceutique y occupe
        une place centrale. En effet, en plein COVID, les patients s’accumulent chaque jours de manière alarmante au
        sein des services de réanimation et il faut être en mesure de les soigner en leur administrant les médicaments
        recquis. Que faire si l’État ne dispose pas immédiatement des ressources nécessaires ? La crise du Covid-19 est
        un choc : elle montre qu’il est urgent de réagir afin de prévenir de futures pénuries de médicaments. En effet,
        ces délocalisations ne sont pas adaptées à un contexte de crise : elles ne sont pas propices à une situation
        d’urgence puisqu’elles ne permettent pas de répondre en temps réel à une demande abondante.
      </p>
      <p>
        Ces ruptures ont engendré un “manque crucial” de ce que nous trouvons partout aujourd’hui, le gel
        hydroalcoolique. De ce fait, l’Agence Nationale de Sécurité du Médicament (ANSM) les a autorisé à créer leur
        propre solution désinfectante.
      </p>
      <audio controls src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <p className="quote">“Le paracétamol, c’est irremplaçable !”</p>
      <p>
        Ce manque provient d’une utilisation excessive lors de la crise du Covid-19 mais surtout d’une production de la
        matière première à l’étranger. La Chine et l’Inde, entre autres, exportent leurs substances aux pays les plus
        offrants. Il est très intéressant d’importer de ces deux pays en raison de la main d’oeuvre peu coûteuse. Lors
        de l’apparition de la pandémie, les pays exportateurs de principes actifs ont mis un terme à leurs échanges
        commerciaux. En conséquence, la France s’est retrouvée exemptée de ces substances et n’a donc pas pu développer
        de produits finis.
      </p>
      <p>
        Pour pallier ce manque, le corps hospitalier et plus particulièrement les médecins, doivent trouver une
        alternative pour soigner leurs patients. A défaut d’avoir les traitements habituels, ils doivent se résigner à
        utiliser des médicaments plus anciens dont les méthodes d’administration diffère de ceux employés actuellement.
        Les médecins sont donc dans l’obligation de s’adapter et d’utiliser des produits de substitution.
      </p>
      <audio controls src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </>
  );

  const impact = () => (
    <>
      <h2>Impact des délocalisations</h2>
      <p>
        Cela crée tout d’abord un risque de pénurie. En effet, l’Académie nationale de Pharmacie estime que « la
        sécurité de la fourniture de principes actifs n’est plus assurée […] en raison de risques géopolitiques ou
        naturels ». Un autre problème souligné par l’organisation est l’influence sur la qualité des produits. En effet,
        75% des certificats de conformité rejetés par le Conseil de l’Europe sont originaires de Chine ou d’Inde. De
        plus, les sites de production européens sont en moyenne inspectés cinq fois plus que les sites asiatiques. Cela
        est un signe annonciateur d’une baisse inévitable de la qualité des produits.
      </p>
      <p className="quote">
        “On aurait tout intérêt à ce qu’il y ait un nombre d’entreprises qui se relocalise en France.”
      </p>
      <p>
        De ce fait, tous ces problèmes pourraient être, en grande majorité, supprimés en relocalisant les industries de
        production sur le territoire français. Néanmoins, cette solution n’est envisageable uniquement si le
        gouvernement français propose des aides et une diminution des réglementations. Voici son avis personnel :
      </p>
      <audio controls src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </>
  );

  const renderContent = () => {
    if (content === "fiscales") {
      return fiscales();
    } else if (content === "environnement") {
      return environnement();
    } else if (content === "sante") {
      return sante();
    } else if (content === "impact") {
      return impact();
    }
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Enjeux</h1>
          <div className="enjeux-flexbox">
            <div
              className="enjeux-item"
              onClick={() => setContent("fiscales")}
              style={{ backgroundImage: "-webkit-image-set( url('/images/enjeux_1.jpg') 2x)" }}
            >
              <h2>Difficultés fiscales</h2>
            </div>
            <div
              className="enjeux-item"
              onClick={() => setContent("environnement")}
              style={{ backgroundImage: "-webkit-image-set( url('/images/enjeux_2.jpg') 2x)" }}
            >
              <h2>Environnementaux</h2>
            </div>
            <div
              className="enjeux-item"
              onClick={() => setContent("sante")}
              style={{ backgroundImage: "-webkit-image-set( url('/images/enjeux_3.jpg') 2x)" }}
            >
              <h2>Santé publique</h2>
            </div>
            <div
              className="enjeux-item"
              onClick={() => setContent("impact")}
              style={{ backgroundImage: "-webkit-image-set( url('/images/enjeux_4.jpg') 2x)" }}
            >
              <h2>Impact des délocalisations</h2>
            </div>
          </div>
        </div>
      </section>
      <div className={content === "" ? "overlay" : "overlay active"}>
        <div
          className={content === "" ? "overlay-background" : "overlay-background active"}
          onClick={() => setContent("")}
        ></div>
        <div className="container overlayed">
          <img srcSet="/images/cross.svg" height="25px" width="25px" onClick={() => setContent("")} />
          {content === "" ? "" : renderContent()}
        </div>
      </div>
    </>
  );
}
