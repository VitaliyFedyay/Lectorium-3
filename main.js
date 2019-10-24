class Animal {
  
  constructor(health, meals, drink, sleep, walk) {
    this.health = health
    this.meals = meals
    this.drink = drink
    this.sleep = sleep
    this.walk = walk
  }

  changeHealth() {
    if (this.health == 100) {
      document.getElementById("info").innerHTML = "Your tamagotchi is health!"
      this.health--
    } else if (this.health == 50) {
      document.getElementById("info").innerHTML =
        "your tamagotchi needs treatment!"
      this.health--
    } else if (this.health == 0) {
      document.getElementById("info").innerHTML = "your tamagotchi is died!"
      tamagotchiDied()

    }
    document.getElementById("health").value = this.health
  }

  changeMeals() {
    if (this.meals == 100) {
      document.getElementById("info").innerHTML =
        "Your tamagotchi not need meals!"
      this.meals--
    } else if (this.meals == 50) {
      document.getElementById("info").innerHTML =
        "your tamagotchi needs meals!"
      this.meals--
    } else if (this.meals == 0) {
      document.getElementById("info").innerHTML = "your tamagotchi is died!"
      tamagotchiDied()

    }
    document.getElementById("meals").value = this.meals
  }

  changeDrink() {
    if (this.drink == 100) {
      document.getElementById("info").innerHTML =
        "Your tamagotchi not need drink!"
      this.drink--
    } else if (this.drink == 50) {
      document.getElementById("info").innerHTML =
        "your tamagotchi needs drink!"
      this.drink--
    } else if (this.drink == 0) {
      document.getElementById("info").innerHTML = "your tamagotchi is died!"
      tamagotchiDied()

    }
    document.getElementById("drink").value = this.drink
  }

  changeSleep() {
    if (this.sleep == 100) {
      document.getElementById("info").innerHTML =
        "Your tamagotchi not need sleep!"
      this.sleep--
    } else if (this.sleep == 50) {
      document.getElementById("info").innerHTML =
        "your tamagotchi needs sleep!"
      this.sleep--
    } else if (this.sleep == 0) {
      document.getElementById("info").innerHTML = "your tamagotchi is died!"
      tamagotchiDied()

    }
    document.getElementById("sleep").value = this.sleep
  }

  changeWalk() {
    if (this.walk == 100) {
      document.getElementById("info").innerHTML =
        "Your tamagotchi not need walk!"
      this.walk--
    } else if (this.walk == 50) {
      document.getElementById("info").innerHTML = "your tamagotchi needs walk!"
      this.walk--
    } else if (this.walk == 0) {
      document.getElementById("info").innerHTML = "your tamagotchi is died!"
      tamagotchiDied()

    }
    document.getElementById("walk").value = this.walk
  }

  getHealth() {
    if (this.health <= 99 && this.health != 0) {
      this.health += 10;
    } else if (this.health == 0 || this.health > 100) {
      this.health += 0;
    } else if (this.health <= 91 && this.health <= 100) {
      this.health += 100 - this.health;
    }
  }

  getMeals() {
    if (this.meals <= 99 && this.meals != 0) {
      this.meals += 10;
    } else if (this.meals == 0 || this.meals > 100) {
      this.meals += 0;
    } else if (this.meals <= 91 && this.meals <= 100) {
      this.meals += 100 - this.meals;
    }
  }

  getDrink() {
    if (this.drink <= 99 && this.drink != 0) {
      this.drink += 10;
    } else if (this.drink == 0 || this.drink > 100) {
      this.drink += 0;
    } else if (this.drink <= 91 && this.drink <= 100) {
      this.drink += 100 - this.drink;
    }
  }

  getSleep() {
    if (this.sleep <= 99 && this.sleep != 0) {
      this.sleep += 10;
    } else if (this.sleep == 0 || this.sleep > 100) {
      this.sleep += 0;
    } else if (this.sleep <= 91 && this.sleep <= 100) {
      this.sleep += 100 - this.sleep;
    }
  }

  getWalk() {
    if (this.walk <= 99 && this.walk != 0) {
      this.walk += 10;
    } else if (this.walk == 0 || this.walk > 100) {
      this.walk += 0;
    } else if (this.walk <= 91 && this.walk <= 100) {
      this.walk += 100 - this.walk;
    }
  }

  tamagotchiDied() {
    if (this.health == 0) {
      clearInterval(timer())
      document.getElementById("info").innerHTML = "GAME OVER!"
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
    if (name !== null && name !== "") {
      check = false
      document.getElementById("tamagotchiName").innerHTML = name

    } else {
      check = true
    }
  }
}

let tamagotchi = new Animal(100, 100, 100, 100, 100)

tamagotchi.timer()

setInterval(tamagotchi.changeHealth, 1000)
setInterval(tamagotchi.changeMeals, 1000)
setInterval(tamagotchi.changeDrink, 1000)
setInterval(tamagotchi.changeSleep, 1000)
setInterval(tamagotchi.changeWalk, 1000)

document.getElementById("b_health").onclick = tamagotchi.getHealth;
document.getElementById("b_meals").onclick = tamagotchi.getMeals;
document.getElementById("b_drink").onclick = tamagotchi.getDrink;
document.getElementById("b_sleep").onclick = tamagotchi.getSleep
document.getElementById("b_walk").onclick = tamagotchi.getWalk