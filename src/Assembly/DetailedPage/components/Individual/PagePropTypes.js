import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

// TODO CHANGE ALL TO CAMELCASE
// --------------- EXTERNAL PROP TYPES IMPORTS -------------
// Utils
import paginationProps from '../../../../shared/utils/paginationProps';

// General
import { mainFinanceListPropTypes,
  mainFinanceListDefaultProps } from '../../../../Reusable/FinanceItem/components/FinanceItemPropTypes';

// ------------------ RELATIONSHIPS PROPS -------------------
export const RelationshipProps = {
  // TODO ADD ORGANIZATION
  // organizations: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number,
  //   name: PropTypes.string,
  //   logo: PropTypes.shape({
  //     logo: PropTypes.string,
  //   }),
  // })),
  individuals: {
    subset: PropTypes.arrayOf(PropTypes.shape({
      IndividualCardProps,
    })),
    paginationProps,
  },
  corruptionCases: {
    subset: PropTypes.arrayOf(PropTypes.shape({
      CCCardProps,
    })),
    paginationProps,
  },
  informativeSnippets: {
    subset: PropTypes.arrayOf(PropTypes.shape({
      ISCardProps,
    })),
    paginationProps,
  },
};

export const StatisticsProps = {
  statisticsListPropTypes,
  paginationProps,
};

export const PageProps = {
  dispatch: PropTypes.func.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
  id: PropTypes.number.isRequired,
};

// ------------------------ HEADER PROP TYPES -------------------
export const headerPropTypes = {
  basic: PropTypes.shape({
    name: PropTypes.string.isRequired,
    briefDescription: PropTypes.string.isRequired,
    longDescription: PropTypes.string,
    website: PropTypes.string,
    twitterUsername: PropTypes.string,
    facebookUserName: PropTypes.string,
    type: PropTypes.string,
    email: PropTypes.string,
    mainFinanceListPropTypes,
  }),
};

export const headerDefaultProps = {
  basic: {
    name: '',
    briefDescription: '',
    longDescription: '',
    website: '',
    twitterUsername: '',
    facebookUserName: '',
    type: '',
    email: '',
    mainFinanceListDefaultProps,
  },
};


// TODO Define CorruptionCase Default Props
