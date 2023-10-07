const express =require('express');
const router = express.Router();
const cors = require('cors');
const passport = require('passport')
const { test, registerUser, loginUser, getProfile} = require('../controllers/authControllers');

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'https://z-emeka-project.vercel.app/' // <-- location of the react app were connecting to
        })
)

router.get('/', test)
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile',getProfile)

router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            error: false,
            message:'Login successful!',
            user: req.user,
        })
    } else {
        res.status(403).json({error:true,message:'Not Authorised'})
    }
})

router.get('/login/failed', (req, res) => {
    res.status(401).json({
        error: true,
        message: 'Login failure',
    })
})

router.get('/google/callback',
            passport.authenticate('google',{
                successRedirect: process.env.CLIENT_URL,
                failureRedirect: '/login/failed'
            })
)

router.get('/google',passport.authenticate('google',['profile','email']));

router.get('/logout',(req,res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL)
})

module.exports = router