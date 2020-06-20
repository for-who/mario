import { loadLevel } from './loaders'
import { loadBackgroundSprites, loadMarioSprites } from './sprites'
import SpriteSheet from './SpriteSheet'

const canvas = document.getElementById('screen') as HTMLCanvasElement
const context = canvas.getContext('2d')

function drawBackground(background, context, sprites: SpriteSheet) {
  const { tile, ranges } = background
  ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprites.draw(tile, context, x, y)
      }
    }
  })
}

Promise.all([
  loadMarioSprites(),
  loadBackgroundSprites(),
  loadLevel('1-1'),
]).then(([marioSprite, sprites, level]) => {
  level.backgrounds.forEach((background) => {
    drawBackground(background, context, sprites)
  })

  marioSprite.draw('idle', context, 5, 5)
})
