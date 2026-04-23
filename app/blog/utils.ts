import fs from 'fs'
import path from 'path'
import { CategorySlug, isCategorySlug } from './categories'

export { formatDate } from './format'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  category?: CategorySlug
}

function parseFrontmatter(fileContent: string, fileName?: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1')
    const trimmedKey = key.trim()

    if (trimmedKey === 'category') {
      if (isCategorySlug(value)) {
        metadata.category = value
      } else if (value) {
        console.warn(
          `[blog] Unknown category "${value}" in ${fileName ?? 'post'} -- expected one of: ai-agents, crypto-defi, personal`
        )
      }
      return
    }

    if (
      trimmedKey === 'title' ||
      trimmedKey === 'publishedAt' ||
      trimmedKey === 'summary' ||
      trimmedKey === 'image'
    ) {
      metadata[trimmedKey] = value
    }
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent, path.basename(filePath))
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}

export function getReadingTime(content: string): { minutes: number; words: number } {
  const text = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/[#*_~>\-]+/g, ' ')
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 220))
  return { minutes, words }
}

export function extractHeadings(content: string): { level: number; text: string; slug: string }[] {
  const lines = content.split('\n')
  const headings: { level: number; text: string; slug: string }[] = []
  let inCodeBlock = false

  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock
      continue
    }
    if (inCodeBlock) continue

    const match = line.match(/^(#{2,4})\s+(.+?)\s*$/)
    if (match) {
      const level = match[1].length
      const text = match[2].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').trim()
      const slug = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
      headings.push({ level, text, slug })
    }
  }

  return headings
}
