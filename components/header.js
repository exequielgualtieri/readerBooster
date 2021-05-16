export function header(lang) {

  return `
    <header>
        <nav class="nav">
            <div class="nav__container">
                <div class="nav__title">
                    <h2 class="nav__container_h2">${lang.title}</h2>
                    <p class="">${lang.subTitle}</p>
                </div>
                <div class="nav__container_section">
                    <div class="nav__section_icons">
                        <img id="eng" class="nav__section_icons-flag" width="40" src="../icons/engFlag.svg">
                        <img id="spa" class="nav__section_icons-flag" width="40" src="../icons/spaFlag.svg">
                        <img id="por" class="nav__section_icons-flag" width="40" src="../icons/porFlag.svg">
                        <img id="ita" class="nav__section_icons-flag" width="40" src="../icons/itaFlag.svg">
                        <img id="fra" class="nav__section_icons-flag" width="40" src="../icons/fraFlag.svg">
                    </div>
                </div>
            </div>
        </nav>
    </header>
    `
}
