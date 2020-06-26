import Compositor from './Compositor'
import { createMario } from './entities'
import { createBackgroundLayer, createSpriteLayer } from './layers'
import { loadLevel } from './loaders'
import { loadBackgroundSprites } from './sprites'
import Timer from './Timer'

const canvas = document.getElementById('screen') as HTMLCanvasElement
const context = canvas.getContext('2d')

Promise.all([createMario(), loadBackgroundSprites(), loadLevel('1-1')]).then(
  ([mario, backgroundSprites, level]) => {
    const compositor = new Compositor()
    const backgroundLayer = createBackgroundLayer(
      level.backgrounds,
      backgroundSprites,
    )
    // compositor.push(backgroundLayer)
    const gravity = 30
    mario.pos.set(64, 180)
    mario.vel.set(200, -600)

    const spriteLayer = createSpriteLayer(mario)
    compositor.push(spriteLayer)

    const timer = new Timer(1 / 60)
    timer.update = (deltaTime) => {
      compositor.draw(context)
      mario.update(deltaTime)
      mario.vel.y += gravity
    }

    timer.start()
  },
)
