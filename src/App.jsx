import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum n1={2} n2={3} result={5}/>
    <Sum n1={-5} n2={5} result={0}/>
    <Sum n1={10} n2={0} result={10}/>
    <Sum n1={0} n2={5} result={5}/>
    <Sum n1={0} n2={0} result={0}/>
  </>
);
