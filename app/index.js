import _ from 'lodash';
import a from './a';
import b from './b';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'],' ');
  console.log(_.join(['Hello00000000', 'webpack'],' '));
  element.innerHTML = ['Hello', 'webpack'].join(' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());

const fun = (params) => {
  console.log(`This is es6 arrow function with ${params} params`);
}

fun('Hello');
console.log('-----index.js----')
a();
b();

