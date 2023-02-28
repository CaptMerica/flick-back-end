const router = require('express').Router()
const songsCtrl = require('../controllers/songs.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, songsCtrl.create)
router.get('/', checkAuth, songsCtrl.index)
router.put('/:id', checkAuth, songsCtrl.update)
router.delete('/:id', songsCtrl.delete)

module.exports = router