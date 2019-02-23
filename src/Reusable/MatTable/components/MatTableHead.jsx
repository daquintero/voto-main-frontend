// ----------------- ABSOLUTE IMPORTS -------------------------
import React, { PureComponent } from 'react';

// Material-UI
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

// ----------------- RELATIVE IMPORTS -------------------------
// PropTypes
import { MatTableHeadPropTypes } from './MatTablePropTypes';


// ----------------- CLASS ------------------------------------

export default class MatTableHead extends PureComponent {
  static propTypes = MatTableHeadPropTypes;
  // Sort Handler from Main MatTable
  createSortHandler = property => (event) => {
    this.props.onRequestSort(event, property);
  };
  render() {
    const { rows, order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => (
            <TableCell
              className="material-table__cell material-table__cell--sort material-table__cell--mobile"
              key={row.id}
              padding="default"
              sortDirection={orderBy === row.id ? order : false}
            >
              {row.numeric ?
                (
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    <h5 className="material-table__sort-label">{row.label}</h5>
                  </TableSortLabel>
                ) :
                  <h5 className="material-table__sort-label">{row.label}</h5>
              }
            </TableCell>
          ), this)}
        </TableRow>
      </TableHead>
    );
  }
}

