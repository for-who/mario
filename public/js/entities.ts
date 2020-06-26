import Entity from './Entity'
import { loadMarioSprite } from './sprites'

export async function createMario() {
  const mario = new Entity()
  const sprite = await loadMarioSprite()

  mario.draw = function (context) {
    sprite.draw('idle', context, mario.pos.x, mario.pos.y)
  }

  mario.update = function (deltaTime) {
    mario.pos.x += mario.vel.x * deltaTime
    mario.pos.y += mario.vel.y * deltaTime
  }
  return mario
}
