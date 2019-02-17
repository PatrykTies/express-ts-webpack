import app from './app.express'

app.listen(app.get('port'), () => {
  console.log(('App is running at http://localhost:%d in %s mode'),
    app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});



//----------------IF HTTPS PROXY NEEDED----------

// import app from './app.express;
// import * as https from 'https';
// import * as fs from 'fs';
// const PORT = 3000;

// const httpsOptions = {
//     key: fs.readFileSync('./config/key.pem'),
//     cert: fs.readFileSync('./config/cert.pem')
// }

// https.createServer(httpsOptions, app).listen(PORT, () => {
//     console.log('Express server listening on port ' + PORT);
