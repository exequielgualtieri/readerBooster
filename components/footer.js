export function footer (param) {
    let lang = param.default
    return `<footer>
        <div class="footer">
            <button class="footer__btn">${lang.tips}</button>
            <button class="footer__btn">${lang.read}</button>
            <button class="footer__btn">${lang.help}</button>
        </div>
    </footer>`
}