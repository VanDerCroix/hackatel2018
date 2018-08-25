/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

/**
 * GET /formulario
 * registro de recurso de apelacion por cobertura indoor
 */
exports.index = (req, res) => {
  res.render('index', {
    title: 'Hackatel 2018'
  });
};
