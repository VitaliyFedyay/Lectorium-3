class Animal {

  constructor(name, health, happiness, meals, drink, sleep, walk) {
    this.name = name
    this.health = health
    this.happiness = happiness
    this.meals = meals
    this.drink = drink
    this.sleep = sleep
    this.walk = walk
    
  }

  changeHealth() {

  }

  timer() {
    let timer = 0
    setInterval(() => {
      timer++
      document.getElementById('sec').innerHTML = timer
    }, 1000);
  }
}


window.onload = function () { 
  let check = true
  while(check) {
    let name = prompt('Enter name of your tamagotchi: ')
    if( name !== null && name !== '') {
      let tamagotchi = new Animal(name)
      document.getElementById('tamagotchiName').innerHTML = name
      tamagotchi.timer()
      check = false
    }
    else {
      check = true
    }

  }
  
}


