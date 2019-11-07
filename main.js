class Animal {

  constructor(infoHealth, infoMeals, infoDrink, infoSleep, infoWalk, health, meals, drink, sleep, walk) {
    this.infoHealth = infoHealth
    this.infoMeals = infoMeals
    this.infoDrink = infoDrink
    this.infoSleep = infoSleep
    this.infoWalk = infoWalk
    this.health = health
    this.meals = meals
    this.drink = drink
    this.sleep = sleep
    this.walk = walk
  }

  changeHealth() {
    if (this.health.value <= this.health.max && this.health.value > 50) {
      this.infoHealth.innerHTML = "Tamagotchi heathy!"
      this.health.value--;
    } else if (this.health.value <= 50 && this.health.value > 0) {
      this.infoHealth.innerHTML = "Tamagotchi needs treatment!"
      this.health.value--;
    } else if (this.health.value == 0) {
      this.infoHealth.innerHTML = "GAME OVER"
      document.getElementById("img").style.visibility = "hidden"
      document.getElementById("progressBar").style.visibility = "hidden"
      let audio = new Audio("./audio/gameover.mp3")
      audio.play()
    }
    setInterval(this.changeHealth, 1000);
    console.log(this.health.value)
  }

  changeMeals() {
    if (this.meals.value >= this.meals.max) {
      this.infoMeals.innerHTML = "Tamagotchi is not hungry!"
    } else if (this.meals.value === 50) {
      this.infoMeals.innerHTML = "Tamagotchi is hungry!"
    } else if (this.meals.value === 10) {
      this.infoMeals.innerHTML = "Tamagotchi is dying!"
    }

    this.meals.value--
    setInterval(this.changeMeals, 1000)
  }

  changeDrink() {
    if (this.drink.value >= this.drink.max) {
      this.infoDrink.innerHTML = "Tamagotchi is not thirsty!"
    } else if (this.drink.value === 50) {
      this.infoDrink.innerHTML = "Tamagotchi wants to drink!"
    } else if (this.drink.value === 10) {
      this.infoDrink.innerHTML = "Tamagotchi is dying!"
    }

    this.drink.value--
    setInterval(this.changeDrink, 1000)
  }

  changeSleep() {
    if (this.sleep.value >= this.sleep.max) {
      this.infoSleep.innerHTML = "Tamagotchi does not want to sleep!"
    } else if (this.sleep.value === 50) {
      this.infoSleep.innerHTML = "Tamagotchi wants to sleep!"
    } else if (this.sleep.value === 10) {
      this.infoSleep.innerHTML = "Tamagotchi is dying!"
    }

    this.sleep.value--
    setInterval(this.changeSleep, 1000)
  }

  changeWalk() {
    if (this.walk.value >= this.walk.max) {
      this.infoWalk.innerHTML = "Tamagotchi does not want to walk!"
    } else if (this.walk.value === 50) {
      this.infoWalk.innerHTML = "Tamagotchi needs walk!"
    } else if (this.walk.value === 10) {
      this.infoWalk.innerHTML = "Tamagotchi is dying!"
    }

    this.walk.value--
    setInterval(this.changeWalk, 1000)
  }

  getHealth() {
    let progress = document.getElementById("health")
    if (progress.value <= 99 && progress.value > 0) {
      progress.value += 10
    } else if (progress.value === 0 || progress.value > 100) {
      progress.value += 0
    } else if (progress.value <= 91 && progress.value <= 100) {
      progress.value += 100 - progress.value
    }
  }

  getMeals() {
    let progress = document.getElementById("meals")
    if (progress.value <= 99 && progress.value > 0) {
      progress.value += 10
    } else if (progress.value === 0 || progress.value > 100) {
      progress.value += 0
    } else if (progress.value <= 91 && progress.value <= 100) {
      progress.value += 100 - progress.value
    }
  }

  getDrink() {
    let progress = document.getElementById("drink")
    if (progress.value <= 99 && progress.value > 0) {
      progress.value += 10
    } else if (progress.value === 0 || progress.value > 100) {
      progress.value += 0
    } else if (progress.value <= 91 && progress.value <= 100) {
      progress.value += 100 - progress.value
    }
  }

  getSleep() {
    let progress = document.getElementById("sleep")
    if (progress.value <= 99 && progress.value > 0) {
      progress.value += 10
    } else if (progress.value === 0 || progress.value > 100) {
      progress.value += 0
    } else if (progress.value <= 91 && progress.value <= 100) {
      progress.value += 100 - progress.value
    }
  }

  getWalk() {
    let progress = document.getElementById("walk")
    if (progress.value <= 99 && progress.value > 0) {
      progress.value += 10
    } else if (progress.value === 0 || progress.value > 100) {
      progress.value += 0
    } else if (progress.value <= 91 && progress.value <= 100) {
      progress.value += 100 - progress.value
    }
  }

  timer() {
    let timer = 0
    setInterval(() => {
      timer++
      document.getElementById("sec").innerHTML = timer
    }, 1000)
  }
}

window.onload = function () {
  let check = true
  while (check) {
    let name = prompt("Enter name of your tamagotchi: ")
    if (name !== null && name.length > 0) {
      check = false
      document.getElementById("tamagotchiName").innerHTML = name
      document.getElementById("img").style.visibility = "visible"
    } else {
      check = true
    }
  }
}

const tamagotchi = new Animal(infoHealth, infoMeals, infoDrink, infoSleep, infoWalk, health, meals, drink, sleep, walk)

tamagotchi.timer()

tamagotchi.changeHealth()
tamagotchi.changeMeals()
tamagotchi.changeDrink()
tamagotchi.changeSleep()
tamagotchi.changeWalk()

document.getElementById("get-health").onclick = tamagotchi.getHealth
document.getElementById("get-meals").onclick = tamagotchi.getMeals
document.getElementById("get-drink").onclick = tamagotchi.getDrink
document.getElementById("get-sleep").onclick = tamagotchi.getSleep
document.getElementById("get-walk").onclick = tamagotchi.getWalk
