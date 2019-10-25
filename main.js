class Animal {
  changeHealth() {
    let info = document.getElementById("info");
    let progress = document.getElementById("health");

    if (progress.value >= progress.max) {
      info.innerHTML = "Tamagotchi heathy!";
    } else if (progress.value == 50) {
      info.innerHTML = "Tamagotchi needs treatment!";
    } else if (progress.value == 0) {
      info.innerHTML = "GAME OVER";
      document.getElementById("img").style.visibility = "hidden";
      document.getElementById("progressBar").style.visibility = "hidden";
      let audio = new Audio("./audio/gameover.mp3");
      audio.play();
    }

    progress.value--;
    setInterval(this.changeHealth, 1000);
  }

  changeMeals() {
    let info = document.getElementById("info");
    let progress = document.getElementById("meals");

    if (progress.value >= progress.max) {
      info.innerHTML = "Tamagotchi is not hungry!";
    } else if (progress.value == 50) {
      info.innerHTML = "Tamagotchi is hungry!";
    } else if (progress.value == 0) {
      info.innerHTML = "Tamagotchi is dying!";
    }

    progress.value--;
    setInterval(this.changeMeals, 1000);
  }

  changeDrink() {
    let info = document.getElementById("info");
    let progress = document.getElementById("drink");

    if (progress.value >= progress.max) {
      info.innerHTML = "Tamagotchi is not thirsty!";
    } else if (progress.value == 50) {
      info.innerHTML = "Tamagotchi wants to drink!";
    } else if (progress.value == 0) {
      info.innerHTML = "Tamagotchi is dying!";
    }

    progress.value--;
    setInterval(this.changeDrink, 1000);
  }

  changeSleep() {
    let info = document.getElementById("info");
    let progress = document.getElementById("sleep");

    if (progress.value >= progress.max) {
      info.innerHTML = "Tamagotchi does not want to sleep!";
    } else if (progress.value == 50) {
      info.innerHTML = "Tamagotchi wants to sleep!";
    } else if (progress.value == 0) {
      info.innerHTML = "Tamagotchi is dying!";
    }

    progress.value--;
    setInterval(this.changeSleep, 1000);
  }

  changeWalk() {
    let info = document.getElementById("info");
    let progress = document.getElementById("walk");

    if (progress.value >= progress.max) {
      info.innerHTML = "Tamagotchi does not want to walk!";
    } else if (progress.value == 50) {
      info.innerHTML = "Tamagotchi needs walk!";
    } else if (progress.value == 0) {
      info.innerHTML = "Tamagotchi is dying!";
    }

    progress.value--;
    setInterval(this.changeWalk, 1000);
  }

  getHealth() {
    let progress = document.getElementById("health");
    if (progress.value <= 99 && progress.value != 0) {
      progress.value += 10;
    } else if (progress.value == 0 || progress.value > 100) {
      progress.value += 0;
    } else if (progress.value <= 91 && progress.value <= 100) {
      progress.value += 100 - progress.value;
    }
  }

  getMeals() {
    let progress = document.getElementById("meals");
    if (progress.value <= 99 && progress.value != 0) {
      progress.value += 10;
    } else if (progress.value == 0 || progress.value > 100) {
      progress.value += 0;
    } else if (progress.value <= 91 && progress.value <= 100) {
      progress.value += 100 - progress.value;
    }
  }

  getDrink() {
    let progress = document.getElementById("drink");
    if (progress.value <= 99 && progress.value != 0) {
      progress.value += 10;
    } else if (progress.value == 0 || progress.value > 100) {
      progress.value += 0;
    } else if (progress.value <= 91 && progress.value <= 100) {
      progress.value += 100 - progress.value;
    }
  }

  getSleep() {
    let progress = document.getElementById("sleep");
    if (progress.value <= 99 && progress.value != 0) {
      progress.value += 10;
    } else if (progress.value == 0 || progress.value > 100) {
      progress.value += 0;
    } else if (progress.value <= 91 && progress.value <= 100) {
      progress.value += 100 - progress.value;
    }
  }

  getWalk() {
    let progress = document.getElementById("walk");
    if (progress.value <= 99 && progress.value != 0) {
      progress.value += 10;
    } else if (progress.value == 0 || progress.value > 100) {
      progress.value += 0;
    } else if (progress.value <= 91 && progress.value <= 100) {
      progress.value += 100 - progress.value;
    }
  }

  timer() {
    let timer = 0;
    setInterval(() => {
      timer++;
      document.getElementById("sec").innerHTML = timer;
    }, 1000);
  }
}

window.onload = function() {
  let check = true;
  while (check) {
    let name = prompt("Enter name of your tamagotchi: ");
    if (name !== null && name !== "") {
      check = false;
      document.getElementById("tamagotchiName").innerHTML = name;
    } else {
      check = true;
    }
  }
};

const tamagotchi = new Animal();

tamagotchi.timer();

tamagotchi.changeHealth();
tamagotchi.changeMeals();
tamagotchi.changeDrink();
tamagotchi.changeSleep();
tamagotchi.changeWalk();

document.getElementById("get-health").onclick = tamagotchi.getHealth;
document.getElementById("get-meals").onclick = tamagotchi.getMeals;
document.getElementById("get-drink").onclick = tamagotchi.getDrink;
document.getElementById("get-sleep").onclick = tamagotchi.getSleep;
document.getElementById("get-walk").onclick = tamagotchi.getWalk;
