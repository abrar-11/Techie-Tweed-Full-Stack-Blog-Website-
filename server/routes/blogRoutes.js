import express from 'express'

import {createBlog, getAllBlogs, getBlog, deleteBlog} from '../controllers/blogControllers.js'


const router  =  express.Router()


router.get('/',getAllBlogs)
router.get('/:id',getBlog)
router.post('/',createBlog)
router.delete("/:id", deleteBlog);


export default router