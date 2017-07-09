'use strict' //This is for use new ECMAScript 6 variables type

const port = process.env.PORT || 3000
const app = require('./app')

app.listen(port,() => {
	console.log(`Server tv shows app http://localhos:${port} is running...`)
})
