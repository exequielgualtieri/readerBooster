export function header(param) {
  let lang = param.default;
  return `
    <header>
        <nav class="nav">
            <div class="nav__container">
                <div class="nav__title">
                    <h2 class="nav__container_h2">${lang.title}</h2>
                    <p class="">${lang.subTitle}</p>
                </div>
                <section class="nav__container_section">
                    <div class="nav__section_icons">
                        <img class="nav__section_icons-flag" width="40" src="../icons/engFlag.svg">
                        <img class="nav__section_icons-flag" width="40" src="../icons/spaFlag.svg">
                        <img class="nav__section_icons-flag" width="40" src="../icons/porFlag.svg">
                        <img class="nav__section_icons-flag" width="40" src="../icons/itaFlag.svg">
                        <img class="nav__section_icons-flag" width="40" src="../icons/fraFlag.svg">
                    </div>
                </section>
            </div>
        </nav>
    </header>
    `
}
