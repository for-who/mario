class SpriteSheet {
  private tiles: Map<string, HTMLCanvasElement> = new Map()

  constructor(
    public image: HTMLImageElement,
    public width: number,
    public height: number,
  ) {}

  define(name: string, x: number, y: number) {
    const buffer = document.createElement('canvas')
    buffer.width = this.width
    buffer.height = this.height
    buffer
      .getContext('2d')
      .drawImage(
        this.image,
        x * this.width,
        y * this.height,
        this.width,
        this.height,
        0,
        0,
        this.width,
        this.height,
      )
    this.tiles.set(name, buffer)
  }

  draw(name: string, context: CanvasRenderingContext2D, x: number, y: number) {
    const buffer = this.tiles.get(name)
    context.drawImage(buffer, x, y)
  }
}

export default SpriteSheet
