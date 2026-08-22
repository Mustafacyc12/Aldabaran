export const STARFIELD_VIEWBOX_W = 1400;
export const STARFIELD_VIEWBOX_H = 900;

// Position of the Aldebaran star within the shared starfield viewBox
// coordinate space. Used both by Starfield.tsx (the trail line that leads
// into it) and AldebaranStarLayer.tsx (the star graphic itself), so the two
// always agree on where the star sits -- no coordinates to keep in sync by
// hand.
//
// The client wants the star sitting on the "O" in "point" (the headline's
// first line, "A fixed point of reference"). Because the headline reflows
// to a different number of lines at each breakpoint (2 on desktop, 3 on
// tablet, 4 on mobile) *and* preserveAspectRatio="slice" crops the shared
// viewBox by a different amount at each aspect ratio, there's no single
// (x,y) that lands on that letter at every width -- so this is a lookup
// keyed by viewport width, not a constant. Each point below was measured
// directly: selecting the "o" in "point" with a DOM Range, reading its
// screen-space bounding rect, then mapping that back into viewBox space
// via the starfield SVG's getScreenCTM().inverse(). All three sit
// comfortably inside their breakpoint's visible (post-crop) viewBox
// window, confirmed the same way.
export function getAldebaranPos(viewportWidth: number): [number, number] {
  if (viewportWidth < 640) return [710, 250]; // mobile: measured (709.8, 245.7)
  if (viewportWidth < 1024) return [585, 385]; // tablet: measured (582.8, 382.8)
  return [460, 355]; // desktop: measured (460.0, 352.7)
}
