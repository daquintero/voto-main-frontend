// Main Finance List displayed in Header about With Parent

// Libraries
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';
import numeral from 'numeral';

// TODO FINISH STYLING

class MainFinanceList extends PureComponent {
  static propTypes = {
    instance: PropTypes.instanceOf(Object).isRequired,
  };

  render() {
    const { instance } = this.props;
    return (
      <a target="_blank" rel="noreferrer noopener" href={instance.source} className="span-3-cols">
        <ListGroupItem className="list-up border-0">
          <div>
            <h4>{numeral(instance.amount).format('$ 0,0.00')}</h4>
          </div>
          <div>
            <h6>{instance.title}</h6>
          </div>
          {instance.individuals && instance.individuals.map(individual => (
            <div className="text-center bg-light" key={individual.id}>
              <i className="fal fa-user p-2" />{individual.name}
            </div>
          ))}
        </ListGroupItem>
      </a>
    );
  }
}

export default MainFinanceList;
