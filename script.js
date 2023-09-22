
const Card = document.getElementById('Card');

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response => response.json())
      .then(json => {
        for(let i in json){            
            drawCards(json[i].url);
        }   
      })

function drawCards(img){
    var elem = document.createElement("div");
    elem.classList.add('card');
    elem.innerHTML = `<img src="${img}" alt="">`
    Card.appendChild(elem);
} 




