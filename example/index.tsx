import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Module } from '../.';
import ExampleSlide from './components/ExampleSlide';

const slides = [
  ExampleSlide
];

const header = (
  <p>Default Header</p>
);

const App = () => {
  return (
    <div>
      <Module 
        name="Example Learning Module"
        slides={slides}
        defaultHeader={header}
        onComplete={() => alert('Module Complete!')}
        data={{}}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
