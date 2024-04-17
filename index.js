const express = require('express')
const os = require('os')
// require('./tracer');
const api = require('@opentelemetry/api')

const app = express()
app.get('/', (req, res) => {
	console.log(`Hi ${os.hostname()}`)
	res.send(`Hi ${os.hostname()}`)
})

// init('demo-node-service', 'development') // calling tracer with service name and environment to view in jaegerui


app.listen(3000, () => console.log(`listen port 3000`));