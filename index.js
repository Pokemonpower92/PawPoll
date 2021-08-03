/* INDEX FOR PAWPOLLS.

    For more information regarding 
    sytling, routing and models please
    consult the README.
*/
const express     = require('express');
const cors        = require('cors');
const path        = require('path');

const app         = express();
const apiPort     = process.env.PORT || 3000;

const db = require('./db');

const pollRouter = require('./routes/pollRouter');

app.use(express.static(path.join(__dirname, "client", "build")))
app.use(express.urlencoded( {extended: true }));
app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.render("index");
})

app.use('/api', pollRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(apiPort, () => {
    console.log(`PAWPOLL LISTENING ON PORT ${apiPort}`)
})