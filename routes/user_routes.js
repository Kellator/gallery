// user specific routing.  Allows for creating, deleting, updating multiple aspects of app
// exhibits should always reference the gallery app exhibit - not generate a new exhibit with new id
'use strict';
var express = require('express');
var router = express.Router();

//  returns entire user gallery (array of items)
// user specific id for gallery 
router.get('/:user/gallery', function(req, res) {
    console.log('user specific gallery');
    console.log(req.res);
});
//  returns user's own walls (array of arrays)
// user specific ids
router.get('/:user/walls', function(req, res) {
    console.log('user specific walls');
    console.log(req.res);
});

// returns a specific exhibit user has saved to a wall - should reference gallery exhibit ID 
router.get('/:user/exhibit', function(req, res) {
    console.log('user specific exhibit item');
    console.log(req.res);
});
// router.put('/:user/gallery', function(req, res) {
//     console.log('add item to user specific gallery');
//     console.log(req.res);
// });

// adds an existing exhibit_id to users's specified wall array
router.put('/:user/exhibit', function(req, res) {
    console.log('create new exhibit item');
    console.log(req.res);
});
module.exports = router;