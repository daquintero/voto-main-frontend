// Selects Cards per their type
// Libraries
import React from 'react';

// ------------- CARDS IMPORTS -----------------
// Corruption Case
import CORRCard from '../../Reusable/CorruptionCase/components/Card';
// Informative Snippet
import INFOCard from '../../Reusable/InformativeSnippet/components/Card';
// Individual
import INDICard from '../../Reusable/Individual/components/Card';
// Controversy
import CONTCard from '../../Reusable/Individual/components/Controversy/components/Card';
import CONTCardWP from '../../Reusable/Individual/components/Controversy/components/CardWP';
// Promises
import PROMCard from '../../Reusable/Individual/components/Promise/components/Card';
import PROMCardWP from '../../Reusable/Individual/components/Promise/components/CardWP';
// Experience
import EXPCard from '../../Reusable/Individual/components/Experience/components/Card';
import EXPCardWP from '../../Reusable/Individual/components/Experience/components/CardWP';
// Law
import LAWCard from '../../Reusable/Law/components/Card';
// Statistics
import STATCard from '../../Reusable/Statistics/components/StatisticBlock';
// Financial Item
import FINCard from '../../Reusable/FinanceItem/components/FinanceItem';
import FINCardWP from '../../Reusable/FinanceItem/components/FinanceItemWP';
// Organization
import ORGCard from '../../Reusable/Organization/components/Card';
// Resource
import RESCard from '../../Reusable/Individual/components/Resource/components/Card';

// ---------- FUNCTION -----------
export default function (instance, context, light) {
  // console.log(instance);
  switch (instance.modelLabel) {
    case 'corruption.InformativeSnippet':
      return (<INFOCard instance={instance} />);
    case 'corruption.CorruptionCase':
      return (
        <CORRCard instance={instance} />
      );
    case 'corruption.FinancialItem':
      if (context === 'relation') {
        return (<FINCard instance={instance} />);
      }
      return (<FINCardWP instance={instance} />);
    case 'political.Individual':
      return (<INDICard instance={instance} light={light} />);
    case 'political.Controversy':
      if (context === 'relation') {
        return (<CONTCard instance={instance} />);
      }
      return (<CONTCardWP instance={instance} />);
    case 'political.Promise':
      if (context === 'relation') {
        return (<PROMCard instance={instance} light={light} />);
      }
      return (<PROMCardWP instance={instance} />);
    case 'political.Achievement':
      if (context === 'relation') {
        return (<PROMCard instance={instance} light={light} />);
      }
      return (<PROMCardWP instance={instance} />);
    case 'political.Experience':
      if (context === 'relation') {
        return (<EXPCard instance={instance} light={light} />);
      }
      return (<EXPCardWP instance={instance} />);
    case 'political.Statistic':
      return (<STATCard instance={instance} />);
    case 'political.Organization':
      return (<ORGCard instance={instance} light={light} />);
    case 'political.Law':
      return (<LAWCard instance={instance} />);
    case 'media.Resource':
      return (<RESCard instance={instance} />);
    default:
      return null;
  }
}
