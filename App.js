const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://mayflower:mayflower123@ds113942.mlab.com:13942/events', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('now connected to db')
})

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000)