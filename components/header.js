export function header (param) {
    let lang = param.default
    console.log(lang)
    return `
    <header>
    <nav class="nav">
    <div class="nav__container col-lg-12">
        <div class="col-md-6 col-lg-8">
        <h2 class="nav__container-h2 mb-0">${lang.title}</h2>
        <p class="">${lang.subTitle}</p>
        </div>
        <section class="nav__container-section d-none d-lg-block col-lg-4">
        <div class="text-right">
            <img width="50" src="../icons/engFlag.svg">
            <img width="50" src="../icons/spaFlag.svg">
            <img width="50" src="../icons/porFlag.svg">
            <img width="50" src="../icons/itaFlag.svg">
            <img width="50" src="../icons/fraFlag.svg">
        </div>
        </section>
    </div>
    </nav>
    </header>
    `

}