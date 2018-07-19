
// import _ from 'lodash';
import com from './c';

const a = () => {
    let result = 'this is a.js';
    // let arrayjoin = _.join(['a', 'file'],'-');
    let arrayjoin = 'hello a.js';
    console.log(`---------${result}------${arrayjoin}------`);
    com('from a');
}

export default a;