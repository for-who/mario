import { loadImage, loadLevel } from './loaders'
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

loadImage('/img/tiles.png').then((tiles) => {
  const sprites = new SpriteSheet(tiles, 16, 16)
  sprites.define('ground', 0, 0)
  sprites.define('sky', 3, 23)

  loadLevel('1-1').then((level) => {
    drawBackground(level.backgrounds[0], context, sprites)
    drawBackground(level.backgrounds[1], context, sprites)
  })
})
