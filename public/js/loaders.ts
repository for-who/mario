import { Level } from './types'

export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.src = url
  })
}

export function loadLevel(name: string): Promise<Level> {
  return fetch(`/levels/${name}.json`).then((r) => r.json())
}
