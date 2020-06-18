import { loadImage } from './loaders'
import tilesImg from '../img/tiles.png'
import SpriteSheet from './SpriteSheet'

const canvas = document.getElementById('screen') as HTMLCanvasElement
const context = canvas.getContext('2d')

loadImage(tilesImg).then((tiles) => {
  const sprites = new SpriteSheet(tiles, 16, 16)
  sprites.define('ground', 0, 0)
  sprites.draw('ground', context, 0, 0)
})
