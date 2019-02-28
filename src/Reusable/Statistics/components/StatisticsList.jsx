// Statistic List Group

// Libraries
import React, { PureComponent } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import numeral from 'numeral';

// Props
import { statisticsListPropTypes } from './StatisticPropTypes';


class StatisticsList extends PureComponent {
  static propTypes = statisticsListPropTypes;

  render() {
    const { statistics } = this.props;
    return (
      <ListGroup>
        { statistics.map(instance => (
          <ListGroupItem className="list-searching" tag="a" href={instance.source}>
            <span className="float-left">
              <i className={`pt-2 p-2 fal fa-${instance.icon}`} />
              {instance.name}
            </span>
            <h4>
              <Badge className="float-right" color="light">
                { typeof instance.value === 'number' ? numeral(instance.value).format('0.0a') : instance.value}
              </Badge>
            </h4>
          </ListGroupItem>
          ))}
      </ListGroup>
    );
  }
}

export default StatisticsList;
