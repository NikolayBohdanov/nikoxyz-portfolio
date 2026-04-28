import { NextResponse } from 'next/server'
import { baseUrl } from 'app/sitemap'

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

export async function POST(request: Request) {
  const key = process.env.NEXT_PUBLIC_INDEXNOW_KEY
  if (!key) {
    return NextResponse.json(
      { error: 'IndexNow not configured (NEXT_PUBLIC_INDEXNOW_KEY missing)' },
      { status: 503 }
    )
  }

  const auth = request.headers.get('authorization')
  if (auth !== `Bearer ${key}`) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  const urls: unknown = body?.urls
  if (!Array.isArray(urls) || urls.length === 0 || urls.length > 100) {
    return NextResponse.json(
      { error: 'urls must be array of 1-100 strings' },
      { status: 400 }
    )
  }

  const host = new URL(baseUrl).host
  const payload = {
    host,
    key,
    keyLocation: `${baseUrl}/${key}.txt`,
    urlList: urls.filter((u): u is string => typeof u === 'string' && u.startsWith(baseUrl)),
  }

  if (payload.urlList.length === 0) {
    return NextResponse.json({ error: 'no valid urls (must start with baseUrl)' }, { status: 400 })
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  return NextResponse.json(
    {
      submitted: payload.urlList.length,
      status: response.status,
      ok: response.ok,
    },
    { status: response.ok ? 200 : 502 }
  )
}
