const express = require('express')
const os = require('os')

const app = express()
app.get('/', (req, res) => {
	res.send(`Hi ${os.hostname()}`)
})

app.listen(3000, () => console.log(`listen port 3000`));