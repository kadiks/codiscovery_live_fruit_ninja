class Fruit {
  constructor(color) {
    this.x = random(0, WIDTH)
    this.y = 300

    this.radius = 40
    this.color = color

    this.yDir = -1

    if (this.x < WIDTH * 0.5) {
      this.xDir = 1
    } else {
      this.xDir = -1
    }

    this.xSpeed = 1
    this.ySpeed = random(20, 30)
    this.toBeDeleted = false

    this.isCut = false
    this.opacity = 255
  }

  draw() {
    fill.apply(this, getColors(this.color))
    noStroke()

    if (!this.isCut) {
      circle(this.x, this.y, this.radius)
      if (this.yDir === -1) {
        this.ySpeed = this.ySpeed * 0.9
        if (this.ySpeed < 0.1) {
          this.yDir = this.yDir * -1
        }
      }

      if (this.yDir === 1) {
        this.ySpeed = this.ySpeed * 1.07
      }

      this.x += this.xDir * this.xSpeed
      this.y += this.yDir * this.ySpeed

      if (this.y > HEIGHT + 5000) {
        this.toBeDeleted = true
      }
    } else {
      this.opacity *= 0.9
      fill.apply(this, [...getColors(this.color), this.opacity])
      arc(this.x, this.y - 5, this.radius, this.radius, PI, PI * 2, CHORD)
      arc(this.x, this.y + 5, this.radius, this.radius, 0, PI, CHORD)
      if (this.opacity < 10) {
        this.toBeDeleted = true
      }
    }
  }
}
