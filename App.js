const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

mongoose.connect('mongodb://mayflower:mayflower123@ds113942.mlab.com:13942/events', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('now connected to db')
})

const app = express()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000)