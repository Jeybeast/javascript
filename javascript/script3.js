const button = doucument.querySelector("button")
button.addEventListener('click', showstats)

function showstats() {
    var input = document.getElementById("input")
    var city = input.options[input.selectedIndex]
    switch (city) {
        case 'karur':
            yo = history;
            break;
        case 'chennai':
            yo = king;
            break;
    }
    let text = `the ${city} is ${yo}`
}