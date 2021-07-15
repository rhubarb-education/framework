import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Module } from '../.';

const App = () => {
  return (
    <div>
      <Module>
        
      </Module>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
