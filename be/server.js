const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

var fs = require('fs');

app.use(cors());

app.get('/', (request, response) => {
    // response.send('Hello from Express!')
});


app.get('/finishedquest', function (req, res) {
    fs.readFile('FinishedQuestsLeafs.json', (err, data) => {
        let parsData = JSON.parse(data);
        if (err) throw err;
        res.json(parsData);
    });
});

app.get('/generalquests', function (req, res) {
    fs.readFile('GeneralQuestsInfo.json', (err, data) => {
        let parsDataGeneral = JSON.parse(data);
        if (err) throw err;
        res.json(parsDataGeneral);
    });
});

app.get('/mainpage', function (req, res) {
    fs.readFile('MainPageInfo.json', (err, data) => {
        let parsDataMain = JSON.parse(data);
        if (err) throw err;
        res.json(parsDataMain);
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
