'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Channel = mongoose.model('Channel');
var Message = mongoose.model('Message');

//  creates Channel for chat
router.post('/chat', function(req, res) {
    console.log('channel created');
    let channel = req.body;
    Channel.create(channel, function(err, channel) {
        let display_name = channel.title;
        let creator = channel.username;
        // let image = exhibit.image;
        // let description = exhibit.description;
        // let status = exhibit.status;
        // let exhibitType = exhibit.exhibitType;
        // let location = exhibit.siteLink;
        // let categories = exhibit.categories;
        if (err || !channel) {
            console.error("Could not start new channel");
            console.log(err);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        console.log("Created Channel ");
        res.status(201).json(channel);
    });
});

// adds a new message in a chat channel
router.post('/chat/message', function(req, res) {
    let message = req.body;
    // let channel_id = comment.exhibit_id;
    console.log(message);
    Message.create({ text: message.text, creator: message.user}, function (err, message) {
        if (err) return handleError(err);
        Channel.findById(channel_id, function(err, channel) {
            channel.messages.push(message._id);
            channel.save(channel.messages);
        })
        console.log("Created and Saved comment");
        res.status(201).json(message);
    });
});