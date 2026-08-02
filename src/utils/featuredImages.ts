// Shared by the Home and Publications pages so the "Featured Publications"
// cards on both pages resolve the same journal-cover images the same way.
// Drop files named featured-1.jpg … featured-N.jpg into src/imports/ and
// they're picked up automatically, in order — missing files just fall back
// to the caller's placeholder.

const featuredImageModules = import.meta.glob<string>('../imports/featured-*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

export function getFeaturedImage(position: number): string | undefined {
  const entry = Object.entries(featuredImageModules).find(([path]) =>
    new RegExp(`featured-${position}\\.[a-z]+$`).test(path),
  )
  return entry?.[1]
}
