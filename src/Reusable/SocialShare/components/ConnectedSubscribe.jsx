/* eslint-disable */
// TODO DESCRIPTION // Libraries
import React, { PureComponent } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
// Prop Types
import PropTypes from 'prop-types';


// Components
import Subscribe from './Subscribe';

const url =
  'https://votoinformado2019.us20.list-manage.com/subscribe/post?u=2bcf604066a7f8a7207e19d86&amp;id=932613c9a8';

// TODO ADD WHATSAPP

// Declaration
class ConnectedSubscribe extends PureComponent {
  render() {
    return (
      <>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <Subscribe
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </>
    );
  }
}

// TODO State Store Connection
export default ConnectedSubscribe;
