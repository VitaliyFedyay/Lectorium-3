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
    }
  }

  changeMeals() {
    if (this.meals.value <= this.meals.max && this.meals.value > 50) {
      this.infoMeals.innerHTML = "Tamagotchi is not hungry!"
      this.meals.value--
    } else if (this.meals.value <= 50 && this.meals.value > 0) {
      this.infoMeals.innerHTML = "Tamagotchi is hungry!"
      this.meals.value--
    }
  }

  changeDrink() {
    if (this.drink.value <= this.drink.max && this.drink.value > 50) {
      this.infoDrink.innerHTML = "Tamagotchi is not thirsty!"
      this.drink.value--
    } else if (this.drink.value <= 50 && this.drink.value > 0) {
      this.infoDrink.innerHTML = "Tamagotchi wants to drink!"
      this.drink.value--
    }
  }

  changeSleep() {
    if (this.sleep.value <= this.sleep.max && this.sleep.value > 50) {
      this.infoSleep.innerHTML = "Tamagotchi does not want to sleep!"
      this.sleep.value--
    } else if (this.sleep.value <= 50 && this.sleep.value > 0) {
      this.infoSleep.innerHTML = "Tamagotchi wants to sleep!"
      this.sleep.value--
    }
  }

  changeWalk() {
    if (this.walk.value <= this.walk.max && this.walk.value > 50) {
      this.infoWalk.innerHTML = "Tamagotchi does not want to walk!"
      this.walk.value--
    } else if (this.walk.value <= 50 && this.walk.value > 0) {
      this.infoWalk.innerHTML = "Tamagotchi needs walk!"
      this.walk.value--
    }
  }

  gameOver() {
    this.infoHealth.innerHTML = ""
    this.infoMeals.innerHTML = ""
    this.infoDrink.innerHTML = "GAME OVER"
    this.infoSleep.innerHTML = "I'll be back..."
    this.infoWalk.innerHTML = ""
    this.health.value = 0
    this.meals.value = 0
    this.drink.value = 0
    this.sleep.value = 0
    this.walk.value = 0
    document.getElementById("img").style.visibility = "hidden"
    document.getElementById("progressBar").style.visibility = "hidden"
    let audio = new Audio("./audio/gameover.mp3")
    audio.play()
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
    let interval = setInterval(() => {
      timer++
      document.getElementById("sec").innerHTML = timer
      if (this.health.value === 0) {
        clearInterval(interval)
      }
    }, 1000)
  }
}

let tamagotchi = new Animal(infoHealth, infoMeals, infoDrink, infoSleep, infoWalk, health, meals, drink, sleep, walk)

tamagotchi.timer()

tamagotchi.start = function () {
  if (this.health.value > 0) {
    let interval = setInterval(() => {
      tamagotchi.changeHealth()
      tamagotchi.changeMeals()
      tamagotchi.changeDrink()
      tamagotchi.changeSleep()
      tamagotchi.changeWalk()
      if (this.health.value === 0) {
        clearInterval(interval)
        checkHealth()
      }
    }, 1000)
  }
}

function checkHealth() {
  setTimeout(() => {
    tamagotchi.gameOver()
    tamagotchi = null
  }, 1000)
}

window.onload = function () {
  let check = true
  while (check) {
    let name = prompt("Enter name of your tamagotchi: ")
    if (name !== null && name.length > 0) {
      check = false
      document.getElementById("tamagotchiName").innerHTML = name
      document.getElementById("img").style.visibility = "visible"
      tamagotchi.start()
    } else {
      check = true
    }
  }
}

document.getElementById("get-health").onclick = tamagotchi.getHealth
document.getElementById("get-meals").onclick = tamagotchi.getMeals
document.getElementById("get-drink").onclick = tamagotchi.getDrink
document.getElementById("get-sleep").onclick = tamagotchi.getSleep
document.getElementById("get-walk").onclick = tamagotchi.getWalk
