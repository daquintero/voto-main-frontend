// Law Prop Types

// PropTypes
import PropTypes from 'prop-types';

// ------------ LAW CARD PROPTYPES --------------
export const lawCardPropTypes = {
  law: PropTypes.shape({
    type: PropTypes.string,
    size: PropTypes.string,
    code: PropTypes.number,
    briefDescription: PropTypes.string,
    category: PropTypes.string,
    source: PropTypes.string.isRequired,
  }),
};


// ------------ LAW LIST PROPTYPES -----------

export const lawsListPropTypes = {
  laws: PropTypes.arrayOf(lawCardPropTypes),
};

export const lawsListDefaultProps = {
  laws: [],
};
