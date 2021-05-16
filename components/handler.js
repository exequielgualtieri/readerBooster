export function handler (param) {
    let lang = param
    return `
    <section>
        <div class="handler">
            <button id="1" class="handler__btn">${lang.textArea}</button>
            <button id="2" class="handler__btn">${lang.jumper}</button>
            <button id="3" class="handler__btn">${lang.lineJumper}</button>
        </div>
    </section>
    `
}