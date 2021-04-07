import { createStore } from 'vuex'

import javascript from '../assets/img/javascript.svg';
import php from '../assets/img/php.svg';
import python from '../assets/img/python.svg';
import java from '../assets/img/java.svg';
import mysql from '../assets/img/sql.svg';
import css from '../assets/img/css.svg';
import html from '../assets/img/html.svg';

import facebook from '../assets/img/social/facebook.svg';
import github from '../assets/img/social/github.svg';
import linkedin from '../assets/img/social/linkedin.svg';
import twitter from '../assets/img/social/twitter.svg';

export default createStore({
  state: {
    languages: [
      {
        image: javascript,
        heading: "JavaScript",
        text: "Desarrollo de páginas web implementado JS y sus Frameworks VueJS y Angular."
      },
      {
        image: php,
        heading: "PHP",
        text: "Desarrollo de aplicaciones y páginas web con PHP y su Framework Laravel."
      },
      {
        image: python,
        heading: "Python",
        text: "Fundamentos de programacíon con Python y desarrollo web con Django."
      },
      /* {
        image: java,
        heading: "Java",
        text: "Esto es Java"
      }, */
      {
        image: html,
        heading: "HTML",
        text: "Maquetación de SPA, aplicaciones y sistemas web con HTML5."
      },
      {
        image: mysql,
        heading: "SQL",
        text: "Modelado de base de datos relacionales para sistemas y aplicaciones web."
      },
      {
        image: css,
        heading: "CSS",
        text: "Maquetación de aplicaciones web con CSS3 y Frameworks como Bootstrap y UIkit."
      },
    ],
    social: [
      {class: 'bx bxl-github', link: 'https://github.com/VictorManuelBriones'},
      {class: 'bx bxl-linkedin', link: 'https://www.linkedin.com/in/victor-manuel-briones-sánchez-5571941b9'},
      {class: 'bx bxl-twitter', link: 'https://twitter.com/VictorBrione'},
    ],
    data: [
      {name: 'Teléfono',fact: '(+52) 241-104-58-53'},
      {name: 'Correo',fact: 'victorm140399@gmail.com'},
      {name: 'Ciudad',fact: 'Tlaxco, Tlaxcala, México'},
      {name: 'Edad',fact: '22 Años'},
      {name: 'Educación',fact: 'Ingeniero en TI'}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
