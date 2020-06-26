export default class Timer {
  constructor(public deltaTime: number = 1 / 60) {
    let lastTime = 0
    let totalTime = 0

    this.updateProxy = (time: number) => {
      totalTime += (time - lastTime) / 1000

      while (totalTime > deltaTime) {
        this.update(deltaTime)
        totalTime -= deltaTime
      }

      lastTime = time

      this.enqueue()
    }
  }

  enqueue() {
    requestAnimationFrame(this.updateProxy)
  }

  start() {
    this.enqueue()
  }

  updateProxy(time: number = 1 / 60) {}

  update(deltaTime: number) {}
}
