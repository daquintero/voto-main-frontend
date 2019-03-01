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
// Organization TODO
// import ORGCard from '../../Reusable/Organization/components/Card';

// ---------- Selector Function -----------
export default function (instance, context) {
  switch (instance.type) {
    case 'corruption.InformativeSnippet':
      return (<INFOCard instance={instance} />);
    case 'corruption.NewsLike':
      return (
        <CORRCard instance={instance} />
      );
    case 'corruption.FinancialItem':
      if (context === 'relation') {
        return (<FINCard instance={instance} />);
      }
      return (<FINCardWP instance={instance} />);
    case 'political.Individual':
      return (<INDICard instance={instance} />);
    case 'political.Controversy':
      if (context === 'relation') {
        return (<CONTCard instance={instance} />);
      }
      return (<CONTCardWP instance={instance} />);
    case 'political.Promise':
      if (context === 'relation') {
        return (<PROMCard instance={instance} />);
      }
      return (<PROMCardWP instance={instance} />);
    case 'political.Experience':
      if (context === 'relation') {
        return (<EXPCard instance={instance} />);
      }
      return (<EXPCardWP instance={instance} />);
    case 'political.Statistic':
      return (<STATCard instance={instance} />);
    // case 'political.Organization':
    //   return (<ORGCard instance={instance} />);
    case 'political.Law':
      return (<LAWCard instance={instance} />);
    default:
      return null;
  }
}
