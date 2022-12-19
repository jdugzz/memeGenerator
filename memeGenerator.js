const form = document.querySelector('#memeForm');
const memeHolder = document.querySelector('div');
const image = document.querySelector('#image');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('bT');
const submitBtn = document.querySelector('#submitBtn');
const divHolder = document.querySelector('#divHolder');



divHolder.addEventListener('click', function(e) {
    if (e.target.tagName === 'DIV') {
        e.target.parentElement.remove();
    }
})

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newDiv = document.createElement('div');
    const newMeme = document.createElement('img');
    const removeButton = document.createElement('button');
    const memeTopText = document.createElement('div');
    const memeBottomText = document.createElement('div');
    const overlay = document.createElement('div'); 
    
    memeTopText.innerText = topText.value; 
    memeTopText.setAttribute('class', 'topText');
    newDiv.appendChild(memeTopText);

    memeBottomText.innerText = bT.value;
    memeBottomText.setAttribute('class', 'bottomText')
    newDiv.appendChild(memeBottomText);

    newDiv.setAttribute('id', 'meme'); 
    newDiv.setAttribute('position', 'relative');
    divHolder.appendChild(newDiv);
    
    newMeme.setAttribute('src', image.value)
    newMeme.setAttribute('class', 'memeImg')
    newDiv.appendChild(newMeme);

    overlay.setAttribute('class', 'overlay');
    overlay.innerText = 'Click to Delete'; 
    newDiv.appendChild(overlay); 
   
    form.reset();
})

