import '../style/index.css';
import helloworld from './helloWorld';
import cat from './cat';
// import common from '../../common/index.js';

document.getElementById('app').appendChild(helloworld());
document.getElementById('app').appendChild(cat());
