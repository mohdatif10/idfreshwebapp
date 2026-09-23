/** Scrolls a horizontal card rail by roughly one card's width — shared by every
 * rail that pairs snap-scrolling with prev/next arrow buttons. */
export function scrollTrackByCard(track: HTMLElement | null, direction: 1 | -1) {
  if (!track) return;
  const card = track.children[0] as HTMLElement | undefined;
  const amount = (card?.offsetWidth ?? 280) + 20;
  track.scrollBy({ left: amount * direction, behavior: "smooth" });
}
