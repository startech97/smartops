const {Router} = require('express')
const router = Router()
const report =  require('../controllers/reportController')

router.get('/',report.getReportPage)
module.exports = router