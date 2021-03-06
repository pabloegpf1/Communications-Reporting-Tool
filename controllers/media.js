var Media = require("../models/queries/media");

exports.showMediaList = (request, response) => {
  Media.getMedias()
    .then(medias => response.render('medias',{
      medias: medias,
      admin: request.user.admin
    }))
    .catch(err => response.status(500).send(err));
};

exports.showNewMediaForm = (request, response) => {
  Media.getMediaTypes()
    .then(types => {
      response.render("newMedia", {
        types: types,
        admin: request.user.admin
      });
    })
    .catch(err => response.status(500).send(err));
};

exports.changeAvailableStatus = (request, response) => {
  Media.changeAvailableStatus(request.params.id)
    .then(() => response.redirect("/media"))
    .catch(err => response.status(500).send(err));
};

exports.addMedia = (request, response) => {
  let media = {
    name: request.body.name,
    type: request.body.type,
    content: request.body.content,
    coverage: request.body.coverage,
    format: request.body.format,
    url: request.body.url === "" ? null : request.body.url
  };
  Media.addMedia(media)
    .then(() => response.redirect("/media"))
    .catch(err => response.status(500).send(err));
};

exports.addMediaType = (request, response) => {
  Media.addMediaType(request.body.type)
    .then(() => response.redirect("/medias"))
    .catch(err => response.status(500).send(err));
};

exports.addMediaContent = (request, response) => {
  Media.addMediaContent(request.body.content)
    .then(() => response.redirect("/medias"))
    .catch(err => response.status(500).send(err));
};
