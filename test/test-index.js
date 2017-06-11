import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import SignUpInstructions from '../js/components/presentational/sign_up_instructions.js';
import ExistingUser from '../js/components/presentational/existing_user.js';
import SignUpBlock from '../js/components/presentational/sign_up_block.js';
import SignUpInput from '../js/components/presentational/sign_up_input.js';

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
        link.type.should.equal('a');
        const endP = result.props.children[2];
        endP.should.equal(' to login.');
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
        console.log(childOne);
        let childTwo = result.props.children[1];

        let childThree = result.props.children[2];

        let childFour = result.props.children[3];
    })
});

describe('SignUpInput', () => {
    it('Renders renders a div containing a form', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<SignUpInput />); 
        const result = renderer.getRenderOutput();
        console.log(result);
        const div = result.type;
        div.should.equal('div');
        const children = result.props.children;
        const form = children.type;
        form.should.equal('form');
        children.props.should.be.an('object');
    })
})