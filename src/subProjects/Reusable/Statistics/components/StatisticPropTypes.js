// Statistic Prop Types

// PropTypes
import PropTypes from 'prop-types';

// ------------ STATISTIC PROPTYPES --------------
export const statisticPropTypes = {
  statistic: PropTypes.shape({
    type: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    source: PropTypes.string.isRequired,
  }),
};

// TODO JAMIE CHANGE THIS SYNTAX
export const statisticDefaultProps = {
  type: 'political.Individual.Statistic',
  icon: '',
  name: '',
  value: '',
  source: '',
};


// ------------ STATISTICS LIST PROPTYPES -----------

export const statisticsListPropTypes = {
  statistics: PropTypes.arrayOf(statisticPropTypes),
};

export const statisticsListDefaultProps = {
  statistics: [],
};

