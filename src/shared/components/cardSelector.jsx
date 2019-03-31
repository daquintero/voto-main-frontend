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
// Controversy
import ControversyCardWithParent from '../../Reusable/Controversy/components/CardWP';
// Promises
/* eslint-disable import/no-duplicates */
import PromiseCardWithParent from '../../Reusable/Promise/components/CardWP';
// Promises
import AchievementCardWithParent from '../../Reusable/Promise/components/CardWP';
// Experience
import ExperienceCardWithParent from '../../Reusable/Individual/components/Experience/components/CardWP';
// Law
import LawCardWithParent from '../../Reusable/Law/components/CardWP';
// Statistics
import StatisticCard from '../../Reusable/Statistics/components/StatisticBlock';
// Financial Item
import FinancialItemCardWithParent from '../../Reusable/FinanceItem/components/FinanceItemWP';
// Organization
import OrganisationCard from '../../Reusable/Organization/components/Card';
// Resource
import ResourceCard from '../../Reusable/Resource/components/Card';


export default (instance, context, light) => {
  switch (instance.modelLabel) {
    case 'corruption.InformativeSnippet':
      return (
        <InformativeSnippetCard instance={instance} />
      );

    case 'corruption.CorruptionCase':
      return (
        <CorruptionCaseCard instance={instance} />
      );

    case 'corruption.FinancialItem':
      return (
        <FinancialItemCardWithParent instance={instance} />
      );

    case 'political.Individual':
      return (
        <IndividualCard instance={instance} light={light} />
      );

    case 'political.Controversy':
      return (
        <ControversyCardWithParent instance={instance} light={light} />
      );

    case 'political.Promise':
      return (
        <PromiseCardWithParent instance={instance} />
      );

    case 'political.Achievement':
      return (
        <AchievementCardWithParent instance={instance} />
      );

    case 'political.Experience':
      return (
        <ExperienceCardWithParent instance={instance} />
      );

    case 'political.Statistic':
      return (
        <StatisticCard instance={instance} />
      );

    case 'political.Organization':
      return (
        <OrganisationCard instance={instance} light={light} />
      );

    case 'political.Law':
      return (
        <LawCardWithParent instance={instance} typeContext={context} />
      );

    case 'media.Resource':
      return (
        <ResourceCard instance={instance} />
      );

    default:
      return null;
  }
};
