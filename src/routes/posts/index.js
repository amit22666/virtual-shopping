const { Router } = require('express')
const {
  findAllPosts,
  createNewPost
} = require('../../controllers/posts')

const route = Router()

route.get('/', async (req, res) => {
  const posts = await findAllPosts(req.query)
  
  res.status(200).send(posts)
})

route.post('/', async (req, res) => {
  console.log(`POST /api/posts`, req.body)
  
  const { userId, title, body, queuelength,timepercustomer , opentime , closetime } = req.body
  
  if ((!userId) || (!title) || (!body) || (!queuelength) || (!timepercustomer)  || (!opentime)  ||(!closetime)) {
    return res.status(400).send({
      error: 'Need shopid, shopname, address, queuelength , timepercustomer , opentime ,  closetime, to create shop'
    })
  }

  const post = await createNewPost(userId, title, body,queuelength,timepercustomer, opentime,  closetime) 
  res.status(201).send(post)
})


module.exports = {
  postsRoute: route
}