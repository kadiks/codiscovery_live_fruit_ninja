const fruits = []
let cnv

let isFruitDisplayed = false
let isCreateFruit = true

let mousePosX = 0
let mousePosY = 0

const WIDTH = 450
const HEIGHT = 300

function setup() {
  cnv = createCanvas(WIDTH, HEIGHT)
  cnv.mouseMoved(onMouseMove)
  //
}

function draw() {
  background(220)

  for (let index = fruits.length - 1; index >= 0; index--) {
    const curFruit = fruits[index]
    curFruit.draw()
    if (
      collidePointCircle(
        mouseX,
        mouseY,
        curFruit.x,
        curFruit.y,
        curFruit.radius
      )
    ) {
      curFruit.isCut = true
    }
    if (curFruit.toBeDeleted) {
      fruits.splice(index, 1)
    }
  }
  if (fruits.length === 0) {
    isCreateFruit = true
  }

  if (isCreateFruit) {
    isCreateFruit = false
    spawn()
  }

  fill.apply(this, getColors("black"))
  circle(mousePosX, mousePosY, 10)
}

function spawn() {
  //   isFruitDisplayed = true

  // isFruitDisplayed = false
  const numFruits = random(2, 4)
  const maxRandom = 6
  for (let index = 0; index < numFruits; index++) {
    const r = random(maxRandom)
    const color = r > maxRandom - 1 ? "red" : "green"
    fruits.push(new Fruit(color))
  }
}

function onMouseMove() {
  mousePosX = mouseX
  mousePosY = mouseY
}
