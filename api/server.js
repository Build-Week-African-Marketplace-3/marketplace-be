const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')

const session = require('express-session')
const Store = require('connect-session-knex')(session)
const knex = require('./data/db-config')

const authRouter = require('../api/data/auth/auth-router')
const usersRouter = require('../api/data/users/users-router')
const itemsRouter = require('../api/data/items/items-router')

const server = express()

server.use(session({
  name: 'chocolatechip',
  secret: 'shh',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false, 
    httpOnly: true 
  },
  resave: false, 
  saveUninitialized: false, 
  store: new Store({
    knex,
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 60,
  })
}))

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/items", itemsRouter)

server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server
