class MyAudio {

  private readonly audio

  constructor() {
    this.audio = new Audio()
  }

  setSrc(src: string) {
    this.audio.src = src
  }

  setVolume(volume: number) {
    this.audio.volume = volume
  }

  setCurrentTime(currentTime: number) {
    this.audio.currentTime = currentTime
  }

  play() {
    this.audio.play().then()
  }

  pause() {
    this.audio.pause()
  }

  getAudio() {
    return this.audio
  }
}

export default new MyAudio()