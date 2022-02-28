import React, { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <section className="navigation">
      {router.asPath === "/" || router.asPath[1] === "#" ? (
        <style>
          {`
              nav ul li a,
              nav ul li a:visited {
                color: white;
              }

              .navbar-toggle span,
              .navbar-toggle span:before,
              .navbar-toggle span:after {
                background: white;
              }

              .navbar-toggle.active span:before,
              .navbar-toggle.active span:after {
                background: var(--primary-color);;
              }
            `}
        </style>
      ) : (
        ""
      )}
      <div className="nav-container">
        <div className="brand"></div>
        <nav>
          <div className="nav-mobile" onClick={handleClick}>
            <div className={menu ? "navbar-toggle active" : "navbar-toggle"} href="#!">
              <span></span>
            </div>
          </div>
          <ul className={menu ? "nav-list active" : "nav-list"}>
            <li>
              <a href="/">Acceuil</a>
            </li>
            <li>
              <a href="/historique">Historique</a>
            </li>
            <li className="custom-dropdown">
              <a href="/enjeux">Enjeux</a>
            </li>
            <li>
              <a href="/acteurs">Acteurs</a>
            </li>
            <li className="custom-dropdown">
              <a href="/interviews">Interviews</a>
              <ul className="navbar-dropdown">
                <li>
                  <a href="/interviews#tiphaineElombo">Tiphaine Elombo</a>
                </li>
                <li>
                  <a href="/interviews#maryleneLetourneur">Marylène Letourneur</a>
                </li>
                <li>
                  <a href="/interviews#sebastienF">Sébastien F.</a>
                </li>
              </ul>
            </li>
            <li className="custom-dropdown">
              <a href="/a-propos">A propos</a>
              <ul className="navbar-dropdown ">
                <li>
                  <a href="/a-propos#equipe">L’équipe</a>
                </li>
                <li>
                  <a href="/a-propos#who">Qui sommes nous ?</a>
                </li>
                <li>
                  <a href="/a-propos#sources">Nos sources</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;

/*
-> quand on est sur la page principale -> navbar blanc
-> quand le menue est actif -> navbar pas blanc
-> sur toutes les autres pages navbar pas blanc












*/
