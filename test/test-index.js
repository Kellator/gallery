import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import SignUpInstructions from '../js/components/presentational/sign_up_instructions.js';

describe('SignUpInstructions component', () => {
    it('Renders a single line of text', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<SignUpInstructions />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('su_instructions');
        result.props.children.should.equal('Signing up for the Gallery is as simple as entering in an email and password below!');
        console.log(result.props);
    })
})