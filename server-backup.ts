import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';
import * as express from 'express';
// import * as request from 'superagent';
// import * as bodyParser from 'body-parser';
import * as env from 'node-env-file';
import {join} from 'path';
import { readFileSync } from 'fs';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

env(process.cwd() + '/.env');

// Express server
const app = express();

// Api files
const dlcVehicles = require('./api/dlc-vehicles.json');

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main.bundle');

// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

// Todo: use router to handle api paths
app.get('/api/generic/vehicles', (req, res) => {
    res.json(dlcVehicles);
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

// api
// const mailchimpInstance = 'us16',
//     listUniqueId = '956085652d',
//     mailchimpApiKey = 'cdfb178e364283e15f38e02858987452-us16';
//
// app.post('/api/subscription', function (req, res) {
//     request
//         .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
//         .set('Content-Type', 'application/json;charset=utf-8')
//         .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey).toString('base64'))
//         .send({
//             'email_address': req.body.email,
//             'status': 'subscribed',
//             'language': req.body.language,
//             'merge_fields': {
//                 'FNAME': req.body.firstname,
//                 'LNAME': req.body.lastname
//             }
//         })
//         .end(function (err, response) {
//             if (response.status < 300) {
//                 res.json({success: true});
//             } else if (response.status === 400 && response.body.title === "Member Exists") {
//                 res.json({success: false, exists: true});
//             } else {
//                 res.json({success: false, exists: false});
//             }
//         });
// });

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));


app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
//
// app.use('/', express.static(join(DIST_FOLDER, 'browser'), {index: false, maxAge: '1y'}));
// app.use('/de', express.static(join(DIST_FOLDER, 'browser/de'), {index: false, maxAge: '1y'}));

// ALl regular routes use the Universal engine
app.get('/de/*', (req, res) => {
    res.render('../browser/de/index', {
        req,
        res
    });
});

// ALl regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
    console.log(`Node Express server listening on http://localhost:${PORT}`);
});
