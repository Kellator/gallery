import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { connect } from 'react-redux';

const ConfirmExhibitCard = () => (
    <Card>
        <Image src="http://via.placeholder.com/350x150" />
        <Card.Content>
            <Card.Header>
                Exhibit Title from CreateExhibitForm Title Field
            </Card.Header>
            <Card.Meta>
                Exhibit location URL from CreateExhibitForm input
            </Card.Meta>
            <Card.Description>
                Description from CreateExhibitForm description field
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Card.Meta>
                Collaboration response determined by CreateExhibitForm checkbox
            </Card.Meta>
        </Card.Content>
    </Card>
)
export default ConfirmExhibitCard;