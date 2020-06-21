import Compositor from './Compositor'
import { createBackgroundLayer, createSpriteLayer } from './layers'
import { loadLevel } from './loaders'
import { loadBackgroundSprites, loadMarioSprites } from './sprites'

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

  const pos = {
    x: 64,
    y: 64,
  }

  const spriteLayer = createSpriteLayer(marioSprite, pos)
  compositor.push(spriteLayer)

  function update() {
    compositor.draw(context)
    pos.x += 2
    pos.y += 2
    requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
})
