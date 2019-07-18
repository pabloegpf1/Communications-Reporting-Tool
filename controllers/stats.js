exports.showCharts = (request, response) => {
  response.render("stats", {
    admin: request.user.admin
  });
};
