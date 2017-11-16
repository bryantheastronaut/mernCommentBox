const secrets = {
  'db_uri': '<DATABASE_URI>',
};

module.exports = {
  requestSecret: function(s) {
    return secrets[s];
  },
};
