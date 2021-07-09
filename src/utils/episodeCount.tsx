import { epSearchProp } from "./Types";

export default function epSearch({
  searchTerm,
  episodes,
}: epSearchProp): number {
  let total = 0;
  for (const ep of episodes) {
    if (
      ep.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ep.summary.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      total += 1;
    }
  }
  return total;
}
