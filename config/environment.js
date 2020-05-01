const port = process.env.PORT || 4000
const env = process.env.NODE_ENV || 'development'
const dbURI = process.env.MONGODB_URI ||`mongodb://localhost:27017/BasicDataBase`
// const secret = process.env.SECRET ||'Tgs5aG_^GH@lKmnN'

module.exports = { port, env, dbURI }
