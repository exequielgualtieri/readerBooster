export class domTarget {
    constructor(param){ //aquí se trata de pasar el id como parámetro
        return document.querySelector('#'+param)
    }
}