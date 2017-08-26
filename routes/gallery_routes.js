//  gallery routes - not user specific.  These routes affect the entire gallery.
// individual users should not be able to delete exhibits, walls, or the gallery. 
//  patch to update comments in exhibit only
'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Exhibit = mongoose.model('Exhibit');
var Comment = mongoose.model('Comment');

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
});
//  returns single specific exhibit item (item)
//  allows viewing of a single exhibit or item from the app
router.get('/exhibit/:exhibit_id', function(req, res) {
    console.log('exhibit request made');
    console.log(req.query);
    let exhibit_id = req.params.exhibit_id;
    Exhibit.findById(exhibit_id, function(err, exhibit) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        return res.status(201).json(exhibit);   
    });     
});
router.post('/exhibit/comment', function(req, res) {
    console.log("exhibit comment posted");
    console.log(req.body);
    let comment = req.body;
    let exhibit_id = comment.exhibit_id;
    Comment.create({creator: comment.user, text: comment.text, exhibit: comment.exhibit_id }, function(err, comment) {

        if (err || ! comment) {
            console.error("could not create comment");
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        console.log("comment create")
        res.status(201).json(comment);
        Exhibit.findById(exhibit_id, function(err, exhibit) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            console.log(exhibit.title);

            exhibit.comments.push(comment);
            exhibit.save(function (err) {
                if(!err) console.log('Success');
            });
        console.log("comment added to exhibit");
        res.status(201).json(comment);
    });
});
});
//  creates new single exhibit item in exhibits collection
router.post('/exhibit', function(req, res) {
    console.log('exhibit post made');
    let exhibit = req.body;
    Exhibit.create(exhibit, function(err, exhibit) {
        let title = exhibit.title;
        let creator = exhibit.username;
        let image = exhibit.image;
        let description = exhibit.description;
        let status = exhibit.status;
        let exhibitType = exhibit.exhibitType;
        let location = exhibit.siteLink;
        let categories = exhibit.categories;
        if (err || !exhibit) {
            console.error("Could not create exhibit");
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        console.log("Created Exhibit ");
        res.status(201).json(exhibit);
    });
});
//  updates user comments on individual exhibits - should not overwrite existing comments just add another comment.
router.put('/exhibit/:exhibit_id', function(req, res) {
    console.log('exhibit put made - update to comments');
    console.log(res.req);
    let text = req.params.text;
    let exhibit_id = req.params.exhibit_id;
    let update = text; //should be USER (timestamp) : text
    Exhibit.findByIdAndUpdate(exhibit_id, update, function(err, exhibits) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        return res.status(201).json(exhibits);
        //  add some kind of user notification that comment was added
    });
});
module.exports = router;