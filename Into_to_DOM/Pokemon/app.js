// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i < 152; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('pokemon')
    const newImg = document.createElement('img');
    const newSpan = document.createElement('span');
    newImg.src = `${baseUrl}${i}.png`
    newSpan.innerText = `#${i}`
    
    container.append(newDiv);
    newDiv.append(newImg);
    newImg.insertAdjacentElement('afterend',newSpan);
}

//<div>
//    <img>
//    <span>#</span>
//</div> 