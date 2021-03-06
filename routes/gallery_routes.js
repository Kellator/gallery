//  gallery routes - not user specific.  These routes affect the entire gallery.
// individual users should not be able to delete exhibits, walls, or the gallery. 
//  patch to update comments in exhibit only
'use strict';
var config = require('../config');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Exhibit = mongoose.model('Exhibit');
var Comment = mongoose.model('Comment');
// for uploading media files to db - based on https://ciphertrick.com/2017/02/28/file-upload-with-nodejs-and-gridfs-mongodb/

mongoose.connect(config.DATABASE_URL);
var conn = mongoose.connection;
var Grid = require('gridfs-stream');
var multer = require('multer');
Grid.mongo = mongoose.mongo;
var gfs = Grid(conn.db);

var GridFsStorage = require('multer-gridfs-storage');

var storage = GridFsStorage({
    url: 'mongodb://localhost/gallery-dev',
    gfs: gfs,
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    },
    metadata: function(req, file, cb) {
        cb(null, {originalname: file.originalname});
    },
    root: 'mediaFiles'
});
var upload = multer({
    storage: storage
}).single('file');

// path that will upload files
router.post('/upload', function(req, res) {
    upload(req, res, function(err) {
        if(err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(200).json({
            message: 'Success!'
        });
    });
});
// path that will retrieve media files
router.get('/file/:file_id', function(req, res) {
    gfs.collection('mediaFiles');
    // checks if file exists
    gfs.files.find({file_id: req.params.file_id}).toArray(function(err, files) {
        if(!files || files.length === 0) {
            return res.status(404).json({
                message: 'Error'
            });
        }
        // create read stream
        var readstream = gfs.createReadStream({
            file_id: files[0].file_id,
            root: 'mediaFiles'
        });
        // set content type
        res.set('Content-Type', files[0].contentType)
        // return response
        return readstream.pipe(res);
    });
});

//  returns all items in the app as a list (array of items)
//  allows scrolling view of all items or exhibits in the app
router.get('/', function(req, res) {
    var search = req.query.term;
    if (search == "") {
        Exhibit.find()
        .populate('comments')
        .sort({'date': -1})
        .limit(10)
        .exec(function(err, exhibits) {
            if (err) {
                // console.log(err);
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }
            res.json(exhibits);
        });
    }
    else {
        Exhibit.find({ 'categories': search })
        .populate('comments')
        .exec(function(err, exhibits) {
            if (err) {
                // console.log(err);
                // console.log('cannot search by category');
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
router.get('/exhibit', function(req, res) {
    console.log('exhibit request made');
    let exhibit_id = req.query.exhibit_id;
    Exhibit.findById(exhibit_id)
    .populate('comments')
    .exec(function(err, exhibit) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        // console.log(exhibit);
        res.status(200).json(exhibit);   
    })  
});
// router.get('/exhibit/comment/:exhibit_id', function(req, res) {
//     console.log("fetching comments");
//     let exhibit_id = req.params.exhibit_id
//     Comment.find().where('exhibit').equals(exhibit_id).limit(10)
//     .exec(function(err, comments) {
//         if (err) {
//             console.log(err);
//             console.log("cannot fetch comments");
//             return res.status(500).json({
//                 message: 'Internal Server Error'
//             });
//         }
//         return res.json(comments);
//     })
// });
router.post('/exhibit/comment', function(req, res) {
    let comment = req.body;
    let exhibit_id = comment.exhibit_id;
    console.log(comment);
    Comment.create({ text: comment.text, creator: comment.user, exhibit: comment.exhibit_id }, function (err, comment) {
        if (err) return handleError(err);
        Exhibit.findById(exhibit_id, function(err, exhibit) {
            exhibit.comments.push(comment._id);
            exhibit.save(exhibit.comments);
        })
        console.log("Created and Saved comment");
        res.status(201).json(comment);
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
  //     // load exhibit, push comment to comments array, save exhibit
    //     Exhibit.findById(exhibit_id)
    //     .exec(function(err, exhibit) {
    //             if (err) {
    //                 console.log("find error below");
    //                 console.log(err);
    //                 return handleError(err);
    //             };
    //         console.log(comment);
    //         exhibit.comments.push(comment);
    //         // exhibit.save(function(err, updatedExhibit) {
    //         //     if (err) {
    //         //         console.log("save error below");
    //         //         console.log(err);
    //         //         return res.status(500).json({
    //         //         message: 'Internal Server Error'
    //         //     });
    //             res.status(201).json(comment);
    //             // }
    //         });
    //     });
    // });
// });
module.exports = router;