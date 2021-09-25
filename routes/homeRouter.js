const {Router} = require('express')
const router = Router()
const home =  require('../controllers/homeController')
const auth = require('../middleware/auth')

router.get('/',auth,home.getHomePage)
module.exports = router