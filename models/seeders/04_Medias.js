'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('ALTER SEQUENCE media_id_seq RESTART WITH 1')
    return queryInterface.bulkInsert('media', [
        { name:'Por Azar',url:'www.porazar.com',type:1,content:1,coverage:'local',format:'online'},
        { name:'Radhames DecaNo',url:'http://www.radhamesdecaNo.com',type:2,content:2,coverage:'local',format:'online'},
        { name:'Candas 365',url:'https://candas365.es',type:1,content:1,coverage:'local',format:'online'},
        { name:'Telebosco',url:'www.telecobosco.com',type:3,content:2,coverage:'local',format:'online'},
        { name:'Leganews',url:'https://www.leganews.es/',type:1,content:1,coverage:'local',format:'online'},
        { name:'Nuevo Crónica',url:'https://nuevocronica.es/',type:1,content:1,coverage:'local',format:'online'},
        { name:'Polemica Guanajuato',url:'https://www.polemicaguanajuato.com',type:1,content:1,coverage:'local',format:'online'},
        { name:'Diario Vasco',url:'https://www.diariovasco.com',type:1,content:1,coverage:'local',format:'online'},
        { name:'Leganés Activo',url:'https://leganesactivo.com/',type:1,content:1,coverage:'local',format:'online'},
        { name:'Salamanca 24H',url:'https://www.salamanca24horas.com',type:1,content:1,coverage:'local',format:'online'},
        { name:'Leganés TecNológico',url:'http://leganestecNologico.es/',type:1,content:2,coverage:'local',format:'online'},
        { name:'El Digital de Asturias',url:'https://www.eldigitaldeasturias.com/Noticias/',type:1,content:1,coverage:'local',format:'online'},
        { name:'Cronica Norte',url:'http://www.cronicaNorte.es',type:1,content:1,coverage:'local',format:'online'},
        { name:'Madrid es Noticia',url:'https://www.madridesNoticia.es/',type:1,content:1,coverage:'local',format:'online'},
        { name:'Catalunya Vanguardista',url:'https://www.catalunyavanguardista.com',type:1,content:1,coverage:'local',format:'online'},
        { name:'Madrid Actual',url:'https://www.madridactual.es/',type:1,content:1,coverage:'local',format:'online'},
        { name:'MadridPress',url:'https://madridpress.com/',type:1,content:1,coverage:'local',format:'online'},
        { name:'Andalucia Game',url:'https://andaluciagame.andaluciainformacion.es',type:1,content:1,coverage:'local',format:'online'},
        { name:'Es León Diario',url:'www.esleondiario.com',type:1,content:1,coverage:'local',format:'online'}
        ]) 
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('media', null, {});
  }
};