//  gallery routes - not user specific.  These routes affect the entire gallery.
// individual users should not be able to delete exhibits, walls, or the gallery. 
//  patch to update comments in exhibit only
'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Exhibit = mongoose.model('Exhibit');
//  loads index.html for all routes
// router.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

//  returns all items in the app as a list (array of items)
//  allows scrolling view of all items or exhibits in the app
router.get('/', function(req, res) {
    console.log('gallery request made');
    console.log(req.query);
    var search = req.query.term;
    if (search == "") {
        Exhibit.find().exec(function(err,exhibits) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            res.json(exhibits);
        });
    }
    else {
        Exhibit.find({ 'categories': search }).exec(function(err, exhibits) {
            if (err) {
                console.log(err);
                console.log('cannot search by category');
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            res.json(exhibits);
        })
    }
    // Exhibits.find({}, function(err, exhibit) {
    //     if (err) {
    //         return res.status(500).json({
    //             message: 'Internal Server Error'
    //         });
    //     }
    //     return res.status(201).json(exhibits);
    // });
});
//  returns all walls in the app as a categorized list (array of arrays)
//  allows a view of all the categories or walls in the entire app

//  returns single specific exhibit item (item)
//  allows viewing of a single exhibit or item from the app
router.get('/exhibit', function(req, res) {
    console.log('exhibit request made');
    console.log(res.req);
    let exhibit_id = req.query.exhibit_id;
    Exhibit.findById(exhibit_id, function(err, exhibit) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        return res.status(201).json(exhibit);   
    });     
});
//  creates new single exhibit item in exhibits collection
router.post('/exhibit', function(req, res) {
    console.log('exhibit post made');
    console.log(res.req);
    let exhibit = req.body;
    Exhibit.create(exhibit, function(err, exhibit) {
        let title = exhibit.title;
        let creator = exhibit.username;
        let image = exhibit.image;
        let siteLink = exhibit.siteLink;
        let categories = exhibit.categories;
        if (err || !exhibit) {
            console.error("Could not create exhibit");
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        console.log("Created Exhibit " + exhibit_id);
        res.status(201).json(exhibit);
    });
});
//  updates user comments on individual exhibits - should not overwrite existing comments just add another comment.
router.put('/exhibit/:exhibit_id', function(req, res) {
    console.log('exhibit put made - update to comments');
    console.log(res.req);
    //  let text = (text entered into comments input by user and timestamp);
    // let exhibit_id = req.params.exhibit_id;
    // let update = text;
    // Exhibit.findByIdAndUpdate(exhibit_id, update, function(err, exhibits) {
    //     if (err) {
    //         return res.status(500).json({
    //             message: 'Internal Server Error'
    //         });
    //     }
    //     return res.status(201).json(exhibits);
    //     //  add some kind of user notification that comment was added
    // });
});
module.exports = router;