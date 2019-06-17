'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('media', [
        {name:'Por Azar',media_url:'www.porazar.com',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Radhames DecaNo',media_url:'http://www.radhamesdecaNo.com',media_type:2,content:2,coverage:'local',format:'online'},
        {name:'Candas 365',media_url:'https://candas365.es',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Telebosco',media_url:'www.telecobosco.com',media_type:3,content:2,coverage:'local',format:'online'},
        {name:'Leganews',media_url:'https://www.leganews.es/',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Nuevo Crónica',media_url:'https://nuevocronica.es/',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Polemica Guanajuato',media_url:'https://www.polemicaguanajuato.com',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Diario Vasco',media_url:'https://www.diariovasco.com',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Leganés Activo',media_url:'https://leganesactivo.com/',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Salamanca 24H',media_url:'https://www.salamanca24horas.com',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Leganés TecNológico',media_url:'http://leganestecNologico.es/',media_type:1,content:2,coverage:'local',format:'online'},
        {name:'El Digital de Asturias',media_url:'https://www.eldigitaldeasturias.com/Noticias/',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Cronica Norte',media_url:'http://www.cronicaNorte.es',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Madrid es Noticia',media_url:'https://www.madridesNoticia.es/',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Catalunya Vanguardista',media_url:'https://www.catalunyavanguardista.com',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Madrid Actual',media_url:'https://www.madridactual.es/',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'MadridPress',media_url:'https://madridpress.com/',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Andalucia Game',media_url:'https://andaluciagame.andaluciainformacion.es',media_type:1,content:1,coverage:'local',format:'online'},
        {name:'Es León Diario',media_url:'www.esleondiario.com',media_type:1,content:1,coverage:'local',format:'online'}
        ]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('media', null, {});
  }
};