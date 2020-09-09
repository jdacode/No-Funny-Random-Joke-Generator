document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/jokes.json', true);
    xhr.onload = function(){
        if(this.status === 200){
            generatedJoke = randomJoke(JSON.parse(this.responseText));
            document.querySelector('.jokes').innerHTML = `<p>${generatedJoke}</p>`;
            document.querySelector('.laugh').src = 'img/laugh.gif'
        }
    }
    xhr.send();
    e.preventDefault();
}

function randomJoke(responseJson){
    let randomNumber = Math.floor(Math.random()*responseJson.length);
    // console.log(randomNumber);
    // console.log(responseJson[randomNumber].body);
    return responseJson[randomNumber].body;
}


