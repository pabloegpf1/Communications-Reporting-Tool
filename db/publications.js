const db = require('./index');
const pgp = require('pg-promise')();

// Getters
exports.getPublications = function(){
    return db.any('SELECT * FROM publication')
}
exports.getPublicationsById = function(id){
    return db.one('SELECT * FROM publications WHERE id = ${id}')
},  
exports.getPublicationsByDate = function(date){
    return db.any('SELECT * FROM publications WHERE date = ${date}')
}, 
exports.getPublicationsByHeadline = function(string){
    return db.any('SELECT * FROM publications WHERE headline LIKE %${string}%')
}, 
exports.getPublicationsByMedia = function(media){
    return db.any('SELECT * FROM publications WHERE media = ${media}')
}, 
exports.getPublicationsByUser = function(username){
    return db.any('SELECT * FROM publications WHERE added_by = ${username}')
},
exports.getPublicationsBySpokesperson = function(spokesperson){
    return db.any('SELECT * FROM publications WHERE spokesperson = ${spokesperson}')
},
exports.getPublicationsWithVideo = function (has_video){
    return db.any('SELECT * FROM publications WHERE has_video = ${has_video}')
},
//Setters
exports.addPublication = function(publication){
    let query = pgp.as.format('INSERT INTO publication ($1:name) VALUES ($1:list)',[publication])
    return db.none(query)
}


