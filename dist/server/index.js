import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(cors());
const username = 'bumblebee';
const password = 'IloveHon3y';
// Set up body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send('message');
    // res.end();
});
app.post('/api/login', function (req, res) {
    var data = req.body;
    var result = {
        authenticated: false,
        usernameError: false,
        passwordError: false
    };
    if (data.username === username && data.password === password) {
        result.authenticated = true;
    }
    else {
        if (data.username !== username) {
            result.usernameError = true;
        }
        if (data.password !== password) {
            result.passwordError = true;
        }
    }
    res.send(result);
});
// Listen on port 8080
const listener = app.listen(8080, function () {
    console.log('Listening on port ' + listener.address().port);
});
