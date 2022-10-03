import express from 'express'

import {createBlog, getAllBlogs} from '../controllers/blogControllers.js'


const router  =  express.Router()


router.get('/',getAllBlogs)
router.post('/',createBlog)


export default router