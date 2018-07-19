import _ from 'lodash';


const fun = (params) => {
  // Lodash, currently included via a script, is required for this line to work
  let result = _.join(['I M FROM index2.JS', 'checking'],' ');
  console.log(result);
}

fun('Hello');