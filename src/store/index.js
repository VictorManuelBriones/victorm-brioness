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
        text: "Esto es Javascript"
      },
      {
        image: php,
        heading: "PHP",
        text: "Esto es PHP"
      },
      {
        image: python,
        heading: "Python",
        text: "Esto es Python"
      },
      {
        image: java,
        heading: "Java",
        text: "Esto es Java"
      },
      {
        image: html,
        heading: "HTML",
        text: "Esto es HTML"
      },
      {
        image: mysql,
        heading: "SQL",
        text: "Esto es SQL"
      },
      {
        image: css,
        heading: "CSS",
        text: "Esto es CSS"
      },
    ],
    social: [
      {image: facebook},
      {image: github},
      {image: linkedin},
      {image: twitter},
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
