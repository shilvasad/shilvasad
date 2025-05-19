import express from 'express'
import pageDetailsRoute from '../services/page-details/page-details.router.js'

const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Hi there!')
})

router.use('/page-details', pageDetailsRoute)

export default router