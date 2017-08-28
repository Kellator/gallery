import React from 'react';
import TestUtils from 'react-dom/test-utils';
import chai from 'chai';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { Form, Input, Button, Card, Message } from 'semantic-ui-react';

const should = chai.should();
// semantic test workaround
const fs = require( 'fs' );

const visibilityFile = 'node_modules/semantic-ui-react/dist/commonjs/behaviors/Visibility/Visibility.js';
const stickyFile = 'node_modules/semantic-ui-react/dist/commonjs/modules/Sticky/Sticky.js';

fs.readFile( visibilityFile, 'utf8', function ( err, data ) {
  if ( err ) {
    return console.error( err );
  }
  const result = data.replace( 'context: window', 'context: typeof window === \'object\' && window !== null && window.self === window ? window : {}' );

  fs.writeFile( visibilityFile, result, 'utf8', function ( err ) {
    if ( err ) return console.error( err );
  } );
} );

fs.readFile( stickyFile, 'utf8', function ( err, data ) {
  if ( err ) {
    return console.error( err );
  }
  const result = data.replace( 'scrollContext: window', 'scrollContext: typeof window === \'object\' && window !== null && window.self === window ? window : {}' );

  fs.writeFile( stickyFile, result, 'utf8', function ( err ) {
    if ( err ) return console.error( err );
  } );
} );

//  MOCK DATA FOR TESTS

//  LANDING PAGE COMPONENT IMPORTS
// import SignUpInstructions from '../js/components/presentational/landing/sign_up_instructions.js';
// import ExistingUser from '../js/components/presentational/landing/existing_user.js';
// import SignUpText from '../js/components/presentational/landing/sign_up_text.js';
// import SignUpBlock from '../js/components/presentational/landing/sign_up_block.js';
// import SignUpForm from '../js/components/presentational/landing/sign_up_form.js';
// import LogInBlock from '../js/components/presentational/landing/login_block.js';
// import LoginForm from '../js/components/presentational/landing/login_form.js';
// import LogIn from '../js/components/container/login-container.js';
// import SignUp from '../js/components/container/signup-container.js';

// //  NAVIGATION BAR COMPONENT IMPORTS

//  NAVIGATION BAR COMPONENT TESTS

//  USER GALLERY COMPONENT IMPORTS
import NoResult from '../js/components/presentational/gallery/noResult';

// describe('<Gallery /> Component', () => {
//     it('will render a div containing a list of walls without exploding things', () => {
//         const mockState = {
//             mockGallery: {
//                 _creator: {
//                     userEmail: 'mockEmail@email.com'
//                 },
//                 walls: [mockUserWall] 
//             }
//         };
//         const mockStore = configureStore();
//         const store = mockStore(mockState);
//         it('renders a container component successfully', () => {
//             let wrapper = shallow(<Gallery />, { context : { store: store } });
//             expect(wrapper.find(Gallery).length).to.equal(1);
//             console.log(wrapper);
//         });      
//     });
// });

describe('<NoResult /> Component', () => {
    it('will render a div containing a line of text', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<NoResult />);
        const result = renderer.getRenderOutput();
    })
})
// describe('SignUpInstructions component', () => {
//     it('Renders 2 lines of text', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<SignUpInstructions />);
//         const result = renderer.getRenderOutput();
//     })
// });

// describe('ExistingUser component', () => {
//     it('Renders a single line of text with a link', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<ExistingUser />);
//         const result = renderer.getRenderOutput();
//     })
// });

// describe('SignUpText component', () => {
//     it('Renders a single line of text with a link', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<SignUpText />);
//         const result = renderer.getRenderOutput();
//     })
// });

// describe('SignUpBlock', () => {
//     it('Renders a single div containing 4 components', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<SignUpBlock />);
//         const result = renderer.getRenderOutput();

//     })
// });

// describe('LogInBlock', () => {
//     it('Renders a div containing 3 components', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<LogInBlock />); 
//         const result = renderer.getRenderOutput();
//     })
// });

// describe('SignUpForm', () => {
//     it('Renders a div containing a form', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<SignUpForm />); 
//         const result = renderer.getRenderOutput();
//         console.log(result);
//     })
// });

// describe('LoginForm', () => {
//     it('Renders a div containing a form', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<LoginForm />); 
//         const result = renderer.getRenderOutput();
//         console.log(result);
//     })
// });

