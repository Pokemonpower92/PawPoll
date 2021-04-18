/* INDEX FOR PAWPOLLS.

    For more information regarding 
    sytling, routing and models please
    consult the README.
*/
const express     = require('express');
const cors        = require('cors');
const path        = require('path');

const app         = express();
const apiPort     = 3000;

const db = require('./db');

const Poll       = require('./models/poll');
const pollRouter = require('./routes/pollRouter');

app.use(express.urlencoded( {extended: true }));
app.use(cors());
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.render("index");
})

app.use('/api', pollRouter);


// // ***** ROUTING *****
// app.get('/polls', async (req, res) => {
//     const polls = await Poll.find({});
//     console.log(`Found ${polls}`);
//     res.render("polls/index", {polls: polls});
// })

// app.get('/polls/new', (req, res) => {
//     res.render("polls/newPoll");
// })

// app.get('/polls/:id', async (req, res) => {
//     const { id } = req.params;
//     const poll = await Poll.findById(id);

//     console.log(poll);
//     res.render("polls/poll", {poll: poll});
// })

// app.get('/', (req, res) => {
//     res.render("index");
// })

// app.get("*", (req, res) => {
//     res.render("404");
// })


app.listen(apiPort, () => {
    console.log(`PAWPOLL LISTENING ON PORT ${apiPort}`)
})