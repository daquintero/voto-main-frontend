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
import CONTCard from '../../Reusable/Individual/components/Controversy/components/CardWP';
// Promises
import PROMCard from '../../Reusable/Individual/components/Promise/components/CardWP';
// Experience
import EXPCard from '../../Reusable/Individual/components/Experience/components/CardWP';
// Law
import LAWCard from '../../Reusable/Law/components/Card';
// Statistics
import STATCard from '../../Reusable/Statistics/components/StatisticBlock';
// Financial Item
import FINCard from '../../Reusable/FinanceItem/components/FinanceItemWP';
// Organization TODO
// import ORGCard from '../../Reusable/Organization/components/Card';

// Selector Function
export default function (instance) {
  switch (instance.type) {
    case 'corruption.InformativeSnippet':
      return (<INFOCard instance={instance} />);
    case 'corruption.CorruptionCase':
      return (
        <CORRCard instance={instance} />
      );
    case 'corruption.FinancialItem':
      return (<FINCard instance={instance} />);
    case 'political.Individual':
      return (<INDICard instance={instance} />);
    case 'political.Controversy':
      return (<CONTCard instance={instance} />);
    case 'political.Promise':
      return (<PROMCard instance={instance} />);
    case 'political.Experience':
      return (<EXPCard instance={instance} />);
    case 'political.Statistic':
      return (<STATCard statistic={instance} />);
    // case 'political.Organization':
    //   return (<ORGCard instance={instance} />);
    case 'political.Law':
      return (<LAWCard instance={instance} />);
    default:
      return null;
  }
}
