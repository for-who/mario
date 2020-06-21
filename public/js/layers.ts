import { Background } from './types'
import SpriteSheet from './SpriteSheet'
import { Layer } from './Compositor'

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

export function createBackgroundLayer(
  backgrounds: Array<Background>,
  sprites: SpriteSheet,
): Layer {
  const buffer = document.createElement('canvas')

  buffer.width = 256
  buffer.height = 240

  backgrounds.forEach((background) => {
    drawBackground(background, buffer.getContext('2d'), sprites)
  })

  return (context) => {
    context.drawImage(buffer, 0, 0)
  }
}

export function createSpriteLayer(sprite: SpriteSheet, pos): Layer {
  return (context) => {
    sprite.draw('idle', context, pos.x, pos.y)
  }
}
