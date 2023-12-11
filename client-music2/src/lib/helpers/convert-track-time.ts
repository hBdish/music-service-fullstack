export function convertTrackTime(time: number): string {
  return `${Math.floor(time / 60)}:${time % 60}`
}