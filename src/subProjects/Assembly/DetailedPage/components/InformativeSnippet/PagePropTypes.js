import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
// TODO CHANGE ALL TO CAMELCASE
// --------------- EXTERNAL PROP TYPES IMPORTS -------------
// Utils
import paginationProps from '../../../../shared/utils/paginationProps';

// General
import { statisticsListPropTypes } from '../../../../Reusable/Statistics/components/StatisticPropTypes';
import { mainFinanceListPropTypes,
  mainFinanceListDefaultProps } from '../../../../Reusable/FinanceItem/components/FinanceItemPropTypes';

// Relationships
import { CardPropTypes as IndividualCardProps } from '../../../../Reusable/Individual/components/IndividualPropTypes';
import { CardPropTypes as ISCardProps } from
  '../../../../Reusable/InformativeSnippet/components/InformativeSnippetPropTypes';
import { CardPropTypes as CCCardProps } from '../../../../Reusable/CorruptionCase/components/CorruptionCasePropTypes';

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
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
    mainFinanceListPropTypes,
  }),
};

export const headerDefaultProps = {
  basic: {
    title: '',
    description: '',
    longDescription: '',
    mainFinanceListDefaultProps,
  },
};


// TODO Define CorruptionCase Default Props
