// The Variable Material MatTable Component Social, used for several models.
// ----------------- ABSOLUTE IMPORTS -------------------------
import React, { Component } from 'react';

// Bootstrap
import { Row, Col } from 'reactstrap';

// Material UI Components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';

// ----------------- RELATIVE IMPORTS -------------------------
// PropTypes
import { MatTablePropTypes, MatTableDefaultPropTypes } from './components/MatTablePropTypes';

// Components
import MatTableHead from './components/MatTableHead';

// Utils
import squashString from '../../shared/utils/squashString';

// Util for array ordering under these
const getNestedSorting = (instance, orderBy) => {
  if (!instance[orderBy]) {
    return instance.tableValues.descriptors.filter(f => f.name === orderBy)[0].value;
  }
  return instance[orderBy];
};

// Array ordering function
const getSorting = (order, orderBy) => (order === 'desc' ?
  (a, b) => getNestedSorting(b, orderBy) - getNestedSorting(a, orderBy)
  :
  (a, b) => getNestedSorting(a, orderBy) - getNestedSorting(b, orderBy));

const tableHeads = [
  {
    id: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Título',
  },
  {
    id: 'amount',
    numeric: true,
    disablePadding: false,
    label: 'Fondos',
  },
  {
    id: 'source',
    numeric: false,
    disablePadding: false,
    label: 'Fuente',
  },
];


// ----------------- CLASS -------------------

export default class MatTable extends Component {
  static propTypes = MatTablePropTypes;
  static defaultProps = MatTableDefaultPropTypes;
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'amount',
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
    const { instances } = this.props;

    // TODO RENAME CASES TO FINAL SPANISH DESCRIPTORS
    const specialStyling = (descriptor) => {
      switch (descriptor.name) {
        case 'link':
          return (
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={descriptor.value}
            >
              <i className="fal fa-external-link enlarge" />
            </a>
          );
        case 'amount':
          return (
            <p className=""> {squashString(descriptor.value, 0, '0.0a')} </p>
          );
        case 'corruption_related':
          return null;
        default:
          return (squashString(descriptor.value, 20, '$ 0.0a'));
      }
    };

    // Full MatTable Component
    return (
      <Row>
        <Col xs={12} className="p-2">
          <div className="bg-white rounded">
            <div className="material-table__wrap">
              <Table className="material-table">
                <MatTableHead
                  rows={tableHeads}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={this.handleRequestSort}
                />
                <TableBody>
                  {console.log(instances)}
                  { instances
                .sort(getSorting(order, orderBy))
                .slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
                .map(instance => (
                  <TableRow
                    className="material-table__row"
                    key={instance.id}
                  >
                    {/* Descriptors set from Json Reply */}
                    {instance.tableValues.descriptors.map(descriptor => (
                      <TableCell
                        key={descriptor.name}
                        className="material-table__cell material-table__cell--mobile "
                        component="th"
                        scope="row"
                        padding="default"
                        align="right"
                      >
                        {specialStyling(descriptor)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              }
                </TableBody>
              </Table>
            </div>
            <TablePagination
              component="div"
              className="material-table__pagination"
              count={instances.length}
              onChangePage={this.handleChangePage}
              page={page}
              rowsPerPage={rowsPerPage}
              labelRowsPerPage="Filas por página"
            />
          </div>
        </Col>
      </Row>
    ); // TODO Complete MatTable and relationships
  }
}
