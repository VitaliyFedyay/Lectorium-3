class Animal {

  constructor(name, health, meals, drink, sleep, walk, counter_health, counter_meals, counter_drink, counter_sleep, counter_walk) {
    this.name = name
    this.health = health
    this.meals = meals
    this.drink = drink
    this.sleep = sleep
    this.walk = walk
    this.counter_health = counter_health
    this.counter_meals = counter_meals
    this.counter_drink = counter_drink
    this.counter_sleep = counter_sleep
    this.counter_walk = counter_walk
  }

  changeHealth() {
    if (this.health == 100) {
      document.getElementById('info').innerHTML = 'Your tamagotchi is health!'
      this.health--
    }
    else if (this.health == 50) {
      document.getElementById('info').innerHTML = 'your tamagotchi needs treatment!'
      this.health--
    }
    else if (this.health == 0) {
      document.getElementById('info').innerHTML = 'your tamagotchi is died!'
      tamagotchiDied()
      clearInterval(this.counter_health)
    }
    document.getElementById('health').value = this.health
  }

  changeMeals() {
    if (this.meals == 100) {
      document.getElementById('info').innerHTML = 'Your tamagotchi not need meals!'
      this.meals--
    }
    else if (this.meals == 50) {
      document.getElementById('info').innerHTML = 'your tamagotchi needs meals!'
      this.meals--
    }
    else if (this.meals == 0) {
      document.getElementById('info').innerHTML = 'your tamagotchi is died!'
      tamagotchiDied()
      clearInterval(this.counter_meals)
    }
    document.getElementById('meals').value = this.meals
  }

  changeDrink() {
    if (this.drink == 100) {
      document.getElementById('info').innerHTML = 'Your tamagotchi not need drink!'
      this.drink--
    }
    else if (this.drink == 50) {
      document.getElementById('info').innerHTML = 'your tamagotchi needs drink!'
      this.drink--
    }
    else if (this.drink == 0) {
      document.getElementById('info').innerHTML = 'your tamagotchi is died!'
      tamagotchiDied()
      clearInterval(this.counter_drink)
    }
    document.getElementById('drink').value = this.drink
  }

  changeSleep() {
    if (this.sleep == 100) {
      document.getElementById('info').innerHTML = 'Your tamagotchi not need sleep!'
      this.sleep--
    }
    else if (this.sleep == 50) {
      document.getElementById('info').innerHTML = 'your tamagotchi needs sleep!'
      this.sleep--
    }
    else if (this.sleep == 0) {
      document.getElementById('info').innerHTML = 'your tamagotchi is died!'
      tamagotchiDied()
      clearInterval(this.counter_sleep)
    }
    document.getElementById('sleep').value = this.sleep
  }

  changeWalk() {
    if (this.walk == 100) {
      document.getElementById('info').innerHTML = 'Your tamagotchi not need walk!'
      this.walk--
    }
    else if (this.walk == 50) {
      document.getElementById('info').innerHTML = 'your tamagotchi needs walk!'
      this.walk--
    }
    else if (this.walk == 0) {
      document.getElementById('info').innerHTML = 'your tamagotchi is died!'
      tamagotchiDied()
      clearInterval(this.counter_walk)
    }
    document.getElementById('walk').value = this.walk
  }


  getHealth() {
    if (this.health !== 0 && this.health <= 90) {
      document.getElementById('info').innerHTML = 'your tamagotchi eating!'
      this.health += 5
    }
    document.getElementById('health').value = this.health
  }

  getMealth() {
    if (this.meals !== 0 && this.meals <= 90) {
      document.getElementById('info').innerHTML = 'your tamagotchi eating!'
      this.meals += 5
    }
    document.getElementById('meals').value = this.meals
  }

  getDrink() {
    if (this.drink !== 0 && this.drink <= 90) {
      document.getElementById('info').innerHTML = 'your tamagotchi eating!'
      this.drink += 5
    }
    document.getElementById('drink').value = this.drink
  }

  getSleep() {
    if (this.sleep !== 0 && this.sleep <= 90) {
      document.getElementById('info').innerHTML = 'your tamagotchi eating!'
      this.sleep += 5
    }
    document.getElementById('sleep').value = this.sleep
  }

  getWalk() {
    if (this.walk !== 0 && this.walk <= 90) {
      document.getElementById('info').innerHTML = 'your tamagotchi eating!'
      this.walk += 5
    }
    document.getElementById('walk').value = this.walk
  }

  tamagotchiDied() {
    if (this.health == 0) {
      clearInterval(timer())
      document.getElementById('info').innerHTML = 'GAME OVER!'
    }
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
  while (check) {
    let name = prompt('Enter name of your tamagotchi: ')
    if (name !== null && name !== '') {
      let tamagotchi = new Animal(name, 100, 100, 100, 100, 100, setInterval(this.changeHealth, 1000),
        setInterval(this.changeMeals, 1000), setInterval(this.changeDrink, 1000),
        setInterval(this.changeSleep, 1000), setInterval(this.changeWalk, 1000))
      check = false
      document.getElementById('tamagotchiName').innerHTML = name
      tamagotchi.timer()

      document.getElementById('b-health').onclick = tamagotchi.getHealth
      document.getElementById('b-meals').onclick = tamagotchi.getMeals
      document.getElementById('b-drink').onclick = tamagotchi.getDrink
      document.getElementById('b-sleep').onclick = tamagotchi.getSleep
      document.getElementById('b-walk').onclick = tamagotchi.getWalk

    }
    else {
      check = true
    }

  }

}


