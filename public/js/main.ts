import { loadImage } from './loaders'
import SpriteSheet from './SpriteSheet'

const canvas = document.getElementById('screen') as HTMLCanvasElement
const context = canvas.getContext('2d')

loadImage('/img/tiles.png').then((tiles) => {
  const sprites = new SpriteSheet(tiles, 16, 16)
  sprites.define('ground', 0, 0)
  sprites.define('sky', 3, 23)

  for (let i = 0; i < 32; i++) {
    for (let j = 0; j < 30; j++) {
      sprites.draw('sky', context, i, j)
    }
  }
  
  for (let i = 0; i < 32; i++) {
    for (let j = 28; j < 30; j++) {
      sprites.draw('ground', context, i, j)
    }
  }
})
