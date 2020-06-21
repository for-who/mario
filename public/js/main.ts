import { loadLevel } from './loaders'
import { loadBackgroundSprites, loadMarioSprites } from './sprites'
import SpriteSheet from './SpriteSheet'
import { Background } from './types'

const canvas = document.getElementById('screen') as HTMLCanvasElement
const context = canvas.getContext('2d')

function drawBackground(
  background: Background,
  context: CanvasRenderingContext2D,
  sprites: SpriteSheet,
) {
  const { tile, ranges } = background
  ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprites.drawTile(tile, context, x, y)
      }
    }
  })
}

Promise.all([
  loadMarioSprites(),
  loadBackgroundSprites(),
  loadLevel('1-1'),
]).then(([marioSprite, sprites, level]) => {
  const backgroundBuffer = document.createElement('canvas')

  backgroundBuffer.width = 256
  backgroundBuffer.height = 240

  level.backgrounds.forEach((background) => {
    drawBackground(background, backgroundBuffer.getContext('2d'), sprites)
  })

  const pos = {
    x: 64,
    y: 64,
  }

  function update() {
    context.drawImage(backgroundBuffer, 0, 0)
    marioSprite.draw('idle', context, pos.x, pos.y)
    pos.x += 2
    pos.y += 2
    requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
})
