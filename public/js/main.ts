import Compositor from './Compositor'
import { createMario } from './entities'
import { createBackgroundLayer, createSpriteLayer } from './layers'
import { loadLevel } from './loaders'
import { loadBackgroundSprites } from './sprites'

const canvas = document.getElementById('screen') as HTMLCanvasElement
const context = canvas.getContext('2d')

Promise.all([createMario(), loadBackgroundSprites(), loadLevel('1-1')]).then(
  ([mario, backgroundSprites, level]) => {
    const compositor = new Compositor()
    const backgroundLayer = createBackgroundLayer(
      level.backgrounds,
      backgroundSprites,
    )
    compositor.push(backgroundLayer)
    const gravity = 0.5

    const spriteLayer = createSpriteLayer(mario)
    compositor.push(spriteLayer)

    function update() {
      compositor.draw(context)
      mario.update()
      mario.vel.y += gravity
      requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
  },
)
