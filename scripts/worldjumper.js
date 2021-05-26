import { $ } from './dom.js'
export function worldjumper () {

    let result = $('stArea').value.split(' ')
    let dom

    result.forEach(element => {
        dom += `<spam>${element}&nbsp</spam>`
    })
    
    console.log(dom)
    $('playArea').innerHTML = `<p>${dom}</p>`
}
