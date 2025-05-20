import express from 'express'
import {getAllActivityTracking, getActivityTrackingById, createActivityTracking, updateActivityTracking,  deleteActivityTracking} from './activity-tracking.controller.js'

const activityTrackingRoute = express.Router()

activityTrackingRoute.get('/', getAllActivityTracking)
activityTrackingRoute.get('/:id', getActivityTrackingById)
activityTrackingRoute.post('/', createActivityTracking)
activityTrackingRoute.put('/:id', updateActivityTracking)
activityTrackingRoute.delete('/:id', deleteActivityTracking)

export default activityTrackingRoute
