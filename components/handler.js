export function handler (param) {
    let lang = param.default
    return `
    <section>
        <div class="handler">
            <button class="handler__btn">${lang.textArea}</button>
            <button class="handler__btn">${lang.jumper}</button>
            <button class="handler__btn">${lang.lineJumper}</button>
        </div>
    </section>
    `
}