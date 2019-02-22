// Selects Cards per their type
// Libraries
import React from 'react';

// ------------- CARDS IMPORTS -----------------
// Corruption Case
import CORRCard from '../CorruptionCase/components/Card';
// Informative Snippet
import INFOCard from '../InformativeSnippet/components/Card';
// Individual
import INDICard from '../Individual/components/Card';
// Controversy
import CONTCard from '../Individual/components/Controversy/components/Card';
// Promises
import PROMCard from '../Individual/components/Promise/components/Card';
// Experience
import EXPCard from '../Individual/components/Experience/components/Card';
// Law
import LAWCard from '../Law/components/Card';
// Statistics
import STATCard from '../Statistics/components/StatisticBlock';
// Financial Item TODO
import FINCard from '../FinanceItem/components/FinanceItem';
// Organization
import ORGCard from '../Organization/components/Card';

// Selector Function
export default function (objIn) {
  switch (objIn.type) {
    case 'corruption.InformativeSnippet':
      return (<INFOCard objIn={objIn} />);
    case 'corruption.CorruptionCase':
      return (<CORRCard objIn={objIn} />);
    case 'corruption.FinancialItem':
      return (<FINCard objIn={objIn} />);
    case 'political.Individual':
      return (<INDICard objIn={objIn} />);
    case 'political.Controversy':
      return (<CONTCard objIn={objIn} />);
    case 'political.Promise':
      return (<PROMCard objIn={objIn} />);
    case 'political.Experience':
      return (<EXPCard objIn={objIn} />);
    case 'political.Statistic':
      return (<STATCard statistic={objIn} />);
    case 'political.Organization':
      return (<ORGCard objIn={objIn} />);
    case 'political.Law':
      return (<LAWCard objIn={objIn} />);
    default:
      return null;
  }
}
