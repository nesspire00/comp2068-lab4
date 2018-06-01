exports.me = (req, res, next) => {
  res.render('index', {
    title: 'Mykyta',
  });
};

exports.yulia = (req, res, next) => {
  res.render('yulia', {
    title: 'Yulia',
  });
};

exports.artem = (req, res, next) => {
  res.render('artem', {
    title: 'Artem',
  });
};

exports.daria = (req, res, next) => {
  res.render('daria', {
    title: 'Daria',
  });
};

/* This could really be done using 1 template instead of one for each family member */
