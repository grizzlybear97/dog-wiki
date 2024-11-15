//fetch all breed dogs list
let breedList = await fetch('https://dog.ceo/api/breeds/list/all')
let response = await breedList.json()
let { message } = response

const allDogBreeds = []
const breedDiscriptions = []

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
/*
function openTabs() {
  for (let i = 90; i <= allDogBreeds.length; i++) {
    window.open(
      `breed.html?dog=${encodeURIComponent(allDogBreeds[i])}`,
      '_blank'
    )
  }
}
openTabs()
*/
//display images and breed name
let main = document.querySelector('main')

for (let i = 0; i <= DOG_URL.length; i++) {
  let data = await fetch(DOG_URL[i])
  let response = await data.json()
  let { message } = response

  let img = document.createElement('img')
  let div = document.createElement('div')
  let p = document.createElement('p')

  let dogName = allDogBreeds[i]

  div.classList.add('dog-profile')
  img.src = message
  img.addEventListener('click', () => {
    //do something to show info
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
