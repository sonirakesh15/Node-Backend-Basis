let config = {
  PRODUCTION: {
    DB_HOST: 'ds137801.mlab.com',
    DB_USER: 'rakesh',
    DB_PASS: 'password',
    DB_NAME: 'application_db',
    DB_PORT: '37801',
    SENDGRID_API_KEY: ''
  },
  DEV: {
    billing: '****'
  },
  default: {
    billing: '****'
  }
}

exports.get = function get(env) {
  return config[env] || config.default;
}