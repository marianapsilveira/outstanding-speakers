/** Prefix a public file path with the Vite base (needed on GitHub Pages). */
export function publicAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
