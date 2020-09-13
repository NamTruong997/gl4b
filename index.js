const express = require('express')
var expressStaticGzip = require("express-static-gzip");

const app = express()
const path = require("path");
app.use(
    expressStaticGzip(path.join(__dirname, 'build'), {
        enableBrotli: true,
        customCompressions: [{
            encodingName: 'deflate',
            fileExtension: 'zz'
        }],
        orderPreference: ['br']
    }),
);

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(process.env.PORT || 5000, () => {
    console.log('App listening on port 5000')
})