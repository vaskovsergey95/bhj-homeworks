let has = document.querySelectorAll(".has-tooltip");
let body = document.getElementsByTagName("body");
let element = document.createElement("div");
element.classList.add("tooltip");


for (let elem of has) {
    let textTip = elem.getAttribute("title");
    elem.onclick = () => {

        if (element.classList.contains('tooltip_active')){
            element.classList.remove('tooltip_active')
        }
        else {
            let coordinate = elem.getBoundingClientRect();
            let top = coordinate.bottom;
            let left = coordinate.left
            element.textContent = textTip;
            element.setAttribute("style", `left:${left}px;  top:${top}px;`);
            element.classList.add("tooltip_active");
            document.body.append(element);
            return false;
        }

    }
}

