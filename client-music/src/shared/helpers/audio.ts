'use client';

class MyAudio {
  private readonly audio;

  constructor() {
    this.audio = new Audio();
  }

  setSrc(src: string) {
    if (!this.audio) return;
    this.audio.src = src;
  }

  setVolume(volume: number) {
    if (!this.audio) return;
    this.audio.volume = volume;
  }

  setCurrentTime(currentTime: number) {
    if (!this.audio) return;
    this.audio.currentTime = currentTime;
  }

  play() {
    if (!this.audio) return;
    this.audio
      .play()
      .then()
      .catch((e) => console.log(e));
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
  }

  getAudio() {
    return this.audio;
  }
}

const myAudio = new MyAudio();

export { myAudio };
