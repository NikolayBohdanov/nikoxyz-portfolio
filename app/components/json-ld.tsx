// Server component — renders schema.org JSON-LD. Data is always our own (no user input).
// Pattern: serialize JSON server-side, escape `<` characters to prevent script-tag breakout,
// and emit as text children of <script>. Avoids dangerouslySetInnerHTML.

type SchemaData = Record<string, unknown>

const escapeJsonForScript = (json: string): string =>
  // Closing-tag protection: `</` could prematurely terminate the script tag.
  // Replace `<` with the JSON unicode escape — still valid JSON, no HTML interpretation.
  json.replace(/</g, '\\u003c')

export function JsonLd({ id, data }: { id: string; data: SchemaData | SchemaData[] }) {
  const safe = escapeJsonForScript(JSON.stringify(data))
  return (
    <script
      id={id}
      type="application/ld+json"
      suppressHydrationWarning
    >
      {safe}
    </script>
  )
}
