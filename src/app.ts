import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import authRoutes from './routes/auth.routes'
import passport from 'passport';
import passportMiddleware from './middlewares/passport'
import privateRoutes from './routes/private.routes'

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware)

// Routes
app.get('/',(req, res) => {
    res.send(`http://localhost:${app.get('port')}`)
});

app.use(authRoutes)
app.use(privateRoutes)

export default app;