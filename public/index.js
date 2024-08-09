browser.webRequest.onHeadersReceived.addListener((e) => 
{
    const { tabId, responseHeaders } = e
    // Add logic to ensure that the header modification only happens on _your_ requests
    responseHeaders.push
    ({
      name: "Cross-Origin-Resource-Policy",
      value:"cross-origin",
      name: 'access-control-allow-origin',
      value: '*', // You can throw in '*', which is not a valid value but browsers ignore this error
    })
    return { responseHeaders }
  },
  { urls: ['https://api.instagram.com/*'] },
  ['blocking', 'responseHeaders'])

var cors = require('cors');
var app = require('express')();

// Allow all
app.use(cors());

// GET home page
app.get('/', function(req, res, next) {
  res.render('index', { title: 'tol-node-public' });
});

module.exports = router;