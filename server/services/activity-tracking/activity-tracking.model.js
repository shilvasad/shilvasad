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
    },
})


activityTrackingSchema.pre('save', function(next){
    if(this.activityStartTime && this.activityEndTime){
        const durationMs = this.activityEndTime.getTime() - this.activityStartTime.getTime()
        this.activityDuration = Math.round(durationMs / (1000 * 60))

        if(this.activityDuration <0){
            return next(new  Error('End time must be after start time'))
        }
    }
    else{
        return next (new Error('Start time and end time are required'))
    }
    next()
})

const ActivityTracking = mongoose.model('Activity', activityTrackingSchema)

export default ActivityTracking