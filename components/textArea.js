export function textArea (param) {
    let lang = param
    return `
    <section id="playArea">
        <div class="textArea">
            <textarea id="stArea" rows="20" placeholder="${lang.placeholder}"></textarea>
            <button id="stButton" class="textArea__btn">${lang.start}</button>
        </div>
        <div class="textArea">
            <textarea name="" id="" cols="30" rows="10" placeholder="Escribe o Pega un texto para leer"></textarea>
            <button class="textArea__btn">Comenzar</button>
        </div>
        <div class="textArea">
            <textarea name="" id="" cols="30" rows="10" placeholder="Escribe o Pega un texto para leer"></textarea>
            <button class="textArea__btn">Comenzar</button>
        </div>
    </section>
    `
}