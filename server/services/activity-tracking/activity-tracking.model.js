import mongoose, { Schema } from 'mongoose'

const activityTrackingSchema = new Schema({
    activityDetails: {
        type: String, 
        required: true
    },
    activityType: {
        enum: ['Work', 'Exercise', 'Religious', 'Social', 'Personal', 'Other'],
        type: String,
    },
    activityDate: {
        type: Date,
        required: true
    },
    activityStartTime:{
        type: Date,
        required: true
    },
    activityEndTime:{
        type: Date,
        required: true
    },
    activityDuration: {
        type: Number,
        required: true
    },
})
const ActivityTracking = mongoose.model('Activity', activityTrackingSchema)

export default ActivityTracking