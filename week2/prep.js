// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

function isHit() {
    fire = Math.random(0,1);
    if (fire > .5){
        hit = True
    }
    else if (fire < .5){
        hit = False
    }
    return hit
  // should return true if a randomly generated number is greater than .5, false if it is less than .5
}

function shipCanFire() {
  // return true if the ships health is above 0 AND ammo is above 0 false otherwise
}
function isDestroyed(health) {
    
  // return true if health is zero or less
}
function reloadShip() {
  // reduce ship health by 1 and increase ammo by 3
}