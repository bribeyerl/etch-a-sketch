const grid = document.querySelector('.container')
const resize = document.querySelector('#sizer')
const newSize = document.querySelector('.value')
const clear = document.querySelector('#clear')
const rainbow = document.querySelector('#rainbow')
const black = document.querySelector('#black')

addGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div')
        div.classList.add('box')
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black'
        })
        grid.appendChild(div)
    }
}

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

resize.addEventListener('input', function() {
    let displayVal = document.getElementById(sizer).value
    newSize.textContent = displayVal
    removeAllChildNodes(grid)
    grid.setAttribute('style', `grid-template-columns: repeat(${displayVal}, 2fr); grid-template-rows: repeat(${displayVal}, 2fr);`)
    for (let i = 0; i < displayVal * displayVal; i++) {
        const div = document.createElement('div')
        div.classList.add('box')
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black'
        })
        grid.appendChild(div)
    }
})

clear.addEventListener('click', function() {
    let displayVal = resize.value
    let box = grid.children
    for (let i = 0; i < displayVal * displayVal; i++) {
        box[i].style.backgroundColor = 'white'
    }
})

rainbow.addEventListener('click', function() {
    let displayVal = resize.value
    let box = grid.children
    for (let i = 0; i < displayVal * displayVal; i++) {
        box[i].addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = getRandomColor()
        })
    }
})

black.addEventListener('click', function() {
    let displayVal = resize.value
    let box = grid.children
    for (let i = 0; i < displayVal * displayVal; i++) {
        box[i].addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black'
        })
    }
})

addGrid()