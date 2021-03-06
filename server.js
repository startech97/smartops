
const app = require('./app')
require('dotenv').config()
async function start() {
    try {
        app.listen(
            process.env.SERVER_PORT,
            process.env.HOST,
            () => {
            console.log(`Server is running on PORT: ${process.env.SERVER_PORT}\n`)
            console.log("      Press CTRL-C to stop\n");
        })
    } catch(e) {
        console.log(e)
    }
}
start()