exports.DATABASE_URL = process.env.DATABASE_URL ||
                        global.DATABASE_URL ||
                        'mongodb://localhost/gallery-dev';
exports.PORT = process.env.PORT || 5050;

exports.SESSION_KEY = {secret: 'sw33tP1ckl3s',
                    resave: false,
                    saveUninitialized: true,
                    cookie: {secure: true}};
