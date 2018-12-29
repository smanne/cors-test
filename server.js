var express = require('express');
var app = express();
var port = process.env.PORT || '3000';

app.use(express.static('public'))

app.get('/status', (req, res, next) => {
    res.status(200).json({
        status: "ok"
    })
});

app.get("/time", (req, res, next) => {
    res.status(200).json({
        time: new Date().toUTCString()
    })
})

app.listen(port, function() {
    console.log(`cors-test app listening on port ${port}`);
})