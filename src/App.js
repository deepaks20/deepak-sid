import React from 'react';
import ReactDom from 'react-dom/client';
function Car(props){
  return<h1>Hi {props.name}</h1>;

}
const root =ReactDom.createRoot(document.getElementById('root'));
root.render(<Car name="deepak"/>);
