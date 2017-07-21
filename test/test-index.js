import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { expect } from 'chai';

const should = chai.should();

//  MOCK DATA FOR TESTS
var mockExhibit = {
    title: 'Replacement for the Stars',
    _creator: {
        userEmail: 'mockEmail@email.com'
    },
    image:  'http://orig00.deviantart.net/c31e/f/2016/089/d/c/replacement_for_the_stars_by_yuumei-d9x282e.jpg',
    siteLink: 'http://yuumei.deviantart.com/art/Replacement-for-the-Stars-599726678',
    categories: ['illustration', 'manga', 'digital', 'landscapes', 'scenery', 'people', 'portrait']
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
// var mockWall = {
//     title: 'Illustration',
//     exhibits: [mockExhibit, mockExhibit2, mockExhibit3],
//     categories: ['illustration', 'painting', 'drawing']
// };
var mockUserWall = {
    _creator: {
        userEmail: 'mockEmail@email.com'
    },
    title: 'Portraits',
    exhibits: [mockExhibit, mockExhibit3],  
    categories: ['portrait', 'people']
};

//  LANDING PAGE COMPONENT IMPORTS
import SignUpInstructions from '../js/components/presentational/landing/sign_up_instructions.js';
import ExistingUser from '../js/components/presentational/landing/existing_user.js';
import SignUp from '../js/components/presentational/landing/sign_up.js';
import SignUpBlock from '../js/components/presentational/landing/sign_up_block.js';
import SignUpInput from '../js/components/presentational/landing/sign_up_input.js';
import LogInBlock from '../js/components/presentational/landing/login_block.js';
import LoginInput from '../js/components/presentational/landing/login_input.js';
import LandingPage from '../js/components/container/landing.js';

//  NAVIGATION BAR COMPONENT IMPORTS

//  NAVIGATION BAR COMPONENT TESTS

//  USER GALLERY COMPONENT IMPORTS
import Exhibit from '../js/components/presentational/gallery/exhibit.js';
import Wall from '../js/components/presentational/gallery/wall.js';
import Menu from '../js/components/presentational/navigation/action_menu.js';
import Gallery from '../js/components/container/gallery.js';

//  USER GALLERY COMPONENT TESTS
// describe('<Exhibit/>', () => {
//     it('will render a div with an image, a paragraph, and a <Menu/> without going boom', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<Exhibit />);
//         const result = renderer.getRenderOutput();
//         // console.log(result);
//         const children = result.props.children;
//         const childOne = children[0];
//         const childTwo = children[1];
//         const childThree = children[2];
//         console.log(childThree.type);
//         expect(childOne.type).to.equal('img');
//         expect(childTwo.type).to.equal('p');
//         expect(childThree.type.displayName).to.equal('Connect(Menu)');
//         expect(childThree.type.WrappedComponent).to.be.a('function');
//     });
// });

describe('<Wall /> Component', () => {
    it('will render a div containing a list of exhibits without breaking', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<Wall />);
        const result = renderer.getRenderOutput();
        console.log(result);       
    })
})

describe('<Gallery /> Component', () => {
    it('will render a div containing a list of walls without exploding things', () => {
        const mockState = {
            mockGallery: {
                _creator: {
                    userEmail: 'mockEmail@email.com'
                },
                walls: [mockUserWall] 
            }
        };
        const mockStore = configureStore();
        const store = mockStore(mockState);
        it('renders a container component successfully', () => {
            let wrapper = shallow(<Gallery />, { context : { store: store } });
            expect(wrapper.find(Gallery).length).to.equal(1);
            console.log(wrapper);
        });      
    });
});
//  LANDING PAGE COMPONENT TESTS

// describe('<LandingPage/>', () => {
//     beforeEach(() => {
//         const mockState = {
//             validation: {
//                 login: true
//             }
//         };
//         const mockStore = configureStore();
//         const store = mockStore(mockState);
//     })
//     it('renders a container component with going kablooey', () => {
//         let wrapper = shallow(<LandingPage />, { context: { store: store } });
//         expect(wrapper.find(LandingPage).length).to.equal(1);
//     });
// });

    


// describe('<LandingPage />', () => {
//     beforeEach(() => {
//         const mockState = {
//             validation: {
//                 login: true
//             }
//         };
//         const mockStore = configureStore();
//         const store = mockStore(mockState);
//     });
//     it('Renders a container component without going kaboom', (store) => {
//         let wrapper = shallow(<LandingPage />, { context: { store: store } });
//         expect(wrapper.find(LandingPage).length).to.equal(1);
//     });
// });

// describe('LandingPage component', () => { 
//     it('Renders a div containing 3 components', () => {
//         let login = true;
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<LandingPage />);
//         const result = renderer.getRenderOutput();
//         console.log(result);
//     })
// });

// describe('SignUpInstructions component', () => {
//     it('Renders 2 lines of text', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<SignUpInstructions />);
//         const result = renderer.getRenderOutput();
//         result.props.className.should.equal('su_instructions');
//         result.props.children.should.be.an('array');
//         const lineOne = result.props.children[0]
//         lineOne.props.children.should.be.a('string');
//         const lineTwo = result.props.children[1];
//         lineTwo.props.children.should.be.a('string');
//     })
// });

// describe('ExistingUser component', () => {
//     it('Renders a single line of text with a link', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<ExistingUser />);
//         const result = renderer.getRenderOutput();
//         result.props.className.should.equal('existing_user_line');
//         const startP = result.props.children[0];
//         startP.should.equal('Already a part of the Gallery?  Click ')
//         const link = result.props.children[1];
//         link.type.should.equal('button');
//         const endP = result.props.children[2];
//         endP.should.equal(' to login.');
//     })
// });

// describe('SignUp component', () => {
//     it('Renders a single line of text with a link', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<SignUp />);
//         const result = renderer.getRenderOutput();
//         result.props.className.should.equal('new_user_signup');
//         const children = result.props.children;
//         children.should.have.lengthOf(2);
//         let childOne = children[0];
//         childOne.should.equal('New to Gallery?  Sign up ');
//         let childTwo = children[1];
//         childTwo.props.should.be.an('object');
//         childTwo.type.should.equal('button');
//     })
// });

// describe('SignUpBlock', () => {
//     it('Renders a single div containing 4 components', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<SignUpBlock />);
//         const result = renderer.getRenderOutput();
//         let div = result.type;
//         div.should.equal('div');
//         result.props.children.should.be.an('array');
//         let childArray = result.props.children;
//         childArray.should.have.lengthOf(4);
//         let childOne = result.props.children[0];

//         let childTwo = result.props.children[1];

//         let childThree = result.props.children[2];

//         let childFour = result.props.children[3];
//     })
// });

// describe('LogInBlock', () => {
//     it('Renders a div containing 3 components', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<LogInBlock />); 
//         const result = renderer.getRenderOutput();
//         const div = result.type;
//         div.should.equal('div');
//         const children = result.props.children;
//         children.should.have.lengthOf(3);
//         let childOne = result.props.children[0];

//         let childTwo = result.props.children[1];

//         let childThree = result.props.children[2];
//     })
// });

// describe('SignUpInput', () => {
//     it('Renders a div containing a form', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<SignUpInput />); 
//         const result = renderer.getRenderOutput();
//         console.log(result);
//     })
// });

// describe('LoginInput', () => {
//     it('Renders a div containing a form', () => {
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<LoginInput />); 
//         const result = renderer.getRenderOutput();
//         console.log(result);
//     })
// });

