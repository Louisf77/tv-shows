export default function EpisodeFormat(
  season: number,
  show: number,
  name: string
): string {
  return `S${season.toString().padStart(2, "0")}${show
    .toString()
    .padStart(2, "0")} - ${name}`;
}
