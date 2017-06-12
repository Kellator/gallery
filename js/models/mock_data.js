//mock exhibit data 
var mockExhibit = {
    title: 'Replacement for the Stars',
    _creator: {
        userEmail: 'mockEmail@email.com'
    },
    image:  'http://orig00.deviantart.net/c31e/f/2016/089/d/c/replacement_for_the_stars_by_yuumei-d9x282e.jpg',
    siteLink: 'http://yuumei.deviantart.com/art/Replacement-for-the-Stars-599726678',
    categories: ['illustration', 'manga', 'digital', 'landscapes', 'scenery', 'people', 'portrait']
};

var mockExhibit2 = {
    title: 'Death Valley',
    _creator: {
        userEmail: 'mockEmail2@email.com'
    },
    image:  'https://s-media-cache-ak0.pinimg.com/564x/82/37/ee/8237ee9fff1bd5b205cc0b3cc23c253b.jpg',
    siteLink: 'http://dabana.deviantart.com/art/Death-Valley-535687540',
    categories: ['illustration', 'painting', 'digital', 'landscapes', 'scenery']
};

var mockExhibit3 = {
    title: 'Fly by Night',
    _creator: {
        userEmail: 'mockEmail@email.com'
    },
    image:  'http://dspncdn.com/a1/media/692x/78/c8/a1/78c8a13c4dd878d82d22940b48512315.jpg',
    siteLink: 'http://designspiration.net/image/4609558023629/',
    categories: ['illustration', 'painting', 'digital', 'whimsical', 'people', 'portrait']
};
//mock wall data - not user specific
var mockWall = {
    title: 'Illustration',
    exhibits: [mockExhibit, mockExhibit2, mockExhibit3],
    categories: ['illustration', 'painting', 'drawing']
};

var mockWall2 = {
    title: 'Landscapes',
    exhibits: [mockExhibit, mockExhibit1],
    categories: ['landscape', 'scenery']
};

var mockWall3 = {
    title: 'People',
    exhibits: [mockExhibit, mockExhibit2],
    categories: ['people', 'portrait']
};
//mock gallery data - should show all walls in gallery app
var mockGallery = {
    walls: [mockWall, mockWall2, mockWall3]
};
//mock user specific wall - lists all exhibits placed by user in specific wall
var mockUserWall = {
    _creator: {
        userEmail: 'mockEmail@email.com'
    },
    title: 'Portraits',
    exhibits: [mockExhibit, mockExhibit3],  
    categories: ['portrait', 'people']
};

var mockUserWall2 = {
    _creator: {
        userEmail: 'mockEmail2@email.com'
    },
    title: 'Illustration',
    exhibits: [mockExhibit2],  
    categories: ['illustration']
};
//mock user specific gallery - lists all walls created by user
var mockUserGallery = new mongoose.Schema({
    _creator: {
        userEmail: 'mockEmail@email.com'
    },
    walls: [mockUserWall] 
};
//mock users
var mockUser = {
    email: 'mockEmail@email.com',
    password: '123456789abc',
    galleries: [mockUserWall]
};

var mockUser2 = {
    email: 'mockEmail2@email.com',
    password: 'cba987654321',
    galleries: [mockUserWall2]
};