import '../style/index.css'
import { helloworld } from './helloWorld'
import { cat } from './cat'

document.getElementById('app').appendChild(helloworld())
document.getElementById('app').appendChild(cat())