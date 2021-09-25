const {Router} = require('express')
const router = Router()
const analyticController = require('../controllers/analyticController')

router.get('/', analyticController.getDownloadPage)
console.log('router')
router.post('/upload', analyticController.uploadFile)


module.exports = router