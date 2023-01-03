require('dotenv').config()
require('express-async-errors')
const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()
const path = require('path')

const filesPayloadExists = require('./middleware/filesPayloadExists')
const fileExtLimiter = require('./middleware/fileExtLimiter')
const fileSizeLimiter = require('./middleware/fileSizeLimiter')

const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4500

console.log(process.env.NODE_ENV)

connectDB()

app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))
app.use('/auth', require('./routes/authRoutes'))
app.use('/users', require('./routes/userRoutes'))
app.use('/upload', fileUpload({ createParentPath: true }), filesPayloadExists, fileExtLimiter(['.png', '.jpg', '.pdf', '.doc']), fileSizeLimiter, require('./routes/uploadFilesRoutes'))
app.use('/notes', require('./routes/noteRoutes'))
app.use('/manualbook', require('./routes/manualbookRoutes'))
app.use('/document4', require('./routes/klausul4'))
app.use('/document5', require('./routes/klausul5'))
app.use('/document6', require('./routes/klausul6'))
app.use('/document7', require('./routes/klausul7'))
app.use('/document8', require('./routes/klausul8'))
app.use('/document9', require('./routes/klausul9'))

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
