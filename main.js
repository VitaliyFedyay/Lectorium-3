class Animal {
  name = ''
  #health = 100
  #happiness = 100
  #eat = 100
  #drink = 100
  #sleep = 100
  #walk = 100

  static getHealth() {
    console.log(`Hello ${name}!`)
    console.log('object :', Animal.#health);
  }
}

let name = prompt('Enter name of your tamagotchi: ')
if(typeof name === 'string') {
  let tamagotchi = new Animal(name)
}
else {
  throw Error('Error! Please enter name!')
}
