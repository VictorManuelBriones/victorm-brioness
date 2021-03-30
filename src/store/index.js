import { createStore } from 'vuex'

import javascript from '../assets/img/javascript.svg';
import php from '../assets/img/php.svg';
import python from '../assets/img/python.svg';
import java from '../assets/img/java.svg';
import mysql from '../assets/img/sql.svg';
import css from '../assets/img/css.svg';
import html from '../assets/img/html.svg';

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
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
