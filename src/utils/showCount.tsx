import { ShowCountProps } from "./Types";

export default function showCount({shows,showSearchTerm}:ShowCountProps): number {
  let total = 0;
  for (const show of shows) {
    if (
      show.name.toLowerCase().includes(showSearchTerm.toLowerCase()) ||
      show.summary.toLowerCase().includes(showSearchTerm.toLowerCase())
    ) {
      total += 1;
    }
  }
  return total;
}
