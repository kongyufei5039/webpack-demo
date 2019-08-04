import React from 'react';
import ReactDOM from 'react-dom';
import common from '../../common';

const MyComponent = () => <h1>{ common() }</h1>;

ReactDOM.render(<MyComponent />, document.getElementById('root'));
