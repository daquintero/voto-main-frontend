// The Variable Material MatTable Component Index, used for several models.
// ----------------- ABSOLUTE IMPORTS -------------------------
import React, { Component } from 'react';

// Material UI Components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';

// ----------------- RELATIVE IMPORTS -------------------------
// PropTypes
import { MatTablePropTypes, MatTableDefaultPropTypes } from './MatTablePropTypes';

// Components
import MatTableHead from './MatTableHead';

// Array ordering function
const getSorting = (order, orderBy) =>
  (order === 'desc' ? (a, b) => b[orderBy] - a[orderBy] : (a, b) => a[orderBy] - b[orderBy]);

// ----------------- CLASS -------------------

export default class MatTable extends Component {
  static propTypes = MatTablePropTypes;
  static defaultPropTypes = MatTableDefaultPropTypes;
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'id',
      page: 0,
      rowsPerPage: 5,
    };
  }
  // Function sent to MatTableHead for sorting
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';
    // When function called, toggle order
    if (this.state.orderBy === property && this.state.order === 'desc') { order = 'asc'; }
    this.setState({ order, orderBy });
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  render() {
    // Local State
    const {
      order, orderBy, page, rowsPerPage,
    } = this.state;
    // Props
    // Contains all data
    const { field } = this.props;
    // Headers and Inner request data
    const { relatedInstances } = field;
    // Extraction of data
    const { instances, tableHeads } = relatedInstances;

    // Full MatTable Component
    return (
      <>
        <div className="material-table__wrap">
          <Table className="material-table">
            <MatTableHead
              rows={tableHeads}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
          </Table>
          <TableBody>
            { instances
              .sort(getSorting(order, orderBy))
              .slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
              .map(instance => (
                <TableRow
                  className="material-table__row"
                  key={instance.id}
                >
                  <TableCell className="material-table__cell">
                    {instance.id}
                  </TableCell>
                  {/* TODO Assuming that the sent descriptors are title, amount, and link */}
                  {instance.tableValues.descriptors.map(descriptor => (
                    <TableCell
                      key={descriptor.name}
                      className="material-table__cell"
                      component="th"
                      scope="row"
                      padding="default"
                    >
                      {/* TODO Add the squashString */}
                      {descriptor.value}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            }
          </TableBody>
        </div>
        <TablePagination
          component="div"
          className="material-table__pagination"
          count={instances.length}
          onChangePage={this.handleChangePage}
          page={page}
          rowsPerPage={rowsPerPage}
        />
      </>
    ); // TODO Complete MatTable and relationships
  }
}
