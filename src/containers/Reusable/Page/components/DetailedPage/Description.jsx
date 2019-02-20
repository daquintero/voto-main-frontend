/* eslint-disable */
// Libraries
import React, { PureComponent } from 'react';

// Prop Types
import PropTypes from 'prop-types';

// Declaration
class Description extends PureComponent {
  static propTypes = {
    description: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className="m-1 p-2">
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
          sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,
          commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
          ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.
          Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna
          eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus,
          metus
        </p>
        <dl>
          <dt>Definition list</dt>
          <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </dd>
          <dt>Lorem ipsum dolor sit amet</dt>
          <dd>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </dd>
        </dl>
      </div>
    );
  }
}

// TODO State Store Connection
export default Description;