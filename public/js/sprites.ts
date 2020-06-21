import { loadImage } from './loaders'
import SpriteSheet from './SpriteSheet'

export function loadBackgroundSprites() {
  return loadImage('/img/tiles.png').then((tiles) => {
    const sprites = new SpriteSheet(tiles, 16, 16)
    sprites.defineTile('ground', 0, 0)
    sprites.defineTile('sky', 3, 23)
    return sprites
  })
}

export function loadMarioSprite() {
  return loadImage('/img/characters.gif').then((mario) => {
    const sprite = new SpriteSheet(mario, 16, 16)
    sprite.define('idle', 276, 44, 16, 16)
    return sprite
  })
}
