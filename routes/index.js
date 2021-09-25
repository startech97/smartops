const {Router} = require('express')
const homeRouter = require('./homeRouter')
const authRouter = require('./authRouter')
const reportRouter = require('./reportRouter')
const analyticRouter = require('./analyticRouter')
const router = Router()

router.use('/', homeRouter)
router.use('/auth', authRouter)
router.use('/report', reportRouter)
router.use('/analytic',analyticRouter)
module.exports = router