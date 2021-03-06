import auth from './auth';
import menu from './menu';
import gallery from './gallery';
import comments from './comments';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
// import individual reducer files and combine in combineReducers
const rootReducer = combineReducers({
    auth,
    menu,
    gallery,
    comments,
    routing: routerReducer,
    form: formReducer
});
export default rootReducer;
