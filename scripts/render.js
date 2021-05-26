//DomSelector
import { domTarget, $ } from '../scripts/dom.js'
//Components
import { header } from '../components/header.js'
import { textArea } from '../components/textArea.js'
import { handler } from '../components/handler.js'
import { footer } from '../components/footer.js'
//Languajes
import * as lang from '../scripts/lang.js'
//Functions
import { worldjumper } from '../scripts/worldjumper.js'

const dom = new domTarget('domContainer')

function renderApp(param) {
    dom.innerHTML = '';
    //RenderingDocument
    dom.innerHTML = 
    
    header(param) +
    textArea(param) +
    handler(param) +
    footer(param) 

    //Adding Listeners
    $(1).onclick = () => { $('playArea').style.right = "0vw" }
    $(2).onclick = () => { $('playArea').style.right = "100vw" }
    $(3).onclick = () => { $('playArea').style.right = "200vw" }
    $('eng').onclick = () => { renderApp(lang.eng) }
    $('spa').onclick = () => { renderApp(lang.spa) }
    $('por').onclick = () => { renderApp(lang.por) }
    $('ita').onclick = () => { renderApp(lang.ita) }
    $('fra').onclick = () => { renderApp(lang.fra) }
    $('stButton').onclick = () => { worldjumper() }
}
console.log(lang.eng);

renderApp(lang.spa);