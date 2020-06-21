export default class Vec2 {
  public x: number
  public y: number

  constructor(x: number, y: number) {
    this.set(x, y)
  }

  set(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
