const BS_ICON_PATH = "./dependencies/bootstrap-icons-1.8.1/"
let allImgIconElems = document.querySelectorAll(".bsicon")
let iconElems = [...allImgIconElems]
iconElems.map(item => {
    let classes = item.classList
    classes = [...classes]
    classes.map(c => {
        c.length > 3 && (c[0] + c[1] + c[2]) === "bs-" ? item.src = BS_ICON_PATH + c.replace("bs-", "") + '.svg' : null
        item.removeAttribute('class')
        c !== 'bsicon' && !c.includes('bsi-') ? item.classList.add(c) : null
        return
    })
    return
})