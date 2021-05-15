export function textArea (param) {
    let lang = param.default
    return `
    <section>
        <div class="textArea">
            <textarea name="" id="" cols="30" rows="10" placeholder="Escribe o Pega un texto para leer"></textarea>
            <button class="textArea__btn">Comenzar</button>
        </div>
    </section>
    `
}