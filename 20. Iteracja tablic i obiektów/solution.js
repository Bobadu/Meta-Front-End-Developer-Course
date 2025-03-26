var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (let item of dairy) {
        console.log(item);
    }
}

const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (let prop of Object.keys(bird)) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}

function animalCan() {
    for (let prop in bird) {
        console.log(`${prop}: ${bird[prop]}`);
    }
}

logDairy();
birdCan();
animalCan();