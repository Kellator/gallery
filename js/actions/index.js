//user validation actions
export const CHECK_USER = 'CHECK_USER';

export const ENTER_GALLERY = 'ENTER_GALLERY';

//GALLERY ACTIONS
//adds exhibit data to exhibit
export const ADD_EXHIBIT = 'ADD_EXHIBIT';

//shares a specific exhibit via message
export const SHARE_EXHIBIT = 'SHARE_EXHIBIT';

//adds already existing exhibit to user wall
export const ADD_TO_WALL = 'ADD_TO_WALL';

//creates a new wall for user
export const ADD_WALL = 'ADD_WALL';


//UI ACTIONS - changes that occur to ui state tree
//landing page - login vs sign up
export const SHOW_LOGIN = 'SHOW_LOGIN';

export const SHOW_SIGNUP = 'SHOW_SIGNUP';

//in user gallery on log in - nav with user menu, search bar, browse rail, and message rail
export const SHOW_MENU = 'SHOW_MENU';

export const HIDE_MENU = 'HIDE_MENU';

export const LOG_OUT = 'LOG_OUT';

//shows selected exhibit
export const SHOW_EXHIBIT = 'SHOW_EXHIBIT';

//shows selected user wall
export const SHOW_USER_WALL = 'SHOW_USER_WALL';

//shows selected user gallery
export const SHOW_USER_GALLERY = 'SHOW_USER_GALLERY';

//shows selected wall 
export const SHOW_WALL = 'SHOW_WALL';

//shows all exhibits in app
export const SHOW_GALLERY = 'SHOW_GALLERY';


//thunks?