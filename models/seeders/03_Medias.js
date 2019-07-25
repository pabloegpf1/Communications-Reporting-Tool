"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query(
      "ALTER SEQUENCE media_id_seq RESTART WITH 1"
    );
    return queryInterface.bulkInsert("media", [
      {
        name: "Por Azar",
        url: "www.porazar.com",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Radhames DecaNo",
        url: "http://www.radhamesdecaNo.com",
        type: 2,
        content: "Specialised",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Candas 365",
        url: "https://candas365.es",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Telebosco",
        url: "www.telecobosco.com",
        type: 3,
        content: "Specialised",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Leganews",
        url: "https://www.leganews.es/",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Nuevo Crónica",
        url: "https://nuevocronica.es/",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Polemica Guanajuato",
        url: "https://www.polemicaguanajuato.com",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Diario Vasco",
        url: "https://www.diariovasco.com",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Leganés Activo",
        url: "https://leganesactivo.com/",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Salamanca 24H",
        url: "https://www.salamanca24horas.com",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Leganés TecNológico",
        url: "http://leganestecNologico.es/",
        type: 1,
        content: "Specialised",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "El Digital de Asturias",
        url: "https://www.eldigitaldeasturias.com/Noticias/",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Cronica Norte",
        url: "http://www.cronicaNorte.es",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Madrid es Noticia",
        url: "https://www.madridesNoticia.es/",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Catalunya Vanguardista",
        url: "https://www.catalunyavanguardista.com",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Madrid Actual",
        url: "https://www.madridactual.es/",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "MadridPress",
        url: "https://madridpress.com/",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Andalucia Game",
        url: "https://andaluciagame.andaluciainformacion.es",
        type: 1,
        content: "General Interest",
        coverage: "Local",
        format: "Online"
      },
      {
        name: "Es León Diario",
        url: "www.esleondiario.com",
        type: 1,
        content: "General Interest",
        coverage: "International",
        format: "Online"
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("media", null, {});
  }
};
