exports.DATABASE_URL = process.env.DATABASE_URL ||
                        global.DATABASE_URL ||
                        (process.env.NODE_ENV === 'production' ?
                        'mongodb://gallery_user:t@pD@nc3r@ds161931.mlab.com:61931/gallery' :
                        'mongodb://localhost/gallery-dev');
exports.PORT = process.env.PORT || 8080;