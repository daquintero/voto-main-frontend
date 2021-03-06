// Selects Cards per their type
// Libraries
import React from 'react';

// ------------- CARD IMPORTS -----------------
// Corruption Case
import CorruptionCaseCard from '../../Reusable/CorruptionCase/components/Card';
// Informative Snippet
import InformativeSnippetCard from '../../Reusable/InformativeSnippet/components/Card';
// Individual
import IndividualCard from '../../Reusable/Individual/components/Card';
import IndividualCardLong from '../../Reusable/Individual/components/CardLong';
// Controversy
import ControversyCardWithParent from '../../Reusable/Controversy/components/CardWithParent';
// Promises
import PromiseCardWithParent from '../../Reusable/Promise/components/CardWithParent';
// Achievement
import AchievementCardWithParent from '../../Reusable/Achievement/components/CardWithParent';
// Experience
import ExperienceCardWithParent from '../../Reusable/Individual/components/Experience/components/CardWithParent';
// Law
import LawCardWithParent from '../../Reusable/Law/components/CardWithParent';
// Statistics
import StatisticCard from '../../Reusable/Statistics/components/StatisticBlock';
// Financial Item
import FinancialItemCardWithParent from '../../Reusable/FinanceItem/components/FinanceItemWithParent';
// Organization
import OrganisationCard from '../../Reusable/Organization/components/Card';
import OrganizationCardLong from '../../Reusable/Organization/components/CardLong';
// Resource
import ResourceCard from '../../Reusable/Resource/components/Card';


export default ({
  instance, typeContext, light, ...rest
}) => {
  switch (instance.modelLabel) {
    case 'corruption.InformativeSnippet':
      return (
        <InformativeSnippetCard
          instance={instance}
          {...rest}
        />
      );

    case 'corruption.CorruptionCase':
      return (
        <CorruptionCaseCard
          instance={instance}
          {...rest}
        />
      );

    case 'corruption.FinancialItem':
      return (
        <FinancialItemCardWithParent
          instance={instance}
          {...rest}
        />
      );

    case 'political.Individual':
      if (typeContext === 'detailed') {
        return (
          <IndividualCardLong
            instance={instance}
            light={light}
            {...rest}
          />
        );
      }
      return (
        <IndividualCard
          instance={instance}
          light={light}
          {...rest}
        />
      );

    case 'political.Controversy':
      return (
        <ControversyCardWithParent
          instance={instance}
          light={light}
          {...rest}
        />
      );

    case 'political.Promise':
      return (
        <PromiseCardWithParent
          instance={instance}
          {...rest}
        />
      );

    case 'political.Achievement':
      return (
        <AchievementCardWithParent
          instance={instance}
          {...rest}
        />
      );

    case 'political.Experience':
      return (
        <ExperienceCardWithParent
          instance={instance}
          {...rest}
        />
      );

    case 'political.Statistic':
      return (
        <StatisticCard
          instance={instance}
          {...rest}
        />
      );

    case 'political.Organization':
      if (typeContext === 'detailed') {
        return (
          <OrganizationCardLong
            instance={instance}
            light={light}
            {...rest}
          />
        );
      }
      return (
        <OrganisationCard
          instance={instance}
          light={light}
          {...rest}
        />
      );


    case 'political.Law':
      return (
        <LawCardWithParent
          instance={instance}
          typeContext={typeContext}
          {...rest}
        />
      );

    case 'media.Resource':
      return (
        <ResourceCard
          instance={instance}
          {...rest}
        />
      );

    default:
      return null;
  }
};
