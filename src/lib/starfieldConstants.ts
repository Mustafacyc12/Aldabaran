export const STARFIELD_VIEWBOX_W = 1400;
export const STARFIELD_VIEWBOX_H = 900;

// Position of the Aldebaran star within the shared starfield viewBox
// coordinate space. Used both by Starfield.tsx (the trail line that leads
// into it) and AldebaranStarLayer.tsx (the star graphic itself), so the two
// always agree on where the star sits -- no coordinates to keep in sync by
// hand.
//
// x=640 (not the original dot's x=480): measured via getScreenCTM on a
// 375px-wide mobile viewport that preserveAspectRatio="slice" only keeps
// viewBox x in roughly [518, 882] visible on a narrow/tall hero -- x=480
// (where the old, much smaller dot sat) falls outside that window, so the
// star's core was clipped off-screen entirely on phones. x=640 sits well
// inside that band (and its 470-and-narrower worst case) with margin for
// the star's own bloom radius, while staying close enough to the Hyades
// cluster (x up to 610) to still read as "next to" it.
export const ALDEBARAN_POS: [number, number] = [640, 380];
