import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import SignUpInstructions from '../js/components/presentational/sign_up_instructions.js';
import ExistingUser from '../js/components/presentational/existing_user.js';

describe('SignUpInstructions component', () => {
    it('Renders a single line of text', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<SignUpInstructions />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('su_instructions');
        result.props.children.should.equal('Signing up for the Gallery is as simple as entering in an email and password below!');
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
        console.log(link);
        const endP = result.props.children[2];
        endP.should.equal(' to login.');
    })
});