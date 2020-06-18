export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.src = url
  })
}
