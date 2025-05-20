import express from 'express'
import pageDetailsRoute from '../services/page-details/page-details.route.js'
import activityTrackingRoute from '../services/activity-tracking/activity-tracking.route.js'

const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Hi there!')
})

router.use('/page-details', pageDetailsRoute)
router.use('/activity', activityTrackingRoute)

export default router