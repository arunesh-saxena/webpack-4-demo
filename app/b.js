
// import _ from 'lodash';

import com from './c';
const b = (file) => {
    let result = 'this is b.js';
    // let arrayjoin = _.join(['b', 'file'],'-');
    let arrayjoin = 'hello b.js';
    console.log(`---------${result}------${arrayjoin}------${file}`);
    com('from b')
}

export default b;