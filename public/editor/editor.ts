import { loadImage } from '../js/loaders'

const canvas = document.getElementById('editor') as HTMLCanvasElement
const context = canvas.getContext('2d')

loadImage('/img/tiles.png').then((tiles) => {
  context.drawImage(tiles, 16, 16)
  context.textBaseline = 'top'

  let x = 0
  while (x < canvas.width) {
    context.moveTo(x, 0)
    context.lineTo(x, canvas.height)
    const idx = Math.floor(x / 16) - 1
    context.strokeText(idx.toString(), x + 2, 2)
    x += 16
  }

  let y = 0
  while (y < canvas.height) {
    context.moveTo(0, y)
    context.lineTo(canvas.width, y)
    const idx = Math.floor(y / 16) - 1
    context.strokeText(idx.toString(), 2, y + 2)
    y += 16
  }

  context.fillStyle = 'red'
  context.stroke()
})

const coord = document.getElementById('coord')

canvas.addEventListener('mousemove', (ev) => {
  const { offsetX, offsetY, pageX, pageY } = ev
  coord.style.left = 30 + pageX + 'px'
  coord.style.top = pageY + 'px'

  const x = Math.floor(offsetX / 16) - 1
  const y = Math.floor(offsetY / 16) - 1

  coord.innerText = `(${x}, ${y})`
})
