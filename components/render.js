import { domTarget } from './dom.js'
import { header } from './header.js'
import * as spa from '../lang/spa.js'
const dom = new domTarget('domContainer')

dom.innerHTML = header(spa),header(spa);
