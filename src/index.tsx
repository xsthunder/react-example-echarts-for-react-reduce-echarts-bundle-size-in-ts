import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
console.log('world');
const ele = document.getElementById('app');
if(ele){
    ReactDOM.render(<App />, ele)
}
else {
    console.log('empty ele')
}