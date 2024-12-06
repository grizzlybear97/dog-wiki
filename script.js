//fetch all breed dogs list
let breedList = await fetch('https://dog.ceo/api/breeds/list/all')
let response = await breedList.json()
let { message } = response

const allDogBreeds = []
const breedDiscriptions = []
let dogLetter = 'abcdefghklmnoprstvw';
let dogLetterIndex = 0;

for (let breed in message) {
  allDogBreeds.push(breed)

  /*if (message[breed].length > 0) {
    for (let subBreed of message[breed]) {
      allDogBreeds.push(`${breed}-${subBreed}`)
    }
  }*/
}

//fetch random images for all dogs
const DOG_URL = []
let randomDogImg1 = 'https://dog.ceo/api/breed/'
let randomDogImg2 = '/images/random'
for (let dog of allDogBreeds) {
  /* if (dog.includes('-')) {
       dog = dog.replace('-', '/')
    } */
  DOG_URL.push(randomDogImg1 + `${dog}` + randomDogImg2)
}

//display images and breed name
let main = document.querySelector('.breeds-links')

for (let i = 0; i <= DOG_URL.length; i++) {
//  for(let i = 0; i <= 15; i++){
  let data = await fetch(DOG_URL[i])
  let response = await data.json()
  let { message } = response

  let img = document.createElement('img')
  let div = document.createElement('div')
  let p = document.createElement('p')

  let dogName = allDogBreeds[i]


  if(dogName[0] === dogLetter[dogLetterIndex]){
    let span = document.createElement('span');
    let hr = document.createElement('hr');

    span.classList.add('breads-section');
    span.setAttribute('id', dogLetter[dogLetterIndex]);
    span.textContent = `${dogLetter[dogLetterIndex]}`;

    main.appendChild(span);
    main.appendChild(hr);
    console.log(dogName);
    dogLetterIndex++;
  }

  div.classList.add('breed-box')
  img.src = message
  img.addEventListener('click', () => {
    //open tab to show more info
    window.open(`breed.html?dog=${encodeURIComponent(dogName)}`, '_blank')
  })

  p.textContent = upperCaseFun(dogName)
  div.appendChild(img)
  div.appendChild(p)
  main.appendChild(div)
}

//function that changes the first char to uppercase
function upperCaseFun(string) {
  let stringArr = string.split('')
  stringArr[0] = stringArr[0].toUpperCase()
  return stringArr.join('')
}
