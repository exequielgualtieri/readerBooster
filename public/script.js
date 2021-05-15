import { domTarget } from '../scripts/dom.js'
import { header } from '../components/header.js'
import { textArea } from '../components/textArea.js'
import { handler } from '../components/handler.js'
import { footer } from '../components/footer.js'
import * as spa from '../lang/spa.js'
const dom = new domTarget('domContainer')

function renderApp() {
    dom.innerHTML = 
    header(spa) + 
    textArea(spa) +
    handler(spa) +
    footer(spa);
}

renderApp()