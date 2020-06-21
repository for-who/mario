import Compositor from './Compositor'
import { createBackgroundLayer, createSpriteLayer } from './layers'
import { loadLevel } from './loaders'
import { loadBackgroundSprites, loadMarioSprites } from './sprites'
import Entity from './Entity'

const canvas = document.getElementById('screen') as HTMLCanvasElement
const context = canvas.getContext('2d')

Promise.all([
  loadMarioSprites(),
  loadBackgroundSprites(),
  loadLevel('1-1'),
]).then(([marioSprite, backgroundSprites, level]) => {
  const compositor = new Compositor()
  const backgroundLayer = createBackgroundLayer(
    level.backgrounds,
    backgroundSprites,
  )
  compositor.push(backgroundLayer)

  const mario = new Entity()
  mario.pos.set(64, 180)
  mario.vel.set(2, -10)

  const gravity = 0.5

  mario.draw = function (context) {
    marioSprite.draw('idle', context, mario.pos.x, mario.pos.y)
  }

  mario.update = function () {
    mario.pos.x += mario.vel.x
    mario.pos.y += mario.vel.y
  }

  const spriteLayer = createSpriteLayer(mario)
  compositor.push(spriteLayer)

  function update() {
    compositor.draw(context)
    mario.update()
    mario.vel.y += gravity
    requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
})
