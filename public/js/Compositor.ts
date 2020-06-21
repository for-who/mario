export interface Layer {
  (context: CanvasRenderingContext2D): void
}

export default class Compositor {
  private layers: Array<Layer>

  constructor() {
    this.layers = []
  }

  push(layer: Layer) {
    this.layers.push(layer)
  }

  draw(context: CanvasRenderingContext2D) {
    this.layers.forEach((layer) => layer(context))
  }
}
