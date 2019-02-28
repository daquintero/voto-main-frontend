// Main Finance List displayed in Header about Corruption Funds

// Libraries
import React, { PureComponent } from 'react';
import { ListGroupItem } from 'reactstrap';
import numeral from 'numeral';

// Props
import PropTypes from 'prop-types';

// TODO FINISH STYLING

class MainFinanceList extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const { instance } = this.props;
    return (
      <a target="_blank" rel="noreferrer noopener" href={instance.source} >
        <ListGroupItem className="list-up">
          <div>
            <h4>{numeral(instance.amount).format('$ 0,0.00')}</h4>
          </div>
          <div>
            <h6>{instance.title}</h6>
          </div>
        </ListGroupItem>
      </a>
    );
  }
}

export default MainFinanceList;
