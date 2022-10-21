

module.exports = ({ env }) => ({
  proxy: true,
  url: env('https://samuelsimon.herokuapp.com/'),
  app: { 
    keys: env.array(process.env.APP_KEYS)
  },
});