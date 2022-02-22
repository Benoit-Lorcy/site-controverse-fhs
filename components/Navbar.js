import React, { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }

    return (
        <section class="navigation">
            <div class="nav-container">
                <div class="brand">
                </div>
                <nav>
                <div class="nav-mobile" onClick={handleClick}>
                    <a className={menu ? "navbar-toggle active" : "navbar-toggle"} href="#!" ><span></span></a>
                </div>
                <ul class={menu ? "nav-list active" : "nav-list"}>
                    <li>
                      <a href="#!">Acceuil</a>
                    </li>
                    <li>
                      <a href="#!">Historique</a>
                    </li>
                    <li class="custom-dropdown">
                    <a href="#!">Enjeux</a>
                    <ul class="navbar-dropdown">
                        <li>
                        <a href="#!">Sass</a>
                        </li>
                        <li>
                        <a href="#!">Less</a>
                        </li>
                        <li>
                        <a href="#!">Stylus</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <a href="#!">Acteurs</a>
                    </li>
                    <li class="custom-dropdown">
                    <a href="#!">Interviews</a>
                    <ul class="navbar-dropdown">
                        <li>
                        <a href="#!">Sass</a>
                        </li>
                        <li>
                        <a href="#!">Less</a>
                        </li>
                        <li>
                        <a href="#!">Stylus</a>
                        </li>
                    </ul>
                    </li>
                    <li class="custom-dropdown">
                    <a href="#!">A propos</a>
                    <ul class="navbar-dropdown ">
                        <li>
                        <a href="#!">Sass</a>
                        </li>
                        <li>
                        <a href="#!">Less</a>
                        </li>
                        <li>
                        <a href="#!">Stylus</a>
                        </li>
                    </ul>
                    </li>

                </ul>
                </nav>
            </div>
        </section>
    )
}


export default Navbar;

/*	(function($) { 
  $(function() { 

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
  }); 
})(jQuery); */