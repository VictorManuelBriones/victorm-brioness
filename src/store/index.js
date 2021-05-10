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
        text: "Fundamentos de programación con Python y desarrollo web con Django."
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
      {name: 'Ciudad',fact: 'Tlaxco, Tlaxcala, México'},
      {name: 'Edad',fact: '22 Años'},
      {name: 'Educación',fact: 'Ingeniero en Tecnologías de la información y Comunicación'}
    ],
    resume: [
      {
        title: 'Desarrollador y DBA',
        year: 'Mayo 2019 - Agosto 2019',
        enterprice: 'SMP Motherson',
        skills: [
          {skill: 'Desarrollo  y programación de un sistema interno para la empresa'},
          {skill: 'Modelado de base de datos relacional para el sistema'},
          {skill: 'Trabajo bajo metodología ágil SCRUM'},
          {skill: 'Programación en PHP, Jquery, SQLServer y JavasScript'},
        ]
      },
      {
        title: 'Desarrollador web',
        year: 'Septiembre 2020 - Diciembre 2020',
        enterprice: 'IMTECHMEX S.A.P.I de C.V.',
        skills: [
          {skill: 'Desarrollo de una aplicación web para la empresa'},
          {skill: 'Programación, maquetación y diseño de aplicación web'},
          {skill: 'Trabajo bajo metodología ágil SCRUM'},
          {skill: 'Programación fullstack en Laravel, VueJS y MySQL'},
        ]
      },
      {
        title: 'Desarrollador freelance',
        year: 'Enero 2021 - Actual',
        enterprice: 'Autonómo',
        skills: [
          {skill: 'Desarrollo web fullstack'},
          {skill: 'Programación, maquetación y diseño de aplicaciones web en frontend y backend'},
          {skill: 'Cofundador de empresa de desarrollo Solutions'},
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
