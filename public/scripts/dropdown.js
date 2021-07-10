let select = document.getElementsByClassName('selector')

for (let selector of select)
    selector.addEventListener('click', show);

function show(event) {
    event.target.classList.toggle('active');
    for(let selector of select) {
        if(selector != event.target && selector.classList.contains('active'))
            selector.classList.remove('active');
    }
}

let activeDrops = document.getElementsByClassName('active')

window.onclick = hide;

function hide() {
    if(!event.target.matches('.selector')) {
        for (let selector of select) {
            if (selector.classList.contains('active'))
                selector.classList.remove('active')
    
        }
    }
}

