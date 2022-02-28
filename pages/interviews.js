import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

export default function Interviews({ props }) {
  const router = useRouter();
  const [content, setContent] = useState("");
  const contentList = ["sebastienF", "tiphaineElombo", "maryleneLetourneur"];

  useEffect(() => {
    if (router.asPath.split("#") && contentList.includes(router.asPath.split("#")[1]))
      setContent(router.asPath.split("#")[1]);
    //console.log(router.asPath.split("#"));
  }, [router.events]);

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

  const tiphaineElombo = () => (
    <>
      <div className="interview-card">
        <img className="interview-card-image" srcSet="/images/interview_avatar_1.png 2x"></img>
        <ul>
          <li>Nom : Tiphaine Elombo</li>
          <li>Status : Pharmacienne et ingénieure chimiste chez EUROAPI </li>
          <li>Description : Gestion d’un atelier de production </li>
        </ul>
      </div>
      <p className="quote">
        “Ramener la fabrication de ces molécules sur le territoire français reste une décision difficile.”
      </p>
      <p>
        Lors de notre interview, Tiphaine Elombo, pharmacienne et ingénieure chimiste chez EUROAPI (anciennement Sanofi)
        nous a confié beaucoup d’informations sur le fonctionnement interne du laboratoire. D’un point de vue personnel,
        elle est très favorable à une relocalisation en France des laboratoires pharmaceutiques mais elle ne cache pas
        qu’il y ait de nombreux points peu rassurants. A l’heure actuelle, l’industrie chimique dépend énormément de
        pays tels que l’Inde ou la Chine, en particulier pour la fabrication en amont.
      </p>
      <p>
        Ceci s’explique par plusieurs éléments : une règlementation HSE (Hygiène Sécurité Environnement) plus laxiste
        dans les pays asiatiques, des normes de qualité moins restrictives et des prix défiants toute concurrence. Il y
        a également des préoccupations environnementales qui doivent être prises en compte : on fabrique de nombreuses
        molécules (comme le paracétamol) dans ces pays car leur élaboration implique une « chimie sale ». Pour des
        raisons HSE, rapatrier la fabrication de ces molécules sur le territoire français est une décision difficile à
        prendre. Les sites dits SEVESO sont régis par des lois très strictes, notamment concernant les rejets
        industriels. De son point de vue, le COVID-19 a beaucoup aidé à accélérer la décision de relocaliser quand il a
        été constaté que le territoire français était beaucoup trop dépendant de la Chine.
      </p>
      <p>
        Lors de l’arrivée du COVID-19, la gestion de l’atelier de production de Mme Elombo a été très perturbée. Elle
        compare cette situation d’échelle locale à celle que l’État a dû gérer à l’échelle nationnale et est très
        compréhensive face aux décisions prises : « Ces décisions ne sont pas tout le temps faciles à prendre et la
        critique est facile. Je pense que toute décision est critiquable, mais elle doit être constructive de façon à
        pouvoir aboutir sur une amélioration. Aujourd’hui, je n’ai pas de critique constructive face aux décisions
        prises par le gouvernement alors je ne préfère pas m’avancer sur la question ».
      </p>
      <p>
        Concernant les produits EUROAPI, une boîte sur cinq vendue en pharmacie a été produite en France. Pour le reste,
        elle n’en est pas sure. Selon elle, si une nouvelle épidémie venait à se produire dans le futur, l’État se
        retrouverait dans la même situation qu’en 2020 c’est à dire qu’il agirait de façon « plus ou moins precipitée
        sans l’avoir anticipé au préalable ». En France, il y a beaucoup de sites de formulation. Cependant, la synthèse
        chimique de principes actifs en tant que telle est une activité industrielle qui est vraiment très délocalisée à
        l’étranger.
      </p>
    </>
  );

  const maryleneLetourneur = () => (
    <>
      <div className="interview-card">
        <img className="interview-card-image" srcSet="/images/interview_avatar_2.png 2x"></img>
        <ul>
          <li>Nom : Marylène Letourneur</li>
          <li>Status : Pharmacienne hospitalière</li>
          <li>Description : Praticien hospitalier pharmacien, coordonnateur d’un groupement d’achat de médicaments </li>
        </ul>
      </div>
      <p>
        Mme Letourneur explique que les services de santé ont vécu une rupture importante des stocks en médicaments lors
        de l’apparition du COVID-19 en 2020. Notament, les services de réanimation étaient en manque d’hypnotiques, de
        curares et d’anesthésiques généraux utilisés massivement pour stabiliser le nombre de malades qui augmentait.
      </p>
      <p>
        Face aux manques de traitements, aux patients perdant la vie et aux produits de substitution parfois inefficaces
        en raison d’une maladie trop avancée, le corps médical baigne dans un milieu fortement anxiogène. Nous sommes en
        droit de nous demander si le professionnalisme est toujours au rendez-vous. Et pourtant, bien qu’un impact
        émotionnel soit présent, le monde médical a su s’affranchir de ce stress et a pu soigner les patients de la
        meilleure façon.
      </p>
      <audio controls src="/audio/professionnalisme_monde_medical2.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <p>
        Vis-à-vis de ces pénueries, l’Etat français fait une demande aux laboratoires pharmaceutiques en septembre 2021.
        Cette demande a pour but de leur faire stocker les médicaments indispensables lors d’un contexte de crise
        sanitaire qui pourrait se reproduire.
      </p>
      <audio controls src="/audio/demande_du_gouvernement_aux_labos2.mp3">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </>
  );

  const sebastienF = () => (
    <>
      <div className="interview-card">
        <img className="interview-card-image" srcSet="/images/interview_avatar_3.png 2x"></img>
        <ul>
          <li>Nom : Tiphaine Elombo</li>
          <li>Status : Pharmacienne et ingénieure chimiste chez EUROAPI </li>
          <li>Description : Gestion d’un atelier de production </li>
        </ul>
      </div>
      <p className="quote">“Nous sommes quotidiennement confrontés à des pénuries de médicaments.”</p>
      <p>
        Lors de notre interview, Sébastien F. nous a expliqué que s’il y avait plus d’entreprises pharmaceutiques sur le
        territoire, il rencontrerait, pour sûr, beaucoup moins de problèmes de livraison et d’approvisionnement. En
        effet, au quotidien les pharmacies sont confrontées à des pénuries, et même si elles arrivent globalement à
        trouver des médicaments de substitution aux médicaments génériques, ce n’est pas toujours évident car ceux-ci
        n’en ont pas tous.{" "}
      </p>
      <p>
        Concernant la proportion de médicaments vendus dans sa pharmacie qui sont produits en France, le pharmacien n’a
        pas de réponse exacte : « je dirais entre 25 et 30% ». Pour lui, la plupart des médicaments génériques sont
        produits à l’étranger et le reste est produit en France. C’est un pourcentage qui paraît faible, car si une
        épidémie survient, l’État ne sera pas en mesure de réagir rapidement à une demande abondante en médicaments.
      </p>
      <p>
        En exemple concret : le COVID-19 a engendré une suractivité dans le domaine pharmaceutique. Sébastien ainsi que
        ses collègues ont beaucoup été sollicités, notamment par rapport aux demandes de thermomètres, de masques
        chirurgicaux et de gels hydroalcooliques. Cela a aussi été un changement de métier, ils ont dû s'adapter et
        réaliser chaque jour des tests antigéniques ainsi que des vaccins, choses qu’ils ne pratiquaient pas auparavant.
      </p>
      <p>
        Pendant le confinement, la pharmacie Blanchard Serarl n’a pas vraiment souffert de la perte de ses clients
        puisqu’elle est rattachée au centre commercial de Bellevue. En effet, elle a été en mesure de garder sa
        clientèle locale. Sébastien nous explique ainsi que sa pharmacie a été privilégiée vis-à-vis d’autres officines.
        Cependant, ils ont également connu une gestion du personnel plus compliquée concernant le nombre d’absences qui
        s’est multiplié à cause des arrêts maladies.
      </p>
    </>
  );

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Interviews</h1>
          <div className="enjeux-flexbox">
            <div
              className="enjeux-item"
              onClick={() => setContent("tiphaineElombo")}
              style={{ backgroundImage: "-webkit-image-set( url('/images/Interview_1.jpg') 2x)" }}
            >
              <h2>Tiphaine Elombo</h2>
            </div>
            <div
              className="enjeux-item"
              onClick={() => setContent("maryleneLetourneur")}
              style={{ backgroundImage: "-webkit-image-set( url('/images/Interview_2.jpg') 2x)" }}
            >
              <h2>Marylène Letourneur</h2>
            </div>
            <div
              className="enjeux-item"
              onClick={() => setContent("sebastienF")}
              style={{ backgroundImage: "-webkit-image-set( url('/images/Interview_3.jpg') 2x)" }}
            >
              <h2>Sébastien F.</h2>
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
          {content === "" ? "" : eval(content + "()")}
        </div>
      </div>
    </>
  );
}
