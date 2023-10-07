const express =require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile} = require('../controllers/authControllers');

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'https://z-emeka-project.vercel.app' // <-- location of the react app were connecting to
        })
)

router.get('/', test)
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile',getProfile)


module.exports = router