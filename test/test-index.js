import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

//  LANDING PAGE COMPONENT IMPORTS
import SignUpInstructions from '../js/components/presentational/landing/sign_up_instructions.js';
import ExistingUser from '../js/components/presentational/landing/existing_user.js';
import SignUp from '../js/components/presentational/landing/sign_up.js';
import SignUpBlock from '../js/components/presentational/landing/sign_up_block.js';
import SignUpInput from '../js/components/presentational/landing/sign_up_input.js';
import LogInBlock from '../js/components/presentational/landing/login_block.js';
import LoginInput from '../js/components/presentational/landing/login_input.js';
import { LandingPage } from '../js/components/container/landing.js';

//  NAVIGATION BAR COMPONENT IMPORTS

//  NAVIGATION BAR COMPONENT TESTS

//  LANDING PAGE COMPONENT TESTS

// describe('LandingPage component', () => {
//     it('Renders a div containing 3 components', () => {
//         let login = true;
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<LandingPage />);
//         const result = renderer.getRenderOutput();
//         console.log(result);
//     })
// });

describe('SignUpInstructions component', () => {
    it('Renders 2 lines of text', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<SignUpInstructions />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('su_instructions');
        result.props.children.should.be.an('array');
        const lineOne = result.props.children[0]
        lineOne.props.children.should.be.a('string');
        const lineTwo = result.props.children[1];
        lineTwo.props.children.should.be.a('string');
    })
});

describe('ExistingUser component', () => {
    it('Renders a single line of text with a link', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<ExistingUser />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('existing_user_line');
        const startP = result.props.children[0];
        startP.should.equal('Already a part of the Gallery?  Click ')
        const link = result.props.children[1];
        link.type.should.equal('button');
        const endP = result.props.children[2];
        endP.should.equal(' to login.');
    })
});

describe('SignUp component', () => {
    it('Renders a single line of text with a link', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<SignUp />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('new_user_signup');
        const children = result.props.children;
        children.should.have.lengthOf(2);
        let childOne = children[0];
        childOne.should.equal('New to Gallery?  Sign up ');
        let childTwo = children[1];
        childTwo.props.should.be.an('object');
        childTwo.type.should.equal('button');
    })
});

describe('SignUpBlock', () => {
    it('Renders a single div containing 4 components', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<SignUpBlock />);
        const result = renderer.getRenderOutput();
        let div = result.type;
        div.should.equal('div');
        result.props.children.should.be.an('array');
        let childArray = result.props.children;
        childArray.should.have.lengthOf(4);
        let childOne = result.props.children[0];

        let childTwo = result.props.children[1];

        let childThree = result.props.children[2];

        let childFour = result.props.children[3];
    })
});

describe('LogInBlock', () => {
    it('Renders a div containing 3 components', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<LogInBlock />); 
        const result = renderer.getRenderOutput();
        const div = result.type;
        div.should.equal('div');
        const children = result.props.children;
        children.should.have.lengthOf(3);
        let childOne = result.props.children[0];

        let childTwo = result.props.children[1];

        let childThree = result.props.children[2];
    })
});

describe('SignUpInput', () => {
    it('Renders a div containing a form', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<SignUpInput />); 
        const result = renderer.getRenderOutput();
        console.log(result);
    })
});

describe('LoginInput', () => {
    it('Renders a div containing a form', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<LoginInput />); 
        const result = renderer.getRenderOutput();
        console.log(result);
    })
});

