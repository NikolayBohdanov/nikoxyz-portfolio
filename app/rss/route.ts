// RSS route removed — returning 410 Gone.
export async function GET() {
  return new Response('RSS feed removed', { status: 410 })
}
