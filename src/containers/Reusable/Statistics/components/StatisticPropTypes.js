// Statistic Prop Types

// PropTypes
import PropTypes from 'prop-types';

// ------------ STATISTIC PROPTYPES --------------
export const statisticPropTypes = {
  statistic: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    source: PropTypes.string.isRequired,
  }),
};


// ------------ STATISTICS LIST PROPTYPES -----------

export const statisticsListPropTypes = {
  statistics: PropTypes.arrayOf(statisticPropTypes),
};

export const statisticsListDefaultProps = {
  statistics: [],
};
