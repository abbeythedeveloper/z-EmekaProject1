const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors')
const { mongoose } = require('mongoose')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const passport = require('passport');
const passportSetup = require('./passport')
// const authRoute = require('./Routes/authRoutes')

const app = express();
//db connect
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Database has been Connected ✅')
}).catch((err) => {
    console.log('Database has !been Connected ❌',err);
}); 

 
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(cookieSession({
    name: 'session',
    keys:['Abbeytk'],
    maxAge:24*60*60*100,
})
);
app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin:'http://z-emeka-project.vercel.app' ,  //allow to access from this origin only
        methods: 'GET,POST,PUT,DELETE',
        credentials: true
    })
);


// app.use('/authRoutes', authRoute)

app.use('/', require('./Routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`server is listening on port ${port} ✅`))