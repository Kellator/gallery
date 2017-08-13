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
// returns specific user wall based on category choice (array of items)
//  user specific wall document id
router.get('/:user/wall', function(req, res) {
    console.log('user specific individual wall');
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
// adds existing or newly created wall to user's existing walls array
router.put('/:user/walls', function(req, res) {
    console.log('add new wall category to existing walls');
    console.log(req.res);
});
// creates new wall (category)
router.post('/:user/wall', function(req, res) {
    console.log('creates the new wall (category) item');
    console.log(req.res);
});
// adds an existing exhibit_id to users's specified wall array
router.put('/:user/exhibit', function(req, res) {
    console.log('create new exhibit item');
    console.log(req.res);
});
module.exports = router;