import Entity from './Entity'
import { loadMarioSprite } from './sprites'

export async function createMario() {
  const mario = new Entity()
  const sprite = await loadMarioSprite()
  mario.pos.set(64, 180)
  mario.vel.set(2, -10)

  mario.draw = function (context) {
    sprite.draw('idle', context, mario.pos.x, mario.pos.y)
  }

  mario.update = function () {
    mario.pos.x += mario.vel.x
    mario.pos.y += mario.vel.y
  }
  return mario
}
