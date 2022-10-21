

module.exports = ({ env }) => ({
  proxy: true,
  url: env('https://samuelsimon.herokuapp.com/'),
  app: { 
    keys: env.array('APP_KEYS')
  },
});