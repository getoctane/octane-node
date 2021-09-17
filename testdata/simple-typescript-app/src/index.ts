import util from 'util';
import Octane from 'octane-node';

const octane = new Octane('abc123');
console.log(util.inspect(octane, {depth: 0}));
