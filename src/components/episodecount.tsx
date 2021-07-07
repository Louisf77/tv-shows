import episodes from "../utils/episodes.json";

export default function epsearch(term: string): number {
  let total = 0;
  for (const ep of episodes) {
    if (
      ep.name.toLowerCase().includes(term.toLowerCase()) ||
      ep.summary.toLowerCase().includes(term.toLowerCase())
    ) {
      total += 1;
    }
  }
  return total;
}
