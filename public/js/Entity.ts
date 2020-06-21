import Vec2 from './Vec2'

export default class Entity {
  pos: Vec2
  vel: Vec2
  constructor() {
    this.pos = new Vec2(0, 0)
    this.vel = new Vec2(0, 0)
  }

  draw(context: CanvasRenderingContext2D) {}

  update() {}
}
